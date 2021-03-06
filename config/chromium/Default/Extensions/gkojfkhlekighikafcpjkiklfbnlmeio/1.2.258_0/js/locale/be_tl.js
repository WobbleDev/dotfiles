'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibouti"},
    "AT": {message: "Austria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Gusto Hola sa ibang mga device? (Xbox, PS, Apple TV, iPhone ...). Mag-click dito"},
    "SZ": {message: "Swaziland"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Zambia"},
    "app_desc": {message: "I-access ang LAHAT ng mga Internet! Pumunta sa block na site -> click Hola icon -> pagbabago ng bandila ng bansa -> Enjoy!"},
    "Improve translation": {message: "Pagbutihin ang pagsasalin"},
    "more...": {message: "higit pa ..."},
    "SH": {message: "Saint Helena"},
    "There seems to be an error": {message: "Mukhang isang error"},
    "MA": {message: "Morocco"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Northern Mariana Islands"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "I-access ang anumang mga site mula sa anumang bansa, libre"},
    "Try to <span>reload</span>": {message: "Subukang <span> reload </span>"},
    "UZ": {message: "Uzbekistan"},
    "LR": {message: "Liberia"},
    "TK": {message: "Tokelau"},
    "TN": {message: "Tunisia"},
    "EE": {message: "Estonia"},
    "CK": {message: "Cook Islands"},
    "BY": {message: "Belarus"},
    "KR": {message: "Timog Korea"},
    "NO": {message: "Norway"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armenia"},
    "SR": {message: "Suriname"},
    "MG": {message: "Madagascar"},
    "ON": {message: "ON"},
    "BT": {message: "Bhutan"},
    "CF": {message: "Central African Republic"},
    "AE": {message: "United Arab Emirates"},
    "BA": {message: "Bosnia and Herzegovina"},
    "TH": {message: "Thailand"},
    "Author:": {message: "May-akda:"},
    "CC": {message: "Cocos Islands"},
    "NC": {message: "New Caledonia"},
    "TO": {message: "Tonga"},
    "SE": {message: "Sweden"},
    "AZ": {message: "Azerbaijan"},
    "AF": {message: "Afghanistan"},
    "NG": {message: "Nigeria"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "I-on upang makapagsimula"},
    "OM": {message: "Oman"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonesia"},
    "FM": {message: "Micronesia"},
    "(some Hola features are not available on your version)": {message: "(Ang ilang mga tampok Hola ay hindi magagamit sa iyong bersyon)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Latvia"},
    "RU": {message: "Russia"},
    "FI": {message: "Finland"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Kumuha Hola Plus para i-un-nagambala, ad-libreng serbisyo."},
    "VE": {message: "Venezuela"},
    "VI": {message: "U.S. Virgin Islands"},
    "TV": {message: "Tuvalu"},
    "SN": {message: "Senegal"},
    "MX": {message: "Mehiko"},
    "IL": {message: "Israel"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "May-akda ng site:"},
    "HU": {message: "Hungary"},
    "DO": {message: "Dominican Republic"},
    "OFF": {message: "OFF"},
    "KH": {message: "Cambodia"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola ay hindi maaaring gumana nang maayos dahil ang isa pang extension ay pagkontrol sa iyong mga setting ng proxy. Mangyaring huwag paganahin ang iba pang mga extension na sa tingin mo ay maaaring kontrolin ang iyong mga setting ng proxy sa <a> extension </a> (tulad ng mga ad-blocker, iba pang mga serbisyo ng VPN, atbp.)"},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "Remove ads": {message: "Alisin ang mga ad"},
    "DK": {message: "Denmark"},
    "CV": {message: "Cape Verde"},
    "Reload": {message: "Kargahang muli"},
    "Number of users that use this option": {message: "Bilang ng mga user na gamitin ang pagpipiliang ito"},
    "MO": {message: "Macao"},
    "HR": {message: "Croatia"},
    "CZ": {message: "Czech Republic"},
    "ST": {message: "Sao Tome and Principe"},
    "AU": {message: "Australia"},
    "IR": {message: "Iran"},
    "CG": {message: "Congo"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Macedonia"},
    "GR": {message: "Griyego"},
    "AG": {message: "Antigua at Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Netherlands Antilles"},
    "UA": {message: "Ukraine"},
    "EH": {message: "Western Sahara"},
    "KN": {message: "Saint Kitts and Nevis"},
    "SC": {message: "Seychelles"},
    "NL": {message: "Netherlands"},
    "EC": {message: "Ecuador"},
    "HK": {message: "Hong Kong SAR China"},
    "MY": {message: "Malaysia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Vatican City"},
    "IO": {message: "British Indian Ocean Territory"},
    "SD": {message: "Sudan"},
    "RS": {message: "Serbia"},
    "CN": {message: "Tsina"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "CH": {message: "Switzerland"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kyrgyzstan"},
    "US": {message: "United States"},
    "PE": {message: "Peru"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fiji"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Iraq"},
    "AS": {message: "American Samoa"},
    "TZ": {message: "Tanzania"},
    "LY": {message: "Libya"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Bouvet Island"},
    "LT": {message: "Lithuania"},
    "PM": {message: "Saint Pierre at Miquelon"},
    "Initializing...": {message: "Sinisimulan ..."},
    "TT": {message: "Trinidad and Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ay hindi gumagana nang maayos sa Windows 8 mode. Mangyaring lumipat sa desktop mode. I-click ang <a> dito </a> para sa mga tagubilin"},
    "SY": {message: "Syria"},
    "SK": {message: "Slovakia"},
    "GL": {message: "Greenland"},
    "PG": {message: "Papua New Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Congo - Kinshasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Saint Vincent and the Grenadines"},
    "JP": {message: "Japan"},
    "NA": {message: "Namibia"},
    "TJ": {message: "Tajikistan"},
    "LC": {message: "Saint Lucia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolia"},
    "IT": {message: "Italya"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Paganahin ang"},
    "Loading": {message: "Pagkarga"},
    "EG": {message: "Ehipto"},
    "FR": {message: "Pranses"},
    "start": {message: "simulan"},
    "RW": {message: "Rwanda"},
    "BE": {message: "Belgium"},
    "UM": {message: "United States minor outlying islands"},
    "Accelerator": {message: "Aselerador"},
    "LS": {message: "Lesotho"},
    "SA": {message: "Saudi Arabya"},
    "ZA": {message: "Timog Afrika"},
    "PT": {message: "Portugal"},
    "CA": {message: "Canada"},
    "Starting...": {message: "Nagsisimula ..."},
    "CM": {message: "Cameroon"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Ang libreng bersyon ng Hola Kailangang ma re-enable ang bawat 4 na oras at ay sinusuportahan ng mga ad."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Poland"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkmenistan"},
    "KY": {message: "Cayman Islands"},
    "Verify you have Internet": {message: "I-verify na mayroon kang Internet"},
    "LA": {message: "Laos"},
    "PH": {message: "Pilipinas"},
    "NI": {message: "Nicaragua"},
    "TF": {message: "French Southern Territories"},
    "KZ": {message: "Kazakhstan"},
    "SJ": {message: "Svalbard and Jan Mayen"},
    "MM": {message: "Myanmar"},
    "DM": {message: "Dominica"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritania"},
    "changing...": {message: "pagbabago ..."},
    "GS": {message: "South Georgia and the South Sandwich Islands"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Napakaluwag lumang bersyon ng Chrome, <a> update </a> Chrome upang gamitin Hola"},
    "ME": {message: "Montenegro"},
    "AX": {message: "Aland Islands"},
    "VG": {message: "British Virgin Islands"},
    "VN": {message: "Vietnam"},
    "CI": {message: "Côte d'Ivoire"},
    "DZ": {message: "Algeria"},
    "YE": {message: "Yemen"},
    "GE": {message: "Georgia"},
    "CX": {message: "Christmas Island"},
    "LB": {message: "Lebanon"},
    "FK": {message: "Falkland Islands"},
    "DE": {message: "Alemaya"},
    "even more...": {message: "kahit na higit pa ..."},
    "BH": {message: "Bahrain"},
    "RO": {message: "Romania"},
    "WF": {message: "Wallis and Futuna"},
    "AR": {message: "Argentina"},
    "IN": {message: "India"},
    "Unblocker site list": {message: "Unblocker listahan ng site"},
    "AW": {message: "Aruba"},
    "FO": {message: "Faroe Islands"},
    "CS": {message: "Serbia at Montenegro"},
    "BR": {message: "Brazil"},
    "HN": {message: "Honduras"},
    "Translate to your language": {message: "Isalin sa iyong wika"},
    "SB": {message: "Solomon Islands"},
    "NZ": {message: "New Zealand"},
    "PS": {message: "Palestine"},
    "UG": {message: "Uganda"},
    "GB": {message: "United Kingdom"},
    "HT": {message: "Haiti"},
    "GF": {message: "French Guiana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Lumang bersyon ng Firefox. Pindutin ang <a> dito </a> upang mag-upgrade."},
    "ZZ": {message: "Hindi kilala o Hindi wastong Rehiyon"},
    "KM": {message: "Comoros"},
    "TC": {message: "Turks and Caicos Islands"},
    "ES": {message: "Espanya"},
    "MZ": {message: "Mozambique"},
    "BO": {message: "Bolivia"},
    "AL": {message: "Albania"},
    "MD": {message: "Moldova"},
    "TR": {message: "Turkey"},
    "GN": {message: "Guinea"},
    "CO": {message: "Colombia"},
    "SI": {message: "Slovenia"},
    "Settings": {message: "Mga Setting"},
    "AQ": {message: "Antartica"},
    "JO": {message: "Jordan"},
    "SM": {message: "San Marino"},
    "CU": {message: "Cuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Ethiopia"},
    "IS": {message: "Iceland"},
    "Reload Hola": {message: "I-reload Hola"},
    "back to": {message: "i-back sa"},
    "MH": {message: "Marshall Islands"},
    "BG": {message: "Bulgaria"},
    "BS": {message: "Bahamas"},
    "TL": {message: "East Timor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Cyprus"},
    "IM": {message: "Isle of Man"},
    "IE": {message: "Ireland"},
    "Get help from engineer over skype:": {message: "Humingi ng tulong mula engineer sa paglipas ng Skype:"},
    "TW": {message: "Taiwan"},
    "KP": {message: "Hilagang Korea"},
    "PF": {message: "French Polynesia"},
    "app_name": {message: "Hola Mas mahusay na Internet"},
    "Update": {message: "I-update"},
    "MW": {message: "Malawi"},
    "Unblocker is disabled": {message: "Unblocker ay hindi pinagana"},
    "GQ": {message: "Equatorial Guinea"},
    "PK": {message: "Pakistan"},
    "Number of users that pressed not working": {message: "Bilang ng mga user na pinindot hindi gumagana"},
    "NF": {message: "Norfolk Island"},
    "SO": {message: "Somalia"},
    "TD": {message: "Chad"},
    "BD": {message: "Bangladesh"},
    "HM": {message: "Heard Island and McDonald Islands"},

};
return E; });