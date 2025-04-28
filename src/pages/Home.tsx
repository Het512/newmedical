import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Search, ShoppingBag, FileCheck } from 'lucide-react';
import { useMedicines } from '../context/MedicineContext';
import MedicineGrid from '../components/medicine/MedicineGrid';

const Home: React.FC = () => {
  const { medicines } = useMedicines();
  const featuredMedicines = medicines.slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Pharmacy Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">New Medical Corporation</span>
              <span className="block text-blue-400">Your Health, Our Priority</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Quality medicines, professional service, and comprehensive healthcare solutions for all your needs.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/catalog"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Browse Medicines
                </Link>
              </div>
              <div className="ml-3 rounded-md shadow">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for better health
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a wide range of pharmacy services to ensure your optimal health and wellness.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <PlusCircle className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Prescription Filling</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Fast and accurate prescription filling with expert pharmacist consultation.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <Search className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Medication Consultations</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Talk to our pharmacists about medications, side effects, and interactions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <ShoppingBag className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Health Products</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Wide range of OTC medications, supplements, and healthcare products.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <FileCheck className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Health Screenings</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Regular health screenings and monitoring services to maintain your wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Medicines</h2>
            <Link to="/catalog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <MedicineGrid medicines={featuredMedicines} />
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What our customers say</h2>
            <p className="mt-4 text-lg text-gray-500">
              We take pride in providing exceptional service to our customers.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    The staff at MediCare Pharmacy is always helpful and knowledgeable. They take the time to explain medications and answer all my questions.
                  </p>
                  <div className="mt-3">
                    <p className="text-base font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Customer for 3 years</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    I appreciate the prompt service and competitive prices at MediCare. The online ordering system makes refills incredibly convenient.
                  </p>
                  <div className="mt-3">
                    <p className="text-base font-medium text-gray-900">Mark Thompson</p>
                    <p className="text-sm text-gray-500">Customer for 2 years</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    The pharmacists are exceptional at managing my family's medications. They always ensure we understand proper usage and potential side effects.
                  </p>
                  <div className="mt-3">
                    <p className="text-base font-medium text-gray-900">Jennifer Davis</p>
                    <p className="text-sm text-gray-500">Customer for 5 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;