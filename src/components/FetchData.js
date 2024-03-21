import React, { useEffect, useState } from "react";
import Countries from "./Countries";

const url = "https://restcountries.com/v3.1/all";

const FetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  
  const handleRemove = (name) => {
        setCountries((prevState) => prevState.filter((country) => country.name.common !== name));
  }

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
        setError(error);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  },[]);

  useEffect(() => {
    console.log("Countries:", countries);
  }, [countries]); // Log countries whenever it changes


  return (
    <>
        <h1>Country App</h1>
        {isLoading && <h2>Loading....</h2>}
        {error && <h2>{error.message}</h2>}
        <div>
            <Countries handleRemove={handleRemove} countries={countries}/>
        </div>
    </>
  );
};

export default FetchData;
