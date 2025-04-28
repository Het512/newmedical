import React, { useState, useEffect } from 'react';
import { useMedicines } from '../context/MedicineContext';
import SearchFilters from '../components/medicine/SearchFilters';
import MedicineGrid from '../components/medicine/MedicineGrid';
import { Medicine } from '../types';

const Catalog: React.FC = () => {
  const { searchMedicines } = useMedicines();
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Initialize with all medicines
      setFilteredMedicines(searchMedicines(''));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchMedicines]);
  
  const handleSearch = (results: Medicine[]) => {
    setFilteredMedicines(results);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Medicine Catalog</h1>
        <p className="text-gray-600">
          Browse our wide selection of medicines and healthcare products. Use the filters to narrow down your search.
        </p>
      </div>
      
      <SearchFilters onSearch={handleSearch} />
      
      <MedicineGrid medicines={filteredMedicines} loading={isLoading} />
    </div>
  );
};

export default Catalog;