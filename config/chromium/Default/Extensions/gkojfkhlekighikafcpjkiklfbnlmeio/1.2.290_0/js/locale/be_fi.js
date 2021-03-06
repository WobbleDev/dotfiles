'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibouti"},
    "JM": {message: "Jamaika"},
    "AT": {message: "Itävalta"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Haluatko Hola muissa laitteissa? (Xbox, PS, Apple TV, iPhone ...). Klikkaa tästä"},
    "SZ": {message: "Swazimaa"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Sambia"},
    "app_desc": {message: "Käyttää kaikkia Internet! Siirry estetty sivuston -> klikkaa Hola kuvaketta -> Vaihda maata lippu -> nauti!"},
    "Improve translation": {message: "Paranna käännös"},
    "more...": {message: "enemmän ..."},
    "PR": {message: "Puerto Rico"},
    "SH": {message: "Saint Helena"},
    "There seems to be an error": {message: "Siellä näyttää olevan virheen"},
    "MA": {message: "Marokko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Pohjois-Mariaanit"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Pääsy sivustolle mistä tahansa maasta, ilmainen"},
    "Try to <span>reload</span>": {message: "Yritä <span> reload </span>"},
    "UZ": {message: "Uzbekistan"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Liberia"},
    "TN": {message: "Tunisia"},
    "EE": {message: "Viro"},
    "CK": {message: "Cookinsaaret"},
    "BY": {message: "Valko-Venäjä"},
    "NO": {message: "Norja"},
    "KR": {message: "Etelä-Korea"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armenia"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagaskar"},
    "ON": {message: "ON"},
    "BT": {message: "Bhutan"},
    "CF": {message: "Keski-Afrikan tasavalta"},
    "AE": {message: "Arabiemiirikunnat"},
    "BA": {message: "Bosnia ja Hertsegovina"},
    "TH": {message: "Thaimaa"},
    "Author:": {message: "Kirjoittaja:"},
    "CC": {message: "Kookossaaret"},
    "NC": {message: "Uusi-Kaledonia"},
    "TO": {message: "Tonga"},
    "SE": {message: "Ruotsi"},
    "AZ": {message: "Azerbaidžan"},
    "AF": {message: "Afganistan"},
    "NG": {message: "Nigeria"},
    "KE": {message: "Kenia"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Kytke päästä alkuun"},
    "OM": {message: "Oman"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonesia"},
    "FM": {message: "Mikronesian liittovaltio"},
    "(some Hola features are not available on your version)": {message: "(Jotkut Hola ominaisuudet eivät ole käytettävissä version)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Latvia"},
    "RU": {message: "Venäjä"},
    "FI": {message: "Suomi"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Hanki Hola Plus un-keskeytynyttä, mainos-ilmainen palvelu."},
    "LU": {message: "Luxemburg"},
    "VE": {message: "Venezuela"},
    "VI": {message: "Yhdysvaltain Neitsytsaaret"},
    "TV": {message: "Tuvalu"},
    "SN": {message: "Senegal"},
    "MX": {message: "Meksiko"},
    "IL": {message: "Israel"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Kirjoittaja sivusto:"},
    "HU": {message: "Unkari"},
    "DO": {message: "Dominikaaninen tasavalta"},
    "OFF": {message: "OFF"},
    "KH": {message: "Kambodža"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola ei toimi oikein, koska toinen laajennus ohjaa proxy-asetuksia. Ole hyvä ja poista muita laajennuksia, jotka luulet saattaa ohjata välityspalvelimen asetukset <a> laajennukset </a> (kuten ad-salpaajat, muut VPN-palvelut, jne.)."},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "DK": {message: "Tanska"},
    "PA": {message: "Panama"},
    "QA": {message: "Qatar"},
    "CV": {message: "Kap Verde"},
    "Reload": {message: "Ladata"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Käyttäjien määrä, jotka käyttävät tätä mahdollisuutta"},
    "MO": {message: "Macao – Kiinan erityishallintoalue"},
    "MF": {message: "Saint-Martin"},
    "HR": {message: "Kroatia"},
    "CZ": {message: "Tšekki"},
    "BL": {message: "Saint-Barthélemy"},
    "ST": {message: "São Tomé ja Príncipe"},
    "AU": {message: "Australia"},
    "IR": {message: "Iran"},
    "CG": {message: "Kongo-Brazzaville"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Makedonia"},
    "GR": {message: "Kreikka"},
    "AG": {message: "Antigua ja Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Alankomaiden Antillit"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Länsi-Sahara"},
    "KN": {message: "Saint Kitts ja Nevis"},
    "SC": {message: "Seychellit"},
    "MS": {message: "Montserrat"},
    "NL": {message: "Alankomaat"},
    "EC": {message: "Ecuador"},
    "HK": {message: "Hongkong – Kiinan erityishallintoalue"},
    "MY": {message: "Malesia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Vatikaani"},
    "IO": {message: "Brittiläinen Intian valtameren alue"},
    "SD": {message: "Sudan"},
    "RS": {message: "Serbia"},
    "CN": {message: "Kiina"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Mauritius"},
    "CH": {message: "Sveitsi"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kirgisia"},
    "NU": {message: "Niue"},
    "US": {message: "Yhdysvallat"},
    "PE": {message: "Peru"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fidži"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Irak"},
    "AS": {message: "Amerikan Samoa"},
    "TZ": {message: "Tansania"},
    "LY": {message: "Libya"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Bouvet’nsaari"},
    "LT": {message: "Liettua"},
    "SG": {message: "Singapore"},
    "PM": {message: "Saint-Pierre ja Miquelon"},
    "Initializing...": {message: "Valmistellaan ..."},
    "TT": {message: "Trinidad ja Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ei toimi hyvin Windows 8-tilassa. Ole hyvä vaihtaa työpöydän tilaan. Klikkaa <a> tästä </a> ohjeet"},
    "SY": {message: "Syyria"},
    "SK": {message: "Slovakia"},
    "GL": {message: "Grönlanti"},
    "PG": {message: "Papua-Uusi-Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Kongo-Kinshasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Saint Vincent ja Grenadiinit"},
    "JP": {message: "Japani"},
    "NA": {message: "Namibia"},
    "TJ": {message: "Tadžikistan"},
    "LC": {message: "Saint Lucia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolia"},
    "IT": {message: "Italia"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Mahdollistaa"},
    "Loading": {message: "Ladataan"},
    "EG": {message: "Egypti"},
    "FR": {message: "Ranska"},
    "start": {message: "alkaa"},
    "RW": {message: "Ruanda"},
    "BE": {message: "Belgia"},
    "UM": {message: "Yhdysvaltain pienet erillissaaret"},
    "Accelerator": {message: "Kiihdytin"},
    "LS": {message: "Lesotho"},
    "SA": {message: "Saudi-Arabia"},
    "ZA": {message: "Etelä-Afrikka"},
    "PT": {message: "Portugali"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Alkaen ..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Ilmainen versio Hola on uudelleen käyttöön 4 tunnin välein ja sponsoroi mainoksia."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Puola"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkmenistan"},
    "KY": {message: "Caymansaaret"},
    "Verify you have Internet": {message: "Tarkista, on Internet-"},
    "LA": {message: "Laos"},
    "PH": {message: "Filippiinit"},
    "NI": {message: "Nicaragua"},
    "GU": {message: "Guam"},
    "TF": {message: "Ranskan ulkopuoliset eteläiset alueet"},
    "KZ": {message: "Kazakstan"},
    "SJ": {message: "Huippuvuoret ja Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominica"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritania"},
    "changing...": {message: "muuttuvat ..."},
    "GS": {message: "Etelä-Georgia ja Eteläiset Sandwichsaaret"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Hyvin vanha versio Chrome, <a> päivitys </a> Chrome käyttää Hola"},
    "ME": {message: "Montenegro"},
    "AX": {message: "Ahvenanmaa"},
    "VG": {message: "Brittiläiset Neitsytsaaret"},
    "VN": {message: "Vietnam"},
    "DZ": {message: "Algeria"},
    "YE": {message: "Jemen"},
    "CI": {message: "Norsunluurannikko"},
    "GE": {message: "Georgia"},
    "CX": {message: "Joulusaari"},
    "LB": {message: "Libanon"},
    "FK": {message: "Falklandinsaaret"},
    "DE": {message: "Saksa"},
    "even more...": {message: "vieläkin ..."},
    "MV": {message: "Malediivit"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrain"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Romania"},
    "WF": {message: "Wallis ja Futuna"},
    "AR": {message: "Argentiina"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "Intia"},
    "Unblocker site list": {message: "Unblocker sivuston lista"},
    "FO": {message: "Färsaaret"},
    "AW": {message: "Aruba"},
    "CS": {message: "Serbia ja Montenegro"},
    "BR": {message: "Brasilia"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monaco"},
    "Translate to your language": {message: "Käännä kieli"},
    "SB": {message: "Salomonsaaret"},
    "PS": {message: "Palestiina"},
    "NZ": {message: "Uusi-Seelanti"},
    "UG": {message: "Uganda"},
    "GB": {message: "Britannia"},
    "HT": {message: "Haiti"},
    "GF": {message: "Ranskan Guayana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Vanha versio Firefox. Paina <a> tästä </a> päivittää."},
    "ZZ": {message: "tuntematon tai virheellinen alue"},
    "KM": {message: "Komorit"},
    "KW": {message: "Kuwait"},
    "MQ": {message: "Martinique"},
    "TC": {message: "Turks- ja Caicossaaret"},
    "ES": {message: "Espanja"},
    "MZ": {message: "Mosambik"},
    "BO": {message: "Bolivia"},
    "AL": {message: "Albania"},
    "MD": {message: "Moldova"},
    "TR": {message: "Turkki"},
    "GN": {message: "Guinea"},
    "CO": {message: "Kolumbia"},
    "SI": {message: "Slovenia"},
    "Settings": {message: "Asetukset"},
    "AQ": {message: "Antarktis"},
    "JO": {message: "Jordania"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiopia"},
    "IS": {message: "Islanti"},
    "Reload Hola": {message: "Reload Hola"},
    "back to": {message: "Takaisin"},
    "BG": {message: "Bulgaria"},
    "MH": {message: "Marshallinsaaret"},
    "BS": {message: "Bahama"},
    "TL": {message: "Itä-Timor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Kypros"},
    "IM": {message: "Mansaari"},
    "IE": {message: "Irlanti"},
    "Get help from engineer over skype:": {message: "Saat apua insinööri yli skype:"},
    "TW": {message: "Taiwan"},
    "KP": {message: "Pohjois-Korea"},
    "PF": {message: "Ranskan Polynesia"},
    "app_name": {message: "Hola Better Internet"},
    "Update": {message: "Päivittää"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "Unblocker is disabled": {message: "Unblocker on estetty"},
    "GQ": {message: "Päiväntasaajan Guinea"},
    "PK": {message: "Pakistan"},
    "Number of users that pressed not working": {message: "Käyttäjien määrä, jotka painetaan ei toimi"},
    "NF": {message: "Norfolkinsaari"},
    "TD": {message: "Tšad"},
    "SO": {message: "Somalia"},
    "BD": {message: "Bangladesh"},
    "HM": {message: "Heard- ja McDonaldinsaaret"},

};
return E; });