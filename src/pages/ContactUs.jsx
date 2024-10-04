import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from '../components/Header';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const ContactUs = () => {
  const [showSupportForm, setShowSupportForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم إرسال الطلب');
    alert('سيتم الرد عليك خلال ساعة');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">اتصل بنا</h1>
        <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{
              backgroundImage: "url('/customer-service.jpg')",
              opacity: 0.7
            }}
          ></div>
          <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
          <div className="relative z-20 text-white">
            <h2 className="text-2xl font-semibold mb-4">خدمة العملاء</h2>
            <p className="mb-4">للتواصل مع خدمة العملاء، يرجى الاتصال على الأرقام التالية:</p>
            <ul className="list-disc list-inside mb-4">
              <li>0123456789</li>
              <li>9876543210</li>
            </ul>
            <Button onClick={() => setShowSupportForm(!showSupportForm)} className="bg-white text-gray-900 hover:bg-gray-200">
              {showSupportForm ? 'إغلاق النموذج' : 'ارسل لنا طلبك'}
            </Button>
            {showSupportForm && (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">الاسم</Label>
                  <Input id="name" type="text" placeholder="أدخل اسمك" required className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">الرسالة</Label>
                  <Textarea id="message" placeholder="اكتب رسالتك هنا" required className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                </div>
                <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-200">إرسال</Button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-blue-800 hover:text-blue-900">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;