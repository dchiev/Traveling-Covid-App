import React from "react";
import API from "../../utils/API";
import PostApi from "../../utils/postsAPI";
import ResultsContainer from "./ResultsContainer";
import postsAPI from "../../utils/postsAPI";

const country_code = [
  {
    abbreviation: "AF",
    fullName: "Afghanistan",
  },
  {
    abbreviation: "AX",
    fullName: "Aland Islands",
  },
  {
    abbreviation: "AL",
    fullName: "Albania",
  },
  {
    abbreviation: "DZ",
    fullName: "Algeria",
  },
  {
    abbreviation: "AS",
    fullName: "American Samoa",
  },
  {
    abbreviation: "AD",
    fullName: "Andorra",
  },
  {
    abbreviation: "AO",
    fullName: "Angola",
  },
  {
    abbreviation: "AI",
    fullName: "Anguilla",
  },
  {
    abbreviation: "AQ",
    fullName: "Antarctica",
  },
  {
    abbreviation: "AG",
    fullName: "Antigua And Barbuda",
  },
  {
    abbreviation: "AR",
    fullName: "Argentina",
  },
  {
    abbreviation: "AM",
    fullName: "Armenia",
  },
  {
    abbreviation: "AW",
    fullName: "Aruba",
  },
  {
    abbreviation: "AU",
    fullName: "Australia",
  },
  {
    abbreviation: "AT",
    fullName: "Austria",
  },
  {
    abbreviation: "AZ",
    fullName: "Azerbaijan",
  },
  {
    abbreviation: "BS",
    fullName: "Bahamas",
  },
  {
    abbreviation: "BH",
    fullName: "Bahrain",
  },
  {
    abbreviation: "BD",
    fullName: "Bangladesh",
  },
  {
    abbreviation: "BB",
    fullName: "Barbados",
  },
  {
    abbreviation: "BY",
    fullName: "Belarus",
  },
  {
    abbreviation: "BE",
    fullName: "Belgium",
  },
  {
    abbreviation: "BZ",
    fullName: "Belize",
  },
  {
    abbreviation: "BJ",
    fullName: "Benin",
  },
  {
    abbreviation: "BM",
    fullName: "Bermuda",
  },
  {
    abbreviation: "BT",
    fullName: "Bhutan",
  },
  {
    abbreviation: "BO",
    fullName: "Bolivia",
  },
  {
    abbreviation: "BA",
    fullName: "Bosnia And Herzegovina",
  },
  {
    abbreviation: "BW",
    fullName: "Botswana",
  },
  {
    abbreviation: "BV",
    fullName: "Bouvet Island",
  },
  {
    abbreviation: "BR",
    fullName: "Brazil",
  },
  {
    abbreviation: "IO",
    fullName: "British Indian Ocean Territory",
  },
  {
    abbreviation: "BN",
    fullName: "Brunei Darussalam",
  },
  {
    abbreviation: "BG",
    fullName: "Bulgaria",
  },
  {
    abbreviation: "BF",
    fullName: "Burkina Faso",
  },
  {
    abbreviation: "BI",
    fullName: "Burundi",
  },
  {
    abbreviation: "KH",
    fullName: "Cambodia",
  },
  {
    abbreviation: "CM",
    fullName: "Cameroon",
  },
  {
    abbreviation: "CA",
    fullName: "Canada",
  },
  {
    abbreviation: "CV",
    fullName: "Cape Verde",
  },
  {
    abbreviation: "KY",
    fullName: "Cayman Islands",
  },
  {
    abbreviation: "CF",
    fullName: "Central African Republic",
  },
  {
    abbreviation: "TD",
    fullName: "Chad",
  },
  {
    abbreviation: "CL",
    fullName: "Chile",
  },
  {
    abbreviation: "CN",
    fullName: "China",
  },
  {
    abbreviation: "CX",
    fullName: "Christmas Island",
  },
  {
    abbreviation: "CC",
    fullName: "Cocos (Keeling) Islands",
  },
  {
    abbreviation: "CO",
    fullName: "Colombia",
  },
  {
    abbreviation: "KM",
    fullName: "Comoros",
  },
  {
    abbreviation: "CG",
    fullName: "Congo",
  },
  {
    abbreviation: "CD",
    fullName: "Congo, Democratic Republic",
  },
  {
    abbreviation: "CK",
    fullName: "Cook Islands",
  },
  {
    abbreviation: "CR",
    fullName: "Costa Rica",
  },
  {
    abbreviation: "CI",
    fullName: "Cote D'Ivoire",
  },
  {
    abbreviation: "HR",
    fullName: "Croatia",
  },
  {
    abbreviation: "CU",
    fullName: "Cuba",
  },
  {
    abbreviation: "CY",
    fullName: "Cyprus",
  },
  {
    abbreviation: "CZ",
    fullName: "Czech Republic",
  },
  {
    abbreviation: "DK",
    fullName: "Denmark",
  },
  {
    abbreviation: "DJ",
    fullName: "Djibouti",
  },
  {
    abbreviation: "DM",
    fullName: "Dominica",
  },
  {
    abbreviation: "DO",
    fullName: "Dominican Republic",
  },
  {
    abbreviation: "EC",
    fullName: "Ecuador",
  },
  {
    abbreviation: "EG",
    fullName: "Egypt",
  },
  {
    abbreviation: "SV",
    fullName: "El Salvador",
  },
  {
    abbreviation: "GQ",
    fullName: "Equatorial Guinea",
  },
  {
    abbreviation: "ER",
    fullName: "Eritrea",
  },
  {
    abbreviation: "EE",
    fullName: "Estonia",
  },
  {
    abbreviation: "ET",
    fullName: "Ethiopia",
  },
  {
    abbreviation: "FK",
    fullName: "Falkland Islands (Malvinas)",
  },
  {
    abbreviation: "FO",
    fullName: "Faroe Islands",
  },
  {
    abbreviation: "FJ",
    fullName: "Fiji",
  },
  {
    abbreviation: "FI",
    fullName: "Finland",
  },
  {
    abbreviation: "FR",
    fullName: "France",
  },
  {
    abbreviation: "GF",
    fullName: "French Guiana",
  },
  {
    abbreviation: "PF",
    fullName: "French Polynesia",
  },
  {
    abbreviation: "TF",
    fullName: "French Southern Territories",
  },
  {
    abbreviation: "GA",
    fullName: "Gabon",
  },
  {
    abbreviation: "GM",
    fullName: "Gambia",
  },
  {
    abbreviation: "GE",
    fullName: "Georgia",
  },
  {
    abbreviation: "DE",
    fullName: "Germany",
  },
  {
    abbreviation: "GH",
    fullName: "Ghana",
  },
  {
    abbreviation: "GI",
    fullName: "Gibraltar",
  },
  {
    abbreviation: "GR",
    fullName: "Greece",
  },
  {
    abbreviation: "GL",
    fullName: "Greenland",
  },
  {
    abbreviation: "GD",
    fullName: "Grenada",
  },
  {
    abbreviation: "GP",
    fullName: "Guadeloupe",
  },
  {
    abbreviation: "GU",
    fullName: "Guam",
  },
  {
    abbreviation: "GT",
    fullName: "Guatemala",
  },
  {
    abbreviation: "GG",
    fullName: "Guernsey",
  },
  {
    abbreviation: "GN",
    fullName: "Guinea",
  },
  {
    abbreviation: "GW",
    fullName: "Guinea-Bissau",
  },
  {
    abbreviation: "GY",
    fullName: "Guyana",
  },
  {
    abbreviation: "HT",
    fullName: "Haiti",
  },
  {
    abbreviation: "HM",
    fullName: "Heard Island & Mcdonald Islands",
  },
  {
    abbreviation: "VA",
    fullName: "Holy See (Vatican City State)",
  },
  {
    abbreviation: "HN",
    fullName: "Honduras",
  },
  {
    abbreviation: "HK",
    fullName: "Hong Kong",
  },
  {
    abbreviation: "HU",
    fullName: "Hungary",
  },
  {
    abbreviation: "IS",
    fullName: "Iceland",
  },
  {
    abbreviation: "IN",
    fullName: "India",
  },
  {
    abbreviation: "ID",
    fullName: "Indonesia",
  },
  {
    abbreviation: "IR",
    fullName: "Iran, Islamic Republic Of",
  },
  {
    abbreviation: "IQ",
    fullName: "Iraq",
  },
  {
    abbreviation: "IE",
    fullName: "Ireland",
  },
  {
    abbreviation: "IM",
    fullName: "Isle Of Man",
  },
  {
    abbreviation: "IL",
    fullName: "Israel",
  },
  {
    abbreviation: "IT",
    fullName: "Italy",
  },
  {
    abbreviation: "JM",
    fullName: "Jamaica",
  },
  {
    abbreviation: "JP",
    fullName: "Japan",
  },
  {
    abbreviation: "JE",
    fullName: "Jersey",
  },
  {
    abbreviation: "JO",
    fullName: "Jordan",
  },
  {
    abbreviation: "KZ",
    fullName: "Kazakhstan",
  },
  {
    abbreviation: "KE",
    fullName: "Kenya",
  },
  {
    abbreviation: "KI",
    fullName: "Kiribati",
  },
  {
    abbreviation: "KR",
    fullName: "Korea",
  },
  {
    abbreviation: "KW",
    fullName: "Kuwait",
  },
  {
    abbreviation: "KG",
    fullName: "Kyrgyzstan",
  },
  {
    abbreviation: "LA",
    fullName: "Lao People's Democratic Republic",
  },
  {
    abbreviation: "LV",
    fullName: "Latvia",
  },
  {
    abbreviation: "LB",
    fullName: "Lebanon",
  },
  {
    abbreviation: "LS",
    fullName: "Lesotho",
  },
  {
    abbreviation: "LR",
    fullName: "Liberia",
  },
  {
    abbreviation: "LY",
    fullName: "Libyan Arab Jamahiriya",
  },
  {
    abbreviation: "LI",
    fullName: "Liechtenstein",
  },
  {
    abbreviation: "LT",
    fullName: "Lithuania",
  },
  {
    abbreviation: "LU",
    fullName: "Luxembourg",
  },
  {
    abbreviation: "MO",
    fullName: "Macao",
  },
  {
    abbreviation: "MK",
    fullName: "Macedonia",
  },
  {
    abbreviation: "MG",
    fullName: "Madagascar",
  },
  {
    abbreviation: "MW",
    fullName: "Malawi",
  },
  {
    abbreviation: "MY",
    fullName: "Malaysia",
  },
  {
    abbreviation: "MV",
    fullName: "Maldives",
  },
  {
    abbreviation: "ML",
    fullName: "Mali",
  },
  {
    abbreviation: "MT",
    fullName: "Malta",
  },
  {
    abbreviation: "MH",
    fullName: "Marshall Islands",
  },
  {
    abbreviation: "MQ",
    fullName: "Martinique",
  },
  {
    abbreviation: "MR",
    fullName: "Mauritania",
  },
  {
    abbreviation: "MU",
    fullName: "Mauritius",
  },
  {
    abbreviation: "YT",
    fullName: "Mayotte",
  },
  {
    abbreviation: "MX",
    fullName: "Mexico",
  },
  {
    abbreviation: "FM",
    fullName: "Micronesia, Federated States Of",
  },
  {
    abbreviation: "MD",
    fullName: "Moldova",
  },
  {
    abbreviation: "MC",
    fullName: "Monaco",
  },
  {
    abbreviation: "MN",
    fullName: "Mongolia",
  },
  {
    abbreviation: "ME",
    fullName: "Montenegro",
  },
  {
    abbreviation: "MS",
    fullName: "Montserrat",
  },
  {
    abbreviation: "MA",
    fullName: "Morocco",
  },
  {
    abbreviation: "MZ",
    fullName: "Mozambique",
  },
  {
    abbreviation: "MM",
    fullName: "Myanmar",
  },
  {
    abbreviation: "NA",
    fullName: "Namibia",
  },
  {
    abbreviation: "NR",
    fullName: "Nauru",
  },
  {
    abbreviation: "NP",
    fullName: "Nepal",
  },
  {
    abbreviation: "NL",
    fullName: "Netherlands",
  },
  {
    abbreviation: "AN",
    fullName: "Netherlands Antilles",
  },
  {
    abbreviation: "NC",
    fullName: "New Caledonia",
  },
  {
    abbreviation: "NZ",
    fullName: "New Zealand",
  },
  {
    abbreviation: "NI",
    fullName: "Nicaragua",
  },
  {
    abbreviation: "NE",
    fullName: "Niger",
  },
  {
    abbreviation: "NG",
    fullName: "Nigeria",
  },
  {
    abbreviation: "NU",
    fullName: "Niue",
  },
  {
    abbreviation: "NF",
    fullName: "Norfolk Island",
  },
  {
    abbreviation: "MP",
    fullName: "Northern Mariana Islands",
  },
  {
    abbreviation: "NO",
    fullName: "Norway",
  },
  {
    abbreviation: "OM",
    fullName: "Oman",
  },
  {
    abbreviation: "PK",
    fullName: "Pakistan",
  },
  {
    abbreviation: "PW",
    fullName: "Palau",
  },
  {
    abbreviation: "PS",
    fullName: "Palestinian Territory, Occupied",
  },
  {
    abbreviation: "PA",
    fullName: "Panama",
  },
  {
    abbreviation: "PG",
    fullName: "Papua New Guinea",
  },
  {
    abbreviation: "PY",
    fullName: "Paraguay",
  },
  {
    abbreviation: "PE",
    fullName: "Peru",
  },
  {
    abbreviation: "PH",
    fullName: "Philippines",
  },
  {
    abbreviation: "PN",
    fullName: "Pitcairn",
  },
  {
    abbreviation: "PL",
    fullName: "Poland",
  },
  {
    abbreviation: "PT",
    fullName: "Portugal",
  },
  {
    abbreviation: "PR",
    fullName: "Puerto Rico",
  },
  {
    abbreviation: "QA",
    fullName: "Qatar",
  },
  {
    abbreviation: "RE",
    fullName: "Reunion",
  },
  {
    abbreviation: "RO",
    fullName: "Romania",
  },
  {
    abbreviation: "RU",
    fullName: "Russian Federation",
  },
  {
    abbreviation: "RW",
    fullName: "Rwanda",
  },
  {
    abbreviation: "BL",
    fullName: "Saint Barthelemy",
  },
  {
    abbreviation: "SH",
    fullName: "Saint Helena",
  },
  {
    abbreviation: "KN",
    fullName: "Saint Kitts And Nevis",
  },
  {
    abbreviation: "LC",
    fullName: "Saint Lucia",
  },
  {
    abbreviation: "MF",
    fullName: "Saint Martin",
  },
  {
    abbreviation: "PM",
    fullName: "Saint Pierre And Miquelon",
  },
  {
    abbreviation: "VC",
    fullName: "Saint Vincent And Grenadines",
  },
  {
    abbreviation: "WS",
    fullName: "Samoa",
  },
  {
    abbreviation: "SM",
    fullName: "San Marino",
  },
  {
    abbreviation: "ST",
    fullName: "Sao Tome And Principe",
  },
  {
    abbreviation: "SA",
    fullName: "Saudi Arabia",
  },
  {
    abbreviation: "SN",
    fullName: "Senegal",
  },
  {
    abbreviation: "RS",
    fullName: "Serbia",
  },
  {
    abbreviation: "SC",
    fullName: "Seychelles",
  },
  {
    abbreviation: "SL",
    fullName: "Sierra Leone",
  },
  {
    abbreviation: "SG",
    fullName: "Singapore",
  },
  {
    abbreviation: "SK",
    fullName: "Slovakia",
  },
  {
    abbreviation: "SI",
    fullName: "Slovenia",
  },
  {
    abbreviation: "SB",
    fullName: "Solomon Islands",
  },
  {
    abbreviation: "SO",
    fullName: "Somalia",
  },
  {
    abbreviation: "ZA",
    fullName: "South Africa",
  },
  {
    abbreviation: "GS",
    fullName: "South Georgia And Sandwich Isl.",
  },
  {
    abbreviation: "ES",
    fullName: "Spain",
  },
  {
    abbreviation: "LK",
    fullName: "Sri Lanka",
  },
  {
    abbreviation: "SD",
    fullName: "Sudan",
  },
  {
    abbreviation: "SR",
    fullName: "Suriname",
  },
  {
    abbreviation: "SJ",
    fullName: "Svalbard And Jan Mayen",
  },
  {
    abbreviation: "SZ",
    fullName: "Swaziland",
  },
  {
    abbreviation: "SE",
    fullName: "Sweden",
  },
  {
    abbreviation: "CH",
    fullName: "Switzerland",
  },
  {
    abbreviation: "SY",
    fullName: "Syrian Arab Republic",
  },
  {
    abbreviation: "TW",
    fullName: "Taiwan",
  },
  {
    abbreviation: "TJ",
    fullName: "Tajikistan",
  },
  {
    abbreviation: "TZ",
    fullName: "Tanzania",
  },
  {
    abbreviation: "TH",
    fullName: "Thailand",
  },
  {
    abbreviation: "TL",
    fullName: "Timor-Leste",
  },
  {
    abbreviation: "TG",
    fullName: "Togo",
  },
  {
    abbreviation: "TK",
    fullName: "Tokelau",
  },
  {
    abbreviation: "TO",
    fullName: "Tonga",
  },
  {
    abbreviation: "TT",
    fullName: "Trinidad And Tobago",
  },
  {
    abbreviation: "TN",
    fullName: "Tunisia",
  },
  {
    abbreviation: "TR",
    fullName: "Turkey",
  },
  {
    abbreviation: "TM",
    fullName: "Turkmenistan",
  },
  {
    abbreviation: "TC",
    fullName: "Turks And Caicos Islands",
  },
  {
    abbreviation: "TV",
    fullName: "Tuvalu",
  },
  {
    abbreviation: "UG",
    fullName: "Uganda",
  },
  {
    abbreviation: "UA",
    fullName: "Ukraine",
  },
  {
    abbreviation: "AE",
    fullName: "United Arab Emirates",
  },
  {
    abbreviation: "GB",
    fullName: "United Kingdom",
  },
  {
    abbreviation: "US",
    fullName: "United States",
  },
  {
    abbreviation: "UM",
    fullName: "United States Outlying Islands",
  },
  {
    abbreviation: "UY",
    fullName: "Uruguay",
  },
  {
    abbreviation: "UZ",
    fullName: "Uzbekistan",
  },
  {
    abbreviation: "VU",
    fullName: "Vanuatu",
  },
  {
    abbreviation: "VE",
    fullName: "Venezuela",
  },
  {
    abbreviation: "VN",
    fullName: "Viet Nam",
  },
  {
    abbreviation: "VG",
    fullName: "Virgin Islands, British",
  },
  {
    abbreviation: "VI",
    fullName: "Virgin Islands, U.S.",
  },
  {
    abbreviation: "WF",
    fullName: "Wallis And Futuna",
  },
  {
    abbreviation: "EH",
    fullName: "Western Sahara",
  },
  {
    abbreviation: "YE",
    fullName: "Yemen",
  },
  {
    abbreviation: "ZM",
    fullName: "Zambia",
  },
  {
    abbreviation: "ZW",
    fullName: "Zimbabwe",
  },
];

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", recomendations: "", text: "", posts: [] };
    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addValue(evt) {
    evt.preventDefault();
    let country = this.state.value;
    for (let i = 0; i < country_code.length; i++) {
      if (country_code[i].fullName === country) {
        country = country_code[i].abbreviation;
      }
    }

    if (this.state.value !== undefined) {
      API.findCountry1(country).then((response) => {
        this.setState({
          recomendations: response.data.data[country],
        });
        /* console.log(response); */
        console.log(this.state.recomendations);
      });
      API.findCountry2(country).then((response) => {
        console.log("second api", response);
        /* (response) => console.log(response) */
        this.setState({
          cases: response.data.data[0],
        });
      });
      postsAPI.getPost(country).then((response) => {
        console.log("Posts:", response.data);
        /* (response) => console.log(response) */
        this.setState({
          posts: response.data,
        });
      });
      console.log("Your input value is: " + country);
    }
  }
  updateInput(evt) {
    this.setState({ value: evt.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    let country = this.state.value;
    for (let i = 0; i < country_code.length; i++) {
      if (country_code[i].fullName === country) {
        country = country_code[i].abbreviation;
      }
    }
    PostApi.savePost({
      text: this.state.text,
      country: country,
    }).then((res) => console.log(res));
  };
  handleChange = (e) => {
    this.state.text = e.target.value;
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addValue}>
          <br />
          <ResultsContainer
            recomendations={this.state.recomendations}
            searchCountry={this.state.value}
            cases={this.state.cases}
            posts={this.state.posts}
          />
          <br />
          <input
            type="text"
            placeholder="Search for the Country You'd Like to Travel To:"
            onChange={this.updateInput}
          />
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        <br></br>
        <div>
          <div className="row">
            <div className="col-md">
              <div className="card blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title white-text">
                    <b>Join the discussion</b>
                  </span>
                  <form className="form-inline" onSubmit={this.handleSubmit}>
                    <br></br>
                    <input
                      type="submit"
                      onChange={this.handleChange}
                      className="form-control"
                      type="search"
                      placeholder="What was your experience traveling in this country?"
                      aria-label="Search"
                    />

                    <div className="card-action black-text">
                      <button>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default search;
