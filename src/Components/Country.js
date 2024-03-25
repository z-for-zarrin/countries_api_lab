const Country = ({ country, toggleLists }) => {

    const handleCheckbox = () => {
        toggleLists(country);
    }

    return (
        <>
            <details>
                <summary>
                    <label htmlFor="visited">{country.flag} {country.name.common}</label>
                    <input
                        type="button"
                        name="visited"
                        className="toggleButton"
                        value="✓"
                        onClick={handleCheckbox}
                    />
                </summary>
                <p>Capital(s): {country.capital ? country.capital.join(", ") : "None"}</p>
                <p>Region: {country.region}</p>
                <p>Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
            </details>
        </>
    );
}
 
export default Country;