import React from 'react';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center">مرحبًا بك في Green Light</h1>
          <h2 className="text-2xl font-semibold mb-4 text-center">خطوتك الأولى نحو النجاح وزيادة عملائك!</h2>
          <p className="text-lg mb-4">
            هل تريد أن يصل مطعمك إلى آلاف العملاء بسهولة؟ مع Green Light، ستحصل على الفرصة لتكون في مقدمة خيارات عشاق الطعام. فقط أضف مطعمك ودعنا نساعدك في جذب المزيد من الزبائن، وزيادة شهرة مطعمك بسرعة.
          </p>
          <p className="text-lg mb-4">
            انضم الآن واستمتع بتجربة فريدة تساعدك على النمو والتوسع. لا تدع الفرصة تفوتك – كن جزءًا من Green Light اليوم وحقق النجاح الذي تطمح إليه!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;