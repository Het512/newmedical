import React from 'react';
import { useCart } from '../../context/CartContext';
import { useMedicines } from '../../context/MedicineContext';

interface CartSummaryProps {
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { items, totalPrice } = useCart();
  const { getMedicineById } = useMedicines();
  
  // Calculate values
  const subtotal = totalPrice;
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 500 ? 0 : 40;
  const total = subtotal + tax + shipping;
  
  // Count prescription items
  const prescriptionItems = items.filter(item => {
    const medicine = getMedicineById(item.medicineId);
    return medicine?.requiresPrescription;
  });
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal ({items.length} items)</span>
          <span className="text-gray-900 font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">GST (18%)</span>
          <span className="text-gray-900 font-medium">₹{tax.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-gray-900 font-medium">
            {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="border-t border-gray-200 my-3 pt-3">
          <div className="flex justify-between text-base">
            <span className="font-medium">Total</span>
            <span className="font-bold">₹{total.toFixed(2)}</span>
          </div>
          
          {subtotal > 500 && (
            <p className="text-green-600 text-xs mt-1">
              Free shipping on orders above ₹500
            </p>
          )}
        </div>
      </div>
      
      {prescriptionItems.length > 0 ? (
        <div className="mt-6 bg-yellow-50 p-3 rounded-md">
          <p className="text-yellow-700 text-sm mb-2">
            Your cart contains {prescriptionItems.length} item(s) that require a valid prescription.
          </p>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
            Upload Prescription
          </button>
        </div>
      ) : (
        <button
          onClick={onCheckout}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CartSummary;