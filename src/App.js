import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import ShowCountries from "./ShowCountries";
import Search from "./Search";
import ShowDetail from "./ShowDetail";

function App() {
  const [allCountries,setAllCountries] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [showDetailCountry, setShowDetailCountry] = useState([]);
  
  useEffect(() => {fetch(`https://restcountries.eu/rest/v2/all`)
  .then(resp => resp.json())
.then(data => {setAllCountries(data); setCountryList(data)}) },[])
  
  
  const filterCountry = (e) => {
    setCountryList(
      allCountries.filter(
        (item) =>
          (item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.capital
              .toLowerCase()
              .includes(e.target.value.toLowerCase())) &&
          (region ? item.region === region : true)
      )
    );
    setSearch(e.target.value.toLowerCase());
  };

  const filterByRegion = (e) => {
    console.log(e.target.value);
    setCountryList(
      allCountries.filter(
        (item) =>
          (item.name.toLowerCase().includes(search) ||
            item.capital.toLowerCase().includes(search)) &&
          (e.target.value ? item.region === e.target.value : true)
      )
    );
    setRegion(e.target.value);
  };

  const showMore = (countryName) => {
 setShowDetail(true);
 setShowDetailCountry(allCountries.find(item => item.name === countryName))
};

let mySet = new Set();
allCountries.forEach((item) => mySet.add(item.region));
let regionArr = Array.from(mySet)
.sort()
.filter((item) => item);

  return (
    <div className="App">
      <Header />
      <Search
        filterCountry={filterCountry}
        filterByRegion={filterByRegion}
        regionArr={regionArr}
        showDetail={showDetail}
        setShowDetail={setShowDetail}
      />
      {showDetail ? <ShowDetail showDetailCountry={showDetailCountry} showMore={showMore} allCountries={allCountries} />:
      <ShowCountries data={countryList} showMore={showMore} />}
    </div>
  );
}

export default App;