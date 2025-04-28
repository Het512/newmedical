import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Medicine } from '../types';
import { medicines as initialMedicines } from '../data/mockData';

interface MedicineContextType {
  medicines: Medicine[];
  addMedicine: (medicine: Omit<Medicine, 'id'>) => void;
  updateMedicine: (id: string, medicine: Partial<Medicine>) => void;
  deleteMedicine: (id: string) => void;
  getMedicineById: (id: string) => Medicine | undefined;
  searchMedicines: (query: string, category?: string) => Medicine[];
}

const MedicineContext = createContext<MedicineContextType | undefined>(undefined);

export const MedicineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [medicines, setMedicines] = useState<Medicine[]>(initialMedicines);

  const addMedicine = (medicine: Omit<Medicine, 'id'>) => {
    const newMedicine = {
      ...medicine,
      id: Date.now().toString(),
    };
    setMedicines([...medicines, newMedicine]);
  };

  const updateMedicine = (id: string, updatedFields: Partial<Medicine>) => {
    setMedicines(
      medicines.map(medicine => 
        medicine.id === id ? { ...medicine, ...updatedFields } : medicine
      )
    );
  };

  const deleteMedicine = (id: string) => {
    setMedicines(medicines.filter(medicine => medicine.id !== id));
  };

  const getMedicineById = (id: string) => {
    return medicines.find(medicine => medicine.id === id);
  };

  const searchMedicines = (query: string, category?: string) => {
    return medicines.filter(medicine => {
      const matchesQuery = medicine.name.toLowerCase().includes(query.toLowerCase()) || 
                         medicine.description.toLowerCase().includes(query.toLowerCase());
      
      if (category && category !== 'All') {
        return matchesQuery && medicine.category === category;
      }
      
      return matchesQuery;
    });
  };

  return (
    <MedicineContext.Provider value={{ 
      medicines, 
      addMedicine, 
      updateMedicine, 
      deleteMedicine, 
      getMedicineById,
      searchMedicines
    }}>
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicines = () => {
  const context = useContext(MedicineContext);
  if (context === undefined) {
    throw new Error('useMedicines must be used within a MedicineProvider');
  }
  return context;
};