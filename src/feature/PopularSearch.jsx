import React, { useState, useEffect } from "react";

export default function PopularSearch() {
  const popularSearch = [
    { id: 1, value: "popular1", label: "popular 1" },
    { id: 2, value: "popular2", label: "popular 2" },
    { id: 3, value: "popular3", label: "popular 3" },
    { id: 4, value: "popular4", label: "popular 4" },
    { id: 5, value: "popular5", label: "popular 5" },
    { id: 6, value: "popular6", label: "popular 6" },
    { id: 7, value: "popular7", label: "popular 7" },
    { id: 8, value: "popular8", label: "popular 8" },
    { id: 9, value: "popular9", label: "popular 9" },
    { id: 10, value: "popular10", label: "popular 10" },
  ];

  const popularAnnounced = [
    { id: 1, value: "popular1", label: "popular 1" },
    { id: 2, value: "popular2", label: "popular 2" },
    { id: 3, value: "popular3", label: "popular 3" },
    { id: 4, value: "popular4", label: "popular 4" },
    { id: 5, value: "popular5", label: "popular 5" },
    { id: 6, value: "popular6", label: "popular 6" },
    { id: 7, value: "popular7", label: "popular 7" },
    { id: 8, value: "popular8", label: "popular 8" },
    { id: 9, value: "popular9", label: "popular 9" },
  ];

  ///// set state /////
  // set state popular search
  const [statePopularSearch, setStatePopularSearch] = useState([]);

  // set state popular announced
  const [statePopularAnnounced, setStatePopularAnnounced] = useState([]);

  ///// end set state /////

  ///// use effect /////
  // use effect popular search
  useEffect(() => {
    const fetchPopularSearch = async () => {
      const dataPopularSearch = popularSearch;
      setStatePopularSearch(dataPopularSearch);
    };
    fetchPopularSearch();
  }, []);

  // use effect popular announced
  useEffect(() => {
    const fetchPopularAnnounced = async () => {
      const dataPopularAnnounced = popularAnnounced;
      setStatePopularAnnounced(dataPopularAnnounced);
    };
    fetchPopularAnnounced();
  }, []);

  ///// end use effect /////

  return (
    <div className="flex text-white [&>ul]:w-[50%] [&>h1]:font-bold [&>h1]:size-8 [&>ul>h1]:pb-4 [&>ul>li]:py-1 [&>ul>li]:font-[300] [&>ul>li]:cursor-pointer">
      <ul>
        <h1>คำค้นหายอดนิยม</h1>
        {statePopularSearch.map((popular) => (
          <li key={popular.id} className="hover:underline">
            {popular.label}
          </li>
        ))}
      </ul>
      <ul>
        <h1>ประกาศยอดนิยม</h1>
        {statePopularAnnounced.map((popular) => (
          <li key={popular.id} className="hover:underline">
            {popular.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
