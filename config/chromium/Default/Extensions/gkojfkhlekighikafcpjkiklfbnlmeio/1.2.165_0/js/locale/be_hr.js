'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Džibuti"},
    "JM": {message: "Jamajka"},
    "AT": {message: "Austrija"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Želite Hola na drugim uređajima? (Xbox, PS, Apple TV, iPhone ...). Kliknite ovdje"},
    "SZ": {message: "Svazi"},
    "YT": {message: "Majote"},
    "BN": {message: "Brunej"},
    "ZM": {message: "Zambija"},
    "app_desc": {message: "Pristupite SVE Interneta! Idi na blokirane stranice -> kliknite Hola ikonu -> Promijenite zemlju zastava -> UŽIVAJTE!"},
    "Improve translation": {message: "Poboljšati prijevod"},
    "more...": {message: "više ..."},
    "PR": {message: "Portoriko"},
    "SH": {message: "Sveta Helena"},
    "There seems to be an error": {message: "Čini se da postoji greška"},
    "MA": {message: "Maroko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Sjeverni Marijanski Otoci"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Pristupiti bilo kojem mjestu iz bilo koje zemlje, besplatan"},
    "Try to <span>reload</span>": {message: "Pokušajte <span> reload </span>"},
    "UZ": {message: "Uzbekistan"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Liberija"},
    "TN": {message: "Tunis"},
    "EE": {message: "Estonija"},
    "CK": {message: "Kukovi Otoci"},
    "BY": {message: "Bjelorusija"},
    "NO": {message: "Norveška"},
    "KR": {message: "Južna Koreja"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armenija"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagaskar"},
    "ON": {message: "NA"},
    "BT": {message: "Butan"},
    "CF": {message: "Srednjoafrička Republika"},
    "AE": {message: "Ujedinjeni Arapski Emirati"},
    "BA": {message: "Bosna i Hercegovina"},
    "TH": {message: "Tajland"},
    "Author:": {message: "Autor:"},
    "CC": {message: "Kokosovi Otoci"},
    "NC": {message: "Nova Kaledonija"},
    "TO": {message: "Tonga"},
    "SE": {message: "Švedska"},
    "AZ": {message: "Azerbajdžan"},
    "AF": {message: "Afganistan"},
    "NG": {message: "Nigerija"},
    "KE": {message: "Kenija"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Uključite se početak"},
    "OM": {message: "Oman"},
    "LK": {message: "Šri Lanka"},
    "ID": {message: "Indonezija"},
    "FM": {message: "Mikronezija"},
    "(some Hola features are not available on your version)": {message: "(Neki Hola značajke nisu dostupne na vašem verziji)"},
    "GM": {message: "Gambija"},
    "LV": {message: "Latvija"},
    "RU": {message: "Rusija"},
    "FI": {message: "Finska"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Nabavite Hola Plus UN-prekida, ad-free uslugu."},
    "LU": {message: "Luksemburg"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Američki Djevičanski Otoci"},
    "SN": {message: "Senegal"},
    "MX": {message: "Meksiko"},
    "IL": {message: "Izrael"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Autor stranica:"},
    "HU": {message: "Mađarska"},
    "DO": {message: "Dominikanska Republika"},
    "OFF": {message: "OFF"},
    "KH": {message: "Kambodža"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola ne može ispravno raditi jer još jedan produžetak je kontroliranje svoje proxy postavke. Molimo onemogućiti ostale nastavke za koje mislite da bi mogli kontrolirati svoje proxy postavke u <a> nastavaka </a> (kao što su ad-blokatora, drugim VPN uslugama, itd.)."},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "Remove ads": {message: "Uklonite oglase"},
    "DK": {message: "Danska"},
    "PA": {message: "Panama"},
    "CV": {message: "Zeleni Rt"},
    "QA": {message: "Katar"},
    "Reload": {message: "Osvježi"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Broj korisnika koji koriste ovu mogućnost"},
    "MO": {message: "Makao S.A.R. Kine"},
    "MF": {message: "Sveti Martin"},
    "HR": {message: "Hrvatska"},
    "CZ": {message: "Češka Republika"},
    "BL": {message: "Sveti Bartolomej"},
    "ST": {message: "Sveti Toma i Prinsipe"},
    "AU": {message: "Australija"},
    "IR": {message: "Iran"},
    "CG": {message: "Kongo"},
    "BI": {message: "Burundi"},
    "GW": {message: "Gvineja Bisau"},
    "MK": {message: "Bivša Jugoslavenska Republika Makedonija"},
    "GR": {message: "Grčka"},
    "AG": {message: "Antigua i Barbuda"},
    "AI": {message: "Anguila"},
    "AN": {message: "Nizozemski Antili"},
    "UA": {message: "Ukrajina"},
    "EH": {message: "Zapadna Sahara"},
    "KN": {message: "Sveti Kristofor i Nevis"},
    "SC": {message: "Sejšeli"},
    "NL": {message: "Nizozemska"},
    "MS": {message: "Montserat"},
    "EC": {message: "Ekvador"},
    "HK": {message: "Hong Kong S.A.R. Kine"},
    "MY": {message: "Malezija"},
    "CR": {message: "Kostarika"},
    "VA": {message: "Grad Vatikan"},
    "IO": {message: "Britanski Teritorij Indijskog Oceana"},
    "SD": {message: "Sudan"},
    "RS": {message: "Srbija"},
    "CN": {message: "Kina"},
    "UY": {message: "Urugvaj"},
    "PY": {message: "Paragvaj"},
    "MU": {message: "Mauricijus"},
    "CH": {message: "Švicarska"},
    "LI": {message: "Lihtenštajn"},
    "GH": {message: "Gana"},
    "KG": {message: "Kirgistan"},
    "NU": {message: "Niue"},
    "US": {message: "Sjedinjene Države"},
    "PE": {message: "Peru"},
    "SL": {message: "Sijera Leone"},
    "FJ": {message: "Fidži"},
    "ER": {message: "Eritreja"},
    "IQ": {message: "Irak"},
    "AS": {message: "Američka Samoa"},
    "TZ": {message: "Tanzanija"},
    "LY": {message: "Libijska Arapska Džamahirija"},
    "GT": {message: "Gvatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Otok Bouvet"},
    "LT": {message: "Litva"},
    "PM": {message: "Sveti Petar i Miguel"},
    "SG": {message: "Singapur"},
    "Initializing...": {message: "Pokreće se ..."},
    "TT": {message: "Trinidad i Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ne radi dobro na Windows 8 modu. Molimo prebaciti na desktop modu. Kliknite <a> ovdje </a> za upute"},
    "SK": {message: "Slovačka"},
    "SY": {message: "Sirija"},
    "GL": {message: "Grenland"},
    "PG": {message: "Papua Nova Gvineja"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Demokratska Republika Kongo"},
    "AO": {message: "Angola"},
    "BW": {message: "Bocvana"},
    "ZW": {message: "Zimbabve"},
    "VC": {message: "Sveti Vincent i Grenadini"},
    "JP": {message: "Japan"},
    "NA": {message: "Namibija"},
    "TJ": {message: "Tadžikistan"},
    "LC": {message: "Sveta Lucija"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolija"},
    "IT": {message: "Italija"},
    "RE": {message: "Reunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Omogućiti"},
    "Loading": {message: "Utovar"},
    "EG": {message: "Egipat"},
    "FR": {message: "Francuska"},
    "start": {message: "početak"},
    "RW": {message: "Ruanda"},
    "BE": {message: "Belgija"},
    "UM": {message: "Ujedinjene Države Manjih Pacifičkih Otoka"},
    "Accelerator": {message: "Akcelerator"},
    "LS": {message: "Lesoto"},
    "SA": {message: "Saudijska Arabija"},
    "ZA": {message: "Južnoafrička Republika"},
    "PT": {message: "Portugal"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Počevši ..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Slobodan inačici Hola treba ponovno omogućen svaka 4 sata, a pod pokroviteljstvom oglase."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Poljska"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkmenistan"},
    "KY": {message: "Kajmanski Otoci"},
    "Verify you have Internet": {message: "Provjerite jeste li Internet"},
    "LA": {message: "Laos"},
    "PH": {message: "Filipini"},
    "NI": {message: "Nikaragva"},
    "TF": {message: "Francuski Južni Teritoriji"},
    "GU": {message: "Guam"},
    "KZ": {message: "Kazakstan"},
    "SJ": {message: "Svalbard i Jan Mayen"},
    "MM": {message: "Mijanma"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominika"},
    "NE": {message: "Niger"},
    "AD": {message: "Andora"},
    "MR": {message: "Mauritanija"},
    "changing...": {message: "mijenjaju ..."},
    "GS": {message: "Južna Gruzija i Južni Sendvič Otoci"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Vrlo staru verziju Chrome, <a> ažuriranje </a> Chrome koristiti Hola"},
    "ME": {message: "Crna Gora"},
    "AX": {message: "Alandski otoci"},
    "VG": {message: "Britanski Djevičanski Otoci"},
    "VN": {message: "Vijetnam"},
    "DZ": {message: "Alžir"},
    "YE": {message: "Jemen"},
    "CI": {message: "Obala Bjelokosti"},
    "GE": {message: "Gruzija"},
    "CX": {message: "Božićni Otok"},
    "LB": {message: "Libanon"},
    "FK": {message: "Falklandski Otoci"},
    "DE": {message: "Njemačka"},
    "even more...": {message: "još više ..."},
    "MV": {message: "Maldivi"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrein"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Rumunjska"},
    "WF": {message: "Wallis i Futuna"},
    "AR": {message: "Argentina"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "Indija"},
    "Unblocker site list": {message: "Unblocker Popis stranica"},
    "FO": {message: "Farski Otoci"},
    "AW": {message: "Aruba"},
    "CS": {message: "Srbija i Crna Gora"},
    "BR": {message: "Brazil"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monako"},
    "Translate to your language": {message: "Prijevod na svoj jezik"},
    "SB": {message: "Solomonski Otoci"},
    "NZ": {message: "Novi Zeland"},
    "PS": {message: "Palestinsko Područje"},
    "UG": {message: "Uganda"},
    "GB": {message: "Velika Britanija"},
    "HT": {message: "Haiti"},
    "GF": {message: "Francuska Gvajana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Stara verzija Firefox. Press <a> ovdje </a> nadograditi."},
    "ZZ": {message: "nepoznata ili nevažeća oblast"},
    "KM": {message: "Komori"},
    "KW": {message: "Kuvajt"},
    "MQ": {message: "Martinik"},
    "TC": {message: "Turkski i Kaikos Otoci"},
    "MZ": {message: "Mozambik"},
    "ES": {message: "Španjolska"},
    "BO": {message: "Bolivija"},
    "AL": {message: "Albanija"},
    "MD": {message: "Moldavija"},
    "TR": {message: "Turska"},
    "GN": {message: "Gvineja"},
    "CO": {message: "Kolumbija"},
    "SI": {message: "Slovenija"},
    "Settings": {message: "Postavke"},
    "AQ": {message: "Antarktik"},
    "JO": {message: "Jordan"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuba"},
    "CL": {message: "Čile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiopija"},
    "IS": {message: "Island"},
    "Reload Hola": {message: "Reload Hola"},
    "back to": {message: "natrag na"},
    "BG": {message: "Bugarska"},
    "MH": {message: "Maršalovi Otoci"},
    "BS": {message: "Bahami"},
    "TL": {message: "Istočni Timor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Cipar"},
    "IM": {message: "Otok Man"},
    "IE": {message: "Irska"},
    "Get help from engineer over skype:": {message: "Dobiti pomoć od inženjera preko skype:"},
    "TW": {message: "Tajvan"},
    "KP": {message: "Koreja, Sjeverna"},
    "PF": {message: "Francuska Polinezija"},
    "app_name": {message: "Hola Bolje Internet"},
    "Update": {message: "Ažuriranje"},
    "MW": {message: "Malavi"},
    "GY": {message: "Gvajana"},
    "$1 blocked?": {message: "$1 blokirani?"},
    "Unblocker is disabled": {message: "Unblocker je onemogućen"},
    "PK": {message: "Pakistan"},
    "GQ": {message: "Ekvatorska Gvineja"},
    "$1 unblocked": {message: "$1 deblokiran"},
    "Number of users that pressed not working": {message: "Broj korisnika koji nije pritisnut radnih"},
    "NF": {message: "Otok Norfolk"},
    "TD": {message: "Čad"},
    "SO": {message: "Somalija"},
    "HM": {message: "Otok Heard i Otoci McDonald"},
    "BD": {message: "Bangladeš"},

};
return E; });