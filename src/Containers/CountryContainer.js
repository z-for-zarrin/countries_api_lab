import { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";

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

    const addVisitedCountry = (country) => {
        setVisitedCountries([...visitedCountries, country]);
        const countryIndex = allCountries.indexOf(country);
        setAllCountries(allCountries.toSpliced(countryIndex, 1));
    }

    const removeVisitedCountry = (country) => {
        setAllCountries([...allCountries, country]);
        const countryIndex = visitedCountries.indexOf(country);
        setVisitedCountries(visitedCountries.toSpliced(countryIndex, 1));
    }

    const clearVisitedCountries = () => {
        setVisitedCountries([]);
        loadCountries();
    }

    
    return (
        <div id="country-lists">
            <div>
            <h2>Countries To Visit</h2>
            <CountryList countries={allCountries} toggleLists={addVisitedCountry} />
            </div>
            <div>
            <h2>Visited Countries</h2>
            <input
                type="button"
                name="clear"
                value="Clear"
                onClick={clearVisitedCountries}
            />
            <CountryList countries={visitedCountries} toggleLists={removeVisitedCountry} />
            </div>
        </div>
    );
}
 
export default CountryContainer;