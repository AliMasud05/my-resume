"use client";
import { Navbar } from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-black text-white">
        <Navbar />
        
        <div className="grid ">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default CommonLayout;
