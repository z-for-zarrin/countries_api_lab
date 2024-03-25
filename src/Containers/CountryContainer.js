import { useEffect, useState } from "react";
import CountryList from "../Components/CountryList";
import SearchCountry from "../Components/SearchCountry";

const CountryContainer = () => {
    
    const [allCountries, setAllCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setAllCountries(jsonData);
        setFilteredCountries(jsonData);
    }

    useEffect(
        () => {
            loadCountries();
        }, []
    );

    useEffect(
        () => {
            setFilteredCountries(allCountries);
        }, [allCountries]
    )

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
        <div id="country-lists-container">
            <div className="country-list">
            <h2>Countries To Visit</h2>
            <SearchCountry countries={allCountries} setFilteredCountries={setFilteredCountries}/>
            <CountryList countries={filteredCountries} toggleLists={addVisitedCountry} />
            </div>
            <div className="country-list">
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