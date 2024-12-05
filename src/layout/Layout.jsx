import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="bg-slate-200">
      <div className="sticky top-0 z-40">
        <div className="mx-auto w-[100%] h-[100px] pl-[10%] pr-[10%]  bg-white top-0 ">
          <Header />
        </div>
      </div>
      <div className="mx-auto w-[100%] pl-[10%] pr-[10%] mt-8">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
