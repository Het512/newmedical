export interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  dosage: string;
  manufacturer: string;
  expiryDate: string;
  requiresPrescription: boolean;
  image: string;
}

export interface CartItem {
  medicineId: string;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'customer';
}

export interface Order {
  id: string;
  userId: string;
  items: {
    medicineId: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}