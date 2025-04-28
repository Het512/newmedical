import React, { useState } from 'react';
import { Calendar, Package, AlertCircle, Truck, ShoppingCart, MinusCircle, PlusCircle } from 'lucide-react';
import { Medicine } from '../../types';
import { useCart } from '../../context/CartContext';

interface MedicineDetailProps {
  medicine: Medicine;
}

const MedicineDetail: React.FC<MedicineDetailProps> = ({ medicine }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleIncrease = () => {
    if (quantity < medicine.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(medicine.id, quantity);
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Medicine Image */}
        <div className="h-96 md:h-auto overflow-hidden">
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Medicine Details */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{medicine.name}</h1>
            <p className="text-gray-600 mb-4">{medicine.manufacturer} • {medicine.dosage}</p>
            <p className="text-lg text-blue-800 font-bold mb-4">₹{medicine.price.toFixed(2)}</p>
            
            {medicine.requiresPrescription && (
              <div className="flex items-center text-yellow-600 mb-4 bg-yellow-50 p-2 rounded-md">
                <AlertCircle size={18} className="mr-2" />
                <span className="text-sm">Prescription required for this medication</span>
              </div>
            )}
            
            <p className="text-gray-700 mb-6">{medicine.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Package size={18} className="mr-2 text-blue-600" />
                <span className="text-sm">
                  <span className="font-medium">Stock:</span>{' '}
                  {medicine.stock > 10 ? (
                    <span className="text-green-600">{medicine.stock} Available</span>
                  ) : medicine.stock > 0 ? (
                    <span className="text-orange-500">Only {medicine.stock} left</span>
                  ) : (
                    <span className="text-red-500">Out of stock</span>
                  )}
                </span>
              </div>
              
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-blue-600" />
                <span className="text-sm">
                  <span className="font-medium">Expiry:</span> {medicine.expiryDate}
                </span>
              </div>
              
              <div className="flex items-center">
                <Truck size={18} className="mr-2 text-blue-600" />
                <span className="text-sm">
                  <span className="font-medium">Delivery:</span> 1-2 business days
                </span>
              </div>
            </div>
          </div>
          
          {/* Add to Cart */}
          {medicine.stock > 0 && !medicine.requiresPrescription && (
            <div>
              <div className="flex items-center mb-4">
                <button
                  onClick={handleDecrease}
                  className="p-1 text-gray-500 hover:text-blue-600"
                >
                  <MinusCircle size={20} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="p-1 text-gray-500 hover:text-blue-600"
                >
                  <PlusCircle size={20} />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          )}
          
          {medicine.stock <= 0 && (
            <button
              disabled
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-400 cursor-not-allowed"
            >
              Out of Stock
            </button>
          )}
          
          {medicine.requiresPrescription && medicine.stock > 0 && (
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">This medicine requires a prescription</p>
              <button
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Upload Prescription
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineDetail;