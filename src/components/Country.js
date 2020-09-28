import React from "react";
import { Link } from "react-router-dom";
import "../styles/CountriesList.css";

const Country = ({ countries }) => {
  const handleRender = (country) => {
    const { name, flag, population, alpha2Code, region, capital } = country;
    return (
      <Link to={`country/${alpha2Code.toLowerCase()}`} key={name}>
        <div key={name} className="card sample">
          <div className="img-cont">
            <img src={`${flag}`} alt="" className="flag" />
          </div>
          <div className="bottom">
            <h1>{name}</h1>
            <ul>
              <li>
                Population: <span>{`${population}`}</span>
              </li>
              <li>
                Region: <span>{`${region}`}</span>
              </li>
              <li>
                Capital: <span>{`${capital}`}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      {countries.map((country) => {
        return handleRender(country);
      })}
    </>
  );
};

export default Country;
