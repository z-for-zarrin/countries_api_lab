const Country = ({ country }) => {

    return (
        <li>
            <h2>{country.name.common}</h2>
        </li>
    );
}
 
export default Country;