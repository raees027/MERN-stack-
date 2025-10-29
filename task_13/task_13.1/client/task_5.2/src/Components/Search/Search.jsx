import { useEffect, useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  //   const [searchList, setSearchList] = useState(["aju", "rahul", "shafi"]); first methodi
  const [searchList, setSearchList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const API_URL = "http://localhost:3008/api/movies";

  // const handleChange = (event) => {
  //   setSearchInputValue(event.target.value);

  //   const newFilteredList = searchList.filter((data) => {
  //     return data.title
  //       .toLowerCase()
  //       .includes(event.target.value.toLowerCase());
  //   });

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  //   setFilteredList(newFilteredList);
  // };

  //     first method
  //     const handleChange = (event) => {
  //     setSearchInputValue(event.target.value);

  //     const newFilteredList = searchList.filter((data) => {
  //       return data.toLowerCase().startsWith(event.target.value);
  //     });

  //     setFilteredList(newFilteredList);
  //   };

  const clearChange = () => {
    setSearchInputValue("");
    setSearchList([]);
  };

  // const fetchValue = async () => {
  //   const response = await axios(API_URL, {
  //     params: {
  //       query: "movie",
  //     },
  //   });

  //   setSearchList(response.data.results);
  //   setFilteredList(response.data.results);

  //   console.log("hhhh");
  // };

  const fetchValue = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          movieName: searchInputValue,
        },
      });

      setSearchList(response.data.results);
    } catch (error) {
      console.log("error");
    }
  };

  // debounce
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchInputValue) {
        fetchValue();
      }
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchInputValue]);

  return (
    <>
      <div className="search-container">
        <div className="heading-section">
          <img
            width="32px"
            height="32px"
            style={{ objectFit: "contain" }}
            src="\search_3856329.png"
            alt=""
          />
          <h1>Looking for a movie?</h1>
        </div>
        <SearchInput
          searchInputValue={searchInputValue}
          clearChange={clearChange}
          handleChange={handleChange}
        />
        {/* <SearchList filteredList={filteredList} /> */}

        <SearchList searchList={searchList} />
      </div>
    </>
  );
};
