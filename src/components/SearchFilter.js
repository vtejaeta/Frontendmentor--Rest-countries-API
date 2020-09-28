import React, { Component } from "react";
import "../styles/SearchFilter.css";
import { connect } from "react-redux";

class SearchFilter extends Component {
  render() {
    return (
      <>
        <section>
          <div className="input-field">
            <input
              name="input"
              placeholder="Search for a country..."
              onChange={this.props.handleChange}
            />
          </div>
          <div className="filter">
            <select
              id="region"
              name="region"
              onChange={this.props.handleChange}
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { country: state };
};

export default connect(mapStateToProps)(SearchFilter);
