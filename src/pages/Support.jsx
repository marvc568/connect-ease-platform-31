import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from '../components/Header';

const Support = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم إضافة منطق إرسال طلب المساعدة
    console.log('تم إرسال طلب المساعدة');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">الحصول على مساعدة</h2>
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
                <Label htmlFor="message">رسالتك</Label>
                <Textarea id="message" placeholder="اكتب رسالتك هنا" required />
              </div>
              <Button type="submit" className="w-full">إرسال طلب المساعدة</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Support;