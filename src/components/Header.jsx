import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">اسم المنصة</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link to="/">الصفحة الرئيسية</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/login">تسجيل الدخول</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/register">إنشاء حساب</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/contact">اتصل بنا</Link></Button></li>
            <li><Button variant="ghost" asChild><Link to="/pricing">الأسعار</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;