import _ from "lodash";
import restCountriesApi from "../apis/restCountriesApi";

export const fetchCountries = _.memoize(function () {
  return _.memoize(async (dispatch) => {
    const response = await restCountriesApi.get("/all");
    dispatch({ type: "FETCH_COUNTRIES", payload: response.data });
  });
});
