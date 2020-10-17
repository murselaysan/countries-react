import React from "react";

import RegionList from "./RegionList";

const ShowDetail = ({showDetailCountry, showMore, allCountries}) => {

  const showNeighbour = (e) => {
    console.log(e.target.key);
    console.log(e.target.alt);
    showMore(e.target.innerText ? e.target.innerText:e.target.alt);
  };
let borderCountry = allCountries.filter(item => showDetailCountry.borders.includes(item.alpha3Code));
  return (
    <div className="countries">

    <div className="countryDetail" >
            <img src={showDetailCountry.flag} alt="" />
            <h4>{showDetailCountry.name}</h4>
            <h5>Population: {showDetailCountry.population}</h5>
            <h5>Region: {showDetailCountry.region} </h5>
            <h5>Capital: {showDetailCountry.capital}</h5>
            <RegionList dataArray={showDetailCountry.languages} title="Languages:" />
            <RegionList dataArray={showDetailCountry.currencies} title="Currencies:" />
            <ul>
              {borderCountry.map(item => <li onClick={showNeighbour} className="listItem" key={item.alpha3Code}><img src={item.flag} className="smallFlag" alt={item.name} />{item.name}</li>)}
            </ul>
          </div>
   </div>
  );
};

export default ShowDetail;