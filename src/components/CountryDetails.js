import React from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";
import { useState, useEffect } from "react";
import RenderDetails from "./RenderDetails";

const CountryDetails = (props) => {
  const [term, setTerm] = useState("");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    props.fetchCountries();
    setTerm(
      props.location.pathname.substring(9, props.location.pathname.length)
    );
    setDetails(
      props.countries.filter(
        (country) => country.alpha2Code.toLowerCase() === term
      )
    );
  }, [props, term]);

  // useEffect(() => {
  //   setDetails(
  //     props.countries.filter(
  //       (country) => country.alpha2Code.toLowerCase() === term
  //     )
  //   );
  // }, [props.countries, term]);
  return details.length ? (
    <>
      <RenderDetails details={details} />
    </>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, { fetchCountries })(CountryDetails);
