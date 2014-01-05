'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Djibuti"},
    "JM": {message: "Jamaica"},
    "AT": {message: "Áustria"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Quer Hola em outros dispositivos (Xbox, PS, Apple TV, iPhone, etc)? Clique aqui"},
    "SZ": {message: "Suazilândia"},
    "YT": {message: "Mayotte"},
    "BN": {message: "Brunei"},
    "ZM": {message: "Zâmbia"},
    "app_desc": {message: "Acesse tudo na internet! Vá a um site bloqueado > clique no ícone Hola > mude a bandeira do país > APROVEITE!"},
    "Improve translation": {message: "Ajude a melhorar a tradução"},
    "more...": {message: "mais..."},
    "PR": {message: "Porto Rico"},
    "SH": {message: "Santa Helena"},
    "There seems to be an error": {message: "Parece que há um erro"},
    "MA": {message: "Marrocos"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Ilhas Marianas do Norte"},
    "Unblocker": {message: "Desbloqueador"},
    "Access any site from any country, free": {message: "Acesse qualquer site a partir de qualquer país!"},
    "Try to <span>reload</span>": {message: "Tente <span>recarregar</span>"},
    "UZ": {message: "Uzbequistão"},
    "PW": {message: "Palau"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Libéria"},
    "TN": {message: "Tunísia"},
    "EE": {message: "Estônia"},
    "CK": {message: "Ilhas Cook"},
    "BY": {message: "Belarus"},
    "NO": {message: "Noruega"},
    "KR": {message: "Coreia do Sul"},
    "BF": {message: "Burquina Faso"},
    "AM": {message: "Armênia"},
    "SR": {message: "Suriname"},
    "MG": {message: "Madagascar"},
    "ON": {message: "Ligado"},
    "BT": {message: "Butão"},
    "CF": {message: "República Centro-Africana"},
    "AE": {message: "Emirados Árabes Unidos"},
    "BA": {message: "Bósnia-Herzegovina"},
    "not working?": {message: "não funciona?"},
    "TH": {message: "Tailândia"},
    "Author:": {message: "Autor:"},
    "CC": {message: "Ilhas Coco"},
    "NC": {message: "Nova Caledônia"},
    "TO": {message: "Tonga"},
    "SE": {message: "Suécia"},
    "AZ": {message: "Azerbaijão"},
    "AF": {message: "Afeganistão"},
    "NG": {message: "Nigéria"},
    "KE": {message: "Quênia"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Clique aqui para começar"},
    "OM": {message: "Omã"},
    "LK": {message: "Sri Lanka"},
    "ID": {message: "Indonésia"},
    "FM": {message: "Micronésia"},
    "(some Hola features are not available on your version)": {message: "(Hola - alguns recursos não estão disponíveis na sua versão)"},
    "GM": {message: "Gâmbia"},
    "LV": {message: "Letônia"},
    "RU": {message: "Rússia"},
    "FI": {message: "Finlândia"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Obtenha Hola Plus para um serviço sem interrupções ou anúncios"},
    "LU": {message: "Luxemburgo"},
    "VE": {message: "Venezuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "Ilhas Virgens dos EUA"},
    "SN": {message: "Senegal"},
    "MX": {message: "México"},
    "IL": {message: "Israel"},
    "GG": {message: "Guernsey"},
    "more options...": {message: "mais opções..."},
    "Author site:": {message: "Site do autor:"},
    "DO": {message: "República Dominicana"},
    "HU": {message: "Hungria"},
    "OFF": {message: "Desligado"},
    "KH": {message: "Camboja"},
    "TG": {message: "Togo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola não funciona porque outra entensão está controlando as configurações de proxy. Por favor, desative outras extenções que você acha que podem controlar as configurações de proxy em <a>extensões</a> (como bloqueadores de anundios, outros serviços de VPN, etc)."},
    "BB": {message: "Barbados"},
    "JE": {message: "Jersey"},
    "Remove ads": {message: "Remover anúncios"},
    "DK": {message: "Dinamarca"},
    "PA": {message: "Panamá"},
    "CV": {message: "Cabo Verde"},
    "QA": {message: "Catar"},
    "Reload": {message: "Recarregar"},
    "GD": {message: "Granada"},
    "Number of users that use this option": {message: "Número de usuários que usam essa opção"},
    "MO": {message: "Macau, Região Admin. Especial da China"},
    "MF": {message: "São Martinho"},
    "HR": {message: "Croácia"},
    "CZ": {message: "República Tcheca"},
    "BL": {message: "São Bartolomeu"},
    "ST": {message: "São Tomé e Príncipe"},
    "AU": {message: "Austrália"},
    "IR": {message: "Irã"},
    "CG": {message: "Congo"},
    "BI": {message: "Burundi"},
    "GW": {message: "Guiné Bissau"},
    "MK": {message: "Macedônia"},
    "GR": {message: "Grécia"},
    "AG": {message: "Antígua e Barbuda"},
    "AI": {message: "Anguilla"},
    "AN": {message: "Antilhas Holandesas"},
    "UA": {message: "Ucrânia"},
    "EH": {message: "Saara Ocidental"},
    "KN": {message: "São Cristovão e Nevis"},
    "SC": {message: "Seychelles"},
    "MS": {message: "Montserrat"},
    "NL": {message: "Holanda"},
    "EC": {message: "Equador"},
    "HK": {message: "Hong Kong, Região Admin. Especial da China"},
    "MY": {message: "Malásia"},
    "CR": {message: "Costa Rica"},
    "VA": {message: "Vaticano"},
    "IO": {message: "Território Britânico do Oceano Índico"},
    "RS": {message: "Sérvia"},
    "SD": {message: "Sudão"},
    "CN": {message: "China"},
    "UY": {message: "Uruguai"},
    "PY": {message: "Paraguai"},
    "MU": {message: "Maurício"},
    "CH": {message: "Suíça"},
    "LI": {message: "Liechtenstein"},
    "KG": {message: "Quirguistão"},
    "GH": {message: "Gana"},
    "NU": {message: "Niue"},
    "PE": {message: "Peru"},
    "US": {message: "Estados Unidos"},
    "SL": {message: "Serra Leoa"},
    "FJ": {message: "Fiji"},
    "ER": {message: "Eritreia"},
    "IQ": {message: "Iraque"},
    "AS": {message: "Samoa Americana"},
    "TZ": {message: "Tanzânia"},
    "LY": {message: "Líbia"},
    "GT": {message: "Guatemala"},
    "BM": {message: "Bermudas"},
    "BV": {message: "Ilha Bouvet"},
    "LT": {message: "Lituânia"},
    "PM": {message: "Saint Pierre e Miquelon"},
    "SG": {message: "Cingapura"},
    "Initializing...": {message: "Inicializando..."},
    "TT": {message: "Trinidad e Tobago"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola não funciona bem no modo Windows 8. Por favor mude para o modo Área de Trabalho. Clique <a>aqui</a> para instruções"},
    "SY": {message: "Síria"},
    "SK": {message: "Eslováquia"},
    "GL": {message: "Groênlandia"},
    "PG": {message: "Papua-Nova Guiné"},
    "KI": {message: "Quiribati"},
    "CD": {message: "Congo-Kinshasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botsuana"},
    "ZW": {message: "Zimbábue"},
    "VC": {message: "São Vicente e Granadinas"},
    "JP": {message: "Japão"},
    "NA": {message: "Namíbia"},
    "TJ": {message: "Tadjiquistão"},
    "LC": {message: "Santa Lúcia"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Mongólia"},
    "IT": {message: "Itália"},
    "RE": {message: "Reunião"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Habilitar"},
    "Loading": {message: "Carregando"},
    "EG": {message: "Egito"},
    "FR": {message: "França"},
    "start": {message: "iniciar"},
    "RW": {message: "Ruanda"},
    "BE": {message: "Bélgica"},
    "UM": {message: "Ilhas Menores Distantes dos Estados Unidos"},
    "Accelerator": {message: "Acelerador"},
    "SA": {message: "Arábia Saudita"},
    "LS": {message: "Lesoto"},
    "ZA": {message: "África do Sul"},
    "PT": {message: "Portugal"},
    "CA": {message: "Canadá"},
    "Starting...": {message: "Iniciando..."},
    "CM": {message: "República dos Camarões"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "A versão grátis do Hola precisa ser reativada a cada 4 horas e é patrocinada por anúncios"},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Polônia"},
    "GA": {message: "Gabão"},
    "TM": {message: "Turcomenistão"},
    "KY": {message: "Ilhas Caiman"},
    "Verify you have Internet": {message: "Verifique se você está conectado à internet"},
    "LA": {message: "República Popular Democrática do Laos"},
    "PH": {message: "Filipinas"},
    "NI": {message: "Nicarágua"},
    "GU": {message: "Guam"},
    "TF": {message: "Territórios Franceses do Sul"},
    "KZ": {message: "Casaquistão"},
    "Report a problem": {message: "Relatar um problema"},
    "SJ": {message: "Svalbard e Jan Mayen"},
    "MM": {message: "Mianmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominica"},
    "NE": {message: "Níger"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mauritânia"},
    "changing...": {message: "mudando..."},
    "GS": {message: "Geórgia do Sul e Ilhas Sandwich do Sul"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Versão muito antiga do Chrome, <a>atualize</a> para usar Hola "},
    "ME": {message: "Montenegro"},
    "AX": {message: "Ilhas Aland"},
    "VG": {message: "Ilhas Virgens Britânicas"},
    "VN": {message: "Vietnã"},
    "CI": {message: "Costa do Marfim"},
    "DZ": {message: "Argélia"},
    "YE": {message: "Iêmen"},
    "GE": {message: "Geórgia"},
    "CX": {message: "Ilhas Natal"},
    "LB": {message: "Líbano"},
    "FK": {message: "Ilhas Malvinas"},
    "DE": {message: "Alemanha"},
    "even more...": {message: "ainda mais..."},
    "MV": {message: "Maldivas"},
    "PN": {message: "Pitcairn"},
    "BH": {message: "Bahrain"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Romênia"},
    "WF": {message: "Wallis e Futuna"},
    "AR": {message: "Argentina"},
    "GP": {message: "Guadalupe"},
    "IN": {message: "Índia"},
    "Unblocker site list": {message: "Lista de sites desbloqueados"},
    "AW": {message: "Aruba"},
    "FO": {message: "Ilhas Faroe"},
    "CS": {message: "Sérvia e Montenegro"},
    "BR": {message: "Brasil"},
    "HN": {message: "Honduras"},
    "MC": {message: "Mônaco"},
    "Translate to your language": {message: "Translate to your language"},
    "SB": {message: "Ilhas Salomão"},
    "NZ": {message: "Nova Zelândia"},
    "PS": {message: "Território da Palestina"},
    "UG": {message: "Uganda"},
    "GB": {message: "Reino Unido"},
    "HT": {message: "Haiti"},
    "GF": {message: "Guiana Francesa"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Versão antiga do Firefox. Clique <a>aqui</a> para atualizar."},
    "ZZ": {message: "Região desconhecida ou inválida"},
    "KM": {message: "Comores"},
    "KW": {message: "Kuwait"},
    "TC": {message: "Ilhas Turks e Caicos"},
    "MQ": {message: "Martinica"},
    "ES": {message: "Espanha"},
    "MZ": {message: "Moçambique"},
    "BO": {message: "Bolívia"},
    "AL": {message: "Albânia"},
    "MD": {message: "Moldávia"},
    "TR": {message: "Turquia"},
    "GN": {message: "Guiné"},
    "SI": {message: "Eslovênia"},
    "CO": {message: "Colômbia"},
    "Settings": {message: "Configuração"},
    "AQ": {message: "Antártida"},
    "JO": {message: "Jordânia"},
    "SM": {message: "San Marino"},
    "CU": {message: "Cuba"},
    "CL": {message: "Chile"},
    "ML": {message: "Mali"},
    "ET": {message: "Etiópia"},
    "IS": {message: "Islândia"},
    "Reload Hola": {message: "Recarregar Hola"},
    "back to": {message: "voltar para"},
    "MH": {message: "Ilhas Marshall"},
    "BG": {message: "Bulgária"},
    "BS": {message: "Bahamas"},
    "TL": {message: "Timor Leste"},
    "BZ": {message: "Belize"},
    "CY": {message: "Chipre"},
    "IM": {message: "Ilha de Man"},
    "IE": {message: "Irlanda"},
    "Get help from engineer over skype:": {message: "Obtenha ajuda de um engenheiro pelo skype:"},
    "TW": {message: "Taiwan"},
    "KP": {message: "Coreia do Norte"},
    "PF": {message: "Polinésia Francesa"},
    "app_name": {message: "Hola, Uma Internet Melhor"},
    "Update": {message: "Atualizar"},
    "MW": {message: "Malawi"},
    "GY": {message: "Guiana"},
    "Unblocker is disabled": {message: "O desbloqueador está desativado"},
    "PK": {message: "Paquistão"},
    "GQ": {message: "Guiné Equatorial"},
    "Number of users that pressed not working": {message: "Número de usuários que clicaram em 'não funciona'"},
    "NF": {message: "Ilha Norfolk"},
    "SO": {message: "Somália"},
    "TD": {message: "Chade"},
    "BD": {message: "Bangladesh"},
    "HM": {message: "Ilha Heard e Ilhas McDonald"},

};
return E; });