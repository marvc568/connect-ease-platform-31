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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-4">خدمة العملاء</h2>
              <img src="/customer-service.jpg" alt="خدمة العملاء" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="mb-4">للتواصل مع خدمة العملاء، يرجى الاتصال على الأرقام التالية:</p>
              <ul className="list-disc list-inside mb-4">
                <li>0123456789</li>
                <li>9876543210</li>
              </ul>
              <Button onClick={() => setShowSupportForm(!showSupportForm)}>
                {showSupportForm ? 'إغلاق النموذج' : 'ارسل لنا طلبك'}
              </Button>
              {showSupportForm && (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor="name">الاسم</Label>
                    <Input id="name" type="text" placeholder="أدخل اسمك" required />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required />
                  </div>
                  <div>
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea id="message" placeholder="اكتب رسالتك هنا" required />
                  </div>
                  <Button type="submit">إرسال</Button>
                </form>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-4">الدعم الفني</h2>
              <p className="mb-4">للحصول على الدعم الفني، يرجى التواصل معنا عبر:</p>
              <ul className="list-disc list-inside mb-4">
                <li>البريد الإلكتروني: support@example.com</li>
                <li>رقم الهاتف: 1234567890</li>
              </ul>
              <h3 className="text-lg font-medium mb-2">تواصل معنا</h3>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;