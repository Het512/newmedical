import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, AlertTriangle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useMedicines } from '../context/MedicineContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const Cart: React.FC = () => {
  const { items, clearCart } = useCart();
  const { getMedicineById } = useMedicines();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      alert('Order placed successfully!');
      clearCart();
      navigate('/');
    }, 1500);
  };
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any medicines to your cart yet.</p>
          <Link
            to="/catalog"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse Medicines
          </Link>
        </div>
      </div>
    );
  }
  
  // Check for out-of-stock items
  const outOfStockItems = items.filter(item => {
    const medicine = getMedicineById(item.medicineId);
    return medicine && medicine.stock === 0;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      {outOfStockItems.length > 0 && (
        <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-start">
          <AlertTriangle size={20} className="text-yellow-500 mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-700 font-medium">
              Some items in your cart are out of stock
            </p>
            <p className="text-sm text-yellow-600">
              Please remove them before proceeding to checkout.
            </p>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {items.map(item => (
                  <li key={item.medicineId} className="py-4">
                    <CartItem
                      medicineId={item.medicineId}
                      quantity={item.quantity}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          {isCheckingOut ? (
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Processing Order</h2>
              <div className="flex justify-center mb-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
              <p className="text-center text-gray-600">
                Please wait while we process your order...
              </p>
            </div>
          ) : (
            <CartSummary onCheckout={handleCheckout} />
          )}
          
          <div className="mt-6 flex justify-between">
            <Link
              to="/catalog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => clearCart()}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;