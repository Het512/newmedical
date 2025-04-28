import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem } from '../types';
import { useMedicines } from './MedicineContext';

interface CartContextType {
  items: CartItem[];
  addToCart: (medicineId: string, quantity?: number) => void;
  removeFromCart: (medicineId: string) => void;
  updateQuantity: (medicineId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { getMedicineById } = useMedicines();

  useEffect(() => {
    // Calculate total items
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(itemCount);
    
    // Calculate total price
    let price = 0;
    items.forEach(item => {
      const medicine = getMedicineById(item.medicineId);
      if (medicine) {
        price += medicine.price * item.quantity;
      }
    });
    setTotalPrice(price);
  }, [items, getMedicineById]);

  const addToCart = (medicineId: string, quantity = 1) => {
    const existingItemIndex = items.findIndex(item => item.medicineId === medicineId);
    
    if (existingItemIndex >= 0) {
      // Update quantity if item already in cart
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      setItems(updatedItems);
    } else {
      // Add new item to cart
      setItems([...items, { medicineId, quantity }]);
    }
  };

  const removeFromCart = (medicineId: string) => {
    setItems(items.filter(item => item.medicineId !== medicineId));
  };

  const updateQuantity = (medicineId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(medicineId);
      return;
    }
    
    setItems(
      items.map(item => 
        item.medicineId === medicineId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};