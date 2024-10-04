import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Pricing = () => {
  const navigate = useNavigate();

  const handleContactSupport = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">الأسعار</h1>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <p className="text-lg mb-6 text-center">للاستفسار والاشتراك، يرجى التواصل مع خدمة العملاء</p>
          <div className="text-center">
            <Button onClick={handleContactSupport}>خدمة العملاء</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;