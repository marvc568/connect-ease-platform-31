import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from '../components/Header';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يتم إضافة منطق إنشاء الحساب
    console.log('تم إنشاء الحساب');
  };

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
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">إنشاء حساب</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">معلومات الحساب</h3>
                <div className="mt-2 space-y-4">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل البريد الإلكتروني" required />
                  </div>
                  <div>
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input id="password" type="password" placeholder="أدخل كلمة المرور" required />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">معلومات المطعم</h3>
                <div className="mt-2 space-y-4">
                  <div>
                    <Label htmlFor="storeName">اسم المحل</Label>
                    <Input id="storeName" type="text" placeholder="أدخل اسم المحل" required />
                  </div>
                  <div>
                    <Label htmlFor="ownerName">اسم الشخص المسؤول</Label>
                    <Input id="ownerName" type="text" placeholder="أدخل اسم الشخص المسؤول" required />
                  </div>
                  <div>
                    <Label htmlFor="country">الدولة</Label>
                    <Select defaultValue="مصر">
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الدولة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="مصر">مصر</SelectItem>
                        {/* يمكن إضافة المزيد من الدول هنا */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">المدينة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المدينة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="القاهرة">القاهرة</SelectItem>
                        <SelectItem value="الإسكندرية">الإسكندرية</SelectItem>
                        {/* يمكن إضافة المزيد من المدن هنا */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="address">عنوان المحل</Label>
                    <Input id="address" type="text" placeholder="أدخل عنوان المحل" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">الرمز البريدي</Label>
                    <Input id="zipCode" type="text" placeholder="أدخل الرمز البريدي" />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" type="tel" placeholder="أدخل رقم الهاتف" required pattern="\+20[0-9]{10}" />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">تسجيل</Button>
            </div>
          </form>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">خطوات إنشاء الحساب في GreenLight</h3>
            <ol className="list-decimal list-inside space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="text-lg">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;