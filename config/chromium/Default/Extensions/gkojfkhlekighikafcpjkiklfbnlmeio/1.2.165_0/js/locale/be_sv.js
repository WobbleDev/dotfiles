'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibouti"},
    "JM": {message: "Jamaica"},
    "AT": {message: "Österrike"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Vill du ha Hola på andra enheter? (Xbox, PS, Apple TV, iPhone...). Klicka här"},
    "SZ": {message: "Swaziland"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Zambia"},
    "app_desc": {message: "Få access till HELA Internet! Gå till blockerad sajt -> klicka på Hola ikonen -> Ändra landsflaggan -> NJUT!"},
    "Improve translation": {message: "Förbättra översättning"},
    "more...": {message: "mer..."},
    "PR": {message: "Puerto Rico"},
    "SH": {message: "S:t Helena"},
    "There seems to be an error": {message: "Ett fel har uppkommit"},
    "MA": {message: "Marocko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Nordmarianerna"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Få tillgång till valfri sajt oberoende regionsspärr, gratis"},
    "Try to <span>reload</span>": {message: "Försök att <span>ladda om</span>"},
    "UZ": {message: "Uzbekistan"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Liberia"},
    "TN": {message: "Tunisien"},
    "EE": {message: "Estland"},
    "CK": {message: "Cooköarna"},
    "BY": {message: "Vitryssland"},
    "KR": {message: "Sydkorea"},
    "NO": {message: "Norge"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armenien"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagaskar"},
    "ON": {message: "PÅ"},
    "BT": {message: "Bhutan"},
    "CF": {message: "Centralafrikanska republiken"},
    "AE": {message: "Förenade Arabemiraten"},
    "BA": {message: "Bosnien och Hercegovina"},
    "TH": {message: "Thailand"},
    "Author:": {message: "Ägare:"},
    "CC": {message: "Kokosöarna"},
    "NC": {message: "Nya Kaledonien"},
    "TO": {message: "Tonga"},
    "SE": {message: "Sverige"},
    "AZ": {message: "Azerbajdzjan"},
    "AF": {message: "Afghanistan"},
    "NG": {message: "Nigeria"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Sätt på för att starta"},
    "OM": {message: "Oman"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonesien"},
    "FM": {message: "Mikronesien"},
    "(some Hola features are not available on your version)": {message: "(vissa funktioner är inte tillgängliga i din version)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Lettland"},
    "RU": {message: "Ryssland"},
    "FI": {message: "Finland"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Skaffa Hola Plus för att slippa bli reklam och att bli avbruten."},
    "LU": {message: "Luxemburg"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Amerikanska Jungfruöarna"},
    "SN": {message: "Senegal"},
    "MX": {message: "Mexiko"},
    "IL": {message: "Israel"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Sajtägare:"},
    "HU": {message: "Ungern"},
    "DO": {message: "Dominikanska republiken"},
    "OFF": {message: "AV"},
    "KH": {message: "Kambodja"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola fungerar inte riktigt då ett annat program kontrollerar dina proxyinställningar. Vad god och avsluta alla program som du tror kan kontrollera dina proxyinställningar under <a>tillägg</a> så som ad-blockers, andra VPN-program osv."},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "DK": {message: "Danmark"},
    "PA": {message: "Panama"},
    "QA": {message: "Qatar"},
    "CV": {message: "Kap Verde"},
    "Reload": {message: "Laddar om"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Antalet som använder detta val"},
    "MO": {message: "Macao (S.A.R. Kina)"},
    "MF": {message: "S:t Martin"},
    "HR": {message: "Kroatien"},
    "CZ": {message: "Tjeckien"},
    "BL": {message: "S:t Barthélemy"},
    "ST": {message: "São Tomé och Príncipe"},
    "AU": {message: "Australien"},
    "IR": {message: "Iran"},
    "CG": {message: "Kongo-Brazzaville"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Makedonien"},
    "GR": {message: "Grekland"},
    "AG": {message: "Antigua och Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Nederländska Antillerna"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Västsahara"},
    "KN": {message: "S:t Kitts och Nevis"},
    "SC": {message: "Seychellerna"},
    "NL": {message: "Nederländerna"},
    "MS": {message: "Montserrat"},
    "EC": {message: "Ecuador"},
    "HK": {message: "Hongkong (S.A.R. Kina)"},
    "MY": {message: "Malaysia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Vatikanstaten"},
    "IO": {message: "Brittiska Indiska oceanöarna"},
    "SD": {message: "Sudan"},
    "RS": {message: "Serbien"},
    "CN": {message: "Kina"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Mauritius"},
    "CH": {message: "Schweiz"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kirgizistan"},
    "NU": {message: "Niue"},
    "US": {message: "USA"},
    "PE": {message: "Peru"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fiji"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Irak"},
    "AS": {message: "Amerikanska Samoa"},
    "TZ": {message: "Tanzania"},
    "LY": {message: "Libyen"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Bouvetön"},
    "LT": {message: "Litauen"},
    "SG": {message: "Singapore"},
    "PM": {message: "S:t Pierre och Miquelon"},
    "Initializing...": {message: "Initierar..."},
    "TT": {message: "Trinidad och Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola fungerar inte bra i Windows 8-mode. Vänligen skifta till skrivbords-mode. Klicka <a>här</a> för instruktioner"},
    "SY": {message: "Syrien"},
    "SK": {message: "Slovakien"},
    "GL": {message: "Grönland"},
    "PG": {message: "Papua Nya Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Kongo-Kinshasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "S:t Vincent och Grenadinerna"},
    "JP": {message: "Japan"},
    "NA": {message: "Namibia"},
    "TJ": {message: "Tadzjikistan"},
    "LC": {message: "S:t Lucia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongoliet"},
    "IT": {message: "Italien"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Sätt på"},
    "Loading": {message: "Laddar"},
    "EG": {message: "Egypten"},
    "FR": {message: "Frankrike"},
    "start": {message: "start"},
    "RW": {message: "Rwanda"},
    "BE": {message: "Belgien"},
    "UM": {message: "USA:s yttre öar"},
    "Accelerator": {message: "Accelerator"},
    "LS": {message: "Lesotho"},
    "SA": {message: "Saudiarabien"},
    "ZA": {message: "Sydafrika"},
    "PT": {message: "Portugal"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Startar..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Denna gratisversion av Hola behöver bli omladdad var fjärde timme och är reklambaserad."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Polen"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkmenistan"},
    "KY": {message: "Caymanöarna"},
    "Verify you have Internet": {message: "Kontrollera att du är uppkoppplad mot Internet"},
    "LA": {message: "Laos"},
    "PH": {message: "Filippinerna"},
    "NI": {message: "Nicaragua"},
    "TF": {message: "Franska Sydterritorierna"},
    "GU": {message: "Guam"},
    "KZ": {message: "Kazakstan"},
    "SJ": {message: "Svalbard och Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominica"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauretanien"},
    "changing...": {message: "ändrar..."},
    "GS": {message: "Sydgeorgien och Södra Sandwichöarna"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Väldigt gammal version av Chrome, <a>uppdatera</a> Chrome för att använda Hola"},
    "ME": {message: "Montenegro"},
    "AX": {message: "Åland"},
    "VG": {message: "Brittiska Jungfruöarna"},
    "VN": {message: "Vietnam"},
    "CI": {message: "Elfenbenskusten"},
    "DZ": {message: "Algeriet"},
    "YE": {message: "Jemen"},
    "GE": {message: "Georgien"},
    "CX": {message: "Julön"},
    "LB": {message: "Libanon"},
    "FK": {message: "Falklandsöarna"},
    "DE": {message: "Tyskland"},
    "even more...": {message: "ännu fler..."},
    "MV": {message: "Maldiverna"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrain"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Rumänien"},
    "WF": {message: "Wallis- och Futunaöarna"},
    "AR": {message: "Argentina"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "Indien"},
    "Unblocker site list": {message: "Unblocker sajtlista"},
    "FO": {message: "Färöarna"},
    "AW": {message: "Aruba"},
    "CS": {message: "Serbien och Montenegro"},
    "BR": {message: "Brasilien"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monaco"},
    "Translate to your language": {message: "Översätt till ditt språk"},
    "SB": {message: "Salomonöarna"},
    "NZ": {message: "Nya Zeeland"},
    "PS": {message: "Palestinska territoriet"},
    "UG": {message: "Uganda"},
    "GB": {message: "Storbritannien"},
    "HT": {message: "Haiti"},
    "GF": {message: "Franska Guyana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Gammal version av Firefox. Klicka <a>här</a> för att uppgradera."},
    "ZZ": {message: "okänd eller ogiltig regionkod"},
    "KM": {message: "Komorerna"},
    "KW": {message: "Kuwait"},
    "MQ": {message: "Martinique"},
    "TC": {message: "Turks- och Caicosöarna"},
    "MZ": {message: "Moçambique"},
    "ES": {message: "Spanien"},
    "BO": {message: "Bolivia"},
    "AL": {message: "Albanien"},
    "MD": {message: "Moldavien"},
    "TR": {message: "Turkiet"},
    "GN": {message: "Guinea"},
    "CO": {message: "Colombia"},
    "SI": {message: "Slovenien"},
    "Settings": {message: "Inställningar"},
    "AQ": {message: "Antarktis"},
    "JO": {message: "Jordanien"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiopien"},
    "IS": {message: "Island"},
    "Reload Hola": {message: "Ladda om Hola"},
    "back to": {message: "tillbaka till"},
    "BG": {message: "Bulgarien"},
    "MH": {message: "Marshallöarna"},
    "BS": {message: "Bahamas"},
    "TL": {message: "Östtimor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Cypern"},
    "IM": {message: "Isle of Man"},
    "IE": {message: "Irland"},
    "Get help from engineer over skype:": {message: "Få hjälp av en kunnig genom Skype:"},
    "TW": {message: "Taiwan"},
    "KP": {message: "Nordkorea"},
    "PF": {message: "Franska Polynesien"},
    "app_name": {message: "Hola Bättre Internet"},
    "Update": {message: "Uppdaterar"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "$1 blocked?": {message: "$1 blockerad?"},
    "Unblocker is disabled": {message: "Unblocker är avstängd"},
    "PK": {message: "Pakistan"},
    "GQ": {message: "Ekvatorialguinea"},
    "$1 unblocked": {message: "$1 upplåst"},
    "Number of users that pressed not working": {message: "Antalet som klickat 'Fungerar ej'"},
    "NF": {message: "Norfolkön"},
    "TD": {message: "Tchad"},
    "SO": {message: "Somalia"},
    "BD": {message: "Bangladesh"},
    "HM": {message: "Heard- och McDonaldöarna"},

};
return E; });