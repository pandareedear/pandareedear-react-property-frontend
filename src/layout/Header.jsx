import React from "react";
import Navbar from "./Navbar";
import ButtonBlackGold from "../feature/ButtonBlackGold";

export default function Header() {
  return (
    <>
      <div>
        <div className="p-2 flex justify-between">
          <div className="w-10">
            <img src="src/assets/iconhome.png" alt="icon" />
          </div>
          <Navbar />
        </div>
        <div className="w-[100%] border-b-2"></div>
        <div className="flex mt-1 pl-[1%] justify-between items-center">
          <div className="flex gap-10">
            <label>เช่า</label>
            <label>ขาย</label>
            <label>ใกล้ฉัน</label>
          </div>
          <div className="gap-2 mr-[1%] items-center hidden">
            {/* <div className="flex gap-2 mr-[1%] items-center"> */}
            <label>user name</label>
            <ButtonBlackGold buttonName={"ลงประกาศขาย"}></ButtonBlackGold>
          </div>
        </div>
      </div>
    </>
  );
}
