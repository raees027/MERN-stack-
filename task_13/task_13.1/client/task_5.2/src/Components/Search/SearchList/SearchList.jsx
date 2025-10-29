import "./SearchList.css";
export const SearchList = ({ searchList }) => {
  return (
    <>
      <div className="search-list-container">
        {searchList.map((data) => (
          <div className="search-items" key={data.id}>
            <img
              width="50px"
              height="50px"
              style={{ objectFit: "contain" }}
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
            />
            <p className="title">{data.title}</p>
          </div>
        ))}
      </div>

      {/* first method  */}

      {/* <div className="search-list-container">
        {filteredList.map((data, index) => (
          //   <div className="search-items" key={data.id}>
          //     <img
          //       width="32px"
          //       height="32px"
          //       style={{ objectFit: "contain" }}
          //       src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          //       alt=""
          //     />
          //     <p className="title">{data.title}</p>
          //   </div>

          <div className="search-items" key={index}>
            <p className="title">{data}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};
