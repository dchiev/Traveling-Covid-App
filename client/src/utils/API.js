import axios from "axios";

export default {
  findCountry1: function (countrySearch) {
    const queryURL1 =
      "https://cors-anywhere.herokuapp.com/https://www.travel-advisory.info/api?countrycode=" +
      countrySearch;
    return axios.get(queryURL1);
  },
  findCountry2: function (countrySearch) {
    const queryURL2 =
      "https://cors-anywhere.herokuapp.com/https://www.trackcorona.live/api/countries/" +
      countrySearch;
    return axios.get(queryURL2);
  },
};
