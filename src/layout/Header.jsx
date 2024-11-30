import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <>
            <div>
                <div className="border-b-2 p-2 flex justify-between">
                    <div className="w-10">Logo</div>
                    <Navbar />
                </div>
                <div className="p-2">Navbar</div>
            </div>
        </>
    );
}
