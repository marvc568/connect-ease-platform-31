import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';

const Index = () => {
  const steps = [
    "سجل بياناتك (اسمك، إيميلك، ورقم هاتفك).",
    "حدد نوع النشاط التجاري.",
    "أدخل البيانات الأساسية للمحل.",
    "اعرض منتجاتك.",
    "حمل تطبيق \"طلباتك للمحلات\" وابدأ في استلام الطلبات."
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">مرحبًا بك في منصتنا</h1>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">اعرض منتجاتك أونلاين مع [اسم المنصة]</h2>
          <ol className="list-decimal list-inside space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ol>
        </div>
        <div className="text-center">
          <Button asChild className="mr-4">
            <Link to="/register">إنشاء حساب</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/login">تسجيل الدخول</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;