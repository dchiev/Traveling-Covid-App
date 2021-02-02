import axios from "axios";

var countrySearch = "";
const queryURL2 = "https://www.trackcorona.live/api/countries/" + countrySearch;

export default {
  findCountry: function (countrySearch) {
    const queryURL1 ="https://cors-anywhere.herokuapp.com/https://www.travel-advisory.info/api?countrycode=" + countrySearch;
    return axios.get(queryURL1);
  },
};
