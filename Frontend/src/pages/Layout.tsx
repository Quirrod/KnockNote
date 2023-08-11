import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const Layout = () => {
  return (
    <div className="flex text-text bg-secondary flex-col min-h-screen px-2 sm:px-24">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors/>
    </div>
  );
};
