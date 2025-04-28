import React from 'react';
import { X, MinusCircle, PlusCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useMedicines } from '../../context/MedicineContext';

interface CartItemProps {
  medicineId: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ medicineId, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { getMedicineById } = useMedicines();
  
  const medicine = getMedicineById(medicineId);
  
  if (!medicine) return null;
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(medicineId, quantity - 1);
    } else {
      removeFromCart(medicineId);
    }
  };
  
  const handleIncrease = () => {
    if (quantity < medicine.stock) {
      updateQuantity(medicineId, quantity + 1);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(medicineId);
  };
  
  const itemTotal = medicine.price * quantity;
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{medicine.name}</h3>
          <p className="ml-4">₹{itemTotal.toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{medicine.dosage}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="text-gray-500 hover:text-blue-600"
            >
              <MinusCircle size={18} />
            </button>
            <span className="mx-2 w-8 text-center">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="text-gray-500 hover:text-blue-600"
              disabled={quantity >= medicine.stock}
            >
              <PlusCircle size={18} className={quantity >= medicine.stock ? 'opacity-50' : ''} />
            </button>
          </div>
          
          <button
            onClick={handleRemove}
            className="font-medium text-red-600 hover:text-red-500 flex items-center"
          >
            <X size={16} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;