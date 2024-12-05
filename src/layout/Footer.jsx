import ContactUs from "../feature/Contactus";
import PopularSearch from "../feature/popularSearch";

export default function Footer() {
  return (
    <>
      <div className="bg-[#1C2939] px-[10%] pt-12 flex">
        <div className="w-[50%]">
          <PopularSearch></PopularSearch>;
        </div>
        <div className="w-[50%]">
          <ContactUs></ContactUs>
        </div>
      </div>
    </>
  );
}
