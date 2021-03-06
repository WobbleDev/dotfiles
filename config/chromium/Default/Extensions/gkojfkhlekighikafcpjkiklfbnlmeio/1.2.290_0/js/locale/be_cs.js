'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Džibuti"},
    "JM": {message: "Jamajka"},
    "AT": {message: "Rakousko"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Chcete Hola na ostatních zařízeních? (Xbox, PS, Apple TV, iPhone...). Klikněte zde"},
    "SZ": {message: "Svazijsko"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunej Darussalam"},
    "ZM": {message: "Zambie"},
    "app_desc": {message: "Získtejte přístup ke všemu na internetu! Jděte na zablokovanou stránku -> klikněte na Hola ikonu -> změňte vlajku země -> užívejte!"},
    "Improve translation": {message: "zdokonalit překlad"},
    "more...": {message: "více..."},
    "PR": {message: "Portoriko"},
    "SH": {message: "Svatá Helena"},
    "There seems to be an error": {message: "Vypadá to, že nastala chyba"},
    "MA": {message: "Maroko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Severní Mariany"},
    "Unblocker": {message: "Odemykač"},
    "Access any site from any country, free": {message: "Získtejte přístup k jakékoliv stránce z jakékoliv země zdarma"},
    "Try to <span>reload</span>": {message: "Zkuste <span>znovu načíst</span>"},
    "UZ": {message: "Uzbekistán"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Libérie"},
    "TN": {message: "Tunisko"},
    "EE": {message: "Estonsko"},
    "CK": {message: "Cookovy ostrovy"},
    "BY": {message: "Bělorusko"},
    "NO": {message: "Norsko"},
    "KR": {message: "Jižní Korea"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Arménie"},
    "SR": {message: "Surinam"},
    "MG": {message: "Madagaskar"},
    "ON": {message: "ZAP"},
    "BT": {message: "Bhútán"},
    "CF": {message: "Středoafrická republika"},
    "AE": {message: "Spojené arabské emiráty"},
    "BA": {message: "Bosna a Hercegovina"},
    "TH": {message: "Thajsko"},
    "Author:": {message: "Autor:"},
    "CC": {message: "Kokosové ostrovy"},
    "NC": {message: "Nová Kaledonie"},
    "TO": {message: "Tonga"},
    "SE": {message: "Švédsko"},
    "AZ": {message: "Ázerbájdžán"},
    "AF": {message: "Afghánistán"},
    "NG": {message: "Nigérie"},
    "KE": {message: "Keňa"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Zapněte pro započetí"},
    "OM": {message: "Omán"},
    "LK": {message: "Srí Lanka"},
    "ID": {message: "Indonésie"},
    "FM": {message: "Mikronézie"},
    "(some Hola features are not available on your version)": {message: "(některé Hola funkce nejsou k dispozici navaší verzi)"},
    "GM": {message: "Gambie"},
    "LV": {message: "Lotyšsko"},
    "RU": {message: "Rusko"},
    "FI": {message: "Finsko"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Získtejte Hola Plus pro nepřerušovanou a plně bez reklam službu."},
    "LU": {message: "Lucembursko"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Americké Panenské ostrovy"},
    "SN": {message: "Senegal"},
    "MX": {message: "Mexiko"},
    "IL": {message: "Izrael"},
    "GG": {message: "Guernsey"},
    "Author site:": {message: "Autorovy stránky:"},
    "HU": {message: "Maďarsko"},
    "DO": {message: "Dominikánská republika"},
    "OFF": {message: "VYP"},
    "KH": {message: "Kambodža"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "ola nemůže pracovat správně, protože jiné rozšíření ovádá vaše nastavení proxy. Zakažte, prosím, ostatní rozšíření které si myslíte, že by mothly ovládat vaše proxy nastavení v <a>rozšířeních</a> (jako třeba blokátory reklam, jiné VPN služby, atd.)."},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "DK": {message: "Dánsko"},
    "PA": {message: "Panama"},
    "CV": {message: "Kapverdy"},
    "QA": {message: "Katar"},
    "Reload": {message: "Znovu načíst"},
    "GD": {message: "Grenada"},
    "Number of users that use this option": {message: "Počet uživatelů kteří použili tuhle volbu"},
    "MO": {message: "Zvláštní administrativní oblast Číny Macao"},
    "MF": {message: "Svatý Martin"},
    "HR": {message: "Chorvatsko"},
    "CZ": {message: "Česká republika"},
    "BL": {message: "Svatý Bartoloměj"},
    "ST": {message: "Svatý Tomáš"},
    "AU": {message: "Austrálie"},
    "IR": {message: "Írán"},
    "CG": {message: "Kongo"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guinea-Bissau"},
    "MK": {message: "Macedonia"},
    "GR": {message: "Řecko"},
    "AG": {message: "Antigua a Barbuda"},
    "AI": {message: "Anguila"},
    "AN": {message: "Nizozemské Antily"},
    "UA": {message: "Ukrajina"},
    "EH": {message: "Západní Sahara"},
    "KN": {message: "Svatý Kitts a Nevis"},
    "SC": {message: "Seychely"},
    "NL": {message: "Nizozemsko"},
    "MS": {message: "Montserrat"},
    "EC": {message: "Ekvádor"},
    "HK": {message: "Hongkong, zvláštní administrativní oblast Číny"},
    "MY": {message: "Malajsie"},
    "CR": {message: "Kostarika"},
    "VA": {message: "Svatý stolec"},
    "IO": {message: "Britské území v Indickém oceánu"},
    "SD": {message: "Súdán"},
    "RS": {message: "Srbsko"},
    "CN": {message: "Čína"},
    "UY": {message: "Uruguay"},
    "PY": {message: "Paraguay"},
    "MU": {message: "Mauricius"},
    "CH": {message: "Švýcarsko"},
    "LI": {message: "Lichtenštejnsko"},
    "GH": {message: "Ghana"},
    "KG": {message: "Kyrgyzstán"},
    "NU": {message: "Niue"},
    "US": {message: "Spojené státy"},
    "PE": {message: "Peru"},
    "SL": {message: "Sierra Leone"},
    "FJ": {message: "Fidži"},
    "ER": {message: "Eritrea"},
    "IQ": {message: "Irák"},
    "AS": {message: "Americká Samoa"},
    "TZ": {message: "Tanzanie"},
    "LY": {message: "Libye"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermudy"},
    "BV": {message: "Ostrov Bouvet"},
    "LT": {message: "Litva"},
    "PM": {message: "Svatý Pierre a Miquelon"},
    "SG": {message: "Singapur"},
    "Initializing...": {message: "Inicializování..."},
    "TT": {message: "Trinidad a Tobago"},
    "SY": {message: "Sýrie"},
    "SK": {message: "Slovensko"},
    "GL": {message: "Grónsko"},
    "PG": {message: "Papua-Nová Guinea"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Demokratická republika Kongo"},
    "AO": {message: "Angola"},
    "BW": {message: "Botswana"},
    "ZW": {message: "Zimbabwe"},
    "VC": {message: "Svatý Vincent a Grenadiny"},
    "JP": {message: "Japonsko"},
    "NA": {message: "Namibie"},
    "TJ": {message: "Tádžikistán"},
    "LC": {message: "Svatá Lucie"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongolsko"},
    "IT": {message: "Itálie"},
    "RE": {message: "Réunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Povolit"},
    "Loading": {message: "Načítání"},
    "EG": {message: "Egypt"},
    "FR": {message: "Francie"},
    "start": {message: "start"},
    "RW": {message: "Rwanda"},
    "BE": {message: "Belgie"},
    "UM": {message: "Menší odlehlé ostrovy USA"},
    "Accelerator": {message: "Urychlovač"},
    "LS": {message: "Lesotho"},
    "SA": {message: "Saúdská Arábie"},
    "ZA": {message: "Jihoafrická republika"},
    "PT": {message: "Portugalsko"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Startování..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Verze Hola, kterou máte je třeba znovu povolit každé 4 hodiny a je sponzorována reklamami."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepál"},
    "PL": {message: "Polsko"},
    "GA": {message: "Gabon"},
    "TM": {message: "Turkmenistán"},
    "KY": {message: "Kajmanské ostrovy"},
    "Verify you have Internet": {message: "Ověřte vaše internetové připojení"},
    "LA": {message: "Lidově demokratická republika Laos"},
    "PH": {message: "Filipíny"},
    "NI": {message: "Nikaragua"},
    "TF": {message: "Francouzská jižní teritoria"},
    "GU": {message: "Guam"},
    "KZ": {message: "Kazachstán"},
    "SJ": {message: "Svalbard a Jan Mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominika"},
    "NE": {message: "Niger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritánie"},
    "changing...": {message: "Probíhá změna..."},
    "GS": {message: "Jižní Georgie a Jižní Sandwichovy ostrovy"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Tohle je stará verze Chromu, <a>aktualizujte</a> Chrome abyste mohli používat Hola"},
    "ME": {message: "Černá Hora"},
    "AX": {message: "Alandy"},
    "VG": {message: "Britské Panenské ostrovy"},
    "VN": {message: "Vietnam"},
    "DZ": {message: "Alžírsko"},
    "YE": {message: "Jemen"},
    "CI": {message: "Pobřeží slonoviny"},
    "GE": {message: "Gruzie"},
    "CX": {message: "Vánoční ostrovy"},
    "LB": {message: "Libanon"},
    "FK": {message: "Falklandské ostrovy"},
    "DE": {message: "Německo"},
    "even more...": {message: "ještě více..."},
    "MV": {message: "Maladivy"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrajn"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Rumunsko"},
    "WF": {message: "Wallis a Futuna"},
    "AR": {message: "Argentina"},
    "GP": {message: "Guadeloupe"},
    "IN": {message: "Indie"},
    "Unblocker site list": {message: "Seznam stránek k odemčení"},
    "FO": {message: "Faerské ostrovy"},
    "AW": {message: "Aruba"},
    "CS": {message: "Srbsko a Černá Hora"},
    "BR": {message: "Brazílie"},
    "HN": {message: "Honduras"},
    "MC": {message: "Monako"},
    "SB": {message: "Šalamounovy ostrovy"},
    "NZ": {message: "Nový Zéland"},
    "PS": {message: "Palestinian Territory"},
    "UG": {message: "Uganda"},
    "GB": {message: "Velká Británie"},
    "HT": {message: "Haiti"},
    "GF": {message: "Francouzská Guyana"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Stará verze Firefoxu. Klikněte <a>zde</a> pro upgrade."},
    "ZZ": {message: "Neznámá nebo neplatná oblast"},
    "KM": {message: "Komory"},
    "KW": {message: "Kuvajt"},
    "MQ": {message: "Martinik"},
    "TC": {message: "Ostrovy Caicos a Turks"},
    "MZ": {message: "Mosambik"},
    "ES": {message: "Španělsko"},
    "BO": {message: "Bolívie"},
    "AL": {message: "Albánie"},
    "MD": {message: "Moldavsko, republika"},
    "TR": {message: "Turecko"},
    "GN": {message: "Guinea"},
    "CO": {message: "Kolumbie"},
    "SI": {message: "Slovinsko"},
    "Settings": {message: "Nastavení"},
    "AQ": {message: "Antarktida"},
    "JO": {message: "Jordánsko"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiopie"},
    "IS": {message: "Island"},
    "Reload Hola": {message: "Načíst znovu Hola"},
    "back to": {message: "back to"},
    "MH": {message: "Marshallovy ostrovy"},
    "BG": {message: "Bulharsko"},
    "BS": {message: "Bahamy"},
    "TL": {message: "Východní Timor"},
    "BZ": {message: "Belize"},
    "CY": {message: "Kypr"},
    "IM": {message: "Ostrov Man"},
    "IE": {message: "Irsko"},
    "Get help from engineer over skype:": {message: "Získat pomoc od technika přes Skype:"},
    "TW": {message: "Tchaj-wan"},
    "KP": {message: "Severní Korea"},
    "PF": {message: "Francouzská Polynésie"},
    "app_name": {message: "Hola Lepší Internet"},
    "Update": {message: "Aktualizovat"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guyana"},
    "Unblocker is disabled": {message: "Odblokátor je zakázán"},
    "GQ": {message: "Rovníková Guinea"},
    "PK": {message: "Pákistán"},
    "Number of users that pressed not working": {message: "Počet uživatelů kteří zvolili, že \"nefunguje\""},
    "NF": {message: "Norfolk"},
    "TD": {message: "Čad"},
    "SO": {message: "Somálsko"},
    "HM": {message: "Ostrovy Heard a McDonald"},
    "BD": {message: "Bangladéš"},

};
return E; });