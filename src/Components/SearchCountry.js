import { useState } from "react";

const SearchCountry = ({ countries, setFilteredCountries }) => {
    
    const [searchTerm, setSearchTerm] = useState("");

    const filterCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearch = (evt) => {
        evt.preventDefault();
        setFilteredCountries(filterCountries);
        evt.target.reset();
    }

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                name="searchTerm"
                placeholder="Search countries..."
                onInput={ (evt) => setSearchTerm(evt.target.value)}
                value={searchTerm}
            />
            <input
                type="submit"
                value="Search"
            />
        </form>
    );
}
 
export default SearchCountry;