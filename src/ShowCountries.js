import React from "react";

import "./App.css";


function ShowCountries({ data, showMore }) {
 
const showMoreHandle = (e) => {
 showMore(e.target.id ? e.target.id:e.target.parentNode.id ? e.target.parentNode.id:e.target.parentNode.parentNode.id);
};


  return (
    <div className="countries">
      {data.map((data) => {
        return (
          <div className="country" onClick={showMoreHandle} key={data.alpha3Code} id={data.name}>
            <img src={data.flag} alt="" />
            <h4>{data.name}</h4>
            <h5>Population: {data.population}</h5>
            <h5>Region: {data.region} </h5>
            <h5>Capital: {data.capital}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default ShowCountries;

