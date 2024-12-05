import React, { useState, useEffect } from "react";

export default function ContactUs() {
  const contactUs = [
    {
      id: 1,
      image: "src/assets/facebook-icon.svg",
      label: "facebook",
      link: "",
    },
    {
      id: 2,
      image: "src/assets/instagram-icon.svg",
      label: "instagram",
      link: "",
    },
    { id: 3, image: "src/assets/line-icon.svg", label: "line", link: "" },
    { id: 4, image: "src/assets/mail-icon.svg", label: "e-mail", link: "" },
    { id: 5, image: "src/assets/tiktok-icon.svg", label: "tiktok", link: "" },
    { id: 6, image: "src/assets/phone-call-icon.svg", label: "tel", link: "" },
    {
      id: 7,
      image: "src/assets/x-social-icon.svg",
      label: "x social",
      link: "",
    },
    { id: 8, image: "src/assets/youtube-icon.svg", label: "youtube", link: "" },
    { id: 9, image: "src/assets/address-icon.svg", label: "Address", link: "" },
  ];

  ///// set state /////
  // set state contact us
  const [stateContactUs, setStateContactUs] = useState([]);

  ///// end set state /////

  ///// use effect /////
  // use effect contact us
  useEffect(() => {
    const fetchContactUs = async () => {
      const dataContactUs = contactUs;
      setStateContactUs(dataContactUs);
    };
    fetchContactUs();
  }, []);
  ///// end use effect /////

  return (
    <div className="text-white [&>h1]:font-bold [&>h1]:size-8 [&>ul>h1]:pb-4 [&>ul>li]:py-1 [&>ul>li]:font-[300] [&>ul>li]:cursor-pointer">
      <ul>
        <h1>ติดต่อเรา</h1>
        {stateContactUs.map((contact) => (
          <li key={contact.id} className="flex gap-4 hover:underline">
            <img className="w-7 h-7 bg-w" src={contact.image} alt="" />{" "}
            {contact.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
