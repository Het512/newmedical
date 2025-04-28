import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AlertCircle } from 'lucide-react';
import { Medicine } from '../../types';
import { useCart } from '../../context/CartContext';

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(medicine.id);
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={medicine.image} 
          alt={medicine.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {medicine.requiresPrescription && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <AlertCircle size={12} className="mr-1" />
            Prescription
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{medicine.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{medicine.manufacturer}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{medicine.description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-blue-800 font-bold">₹{medicine.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500 ml-1">{medicine.dosage}</span>
          </div>
          
          <div className="flex space-x-2">
            <Link
              to={`/medicine/${medicine.id}`}
              className="px-3 py-1 text-sm rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Details
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={medicine.stock <= 0 || medicine.requiresPrescription}
              className={`
                flex items-center px-3 py-1 text-sm rounded-md text-white transition
                ${medicine.stock > 0 && !medicine.requiresPrescription 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'}
              `}
            >
              <ShoppingCart size={14} className="mr-1" />
              Add
            </button>
          </div>
        </div>
        
        {medicine.stock <= 5 && medicine.stock > 0 ? (
          <p className="text-orange-500 text-xs mt-2">Low stock: {medicine.stock} left</p>
        ) : medicine.stock <= 0 ? (
          <p className="text-red-500 text-xs mt-2">Out of stock</p>
        ) : null}
      </div>
    </div>
  );
};

export default MedicineCard;