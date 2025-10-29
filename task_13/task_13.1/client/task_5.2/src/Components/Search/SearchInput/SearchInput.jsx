import "./SearchInput.css";
export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearChange,
}) => {
  return (
    <>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handleChange}
          value={searchInputValue}
        />
        {searchInputValue && (
          <button onClick={clearChange}>
            <img
              width="32px"
              height="32px"
              style={{ objectFit: "contain" }}
              src="\cross_7573802.png"
              alt=""
            />
          </button>
        )}
      </div>
    </>
  );
};
