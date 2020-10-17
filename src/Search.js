import React from "react";

const Search = ({ filterCountry, filterByRegion, regionArr, showDetail, setShowDetail }) => {

  const goBack = () => {
    setShowDetail(false);
  };

  return (
    <form className="form">
      
      <input
        type="text"
        id="chooseName"
        className="form-control"
        placeholder="----------Search for a country----------"
        onChange={filterCountry}
      />

      {showDetail && <button className =" btn btn-primary" onClick={goBack}>Back to Main Page </button> }

      <select onChange={filterByRegion} className="form-control">
        <option value="">----------Filter by Region----------</option>
        {regionArr.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
     
    </form>
  );
};

export default Search;
