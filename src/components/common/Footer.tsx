import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">New Medical Corporation</h3>
            <p className="text-blue-200 mb-4">
              Your trusted pharmacy for all healthcare needs. Providing quality medicines and healthcare products since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-white transition">Home</a></li>
              <li><a href="/catalog" className="text-blue-200 hover:text-white transition">Medicines</a></li>
              <li><a href="/about" className="text-blue-200 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-200">4,5,6, Giriraj Shopping Center, near Bus Stand, Raykanagar, Ganotri Society, Himatnagar, Gujarat 383001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-blue-200">9622087254</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-blue-200">info@newmedical.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <div>
                  <p className="text-blue-200">Monday - Friday</p>
                  <p className="text-white">8:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <div>
                  <p className="text-blue-200">Saturday - Sunday</p>
                  <p className="text-white">10:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} New Medical Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;