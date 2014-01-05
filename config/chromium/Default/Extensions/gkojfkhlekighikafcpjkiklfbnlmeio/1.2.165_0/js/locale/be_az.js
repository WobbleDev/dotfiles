'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "Ciboti"},
    "JM": {message: "Yamayka"},
    "AT": {message: "Avstriya"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "Digər cihazlar Hola istəyirsiniz? (Xbox, PS, Apple TV, iPhone ...). Buraya basın"},
    "SZ": {message: "svazilənd"},
    "YT": {message: "Mayot"},
    "BN": {message: "Bruney"},
    "ZM": {message: "Zambiya"},
    "app_desc": {message: "İnternet bütün girmə imkanı! Blok site to -> klik Hola icon -> dəyişiklik ölkə bayrağı -> zövq alın!"},
    "Improve translation": {message: "Tərcümə təkmilləşdirilməsi"},
    "more...": {message: "ətraflı ..."},
    "PR": {message: "Puerto Riko"},
    "SH": {message: "Seynt Elena"},
    "There seems to be an error": {message: "Bir səhv var görünür"},
    "MA": {message: "Morokko"},
    "MT": {message: "Malta"},
    "SV": {message: "El Salvador"},
    "MP": {message: "Şimal Mariana Adaları"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "Azad, hər bir ölkə hər hansı bir site daxil"},
    "Try to <span>reload</span>": {message: "<span> Yenidən </span> çalışın"},
    "UZ": {message: "Özbəkistan"},
    "PW": {message: "Palav"},
    "TK": {message: "Tokelau"},
    "LR": {message: "Liberiya"},
    "TN": {message: "Tunisiya"},
    "EE": {message: "Estoniya"},
    "CK": {message: "Kuk Adaları"},
    "BY": {message: "Belarus"},
    "NO": {message: "Norvec"},
    "KR": {message: "Cənub Koreya"},
    "BF": {message: "Burkina Faso"},
    "AM": {message: "Ermənistan"},
    "SR": {message: "surinamə"},
    "MG": {message: "Madaqaskar"},
    "ON": {message: "ON"},
    "BT": {message: "Butan"},
    "CF": {message: "Orta Afrika respublikası"},
    "AE": {message: "Birləşmiş Ərəb Emiratları"},
    "BA": {message: "Bosniya və Herzokovina"},
    "TH": {message: "tayland"},
    "Author:": {message: "Author:"},
    "CC": {message: "Kokos Adaları"},
    "NC": {message: "Yeni Kaledoniya"},
    "TO": {message: "Tonqa"},
    "SE": {message: "isveç"},
    "AZ": {message: "Azərbaycan"},
    "AF": {message: "Əfqənistan"},
    "NG": {message: "Nijeriya"},
    "KE": {message: "Kenya"},
    "BJ": {message: "Benin"},
    "Turn on to get started": {message: "Başlamaq üçün yandırın"},
    "OM": {message: "Oman"},
    "LK": {message: "Şri Lanka"},
    "ID": {message: "İndoneziya"},
    "FM": {message: "Mikronesiya"},
    "(some Hola features are not available on your version)": {message: "(Bəzi Hola funksiyalar Sizin versiyası mövcud deyil)"},
    "GM": {message: "Qambiya"},
    "LV": {message: "Latviya"},
    "RU": {message: "Rusiya"},
    "FI": {message: "Finlandiya"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "Un-müdaxilə, reklam pulsuz xidmət Hola Plus alın."},
    "LU": {message: "Lüksemburq"},
    "VE": {message: "Venesuela"},
    "TV": {message: "Tuvalu"},
    "VI": {message: "ABŞ Virqin Adaları"},
    "SN": {message: "Seneqal"},
    "MX": {message: "Meksika"},
    "IL": {message: "İzrail"},
    "GG": {message: "Görnsey"},
    "Author site:": {message: "Author site:"},
    "HU": {message: "Macaristan"},
    "DO": {message: "Dominik Respublikası"},
    "OFF": {message: "OFF"},
    "KH": {message: "Kambodiya"},
    "TG": {message: "Toqo"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Başqa uzadılması proxy ayarlarını kontrol, çünki Hola düzgün qaydada işləməyəcək bilər. Siz <a> uzantıları </a> proxy ayarları (məsələn, ad-blokerlerinin, digər VPN xidmətlər, və s) nəzarət bilər edirəm ki, digər uzantıları aradan buraxın."},
    "BB": {message: "Barbados"},
    "JE": {message: "Cörsi"},
    "Remove ads": {message: "Reklam aradan qaldırılması"},
    "DK": {message: "Danemarka"},
    "PA": {message: "Panama"},
    "QA": {message: "Qatar"},
    "CV": {message: "Kape Verde"},
    "Reload": {message: "Yenidən yükləmək"},
    "GD": {message: "Qrenada"},
    "Number of users that use this option": {message: "Bu seçimi istifadə edən istifadəçilərin sayı"},
    "MO": {message: "Makao Çina"},
    "MF": {message: "Seynt Martin"},
    "HR": {message: "Xorvatiya"},
    "CZ": {message: "Çex respublikası"},
    "BL": {message: "Seynt Bartelemey"},
    "ST": {message: "Sao Tom və Prinsip"},
    "AU": {message: "Avstraliya"},
    "IR": {message: "İran"},
    "CG": {message: "Konqo - Brazavil"},
    "GW": {message: "Qvineya-Bisau"},
    "BI": {message: "Burundi"},
    "MK": {message: "Masedoniya"},
    "GR": {message: "Yunanıstan"},
    "AG": {message: "Antiqua və Barbuda"},
    "AI": {message: "Anquila"},
    "AN": {message: "Hollandiya antilleri"},
    "UA": {message: "Ukraina"},
    "EH": {message: "Qərb Sahara"},
    "KN": {message: "Seynt Kits və Nevis"},
    "SC": {message: "Seyçels"},
    "NL": {message: "Hollandiya"},
    "MS": {message: "Montserat"},
    "EC": {message: "Ekvador"},
    "HK": {message: "Honk Konq çina"},
    "MY": {message: "Malaysiya"},
    "CR": {message: "Kosta Rika"},
    "VA": {message: "Vatikan"},
    "IO": {message: "Britaniya-Hindistan Okeanik territoriyası"},
    "SD": {message: "sudan"},
    "RS": {message: "Serbiya"},
    "CN": {message: "Çin"},
    "UY": {message: "Uruqvay"},
    "PY": {message: "Paraqvay"},
    "MU": {message: "Mavritis"},
    "CH": {message: "isveçriya"},
    "LI": {message: "Lixtenşteyn"},
    "GH": {message: "Qana"},
    "KG": {message: "Kırqızstan"},
    "NU": {message: "Niye"},
    "PE": {message: "Peru"},
    "US": {message: "Amerika Birləşmiş Ştatları"},
    "SL": {message: "Siyera Leon"},
    "FJ": {message: "Fici"},
    "ER": {message: "Eritreya"},
    "IQ": {message: "İrak"},
    "AS": {message: "Amerika Samoası"},
    "TZ": {message: "tanzaniya"},
    "LY": {message: "Libya"},
    "GT": {message: "Qvatemala"},
    "BM": {message: "Bermuda"},
    "BV": {message: "Bove Adası"},
    "LT": {message: "Litva"},
    "SG": {message: "Sinqapur"},
    "PM": {message: "Seynt Piyer və Mikelon"},
    "Initializing...": {message: "Başlatılıyor ..."},
    "TT": {message: "Trinidan və Tobaqo"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola Windows 8 rejimində yaxşı işləmir. Masa üstü moduna edin. Talimatlar üçün <a> burada </a> basın"},
    "SY": {message: "siriya"},
    "SK": {message: "Slovakiya"},
    "GL": {message: "Qrinland"},
    "PG": {message: "Papua Yeni Qvineya"},
    "KI": {message: "Kiribati"},
    "CD": {message: "Konqo - Kinşasa"},
    "AO": {message: "Angola"},
    "BW": {message: "Botsvana"},
    "ZW": {message: "Zimbabve"},
    "VC": {message: "Seynt Vinsent və Qrenada"},
    "JP": {message: "Yaponiya"},
    "NA": {message: "Namibiya"},
    "TJ": {message: "tacikistan"},
    "LC": {message: "Seynt Lusiya"},
    "VU": {message: "Vanuatu"},
    "MN": {message: "Monqoliya"},
    "IT": {message: "İtaliya"},
    "RE": {message: "Reyunion"},
    "WS": {message: "Samoa"},
    "Enable": {message: "Enable"},
    "Loading": {message: "Yükvurma"},
    "FR": {message: "Fransa"},
    "EG": {message: "Misir"},
    "start": {message: "başlamaq"},
    "RW": {message: "Rvanda"},
    "UM": {message: "Birləşmiş Ştatların uzaq adaları"},
    "BE": {message: "Belçika"},
    "Accelerator": {message: "Sürətləndirici"},
    "LS": {message: "Lesoto"},
    "SA": {message: "Saudi Ərəbistan"},
    "ZA": {message: "Cənub Afrika"},
    "PT": {message: "Portuqal"},
    "CA": {message: "Kanada"},
    "Starting...": {message: "Başlanğıc ..."},
    "CM": {message: "Kamerun"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Hola azad versiyası hər 4 saat yenidən effektiv və reklam tərəfindən maliyyələşdirilir lazımdır."},
    "Hola": {message: "Hola"},
    "NP": {message: "Nepal"},
    "PL": {message: "Polşa"},
    "GA": {message: "Qabon"},
    "TM": {message: "Türkmənistan"},
    "KY": {message: "Kayman Adaları"},
    "Verify you have Internet": {message: "İnternet var yoxlamaq"},
    "LA": {message: "Laos"},
    "PH": {message: "Filipin"},
    "NI": {message: "Nikaraqua"},
    "TF": {message: "Fransız Cənub teritoriyası"},
    "GU": {message: "Quam"},
    "KZ": {message: "Kazaxstan"},
    "SJ": {message: "svalbard və yan mayen"},
    "MM": {message: "Myanmar"},
    "NR": {message: "Nauru"},
    "DM": {message: "Dominika"},
    "NE": {message: "nijer"},
    "AD": {message: "Andorra"},
    "MR": {message: "Mavritaniya"},
    "changing...": {message: "dəyişdirilməsi ..."},
    "GS": {message: "Cənub Gürcüstan və Cənub Sandvilç Adaları"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Chrome Çox köhnə versiyası <a> yeniləmə </a> Chrome Hola istifadə etmək"},
    "ME": {message: "Monteneqro"},
    "AX": {message: "Aland Adaları"},
    "VG": {message: "Britaniya Virgin Adaları"},
    "VN": {message: "Vyetnam"},
    "DZ": {message: "Cezayır"},
    "YE": {message: "Yemen"},
    "CI": {message: "İvori Sahili"},
    "GE": {message: "Gürcüstan"},
    "CX": {message: "Çristmas Adası"},
    "LB": {message: "Lebanon"},
    "FK": {message: "Folkland Adaları"},
    "DE": {message: "Almaniya"},
    "even more...": {message: "daha ..."},
    "MV": {message: "Maldiv"},
    "PN": {message: "Pitkarn"},
    "BH": {message: "Bahreyn"},
    "GI": {message: "Gibraltar"},
    "RO": {message: "Romaniya"},
    "WF": {message: "Valis və Futuna"},
    "AR": {message: "Arqentina"},
    "IN": {message: "Hindistan"},
    "GP": {message: "Qvadalup"},
    "Unblocker site list": {message: "Unblocker site siyahısı"},
    "FO": {message: "Faro Adaları"},
    "AW": {message: "Aruba"},
    "BR": {message: "Braziliya"},
    "MC": {message: "Monako"},
    "HN": {message: "Qonduras"},
    "Translate to your language": {message: "Dilinizə tərcümə"},
    "SB": {message: "Solomon Adaları"},
    "PS": {message: "Fələstin Bölqüsü"},
    "NZ": {message: "Yeni Zelandiya"},
    "UG": {message: "Uqanda"},
    "GB": {message: "Birləşmiş Krallıq"},
    "HT": {message: "Haiti"},
    "GF": {message: "Fransız Quyanası"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Firefox Köhnə versiyası. Mətbuat <a> burada </a> təkmilləşdirmək."},
    "ZZ": {message: "bilinmir"},
    "KM": {message: "Komoros"},
    "KW": {message: "Kuveyt"},
    "MQ": {message: "Martiniqu"},
    "TC": {message: "Türk və Kaykos Adaları"},
    "MZ": {message: "Mazambik"},
    "ES": {message: "İspaniya"},
    "BO": {message: "Boliviya"},
    "AL": {message: "Albaniya"},
    "MD": {message: "Moldova"},
    "TR": {message: "Türkiya"},
    "GN": {message: "Qvineya"},
    "CO": {message: "Kolumbiya"},
    "SI": {message: "Sloveniya"},
    "Settings": {message: "Ayarları"},
    "AQ": {message: "Antarktika"},
    "JO": {message: "Ürdün"},
    "SM": {message: "San Marino"},
    "CU": {message: "Kuba"},
    "CL": {message: "Çile"},
    "ML": {message: "Mali"},
    "ET": {message: "Efiopiya"},
    "IS": {message: "İslandiya"},
    "Reload Hola": {message: "Hola yenidən yüklə"},
    "back to": {message: "geri"},
    "MH": {message: "Marşal Adaları"},
    "BG": {message: "Bolqariya"},
    "BS": {message: "Bahamalar"},
    "TL": {message: "Şərq Timor"},
    "BZ": {message: "Beliz"},
    "CY": {message: "Kipr"},
    "IM": {message: "Man Adası"},
    "IE": {message: "İrlandiya"},
    "Get help from engineer over skype:": {message: "Üzərində skype mühəndis yardım alın:"},
    "TW": {message: "tayvan"},
    "KP": {message: "Şimal Koreya"},
    "PF": {message: "Fransız Polineziya"},
    "app_name": {message: "Hola Better İnternet"},
    "Update": {message: "Update"},
    "MW": {message: "Malavi"},
    "GY": {message: "Quyana"},
    "$1 blocked?": {message: "$1 bağlanacaq?"},
    "Unblocker is disabled": {message: "Unblocker aradan"},
    "PK": {message: "Pakistan"},
    "GQ": {message: "Ekvator Qineya"},
    "$1 unblocked": {message: "Engelleyicisi $1"},
    "Number of users that pressed not working": {message: "Iş deyil bərk ki, istifadəçilər sayı"},
    "NF": {message: "Norfolk Adası"},
    "TD": {message: "Çad"},
    "SO": {message: "Somaliya"},
    "BD": {message: "Banqladeş"},
    "HM": {message: "Hörd və Makdonald Adaları"},

};
return E; });