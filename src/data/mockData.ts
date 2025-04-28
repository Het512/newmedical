import { Medicine, User, Order } from '../types';

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol',
    description: 'Pain reliever and fever reducer',
    price: 25.99,
    stock: 100,
    category: 'Pain Relief',
    dosage: '500mg',
    manufacturer: 'PharmaCorp',
    expiryDate: '2025-05-15',
    requiresPrescription: false,
    image: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Amoxicillin',
    description: 'Antibiotic used to treat bacterial infections',
    price: 149.50,
    stock: 50,
    category: 'Antibiotics',
    dosage: '250mg',
    manufacturer: 'MediLabs',
    expiryDate: '2024-11-20',
    requiresPrescription: true,
    image: 'https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Loratadine',
    description: 'Antihistamine for allergy relief',
    price: 85.75,
    stock: 75,
    category: 'Allergy',
    dosage: '10mg',
    manufacturer: 'AllerCare',
    expiryDate: '2024-12-15',
    requiresPrescription: false,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'Ibuprofen',
    description: 'Non-steroidal anti-inflammatory drug',
    price: 45.25,
    stock: 90,
    category: 'Pain Relief',
    dosage: '200mg',
    manufacturer: 'PharmaCorp',
    expiryDate: '2025-03-10',
    requiresPrescription: false,
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    name: 'Omeprazole',
    description: 'Proton pump inhibitor for acid reflux',
    price: 195.99,
    stock: 40,
    category: 'Gastrointestinal',
    dosage: '20mg',
    manufacturer: 'DigestHealth',
    expiryDate: '2024-10-05',
    requiresPrescription: true,
    image: 'https://images.pexels.com/photos/4210607/pexels-photo-4210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    name: 'Vitamin D3',
    description: 'Dietary supplement for bone health',
    price: 299.50,
    stock: 120,
    category: 'Supplements',
    dosage: '1000 IU',
    manufacturer: 'VitaLife',
    expiryDate: '2025-06-30',
    requiresPrescription: false,
    image: 'https://images.pexels.com/photos/4210605/pexels-photo-4210605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    name: 'Metformin',
    description: 'Oral diabetes medicine to control blood sugar levels',
    price: 189.99,
    stock: 0,
    category: 'Diabetes',
    dosage: '500mg',
    manufacturer: 'DiabeCare',
    expiryDate: '2025-04-20',
    requiresPrescription: true,
    image: 'https://images.pexels.com/photos/4210615/pexels-photo-4210615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    name: 'Cetirizine',
    description: 'Antihistamine for seasonal allergies',
    price: 75.25,
    stock: 85,
    category: 'Allergy',
    dosage: '10mg',
    manufacturer: 'AllerCare',
    expiryDate: '2025-02-15',
    requiresPrescription: false,
    image: 'https://images.pexels.com/photos/4210600/pexels-photo-4210600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '9',
    name: 'Aspirin',
    description: 'Pain reliever and blood thinner',
    price: 35.50,
    stock: 110,
    category: 'Pain Relief',
    dosage: '81mg',
    manufacturer: 'HeartCare',
    expiryDate: '2025-07-10',
    requiresPrescription: false,
    image: 'https://images.pexels.com/photos/4210617/pexels-photo-4210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const users: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@pharmacy.com',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Staff Member',
    email: 'staff@pharmacy.com',
    role: 'staff'
  }
];

export const orders: Order[] = [
  {
    id: '1',
    userId: '2',
    items: [
      { medicineId: '1', quantity: 2, price: 25.99 },
      { medicineId: '3', quantity: 1, price: 85.75 }
    ],
    total: 137.73,
    status: 'completed',
    date: '2023-05-15'
  },
  {
    id: '2',
    userId: '2',
    items: [
      { medicineId: '2', quantity: 1, price: 149.50 },
      { medicineId: '5', quantity: 1, price: 195.99 }
    ],
    total: 345.49,
    status: 'pending',
    date: '2023-05-16'
  }
];