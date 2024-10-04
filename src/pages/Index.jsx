import React from 'react';
import Header from '../components/Header';
import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/background.jpg')"}}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8 mb-8 animate__animated animate__fadeIn">
          <h1 className="text-4xl font-bold mb-4 text-center animate__animated animate__bounce">مرحبًا بك في Green Light</h1>
          <h2 className="text-2xl font-semibold mb-4 text-center">خطوتك الأولى نحو النجاح وزيادة عملائك!</h2>
          <p className="text-lg mb-4">
            هل تريد أن يصل مطعمك إلى آلاف العملاء بسهولة؟ مع Green Light، ستحصل على الفرصة لتكون في مقدمة خيارات عشاق الطعام. فقط أضف مطعمك ودعنا نساعدك في جذب المزيد من الزبائن، وزيادة شهرة مطعمك بسرعة.
          </p>
          <p className="text-lg mb-4">
            انضم الآن واستمتع بتجربة فريدة تساعدك على النمو والتوسع. لا تدع الفرصة تفوتك – كن جزءًا من Green Light اليوم وحقق النجاح الذي تطمح إليه!
          </p>
        </div>

        <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8 mb-8 animate__animated animate__fadeIn">
          <h2 className="text-2xl font-semibold mb-4 text-center">تنزيل التطبيق</h2>
          <div className="flex justify-center space-x-8">
            <a href="/android-app.apk" className="flex flex-col items-center hover:scale-110 transition-transform">
              <FaAndroid size={50} className="text-green-500" />
              <span>Android</span>
            </a>
            <a href="https://apps.apple.com/us/app/greenlight" className="flex flex-col items-center hover:scale-110 transition-transform">
              <FaApple size={50} className="text-gray-800" />
              <span>iOS</span>
            </a>
            <a href="/windows-app.exe" className="flex flex-col items-center hover:scale-110 transition-transform">
              <FaWindows size={50} className="text-blue-500" />
              <span>Windows</span>
            </a>
          </div>
        </div>

        <div className="ticker-wrapper bg-green-500 text-white p-2 rounded-lg mb-8">
          <div className="ticker">
            <div className="ticker__item">احصل على خصم 20% عند انضمامك الآن!</div>
            <div className="ticker__item">التسجيل مفتوح الآن لجميع المطاعم!</div>
            <div className="ticker__item">نقدم الآن خدمات جديدة لتحسين مبيعات المطاعم.</div>
            <div className="ticker__item">انضم لنا في الندوة القادمة لتطوير المطاعم.</div>
            <div className="ticker__item">احصل على شهر مجاني عند الاشتراك الآن!</div>
            <div className="ticker__item">تم إطلاق خدمة جديدة لتسهيل عمليات الطلبات الإلكترونية.</div>
            <div className="ticker__item">تابعنا في الحدث القادم حول تحسين مبيعات المطاعم.</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-8 mb-8 animate__animated animate__fadeIn">
          <img src="/qr-code.png" alt="QR Code" className="mx-auto object-cover w-64 h-64" />
        </div>

        <footer className="text-center text-gray-600 mt-8">
          جميع الحقوق محفوظة &copy; 2023 لشركة Green Light
        </footer>
      </main>
    </div>
  );
};

export default Index;