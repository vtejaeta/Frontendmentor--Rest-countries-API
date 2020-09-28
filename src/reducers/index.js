import { combineReducers } from "redux";
import CountriesReducer from "./CountriesReducer";

export default combineReducers({ countries: CountriesReducer });
