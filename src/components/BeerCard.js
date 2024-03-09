import React from "react";
import "./BeerCard.css"; // Import CSS file for styling

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <div className="img">
        {" "}
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className="beer-info">
        <h4 className="beer-name">{beer.name}</h4>
        <p className="beer-tagline">{beer.tagline}</p>
        <p className="beer-description">{beer.description}</p>
        <div className="beer-details">
          <p>
            <b>ABV:</b> {beer.abv}%
          </p>
          <p>
            <b>IBU:</b> {beer.ibu}
          </p>
          <p>
            <b>Volume:</b> {beer.volume.value} {beer.volume.unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
