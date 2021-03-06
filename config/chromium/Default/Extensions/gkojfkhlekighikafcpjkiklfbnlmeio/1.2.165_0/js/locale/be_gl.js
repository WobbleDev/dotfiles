'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Xibuti"},
    "JM": {message: "Xamaica"},
    "AT": {message: "Austria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Queres Hola noutros dispositivos? (Xbox, PS, Apple TV, iPhone ...). Prema aquí"},
    "SZ": {message: "Suacilandia"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Zambia"},
    "app_desc": {message: "Acceder todos en internet! Ir ao web bloqueado -> prema na icona Hola -> cambio de bandeira do país -> Disfruta!"},
    "Improve translation": {message: "Mellorar a tradución"},
    "more...": {message: "máis ..."},
    "PR": {message: "Porto Rico"},
    "SH": {message: "Santa Helena"},
    "There seems to be an error": {message: "Parece haber un erro"},
    "MA": {message: "Marrocos"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Illas Marianas do norte"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Acceder a calquera sitio desde calquera país, libre"},
    "Try to <span>reload</span>": {message: "Probe <span> recarga </span>"},
    "UZ": {message: "Uzbekistán"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Liberia"},
    "TN": {message: "Tunisia"},
    "EE": {message: "Estonia"},
    "CK": {message: "Illas Cook"},
    "BY": {message: "Bielorrusia"},
    "NO": {message: "Noruega"},
    "KR": {message: "Corea do Sur"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armenia"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagascar"},
    "ON": {message: "ON"},
    "BT": {message: "Bután"},
    "CF": {message: "República Africana Central"},
    "AE": {message: "Emiratos Árabes Unidos"},
    "BA": {message: "Bosnia e Hercegovina"},
    "TH": {message: "Tailandia"},
    "Author:": {message: "Autor:"},
    "CC": {message: "Illas Cocos"},
    "NC": {message: "Nova Caledonia"},
    "TO": {message: "Tonga"},
    "SE": {message: "Suecia"},
    "AZ": {message: "Acerbaixán"},
    "AF": {message: "Afganistán"},
    "NG": {message: "Nixeria"},
    "KE": {message: "Quenia"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Chame para comezar"},
    "OM": {message: "Omán"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonesia"},
    "FM": {message: "Micronesia"},
    "(some Hola features are not available on your version)": {message: "(Algunhas características Hola non están dispoñibles na súa versión)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Letonia"},
    "RU": {message: "Rusia"},
    "FI": {message: "Finlandia"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Obter Hola Plus ininterrompido, o servizo ad-free."},
    "LU": {message: "Luxemburgo"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Illas Virxes Estadounidenses"},
    "SN": {message: "Senegal"},
    "MX": {message: "México"},
    "IL": {message: "Israel"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Autor site:"},
    "DO": {message: "República Dominicana"},
    "HU": {message: "Hungría"},
    "OFF": {message: "OFF"},
    "KH": {message: "Cambodia"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola non pode funcionar correctamente porque outra extensión é controlar as súas configuracións de proxy. Por favor, desactive outras extensións que pensas que pode controlar a configuración do proxy en <a> extensións </a> (como ad bloqueadores, outros servizos de VPN, etc.)"},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "Remove ads": {message: "Elimina os anuncios"},
    "DK": {message: "Dinamarca"},
    "PA": {message: "Panamá"},
    "QA": {message: "Qatar"},
    "CV": {message: "Cabo Verde"},
    "Reload": {message: "Recargar"},
    "GD": {message: "Granada"},
    "Number of users that use this option": {message: "Número de usuarios que usan esta opción"},
    "MO": {message: "Macau RAE de China"},
    "MF": {message: "San Martiño"},
    "HR": {message: "Croacia"},
    "CZ": {message: "República Checa"},
    "BL": {message: "San Bartolomé"},
    "ST": {message: "Santo Tomé e Príncipe"},
    "AU": {message: "Australia"},
    "IR": {message: "Irán"},
    "CG": {message: "Congo"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Macedonia"},
    "GR": {message: "Grecia"},
    "AG": {message: "Antiga e Barbuda"},
    "AI": {message: "Anguila"},
    "AN": {message: "Antillas Holandesas"},
    "UA": {message: "Ucraína"},
    "EH": {message: "Sahara Occidental"},
    "KN": {message: "San Cristovo e Nevis"},
    "SC": {message: "Seixeles"},
    "NL": {message: "Países Baixos"},
    "MS": {message: "Montserrat"},
    "EC": {message: "Ecuador"},
    "HK": {message: "Hong Kong RAE de China"},
    "MY": {message: "Malaisia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Cidade do Vaticano"},
    "IO": {message: "Territorio Británico do Océano Índico"},
    "SD": {message: "Sudán"},
    "RS": {message: "Serbia"},
    "CN": {message: "China"},
    "UY": {message: "Uruguai"},
    "PY": {message: "Paraguai"},
    "MU": {message: "Mauricio"},
    "CH": {message: "Suíza"},
    "LI": {message: "Liechtenstein"},
    "KG": {message: "Quirguicistán"},
    "GH": {message: "Gana"},
    "NU": {message: "Niue"},
    "PE": {message: "Perú"},
    "US": {message: "Estados Unidos de América"},
    "SL": {message: "Serra Leoa"},
    "FJ": {message: "Fixi"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Iraq"},
    "AS": {message: "Samoa Americana"},
    "TZ": {message: "Tanzania"},
    "LY": {message: "Libia"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermudas"},
    "BV": {message: "Illa Bouvet"},
    "LT": {message: "Lituania"},
    "SG": {message: "Singapur"},
    "PM": {message: "San Pedro e Miguelón"},
    "Initializing...": {message: "Inicio ..."},
    "TT": {message: "Trindade e Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola non funciona ben en modo Windows 8. Teña en cambiar a modo escritorio. <a> Prema aquí </a> para obter instruccións"},
    "SY": {message: "Siria"},
    "SK": {message: "Eslovaquia"},
    "GL": {message: "Grenlandia"},
    "PG": {message: "Papúa Nova Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "República Democrática do Congo"},
    "AO": {message: "Angola"},
    "BW": {message: "Botsuana"},
    "ZW": {message: "Cimbabue"},
    "VC": {message: "San Vicente e Granadinas"},
    "JP": {message: "Xapón"},
    "NA": {message: "Namibia"},
    "TJ": {message: "Taxiquistán"},
    "LC": {message: "Santa Lucía"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolia"},
    "IT": {message: "Italia"},
    "RE": {message: "Reunión"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Permitir"},
    "Loading": {message: "Carga"},
    "EG": {message: "Exipto"},
    "FR": {message: "Francia"},
    "start": {message: "comezar"},
    "RW": {message: "Ruanda"},
    "BE": {message: "Bélxica"},
    "UM": {message: "Illas Menores Distantes dos EUA."},
    "Accelerator": {message: "Acelerador"},
    "SA": {message: "Arabia Saudita"},
    "LS": {message: "Lesotho"},
    "ZA": {message: "Sudáfrica"},
    "PT": {message: "Portugal"},
    "CA": {message: "Canadá"},
    "Starting...": {message: "Comezando ..."},
    "CM": {message: "Camerún"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "A versión gratuita do Hola que ser reactivado cada 4 horas e está patrocinado por anuncios."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Polonia"},
    "GA": {message: "Gabón"},
    "TM": {message: "Turkmenistán"},
    "KY": {message: "Illas Caimán"},
    "Verify you have Internet": {message: "Comprobe se ten Internet"},
    "LA": {message: "Laos"},
    "PH": {message: "Filipinas"},
    "NI": {message: "Nicaragua"},
    "GU": {message: "Guam"},
    "TF": {message: "Territorios Franceses do Sul"},
    "KZ": {message: "Kazakhstan"},
    "SJ": {message: "Svalbard e Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominica"},
    "NE": {message: "Níxer"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritania"},
    "changing...": {message: "cambiando ..."},
    "GS": {message: "Xeorxia do Sur e Illas Sandwich"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Versión moi antiga de Chrome, <a> update </a> Chrome usar Hola"},
    "ME": {message: "Montenegro"},
    "AX": {message: "Illas Aland"},
    "VG": {message: "Illas Virxes Británicas"},
    "VN": {message: "Vietnam"},
    "CI": {message: "Costa de Marfil"},
    "DZ": {message: "Arxelia"},
    "YE": {message: "Iemen"},
    "GE": {message: "Xeorxia"},
    "CX": {message: "Illa Christmas"},
    "LB": {message: "Líbano"},
    "FK": {message: "Illas Malvinas"},
    "DE": {message: "Alemaña"},
    "even more...": {message: "aínda máis ..."},
    "MV": {message: "Maldivas"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrein"},
    "GI": {message: "Xibraltar"},
    "RO": {message: "Romanía"},
    "WF": {message: "Wallis e Futuna"},
    "AR": {message: "Arxentina"},
    "GP": {message: "Guadalupe"},
    "IN": {message: "India"},
    "Unblocker site list": {message: "Lista de sitios Unblocker"},
    "AW": {message: "Aruba"},
    "FO": {message: "Illas Feroe"},
    "CS": {message: "Serbia e Montenegro"},
    "BR": {message: "Brasil"},
    "HN": {message: "Honduras"},
    "MC": {message: "Mónaco"},
    "Translate to your language": {message: "Traducir a súa lingua"},
    "SB": {message: "Illas Salomón"},
    "NZ": {message: "Nova Celandia"},
    "PS": {message: "Palestina"},
    "UG": {message: "Uganda"},
    "GB": {message: "Reino Unido"},
    "HT": {message: "Haití"},
    "GF": {message: "Güiana Francesa"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Versión antiga do Firefox. Prensa <a> aquí </a> para actualizar."},
    "ZZ": {message: "rexión descoñecida ou non válida"},
    "KM": {message: "Comores"},
    "KW": {message: "Kuwait"},
    "TC": {message: "Illas Turks e Caicos"},
    "MQ": {message: "Martinica"},
    "ES": {message: "España"},
    "MZ": {message: "Mozambique"},
    "BO": {message: "Bolivia"},
    "AL": {message: "Albania"},
    "MD": {message: "Moldova"},
    "TR": {message: "Turquía"},
    "GN": {message: "Guinea"},
    "SI": {message: "Eslovenia"},
    "CO": {message: "Colombia"},
    "Settings": {message: "Configuración"},
    "AQ": {message: "Antártida"},
    "JO": {message: "Xordania"},
    "SM": {message: "San Marino"},
    "CU": {message: "Cuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiopía"},
    "IS": {message: "Islandia"},
    "Reload Hola": {message: "Actualizar Hola"},
    "back to": {message: "facer a"},
    "MH": {message: "Illas Marshall"},
    "BG": {message: "Bulgaria"},
    "BS": {message: "Bahamas"},
    "TL": {message: "Timor Leste"},
    "BZ": {message: "Belice"},
    "CY": {message: "Chipre"},
    "IM": {message: "Illa de Man"},
    "IE": {message: "Irlanda"},
    "Get help from engineer over skype:": {message: "Obteña axuda do enxeñeiro sobre Skype:"},
    "TW": {message: "Taiwán"},
    "KP": {message: "Corea do Norte"},
    "PF": {message: "Polinesia Francesa"},
    "app_name": {message: "Hola Mellor Internet"},
    "Update": {message: "Actualizar"},
    "MW": {message: "Malaui"},
    "GY": {message: "Güiana"},
    "$1 blocked?": {message: "$1 bloqueado?"},
    "Unblocker is disabled": {message: "Unblocker está desactivado"},
    "PK": {message: "Paquistán"},
    "GQ": {message: "Guinea Ecuatorial"},
    "$1 unblocked": {message: "$1 desbloqueado"},
    "Number of users that pressed not working": {message: "Número de usuarios que non traballan premido"},
    "NF": {message: "Illa Norfolk"},
    "TD": {message: "Xad"},
    "SO": {message: "Somalia"},
    "BD": {message: "Bangladesh"},
    "HM": {message: "Illa Heard e Illas McDonald"},

};
return E; });