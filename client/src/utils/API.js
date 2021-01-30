import axios from "axios";

var countrySearch = "";
const queryURL1 =
  "https://www.travel-advisory.info/api?countrycode=" + countrySearch;
const queryURL2 = "https://www.trackcorona.live/api/countries/" + countrySearch;

export default {
  findCountry: function () {
    return axios.get(queryURL1);
    return axios.get(queryURL2);
  },
};
