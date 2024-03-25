import { useEffect, useState } from "react";

const CountryContainer = () => {
    
    const [allCountries, setAllCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setAllCountries(jsonData);
    }

    useEffect(
        () => {
            loadCountries();
        }, []
    );
    
    return (
        <>
            {JSON.stringify(allCountries)}
        </>
    );
}
 
export default CountryContainer;