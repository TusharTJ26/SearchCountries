import "./App.css";
import { useState, useEffect } from "react";
import CountryDisplay from "./countryDisplay/CountryDisplay";

const API =
  "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

function App() {
  // main function
  const [flagData, setFlagData] = useState([]);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    //fetching the data on initial render
    async function fetchData() {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setFlagData(data);
        setFilteredData(data);
      } catch (e) {
        console.error("Error fetching data: ", e);
      }
    }
    fetchData();
  }, []);

  // const handleChange = (e) => {
  //   filteredData.filter((item) => {
  //     if (item.common.has(e)) {
  //       return item;
  //     }
  //   });
  // };
  const handleChange = (inputValue) => {
    const filtered = flagData.filter((item) =>
      item.common.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div
        style={{
          height: "4rem",
          backgroundColor: "lightgray",
          borderBottom: "grey solid 2px",
          textAlign: "center",
          // verticalAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search for countries..."
          value={search}
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
            handleChange(e.target.value);
          }}
          style={{ width: "50%", height: "2rem", margin: "0.8rem 0" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "1% 2%",
          gap: "0.8rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredData.map((data, index) => {
          return <CountryDisplay key={index} data={data} />;
        })}
      </div>
    </>
  );
}

export default App;
