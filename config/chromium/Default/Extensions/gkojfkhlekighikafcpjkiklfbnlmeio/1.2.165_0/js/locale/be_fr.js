'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibouti"},
    "JM": {message: "Jamaïque"},
    "AT": {message: "Autriche"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Vous voulez Hola sur d'autres appareils? (Xbox, PS, Apple TV, iPhone ...). Cliquez ici"},
    "SZ": {message: "Swaziland"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunéi Darussalam"},
    "ZM": {message: "Zambie"},
    "app_desc": {message: "Accéder à l'ensemble de l'Internet! Ouvert site bloqué > cliquez  sur l'icône Hola > changez le drapeau du pays > PROFITEZ!"},
    "more...": {message: "plus..."},
    "PR": {message: "Porto Rico"},
    "SH": {message: "Sainte-Hélène"},
    "There seems to be an error": {message: "Il semble y avoir une erreur"},
    "MA": {message: "Maroc"},
    "MT": {message: "Malte"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Îles Mariannes du Nord"},
    "Unblocker": {message: "Débloqueur"},
    "Access any site from any country, free": {message: "Accéder aux sites Web à partir de n'importe où!"},
    "Try to <span>reload</span>": {message: "Essayez de <span>reload</span>"},
    "PW": {message: "Palaos"},
    "UZ": {message: "Ouzbékistan"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Libéria"},
    "TN": {message: "Tunisie"},
    "EE": {message: "Estonie"},
    "CK": {message: "Îles Cook"},
    "BY": {message: "Bélarus"},
    "NO": {message: "Norvège"},
    "KR": {message: "Corée du Sud"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Arménie"},
    "SR": {message: "Suriname"},
    "MG": {message: "Madagascar"},
    "ON": {message: "ON"},
    "BT": {message: "Bhoutan"},
    "CF": {message: "République centrafricaine"},
    "AE": {message: "Émirats arabes unis"},
    "BA": {message: "Bosnie-Herzégovine"},
    "TH": {message: "Thaïlande"},
    "CC": {message: "Îles Cocos - Keeling"},
    "NC": {message: "Nouvelle-Calédonie"},
    "TO": {message: "Tonga"},
    "SE": {message: "Suède"},
    "AZ": {message: "Azerbaïdjan"},
    "AF": {message: "Afghanistan"},
    "NG": {message: "Nigéria"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Bénin"},
    "Turn on to get started": {message: "Allumez pour commencer"},
    "OM": {message: "Oman"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonésie"},
    "FM": {message: "États fédérés de Micronésie"},
    "(some Hola features are not available on your version)": {message: "(certaines fonctionnalités Hola sont pas disponibles sur votre version)"},
    "GM": {message: "Gambie"},
    "LV": {message: "Lettonie"},
    "RU": {message: "Russie"},
    "FI": {message: "Finlande"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Obtenez Hola Plus pour ininterrompue de service, sans publicité."},
    "LU": {message: "Luxembourg"},
    "VE": {message: "Venezuela"},
    "VI": {message: "Îles Vierges des États-Unis"},
    "TV": {message: "Tuvalu"},
    "SN": {message: "Sénégal"},
    "MX": {message: "Mexique"},
    "IL": {message: "Israël"},
    "GG": {message: "Guernesey"},
    "DO": {message: "République dominicaine"},
    "HU": {message: "Hongrie"},
    "OFF": {message: "OFF"},
    "KH": {message: "Cambodge"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "os paramètres proxy sont gérés par une autre extension. Désactivez cette extension, poursuivre avec Hola <a>extensions</a>"},
    "BB": {message: "Barbade"},
    "JE": {message: "Jersey"},
    "DK": {message: "Danemark"},
    "PA": {message: "Panama"},
    "QA": {message: "Qatar"},
    "CV": {message: "Cap-Vert"},
    "Reload": {message: "Recharger"},
    "GD": {message: "Grenade"},
    "MO": {message: "R.A.S. chinoise de Macao"},
    "MF": {message: "Saint-Martin"},
    "HR": {message: "Croatie"},
    "CZ": {message: "République tchèque"},
    "BL": {message: "Saint-Barthélémy"},
    "ST": {message: "Sao Tomé-et-Principe"},
    "AU": {message: "Australie"},
    "IR": {message: "Iran"},
    "CG": {message: "Congo"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinée-Bissau"},
    "MK": {message: "Macédoine"},
    "GR": {message: "Grèce"},
    "AG": {message: "Antigua-et-Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Antilles néerlandaises"},
    "UA": {message: "Ukraine"},
    "EH": {message: "Sahara occidental"},
    "KN": {message: "Saint-Kitts-et-Nevis"},
    "SC": {message: "Seychelles"},
    "NL": {message: "Pays-Bas"},
    "MS": {message: "Montserrat"},
    "EC": {message: "Équateur"},
    "HK": {message: "R.A.S. chinoise de Hong Kong"},
    "MY": {message: "Malaisie"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "État de la Cité du Vatican"},
    "IO": {message: "Territoire britannique de l'océan Indien"},
    "SD": {message: "Soudan"},
    "RS": {message: "Serbie"},
    "CN": {message: "Chine"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Maurice"},
    "CH": {message: "Suisse"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kirghizistan"},
    "NU": {message: "Niue"},
    "US": {message: "États-Unis"},
    "PE": {message: "Pérou"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fidji"},
    "ER": {message: "Érythrée"},
    "IQ": {message: "Irak"},
    "AS": {message: "Samoa américaines"},
    "TZ": {message: "Tanzanie"},
    "LY": {message: "Libye"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermudes"},
    "BV": {message: "Île Bouvet"},
    "LT": {message: "Lituanie"},
    "SG": {message: "Singapour"},
    "PM": {message: "Saint-Pierre-et-Miquelon"},
    "Initializing...": {message: "Initialisation, veuillez patienter s'il-vous-plaît..."},
    "TT": {message: "Trinité-et-Tobago"},
    "SY": {message: "Syrie"},
    "SK": {message: "Slovaquie"},
    "GL": {message: "Groenland"},
    "PG": {message: "Papouasie-Nouvelle-Guinée"},
    "KI": {message: "Kiribati"},
    "CD": {message: "République démocratique du Congo"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Saint-Vincent-et-les Grenadines"},
    "JP": {message: "Japon"},
    "NA": {message: "Namibie"},
    "TJ": {message: "Tadjikistan"},
    "LC": {message: "Sainte-Lucie"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolie"},
    "IT": {message: "Italie"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Activer"},
    "Loading": {message: "Chargement en cours"},
    "FR": {message: "France"},
    "EG": {message: "Égypte"},
    "start": {message: "start"},
    "RW": {message: "Rwanda"},
    "BE": {message: "Belgique"},
    "UM": {message: "Îles Mineures Éloignées des États-Unis"},
    "Accelerator": {message: "Accelerateur"},
    "SA": {message: "Arabie saoudite"},
    "LS": {message: "Lesotho"},
    "ZA": {message: "Afrique du Sud"},
    "PT": {message: "Portugal"},
    "CA": {message: "Canada"},
    "Starting...": {message: "A partir..."},
    "CM": {message: "Cameroun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "La version gratuite de Hola doit être réactivé toutes les 4 heures et est parrainé par annonces."},
    "NP": {message: "Népal"},
    "PL": {message: "Pologne"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkménistan"},
    "KY": {message: "Îles Caïmans"},
    "Verify you have Internet": {message: "Vérifiez que vous disposez Internet"},
    "LA": {message: "Laos"},
    "PH": {message: "Philippines"},
    "NI": {message: "Nicaragua"},
    "GU": {message: "Guam"},
    "TF": {message: "Terres australes françaises"},
    "KZ": {message: "Kazakhstan"},
    "SJ": {message: "Svalbard et Île Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominique"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorre"},
    "MR": {message: "Mauritanie"},
    "changing...": {message: "changer..."},
    "GS": {message: "Géorgie du Sud et les îles Sandwich du Sud"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Version très ancienne de Chrome. Chrome pour utiliser Hola <a>Mettre à jour</a>"},
    "ME": {message: "Monténégro"},
    "AX": {message: "Îles Åland"},
    "VN": {message: "Viêt Nam"},
    "VG": {message: "Îles Vierges britanniques"},
    "CI": {message: "Côte d’Ivoire"},
    "DZ": {message: "Algérie"},
    "YE": {message: "Yémen"},
    "GE": {message: "Géorgie"},
    "CX": {message: "Île Christmas"},
    "LB": {message: "Liban"},
    "FK": {message: "Îles Malouines"},
    "DE": {message: "Allemagne"},
    "even more...": {message: "encore plus..."},
    "MV": {message: "Maldives"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahreïn"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Roumanie"},
    "WF": {message: "Wallis-et-Futuna"},
    "AR": {message: "Argentine"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "Inde"},
    "Unblocker site list": {message: "Liste des sites du débloqueur"},
    "AW": {message: "Aruba"},
    "CS": {message: "Serbie-et-Monténégro"},
    "FO": {message: "Îles Féroé"},
    "BR": {message: "Brésil"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monaco"},
    "SB": {message: "Îles Salomon"},
    "NZ": {message: "Nouvelle-Zélande"},
    "PS": {message: "Territoire palestinien"},
    "UG": {message: "Ouganda"},
    "GB": {message: "Royaume-Uni"},
    "HT": {message: "Haïti"},
    "GF": {message: "Guyane française"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Ancienne version de Firefox. Presse <a>ici</a> pour mettre à niveau."},
    "ZZ": {message: "région indéterminée"},
    "KM": {message: "Comores"},
    "KW": {message: "Koweït"},
    "MQ": {message: "Martinique"},
    "TC": {message: "Îles Turks et Caïques"},
    "MZ": {message: "Mozambique"},
    "ES": {message: "Espagne"},
    "BO": {message: "Bolivie"},
    "AL": {message: "Albanie"},
    "MD": {message: "Moldavie"},
    "TR": {message: "Turquie"},
    "GN": {message: "Guinée"},
    "CO": {message: "Colombie"},
    "SI": {message: "Slovénie"},
    "Settings": {message: "réglages"},
    "AQ": {message: "Antarctique"},
    "JO": {message: "Jordanie"},
    "SM": {message: "Saint-Marin"},
    "CU": {message: "Cuba"},
    "CL": {message: "Chili"},
    "ML": {message: "Mali"},
    "ET": {message: "Éthiopie"},
    "IS": {message: "Islande"},
    "Reload Hola": {message: "Hola Reload"},
    "back to": {message: "revenir à"},
    "BG": {message: "Bulgarie"},
    "MH": {message: "Îles Marshall"},
    "BS": {message: "Bahamas"},
    "TL": {message: "Timor oriental"},
    "BZ": {message: "Belize"},
    "CY": {message: "Chypre"},
    "IM": {message: "Île de Man"},
    "IE": {message: "Irlande"},
    "Get help from engineer over skype:": {message: "Obtenez de l'aide de l'ingénieur sur skype:"},
    "TW": {message: "Taïwan"},
    "KP": {message: "Corée du Nord"},
    "PF": {message: "Polynésie française"},
    "app_name": {message: "Hola Internet en mieux"},
    "Update": {message: "Mettre à jour"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "Unblocker is disabled": {message: "Débloqueur est désactivé"},
    "$1 blocked?": {message: "$1 bloqué?"},
    "PK": {message: "Pakistan"},
    "GQ": {message: "Guinée équatoriale"},
    "$1 unblocked": {message: "$1 débloqué"},
    "NF": {message: "Île Norfolk"},
    "TD": {message: "Tchad"},
    "SO": {message: "Somalie"},
    "HM": {message: "Îles Heard et MacDonald"},
    "BD": {message: "Bangladesh"},

};
return E; });