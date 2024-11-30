import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="bg-slate-200">
            <div className="sticky top-0 z-40">
                <div className="mx-auto w-[100%] h-[100px]  bg-white top-0 ">
                    <Header />
                </div>
            </div>
            {/* <div className=" mx-auto w-[100%] h-[60px] pl-[17%] pr-[17%] "></div> */}
            <div className="mx-auto w-[100%] pl-[17%] pr-[17%]">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
