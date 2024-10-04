import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from '../components/Header';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم إضافة منطق تسجيل الدخول
    console.log('تم تسجيل الدخول');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">تسجيل الدخول</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">اسم المستخدم</Label>
                <Input id="username" type="text" placeholder="أدخل اسم المستخدم" required />
              </div>
              <div>
                <Label htmlFor="password">كلمة المرور</Label>
                <Input id="password" type="password" placeholder="أدخل كلمة المرور" required />
              </div>
              <Button type="submit" className="w-full">تسجيل الدخول</Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">هل نسيت كلمة المرور؟</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/support" className="text-blue-600 hover:underline">الحصول على مساعدة</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;