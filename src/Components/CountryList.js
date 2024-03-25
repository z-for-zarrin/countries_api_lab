import Country from "./Country"

const CountryList = ({ countries, toggleLists }) => {

    const mappedCountries = countries.map((country, id) => {
        return <Country country={country} key={id} toggleLists={toggleLists} />;
    });
    
    return (
        <ul>
            {mappedCountries}
        </ul>
    );
}
 
export default CountryList;