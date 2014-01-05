'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Xhibuti"},
    "JM": {message: "Xhamajkë"},
    "PG": {message: "Papua Guineja e Re"},
    "AT": {message: "Austri"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Dëshironi Hola në pajisje të tjera? (Xbox, PS, Apple TV, iPhone ...). Kliko këtu"},
    "KI": {message: "Qiribati"},
    "SZ": {message: "Svazilandë"},
    "BN": {message: "Brunej"},
    "ZM": {message: "Zambi"},
    "app_desc": {message: "Qasja lekë të internetit! Shkoni në faqen bllokuar -> click Hola icon -> vendi ndryshim flamuri -> ENJOY!"},
    "BW": {message: "Botsvana"},
    "AO": {message: "Angolë"},
    "Improve translation": {message: "Përmirësimi i përkthimit"},
    "ZW": {message: "Zimbabve"},
    "VC": {message: "Saint Vincent e Grenadinet"},
    "more...": {message: "më shumë ..."},
    "JP": {message: "Japoni"},
    "NA": {message: "Namibi"},
    "TJ": {message: "Taxhikistan"},
    "There seems to be an error": {message: "Nuk duket të jetë një gabim"},
    "MA": {message: "Maroko"},
    "MT": {message: "Maltë"},
    "MN": {message: "Mongoli"},
    "IT": {message: "Itali"},
    "Unblocker": {message: "Unblocker"},
    "Enable": {message: "Mundësoj"},
    "Access any site from any country, free": {message: "Hyni në ndonjë vend nga çdo vend, pa pagesë"},
    "Loading": {message: "Ngarkim"},
    "Try to <span>reload</span>": {message: "Mundohuni të <span> ringarkoni </span>"},
    "FR": {message: "Francë"},
    "EG": {message: "Egjipt"},
    "start": {message: "filloj"},
    "LR": {message: "Liberi"},
    "RW": {message: "Ruanda"},
    "BE": {message: "Belgjikë"},
    "TN": {message: "Tunisi"},
    "EE": {message: "Estoni"},
    "BY": {message: "Bjellorusi"},
    "Accelerator": {message: "Akselerator"},
    "SA": {message: "Arabia Saudite"},
    "KR": {message: "Koreja e Jugut"},
    "LS": {message: "Lesoto"},
    "NO": {message: "Norvegji"},
    "ZA": {message: "Afrika e Jugut"},
    "PT": {message: "Portugali"},
    "CA": {message: "Kanada"},
    "AM": {message: "Armeni"},
    "Starting...": {message: "Duke filluar nga ..."},
    "CM": {message: "Kamerun"},
    "MG": {message: "Madagaskar"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Versioni i lirë për Hola duhet të ri-aktivizuar çdo 4 orë dhe është sponsorizuar nga reklama."},
    "ON": {message: "ON"},
    "Hola": {message: "Hola"},
    "BT": {message: "Butan"},
    "PL": {message: "Poloni"},
    "CF": {message: "Republika Qendrore e Afrikës"},
    "GA": {message: "Gjabon"},
    "BA": {message: "Bosnja dhe Hercegovina"},
    "AE": {message: "Emiratet Arabe te Bashkuara"},
    "TH": {message: "Tajlandë"},
    "Author:": {message: "Author artikullit:"},
    "Verify you have Internet": {message: "Verifikuar që ju keni internet"},
    "PH": {message: "Filipine"},
    "NI": {message: "Nikaragua"},
    "KZ": {message: "Kazakistan"},
    "DM": {message: "Dominikë"},
    "AD": {message: "Andorrë"},
    "MR": {message: "Mauritani"},
    "TO": {message: "Tonga"},
    "SE": {message: "Suedi"},
    "changing...": {message: "ndryshimin e ..."},
    "AZ": {message: "Azerbajxhan"},
    "AF": {message: "Afganistan"},
    "NG": {message: "Nigeri"},
    "KE": {message: "Kenia"},
    "Turn on to get started": {message: "Kthejeni në për të marrë filluar"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Version shumë i vjetër i Chrome, <a> Azhurimi </a> Chrome për të përdorur Hola"},
    "AX": {message: "Ishujt Aland"},
    "YE": {message: "Jemen"},
    "CI": {message: "Bregu i Fildishtë"},
    "DZ": {message: "Algjeri"},
    "ID": {message: "Indonezi"},
    "FM": {message: "Mikronezi"},
    "(some Hola features are not available on your version)": {message: "(Disa karakteristika Hola nuk janë në dispozicion në versionin tuaj)"},
    "GE": {message: "Gjeorgji"},
    "GM": {message: "Gambi"},
    "LV": {message: "Letoni"},
    "RU": {message: "Rusi"},
    "LB": {message: "Liban"},
    "FI": {message: "Finlandë"},
    "DE": {message: "Gjermani"},
    "MV": {message: "Maldivit"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Merrni Hola Plus për un-ndërprerë, shërbim ad-free."},
    "even more...": {message: "edhe më shumë ..."},
    "LU": {message: "Luksemburg"},
    "VE": {message: "Venezuelë"},
    "BH": {message: "Bahrein"},
    "RO": {message: "Rumani"},
    "AR": {message: "Argjentinë"},
    "IN": {message: "Indi"},
    "CS": {message: "Serbië en Montenegro"},
    "MX": {message: "Meksikë"},
    "Unblocker site list": {message: "Site Unblocker lista"},
    "MC": {message: "Monako"},
    "BR": {message: "Brazili"},
    "IL": {message: "Izrael"},
    "SB": {message: "Ishujt Solomon"},
    "Author site:": {message: "Site Author artikullit:"},
    "Translate to your language": {message: "Përkthe në gjuhën tuaj"},
    "NZ": {message: "Zelanda e Re"},
    "DO": {message: "Republika Dominikanë"},
    "HU": {message: "Hungari"},
    "OFF": {message: "OFF"},
    "KH": {message: "Kamboxhi"},
    "GB": {message: "Mbretëria e Bashkuar"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola nuk mund të punojnë siç duhet, sepse një tjetër zgjerim është kontrolluar parametrat tuaj prokurë. Ju lutemi disable zgjerime të tjera që ju mendoni se mund të kontrollojnë parametrat tuaj prokurë në <a> zgjerimet </a> (të tilla si ad-blockers, shërbime të tjera VPN, etj.)"},
    "Remove ads": {message: "Hiq reklama"},
    "DK": {message: "Danimarkë"},
    "QA": {message: "Katar"},
    "CV": {message: "Kap Verde"},
    "Reload": {message: "Ringarkoj"},
    "Number of users that use this option": {message: "Numri i përdoruesve që përdorin këtë opsion"},
    "ZZ": {message: "Rajon i panjohur ose i pavlefshëm"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Versioni i vjetër i Firefox. Press <a> këtu </a> për të përmirësuar."},
    "KM": {message: "Komore"},
    "KW": {message: "Kuvajt"},
    "HR": {message: "Kroaci"},
    "CZ": {message: "Republika e Çekisë"},
    "MZ": {message: "Mozambik"},
    "ES": {message: "Spanjë"},
    "BO": {message: "Bolivi"},
    "ST": {message: "Sao Tome e Prinsipe"},
    "AU": {message: "Australi"},
    "AL": {message: "Shqipëria"},
    "CG": {message: "Kongo"},
    "MD": {message: "Moldavi"},
    "TR": {message: "Turqi"},
    "GW": {message: "Guine Bisau"},
    "GN": {message: "Guine"},
    "MK": {message: "Maqedoni"},
    "GR": {message: "Greqi"},
    "AG": {message: "Antigua e Barbuda"},
    "CO": {message: "Kolumbi"},
    "SI": {message: "Slloveni"},
    "Settings": {message: "Cilësimet"},
    "JO": {message: "Jordani"},
    "UA": {message: "Ukrainë"},
    "EH": {message: "Saharaja Perëndimore"},
    "CU": {message: "Kubë"},
    "CL": {message: "Kili"},
    "KN": {message: "Saint Kitts e Nevis"},
    "ET": {message: "Etiopi"},
    "SC": {message: "Sishel"},
    "IS": {message: "Islandë"},
    "NL": {message: "Vendet e Ulëta"},
    "Reload Hola": {message: "Rifresko Hola"},
    "EC": {message: "Ekuator"},
    "MY": {message: "Malajzi"},
    "CR": {message: "Kosta Rika"},
    "VA": {message: "Vatikan"},
    "back to": {message: "mbështetur tek"},
    "CN": {message: "Kinë"},
    "BG": {message: "Bullgari"},
    "MH": {message: "Ishujt Marshall"},
    "UY": {message: "Uruguaj"},
    "PY": {message: "Paraguaj"},
    "CH": {message: "Zvicër"},
    "LI": {message: "Lihtënshtajn"},
    "GH": {message: "Ganë"},
    "KG": {message: "Kirgistan"},
    "US": {message: "Shtetet e Bashkuara të Amerikës"},
    "SL": {message: "Siera Leone"},
    "CY": {message: "Qipro"},
    "FJ": {message: "Fixhi"},
    "IE": {message: "Irlandë"},
    "Get help from engineer over skype:": {message: "Merrni ndihmë nga inxhinier mbi skype artikullit:"},
    "TW": {message: "Tajvan"},
    "KP": {message: "Koreja e Veriut"},
    "ER": {message: "Eritre"},
    "app_name": {message: "Hola Interneti më i mirë"},
    "IQ": {message: "Irak"},
    "Update": {message: "Update"},
    "TZ": {message: "Tanzani"},
    "MW": {message: "Malavi"},
    "LY": {message: "Libi"},
    "GT": {message: "Guatemalë"},
    "GY": {message: "Guajana"},
    "Unblocker is disabled": {message: "Unblocker është me aftësi të kufizuara"},
    "$1 blocked?": {message: "$1 bllokuar?"},
    "GQ": {message: "Guineja Ekuatoriale"},
    "$1 unblocked": {message: "$1 zhbllokohet"},
    "LT": {message: "Lituani"},
    "Number of users that pressed not working": {message: "Numri i përdoruesve që nuk presion të punës"},
    "SG": {message: "Singapor"},
    "Initializing...": {message: "Initializing ..."},
    "TT": {message: "Trinidad e Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola nuk punon mirë në Windows 8 regjimin. Ju lutemi të kaloni në mënyrë desktop. <a> Kliko këtu </a> për udhëzime"},
    "TD": {message: "Çad"},
    "SO": {message: "Somali"},
    "SK": {message: "Sllovaki"},
    "SY": {message: "Siri"},

};
return E; });