'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Jibuti"},
    "JM": {message: "Jamaika"},
    "AT": {message: "Austria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Ingin Hola pada perangkat lain? (Xbox, PS, Apple TV, iPhone ...). Klik di sini"},
    "SZ": {message: "Swaziland"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Zambia"},
    "app_desc": {message: "Akses SEMUA dari Internet! Pergilah ke situs diblokir > klik ikon Hola > ubah bendera negaranya > NIKMATI!"},
    "more...": {message: "lebih..."},
    "PR": {message: "Puerto Riko"},
    "SH": {message: "Saint Helena"},
    "There seems to be an error": {message: "Tampaknya ada kesalahan"},
    "MA": {message: "Maroko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Kepulauan Mariana Utara"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Akses situs apapun dari negara manapun!"},
    "Try to <span>reload</span>": {message: "Cobalah untuk <span>ulang</span>"},
    "UZ": {message: "Uzbekistan"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Liberia"},
    "TN": {message: "Tunisia"},
    "EE": {message: "Estonia"},
    "CK": {message: "Kepulauan Cook"},
    "BY": {message: "Belarusia"},
    "NO": {message: "Norwegia"},
    "KR": {message: "Korea Selatan"},
    "IC": {message: "Kepulauan Canary"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Armenia"},
    "SR": {message: "Suriname"},
    "MG": {message: "Madagaskar"},
    "ON": {message: "HIDUP"},
    "BT": {message: "Bhutan"},
    "CF": {message: "Republik Afrika Tengah"},
    "AE": {message: "Uni Emirat Arab"},
    "BA": {message: "Bosnia dan Herzegovina"},
    "TH": {message: "Thailand"},
    "EA": {message: "Ceuta dan Melilla"},
    "CC": {message: "Kepulauan Cocos"},
    "NC": {message: "Kaledonia Baru"},
    "EU": {message: "Uni Eropa"},
    "TO": {message: "Tonga"},
    "SE": {message: "Swedia"},
    "AZ": {message: "Azerbaijan"},
    "AF": {message: "Afghanistan"},
    "NG": {message: "Nigeria"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Aktifkan untuk memulai"},
    "OM": {message: "Oman"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonesia"},
    "FM": {message: "Mikronesia"},
    "(some Hola features are not available on your version)": {message: "(beberapa fitur Hola tidak tersedia pada versi Anda)"},
    "GM": {message: "Gambia"},
    "LV": {message: "Latvia"},
    "RU": {message: "Rusia"},
    "FI": {message: "Finlandia"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Dapatkan Hola Plus untuk un-sela, layanan bebas iklan."},
    "LU": {message: "Luksemburg"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Kepulauan U.S. Virgin"},
    "SN": {message: "Senegal"},
    "MX": {message: "Meksiko"},
    "IL": {message: "Israel"},
    "GG": {message: "Guernsey"},
    "DO": {message: "Republik Dominika"},
    "HU": {message: "Hungaria"},
    "OFF": {message: "MATI"},
    "KH": {message: "Kamboja"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "etelan proxy jaringan Anda sedang dikelola oleh ekstensi lain. Nonaktifkan ekstensi yang, untuk melanjutkan dengan Hola. <a>extensions</a>"},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "DK": {message: "Denmark"},
    "PA": {message: "Panama"},
    "CV": {message: "Tanjung Verde"},
    "QA": {message: "Qatar"},
    "Reload": {message: "Muat ulang"},
    "TA": {message: "Tristan da Cunha"},
    "GD": {message: "Grenada"},
    "MO": {message: "Makau SAR China"},
    "MF": {message: "Saint Martin"},
    "HR": {message: "Kroasia"},
    "CZ": {message: "Republik Ceko"},
    "BL": {message: "Saint Barthelemy"},
    "ST": {message: "Sao Tome dan Principe"},
    "AU": {message: "Australia"},
    "IR": {message: "Iran"},
    "CG": {message: "Kongo - Republik"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Makedonia"},
    "GR": {message: "Yunani"},
    "AG": {message: "Antigua dan Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Antilla Belanda"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Sahara Barat"},
    "KN": {message: "Saint Kitts dan Nevis"},
    "SC": {message: "Seychelles"},
    "MS": {message: "Montserrat"},
    "NL": {message: "Belanda"},
    "EC": {message: "Ekuador"},
    "HK": {message: "Hong Kong SAR China"},
    "MY": {message: "Malaysia"},
    "CR": {message: "Kosta Rika"},
    "VA": {message: "Vatikan"},
    "IO": {message: "Wilayah Inggris di Samudra Hindia"},
    "SD": {message: "Sudan"},
    "RS": {message: "Serbia"},
    "CN": {message: "Cina"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Mauritius"},
    "CH": {message: "Swiss"},
    "LI": {message: "Liechtenstein"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kirgistan"},
    "NU": {message: "Niue"},
    "PE": {message: "Peru"},
    "US": {message: "Amerika Serikat"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fiji"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Irak"},
    "AS": {message: "Samoa Amerika"},
    "TZ": {message: "Tanzania"},
    "LY": {message: "Libia"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Pulau Bouvet"},
    "LT": {message: "Lituania"},
    "SG": {message: "Singapura"},
    "PM": {message: "Saint Pierre dan Miquelon"},
    "Initializing...": {message: "Inisialisasi, mohon tunggu..."},
    "TT": {message: "Trinidad dan Tobago"},
    "SY": {message: "Syria"},
    "SK": {message: "Slovakia"},
    "AC": {message: "Pulau Ascension"},
    "GL": {message: "Grinlandia"},
    "PG": {message: "Nugini Papua Nugini"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Kongo - Kinshasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Saint Vincent dan Grenadines"},
    "JP": {message: "Jepang"},
    "NA": {message: "Namibia"},
    "TJ": {message: "Tajikistan"},
    "LC": {message: "Saint Lucia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolia"},
    "IT": {message: "Italia"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Enable"},
    "Loading": {message: "Memuat"},
    "EG": {message: "Mesir"},
    "FR": {message: "Perancis"},
    "start": {message: "start"},
    "RW": {message: "Rwanda"},
    "BE": {message: "Belgia"},
    "UM": {message: "Kepulauan Kecil Terluar Amerika Serikat"},
    "Accelerator": {message: "Akselerator"},
    "SA": {message: "Arab Saudi"},
    "LS": {message: "Lesotho"},
    "ZA": {message: "Afrika Selatan"},
    "DG": {message: "Diego Garcia"},
    "PT": {message: "Portugis"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Mulai..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Versi gratis dari Hola perlu diaktifkan kembali setiap 4 jam dan disponsori oleh iklan."},
    "NP": {message: "Nepal"},
    "PL": {message: "Polandia"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkimenistan"},
    "KY": {message: "Kepulauan Kayman"},
    "Verify you have Internet": {message: "Verifikasi Anda memiliki Internet"},
    "LA": {message: "Laos"},
    "PH": {message: "Filipina"},
    "NI": {message: "Nikaragua"},
    "GU": {message: "Guam"},
    "TF": {message: "Teritori Kutub Selatan Prancis"},
    "KZ": {message: "Kazakstan"},
    "SJ": {message: "Kepulauan Svalbard dan Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominika"},
    "NE": {message: "Niger"},
    "AD": {message: "Andora"},
    "MR": {message: "Mauritania"},
    "changing...": {message: "mengubah..."},
    "GS": {message: "Kepulauan South Sandwich dan South Georgia"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Versi Chrome yang sangat kuno. Chrome untuk menggunakan Hola <a>Pembaruan</a>"},
    "ME": {message: "Montenegro"},
    "AX": {message: "Kepulauan Aland"},
    "VG": {message: "Kepulauan Virgin Inggris"},
    "VN": {message: "Vietnam"},
    "CI": {message: "Cote d'Ivoire"},
    "DZ": {message: "Algeria"},
    "YE": {message: "Yaman"},
    "GE": {message: "Georgia"},
    "CX": {message: "Pulau Christmas"},
    "LB": {message: "Lebanon"},
    "FK": {message: "Kepulauan Malvinas"},
    "DE": {message: "Jerman"},
    "even more...": {message: "bahkan lebih..."},
    "MV": {message: "Maladewa"},
    "PN": {message: "Kepulauan Pitcairn"},
    "BH": {message: "Bahrain"},
    "GI": {message: "Gibraltar"},
    "WF": {message: "Kepulauan Wallis dan Futuna"},
    "RO": {message: "Rumania"},
    "GP": {message: "Guadeloupe"},
    "AR": {message: "Argentina"},
    "IN": {message: "India"},
    "Unblocker site list": {message: "Daftar situs unblocker"},
    "AW": {message: "Aruba"},
    "FO": {message: "Kepulauan Faroe"},
    "CS": {message: "Serbia dan Montenegro"},
    "BR": {message: "Brasil"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monako"},
    "SB": {message: "Kepulauan Solomon"},
    "PS": {message: "Otoritas Palestina"},
    "NZ": {message: "Selandia Baru"},
    "UG": {message: "Uganda"},
    "GB": {message: "Inggris Raya"},
    "HT": {message: "Haiti"},
    "QO": {message: "Oseania Luar"},
    "GF": {message: "Guyana Perancis"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Lama versi Firefox. Tekan <a>di sini</a> untuk meng-upgrade."},
    "KM": {message: "Komoros"},
    "KW": {message: "Kuwait"},
    "TC": {message: "Kepulauan Turks dan Caicos"},
    "MQ": {message: "Martinique"},
    "CP": {message: "Pulau Clipperton"},
    "MZ": {message: "Mozambik"},
    "ES": {message: "Spanyol"},
    "BO": {message: "Bolivia"},
    "AL": {message: "Albania"},
    "MD": {message: "Moldova"},
    "TR": {message: "Turki"},
    "GN": {message: "Guinea"},
    "CO": {message: "Kolombia"},
    "SI": {message: "Slovenia"},
    "Settings": {message: "Pengaturan"},
    "AQ": {message: "Antarktika"},
    "JO": {message: "Yordania"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuba"},
    "CL": {message: "Cile"},
    "ML": {message: "Mali"},
    "ET": {message: "Ethiopia"},
    "IS": {message: "Islandia"},
    "Reload Hola": {message: "Reload Hola"},
    "back to": {message: "kembali ke"},
    "MH": {message: "Kepulauan Marshall"},
    "BG": {message: "Bulgaria"},
    "BS": {message: "Bahama"},
    "TL": {message: "Timor Leste"},
    "BZ": {message: "Belize"},
    "CY": {message: "Siprus"},
    "IM": {message: "Isle of Man"},
    "IE": {message: "Irlandia"},
    "Get help from engineer over skype:": {message: "Dapatkan bantuan dari insinyur lebih skype:"},
    "TW": {message: "Taiwan"},
    "KP": {message: "Korea Utara"},
    "PF": {message: "Polinesia Prancis"},
    "app_name": {message: "Hola Internet Lebih Baik"},
    "Update": {message: "Pembaruan"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "Unblocker is disabled": {message: "unblocker dinonaktifkan"},
    "$1 blocked?": {message: "$1 diblokir?"},
    "PK": {message: "Pakistan"},
    "GQ": {message: "Guinea Khatulistiwa"},
    "$1 unblocked": {message: "$1 diunblock"},
    "NF": {message: "Kepulauan Norfolk"},
    "SO": {message: "Somalia"},
    "TD": {message: "Chad"},
    "HM": {message: "Pulau Heard dan Kepulauan McDonald"},
    "BD": {message: "Bangladesh"},

};
return E; });