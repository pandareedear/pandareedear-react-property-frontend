import React, { useState, useEffect } from "react";
import ButtonBlackGold from "./ButtonBlackGold";

export default function ButtonGroupSearch({ onClick }) {
  const [input, setInput] = useState({
    search: "",
  });

  const propertyType = [
    { value: 0, label: "เลือกประเภทอสังหาฯ" },
    { value: 1, label: "บ้าน" },
    { value: 2, label: "คอนโด" },
  ];

  const rangePrice = [
    { value: 0, label: "ทุกช่วงราคา" },
    { value: 1, label: "0-1000" },
    { value: 2, label: "1001-2000" },
  ];

  ///// set state /////
  // set state button rent / sale
  const [stateButton, setStateButton] = useState("rent");

  // set state button search
  const [stateButtonSearch, setStateButtonSearch] = useState("");

  // set state selectbox property type
  const [selectedOptionPropertyType, setSelectedOptionPropertyType] = useState(
    propertyType[0].value
  );

  // set state selectbox range price
  const [selectOptionRangePrice, setSelectOptionRangePrice] = useState(
    rangePrice[0].value
  );

  //

  ///// end set state /////

  ///// set on change /////
  const handleChangePropertyType = (e) => {
    setSelectedOptionPropertyType(e.target.value);
    console.log(selectedOptionPropertyType);
  };

  const handleChangeRangePrice = (e) => {
    setSelectOptionRangePrice(e.target.value);
    console.log(selectOptionRangePrice);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  ///// end set on change /////

  ///// use effect fetch data /////
  // fetch property types
  useEffect(() => {
    const fetchPropertyTypes = async () => {
      const dataPropertyTypes = propertyType;
      setSelectedOptionPropertyType(dataPropertyTypes);
    };
    fetchPropertyTypes();
  }, []);

  // fetch range price
  useEffect(() => {
    const fetchRangePrice = async () => {
      const dataRangePrice = rangePrice;
      setSelectOptionRangePrice(dataRangePrice);
    };
    fetchRangePrice();
  }, []);

  ///// end use effect fetch data /////

  const onClickBtn = (condition) => {
    setStateButton(condition);
    if (onClick) {
      onClick(condition);
    }
    // console.log("Clicked button: ", condition);
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    setStateButtonSearch();
    console.log(
      "search :",
      `${input.search}/${selectedOptionPropertyType}/${selectOptionRangePrice}`
    );
  };

  return (
    <div className="flex flex-col">
      <div className="row flex gap-4">
        <button
          className={`rounded-md rounded-b-none px-6 py-2 ${
            stateButton === "rent"
              ? `bg-white text-black`
              : `bg-white bg-opacity-50 text-black`
          }`}
          type="button"
          onClick={() => onClickBtn("rent")}
        >
          เช่า
        </button>
        <button
          className={`rounded-md rounded-b-none px-6 py-2 ${
            stateButton === "sale"
              ? `bg-white text-black`
              : `bg-white bg-opacity-50 text-black`
          }`}
          type="button"
          onClick={() => onClickBtn("sale")}
        >
          ขาย
        </button>
      </div>
      <div className="flex h-20 bg-white rounded-lg rounded-tl-none">
        <form className="m-2 flex gap-4 w-[100%] items-center">
          <select
            className="p-2 outline-none transition hover:scale-105"
            value={selectedOptionPropertyType}
            onChange={handleChangePropertyType}
          >
            {propertyType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            className="h-[100%] p-2 outline-none border-l-2 transition hover:scale-105"
            value={selectOptionRangePrice}
            onChange={handleChangeRangePrice}
          >
            {rangePrice.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="flex relative w-[100%] h-[100%] pl-8 border-l-2 transition hover:scale-105">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              placeholder="ค้นหาทำเล โครงการ รถไฟฟ้า จังหวัด"
              value={input.search}
              onChange={handleChangeInput}
              className="outline-none w-[100%]"
            />
          </div>
          <ButtonBlackGold
            width={"w-[25%]"}
            height={"h-[90%]"}
            buttonName={"ค้นหาข้อมูล"}
            onClick={onClickSearch}
          ></ButtonBlackGold>
        </form>
      </div>
    </div>
  );
}
