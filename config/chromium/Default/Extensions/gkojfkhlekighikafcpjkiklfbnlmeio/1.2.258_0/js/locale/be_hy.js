'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Ջիբուտի"},
    "JM": {message: "Ջամայկա"},
    "PG": {message: "Պապուա Նոր Գվինեա"},
    "AT": {message: "Ավստրիա"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Ուզում Hola է այլ սարքերի. (Xbox, PS, Apple TV, iPhone ...). Սեղմեք այստեղ"},
    "KI": {message: "Կիրիբատի"},
    "SZ": {message: "Սվազիլենդ"},
    "BN": {message: "Բրունեյ"},
    "ZM": {message: "Զամբիա"},
    "app_desc": {message: "Մուտք ողջ Ինտերնետում: Գնալ արգելափակված տեղում -> սեղմեք Hola խումբ -> փոփոխությունը երկիր դրոշ -> Enjoy!"},
    "BW": {message: "Բոտսվանա"},
    "AO": {message: "Անգոլա"},
    "Improve translation": {message: "Բարելավել թարգմանությունը"},
    "ZW": {message: "Զիմբաբվե"},
    "VC": {message: "Սենտ Վիսենտ-Գրենադիններ"},
    "more...": {message: "ավելին ..."},
    "JP": {message: "Ճապոնիա"},
    "NA": {message: "Նամիբիա"},
    "TJ": {message: "Տաճիկստան"},
    "LC": {message: "Սանտա Լուչիա"},
    "There seems to be an error": {message: "Կարծես թե սխալ"},
    "MA": {message: "Մարոկո"},
    "VU": {message: "Վանուատու"},
    "SV": {message: "Սալվադոր"},
    "MT": {message: "Մալթա"},
    "MN": {message: "Մոնղոլիա"},
    "IT": {message: "Իտալիա"},
    "WS": {message: "Սամոա"},
    "Unblocker": {message: "Unblocker"},
    "Enable": {message: "Միացնել"},
    "Access any site from any country, free": {message: "Մուտք գործել ցանկացած կայքը ցանկացած երկրում, ազատ"},
    "Loading": {message: "Բեռնում"},
    "Try to <span>reload</span>": {message: "Փորձեք <span> վերաբեռնել </span>"},
    "FR": {message: "Ֆրանսիա"},
    "EG": {message: "Եգիպտոս"},
    "PW": {message: "Պալաու"},
    "UZ": {message: "Ուզբեկստան"},
    "start": {message: "սկիզբ"},
    "LR": {message: "Լիբերիա"},
    "RW": {message: "Ռուանդա"},
    "BE": {message: "Բելգիա"},
    "TN": {message: "Թունիս"},
    "EE": {message: "Էստոնիա"},
    "BY": {message: "Բելոռուս"},
    "Accelerator": {message: "Արագացնող"},
    "SA": {message: "Սաուդիան Արաբիա"},
    "NO": {message: "Նորվեգիա"},
    "KR": {message: "Հարավային Կորեա"},
    "LS": {message: "Լեսոտո"},
    "ZA": {message: "Հարավային Աֆրիկա"},
    "PT": {message: "Պորտուգալիա"},
    "BF": {message: "Բուրկինա Ֆասո"},
    "CA": {message: "Կանադա"},
    "AM": {message: "Հայաստանի Հանրապետութիւն"},
    "Starting...": {message: "Սկսած ..."},
    "CM": {message: "Կամերուն"},
    "SR": {message: "Սուրինամ"},
    "MG": {message: "Մադագասկար"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Ազատ տարբերակը Hola պետք է կրկին միացված յուրաքանչյուր 4 ժամ, եւ հովանավորվում է գովազդի."},
    "ON": {message: "ON"},
    "NP": {message: "Նեպալ"},
    "Hola": {message: "Hola"},
    "BT": {message: "Բուտան"},
    "PL": {message: "Լեհաստան"},
    "CF": {message: "Կենտրոնական Աֆրիկյան Հանրապետություն"},
    "TM": {message: "Թուրքմենստան"},
    "GA": {message: "Գաբոն"},
    "AE": {message: "Միացյալ Արաբական Էմիրաթներ"},
    "BA": {message: "Բոսնիա-Հերցեգովինա"},
    "TH": {message: "Թաիլանդ"},
    "Author:": {message: "Հեղինակ:"},
    "Verify you have Internet": {message: "Ստուգել ունեք ինտերնետ"},
    "LA": {message: "Լաոս"},
    "PH": {message: "Ֆիլիպիններ"},
    "NI": {message: "Նիկարագուա"},
    "KZ": {message: "Ղազախստան"},
    "MM": {message: "Մյանմա"},
    "NR": {message: "Նաուրու"},
    "DM": {message: "Դոմինիկա"},
    "NE": {message: "Նիգեր"},
    "MR": {message: "Մավրիտանիա"},
    "TO": {message: "Տոնգա"},
    "AD": {message: "Անդորա"},
    "SE": {message: "Շվեդիա"},
    "changing...": {message: "փոխվում է ..."},
    "AZ": {message: "Ադրբեջան"},
    "AF": {message: "Աֆղանստան"},
    "NG": {message: "Նիգերիա"},
    "KE": {message: "Քենիա"},
    "BJ": {message: "Բենին"},
    "Turn on to get started": {message: "Միացնել սկսել"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Շատ հին տարբերակ քրոմ, <a> թարմացման </a> Chrome օգտագործել Hola"},
    "OM": {message: "Օման"},
    "VN": {message: "Վիետնամ"},
    "CI": {message: "Փղոսկրի Ափ"},
    "DZ": {message: "Ալժիր"},
    "YE": {message: "Եմեն"},
    "LK": {message: "Շրի Լանկա"},
    "ID": {message: "Ինդոնեզիա"},
    "FM": {message: "Միկրոնեզիա"},
    "(some Hola features are not available on your version)": {message: "(Որոշ Hola հնարավորություններ մատչելի են ոչ ձեր տարբերակը)"},
    "GE": {message: "Վրաստան"},
    "GM": {message: "Գամբիա"},
    "LV": {message: "Լատվիա"},
    "RU": {message: "Ռուսաստան"},
    "LB": {message: "Լիբանան"},
    "FI": {message: "Ֆինլանդիա"},
    "DE": {message: "Գերմանիա"},
    "MV": {message: "Մալդիվներ"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Ստացեք Hola Plus է ՄԱԿ - ի ընդհատվեց, ad-անվճար ծառայություն."},
    "even more...": {message: "ավելի ..."},
    "LU": {message: "Լյուքսեմբուրգ"},
    "VE": {message: "Վենեսուելա"},
    "BH": {message: "Բահրեյն"},
    "RO": {message: "Ռումինիա"},
    "TV": {message: "Տուվալու"},
    "IN": {message: "Հնդկաստան"},
    "AR": {message: "Արգենտինա"},
    "CS": {message: "Սերբիա և Մոնտենեգրո"},
    "SN": {message: "Սենեգալ"},
    "MX": {message: "Մեքսիկա"},
    "Unblocker site list": {message: "Unblocker site ցուցակ"},
    "MC": {message: "Մոնակո"},
    "HN": {message: "Հոնդուրաս"},
    "BR": {message: "Բրազիլիա"},
    "IL": {message: "Իսրայել"},
    "SB": {message: "Սոլոմոնյան կղզիներ"},
    "Author site:": {message: "Հեղինակ site:"},
    "Translate to your language": {message: "Թարգմանել ձեր լեզուն"},
    "NZ": {message: "Նոր Զելանդիա"},
    "HU": {message: "Հունգարիա"},
    "DO": {message: "Դոմինիկյան Հանրապետություն"},
    "UG": {message: "Ուգանդա"},
    "OFF": {message: "OFF"},
    "KH": {message: "Կամբոջա"},
    "GB": {message: "Մեծ Բրիտանիա"},
    "TG": {message: "Տոգո"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola կարող աշխատի, որովհետեւ այլ ընդլայնում է վերահսկել ձեր վստահված գործառույթները. Խնդրում ենք անջատել այլ ընդարձակման, որ կարծում եք, որ կարող է վերահսկել ձեր վստահված պարամետրերը <a> ընդարձակման </a> (օրինակ, ad-blockers, այլ VPN ծառայություններ, եւ այլն)."},
    "BB": {message: "Բարբադոս"},
    "Remove ads": {message: "Հեռացնել ազդերը"},
    "HT": {message: "Հաիթի"},
    "DK": {message: "Դանիա"},
    "PA": {message: "Պանամա"},
    "QA": {message: "Կատար"},
    "CV": {message: "Կաբո-Վերդե"},
    "Reload": {message: "Վերաբեռնել"},
    "GD": {message: "Գրենադա"},
    "Number of users that use this option": {message: "Միավորների քան - օգտագործողները, որոնք օգտագործում են այս տարբերակը"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Հին տարբերակը Firefox. Press <a> այստեղ </a> բարելավել."},
    "KM": {message: "Կոմորոս"},
    "HR": {message: "Հորվաթիա"},
    "KW": {message: "Քուվեյթ"},
    "CZ": {message: "Չեխիայի Հանրապետություն"},
    "MZ": {message: "Մոզամբիկ"},
    "ES": {message: "Իսպանիա"},
    "BO": {message: "Բոլիվիա"},
    "AU": {message: "Ավստրալիա"},
    "ST": {message: "Սան-Թոմե-Փրինսիպի"},
    "AL": {message: "Ալբանիա"},
    "IR": {message: "Իրան"},
    "CG": {message: "Կոնգո"},
    "TR": {message: "Թուրքիա"},
    "MD": {message: "Մոլդովա"},
    "BI": {message: "Բուրունդի"},
    "GN": {message: "Գվինեա"},
    "GW": {message: "Գվինեա-Բիսաու"},
    "MK": {message: "Մակեդոնիա"},
    "GR": {message: "Հունաստան"},
    "AG": {message: "Անտիգուա-Բարբուդա"},
    "SI": {message: "Սլովենիա"},
    "CO": {message: "Կոլումբիա"},
    "Settings": {message: "Կառավարում"},
    "JO": {message: "Հորդանան"},
    "SM": {message: "Սան Մարինո"},
    "UA": {message: "Ուկրաինա"},
    "CL": {message: "Չիլի"},
    "EH": {message: "Արեվմտյան Սահարա"},
    "CU": {message: "Կուբա"},
    "KN": {message: "Սենտ Կիտս-Նեվիս"},
    "ML": {message: "Մալի"},
    "SC": {message: "Սեյշելներ"},
    "ET": {message: "Եթովպիա"},
    "IS": {message: "Իսլանդիա"},
    "NL": {message: "Նիդերլանդեր"},
    "Reload Hola": {message: "Վերբեռնել Hola"},
    "EC": {message: "Էկվադոր"},
    "MY": {message: "Մալայզիա"},
    "CR": {message: "Կոստա-Ռիկա"},
    "VA": {message: "Վատիկան"},
    "back to": {message: "Վերադառնալ"},
    "SD": {message: "Սուդան"},
    "CN": {message: "Չինաստան"},
    "BG": {message: "Բուլղարիա"},
    "MH": {message: "Մարշալյան կղզիներ"},
    "UY": {message: "Ուրուգվայ"},
    "PY": {message: "Պարագվայ"},
    "BS": {message: "Բահամներ"},
    "MU": {message: "Մավրիտոս"},
    "CH": {message: "Շվեյցարիա"},
    "LI": {message: "Լիխտենշտեյն"},
    "GH": {message: "Գանա"},
    "KG": {message: "Կիրգիզստան"},
    "PE": {message: "Պերու"},
    "US": {message: "Ամէրիկայի Միացյալ Նահանգնէր"},
    "SL": {message: "Սյերա-Լեոնե"},
    "BZ": {message: "Բելիզ"},
    "CY": {message: "Կիպրոս"},
    "FJ": {message: "Ֆիջի"},
    "IE": {message: "Իռլանդիա"},
    "Get help from engineer over skype:": {message: "Ստացեք օգնություն ինժեներ է Skype-ի միջոցով:"},
    "TW": {message: "Թայվան"},
    "KP": {message: "Հյուսիսային Կորեա"},
    "ER": {message: "Էրիտրեա"},
    "app_name": {message: "Hola Better ինտերնետ"},
    "IQ": {message: "Իրաք"},
    "Update": {message: "Թարմացնել"},
    "TZ": {message: "Տանզանիա"},
    "MW": {message: "Մալավի"},
    "LY": {message: "Լիբիա"},
    "GT": {message: "Գվատեմալա"},
    "GY": {message: "Գայանա"},
    "Unblocker is disabled": {message: "Unblocker անջատված"},
    "PK": {message: "Պակիստան"},
    "GQ": {message: "Հասարակածային Գվինեա"},
    "LT": {message: "Լիտվա"},
    "Number of users that pressed not working": {message: "Միավորների քան - օգտագործողները, որոնք սեղմված չի աշխատում"},
    "SG": {message: "Սինգապուր"},
    "Initializing...": {message: "Նախապատրաստվում է ..."},
    "TT": {message: "Տրինիդադ-Տոբագո"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola լավ չի աշխատում, Windows 8 - ռեժիմում. Խնդրում ենք անցնել սեղանադիր ռեժիմում. Սեղմեք <a> այստեղ </a> հրահանգների"},
    "SO": {message: "Սոմալի"},
    "TD": {message: "Չադ"},
    "SK": {message: "Սլովակիա"},
    "SY": {message: "Սիրիա"},
    "BD": {message: "Բանգլադեշ"},

};
return E; });