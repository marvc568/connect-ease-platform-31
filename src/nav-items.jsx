import { HomeIcon, LogInIcon, UserPlusIcon, PhoneIcon, DollarSignIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Pricing from "./pages/Pricing.jsx";

export const navItems = [
  {
    title: "الصفحة الرئيسية",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "تسجيل الدخول",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "إنشاء حساب",
    to: "/register",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <Register />,
  },
  {
    title: "اتصل بنا",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <ContactUs />,
  },
  {
    title: "الأسعار",
    to: "/pricing",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <Pricing />,
  },
];