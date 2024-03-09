import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
import "./Landing.css";

const Landing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing">
      <div className="btn">
        {" "}
        <label for="search" className="search">
          Search :{" "}
        </label>{" "}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredData.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredData.map((beer, index) => (
            <BeerCard key={index} beer={beer} />
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Landing;
