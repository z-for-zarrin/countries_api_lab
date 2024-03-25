import Country from "./Country"

const CountryList = ({ countries }) => {

    const mappedCountries = countries.map((country, id) => {
        return <Country country={country} key={id} />;
    });
    
    return (
        <ul>
            {mappedCountries}
        </ul>
    );
}
 
export default CountryList;