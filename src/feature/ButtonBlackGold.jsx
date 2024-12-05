import React from "react";

export default function ButtonBlackGold({
  buttonName,
  onClick,
  width,
  height,
}) {
  return (
    <button
      className={`bg-[#E4C47C] border border-b-[#E4C47C] p-1 rounded-md ${width} ${height}`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
