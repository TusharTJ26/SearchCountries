import "./CountryDisplay.css";

const CountryDisplay = ({ data }) => {
  return (
    <div className="countryCard">
      <img src={data.png} alt={data.common} />
      <h3>{data.common}</h3>
    </div>
  );
};
export default CountryDisplay;
