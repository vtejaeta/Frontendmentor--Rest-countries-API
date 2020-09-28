import React from "react";
import { Link } from "react-router-dom";
import "../styles/RenderDetails.css";

const RenderDetails = ({ details }) => {
  const {
    name,
    nativeName,
    topLevelDomain,
    population,
    currencies,
    region,
    languages,
    subregion,
    capital,
    borders,
  } = details[0];

  return (
    <div className="box">
      <div className="nav-button">
        <Link to="/">
          <button className="styled-button">
            {" "}
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </Link>
      </div>
      <div className="main">
        <div className="left-card">
          <img src={details[0].flag} alt="" className="s-flag" />
        </div>
        <div className="right-card">
          <h1>{name}</h1>
          <div className="dummy">
            <div className="dummy-left">
              <ul>
                <li>
                  Native Name: <span>{nativeName}</span>
                </li>
                <li>
                  Population: <span>{population}</span>
                </li>
                <li>
                  Region: <span>{region}</span>
                </li>
                <li>
                  Sub Region: <span>{subregion}</span>
                </li>
                <li>
                  Capital: <span>{capital}</span>
                </li>
              </ul>
            </div>
            <div className="dummy-right">
              <ul>
                <li>
                  Top Level Domain: <span>{topLevelDomain}</span>
                </li>
                <li>
                  Currencies: <span>{currencies[0].name}</span>
                </li>
                <li>
                  Languages:{" "}
                  {languages.map((lang, index) => {
                    if (index === languages.length - 1) {
                      return <span key={Math.random()}>{lang.name}</span>;
                    }
                    return <span key={Math.random()}>{lang.name},</span>;
                  })}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-div">
            <p>
              Border: {""}
              <div className="items">
                {borders.map((border) => {
                  return (
                    <Link
                      to={`/country/${border
                        .toLowerCase()
                        .substring(0, border.toLowerCase().length - 1)}`}
                      key={Math.random()}
                    >
                      <span className="styled-border">{border} </span>
                    </Link>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderDetails;
