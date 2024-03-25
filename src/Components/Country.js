const Country = ({ country, toggleLists }) => {

    const handleCheckbox = () => {
        toggleLists(country);
    }

    return (
        <li>
            <label htmlFor="visited">{country.flag} {country.name.common}</label>
            <input
                type="button"
                name="visited"
                value="✓"
                onClick={handleCheckbox}
            />
        </li>
    );
}
 
export default Country;