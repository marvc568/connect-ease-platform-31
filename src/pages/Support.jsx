import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from '../components/Header';

const Support = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تم إرسال طلب المساعدة');
    alert('تم استلام طلبك. سنتواصل معك قريبًا.');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="relative bg-white rounded-lg shadow-md p-8 mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 rounded-lg" 
            style={{
              backgroundImage: "url('/support-background.jpg')",
              opacity: 0.15
            }}
          ></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-8 text-center">الدعم الفني</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">معلومات الاتصال</h2>
                <p className="mb-4">للحصول على الدعم الفني، يرجى التواصل معنا عبر:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>البريد الإلكتروني: support@example.com</li>
                  <li>رقم الهاتف: 1234567890</li>
                </ul>
                <p>ساعات العمل: من الاثنين إلى الجمعة، 9 صباحًا - 5 مساءً</p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">نموذج طلب المساعدة</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">الاسم</Label>
                      <Input id="name" type="text" placeholder="أدخل اسمك" required />
                    </div>
                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required />
                    </div>
                    <div>
                      <Label htmlFor="problem">وصف المشكلة</Label>
                      <Textarea id="problem" placeholder="اشرح المشكلة التي تواجهها بالتفصيل" required />
                    </div>
                    <Button type="submit" className="w-full">إرسال طلب المساعدة</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;