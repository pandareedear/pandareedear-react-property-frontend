import React, { useState, useEffect } from "react";

export default function ButtonQuickSearch() {
  const propertyTypeQuickSearch = [
    { value: 1, image: "src/assets/iconhome.png", label: "บ้าน" },
    { value: 2, image: "src/assets/iconhome.png", label: "ทาวน์เฮาส์" },
    { value: 3, image: "src/assets/iconhome.png", label: "คอนโดมิเนียม" },
    { value: 4, image: "src/assets/iconhome.png", label: "ที่ดิน" },
    { value: 5, image: "src/assets/iconhome.png", label: "อาคารพานิชย์" },
    { value: 6, image: "src/assets/iconhome.png", label: "พื้นที่ขายของ" },
    { value: 7, image: "src/assets/iconhome.png", label: "สำนักงาน" },
    { value: 8, image: "src/assets/iconhome.png", label: "กิจการ" },
  ];

  const [propertys, setPropertys] = useState([]);

  useEffect(() => {
    const fetchPropertys = async () => {
      const dataPropertys = propertyTypeQuickSearch;
      setPropertys(dataPropertys);
    };
    fetchPropertys();
  }, []);

  const onClickQuickSearch = (value) => {
    console.log(value);
  };

  return (
    <div className="mt-12 rounded-lg flex flex-column flex-wrap justify-center">
      {propertys.map((property) => (
        <div
          key={property.value}
          className="cursor-pointer m-4 rounded-lg w-[20%] border h-[128px] bg-white text-center transition ease-in-out hover:text-white hover:bg-[#E4C47C] hover:-translate-y-1 hover:scale-110 duration-200"
          onClick={() => onClickQuickSearch(property.value)}
        >
          <img className="m-auto" src={property.image} alt="" />
          <label>{property.label}</label>
        </div>
      ))}
    </div>
  );
}
