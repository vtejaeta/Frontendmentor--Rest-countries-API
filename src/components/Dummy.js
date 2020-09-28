import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";
import SearchFilter from "./SearchFilter";
import Country from "./Country";

class Dummy extends Component {
  async componentDidMount() {
    this.props.fetchCountries();
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: response.data });
  }

  state = { countries: [], input: "", region: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (name === "region" && value) {
      this.setState({
        countries: this.props.countries
          .filter((country) => {
            return country.region === value;
          })
          .map((c) => {
            return c;
          }),
      });
    } else if (name !== "input" && !value) {
      this.setState({ countries: this.props.countries });
    }
  };

  countriesToBeDisplayed = () => {
    return this.state.countries
      .filter((country) => {
        return country.name
          .toLowerCase()
          .includes(this.state.input.toLowerCase());
      })
      .map((output) => {
        return output;
      });
  };

  render() {
    return (
      <>
        <SearchFilter handleChange={this.handleChange} />
        <div className="cont-card">
          {<Country countries={this.countriesToBeDisplayed()} />}
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
})(Dummy);
