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
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">الدعم الفني</h2>
            <p className="mb-6 text-center">نحن هنا لمساعدتك في أي مشكلة تقنية تواجهها. يرجى ملء النموذج أدناه وسنتواصل معك في أقرب وقت ممكن.</p>
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
      </main>
    </div>
  );
};

export default Support;