import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCountries, fetchCountryByRegion } from "../actions/";
import SearchFilter from "./SearchFilter";
import Country from "./Country";

class CountriesList extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  state = { countries: [], fetched: "", input: "", dropdown: "" };

  handleChange = (e) => {
    if (e.target.name === "input") {
      this.setState({
        fetched: "input",
        countries: this.props.countries
          .filter((country) => {
            return country.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          })
          .map((output) => {
            return output;
          }),
      });
    } else if (e.target.name === "region") {
      this.props.fetchCountryByRegion(e.target.value);
      if (this.state.countries.length) {
        this.setState({
          countries: this.state.countries.filter(
            (country) => country.region === e.target.value
          ),
        });
      } else {
        this.setState({
          countries: [this.props.countries],
          fetched: "dropdown",
        });
      }
    }
  };

  render() {
    return (
      <>
        <SearchFilter handleChange={this.handleChange} />
        <div className="cont-card">
          {this.state.countries.length ? (
            this.state.fetched === "input" ? (
              this.state.countries.length ? (
                this.state.countries.map((country) => (
                  <Country key={country.name} country={country} />
                ))
              ) : (
                <>
                  <h1>Oops!</h1>
                  <h4>Sorry no results found!</h4>
                </>
              )
            ) : (
              this.props.countries.map((country) => (
                <Country key={country.name} country={country} />
              ))
            )
          ) : this.state.fetched === "input" ? (
            <h4>Sorry couldn't find matching results.</h4>
          ) : (
            this.props.countries.map((country) => (
              <Country key={country.name} country={country} />
            ))
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, {
  fetchCountries,
  fetchCountryByRegion,
})(CountriesList);
