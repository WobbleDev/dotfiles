'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "ហ្ស៉ីបូទី"},
    "JM": {message: "ហ្សាម៉ាអ៉ិគ"},
    "AT": {message: "អូទ្រីស"},
    "PG": {message: "ប៉ាពូអានូវែលហ្គីណេ"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "ចង់ Hola នៅ​លើ​ឧបករណ៍​ផ្សេង​ទៀត​? (Xbox​, PS ក្រុមហ៊ុន Apple ទូរទស្សន៍​ទូរស័ព្ទ iPhone ... ) ។ សូម​ចុច​នៅ​ទីនេះ"},
    "KI": {message: "គិរិបាទី"},
    "SZ": {message: "សូហ្ស៉ីឡង់"},
    "BN": {message: "ប៊្រុយណេ"},
    "ZM": {message: "ហ្សាំប៊ី"},
    "app_desc": {message: "ចូល​ដំណើរ​ការ​ទាំងអស់​នៃ​អ៊ីនធឺណិត​! សូម​ចូល​ទៅ​កាន់​វ​​ែ​ប​សាយ​ត៍​បាន​ទប់ស្កាត់ -​> ចុច​កណ្ដុរ Hola រូបតំណាង -​> ទង់ជាតិ​ប្រទេស​ការ​ផ្លាស់​ប្តូ​រ -​> រីករាយ​!"},
    "AO": {message: "អង់ហ្គោឡា"},
    "BW": {message: "បុតស្វាណា"},
    "Improve translation": {message: "កែ​លម្អ​ការ​បកប្រែ"},
    "ZW": {message: "ហ្ស៊ីមបាបវ៉េ"},
    "more...": {message: "បន្ថែម​ទៀត ..."},
    "PR": {message: "ព័រតូរីកូ"},
    "JP": {message: "ជប៉ុន"},
    "NA": {message: "ណាមីប៊ី"},
    "TJ": {message: "តាដហ្ស៉ីគីស្តង់"},
    "There seems to be an error": {message: "វា​ហាក់​ដូច​ជា​មាន​កំហុស​មួយ"},
    "MA": {message: "ម៉ារ៉ុក"},
    "SV": {message: "អែលសាល់វ៉ាឌ័រ"},
    "MT": {message: "ម៉ាល់តា"},
    "MN": {message: "ម៉ុងហ្គោលី"},
    "IT": {message: "អ៊ីតាលី"},
    "WS": {message: "សាមូអា"},
    "Unblocker": {message: "Unblocker"},
    "Enable": {message: "អនុញ្ញាត"},
    "Access any site from any country, free": {message: "ចូល​ដំណើរការ​តំបន់​បណ្ដាញ​ពី​ប្រទេស​ណា​មួយ​ទេ​ណា​មួយ​ដោយ​ឥត​គិត​ថ្លៃ"},
    "Loading": {message: "កំពុង​ផ្ទុក"},
    "EG": {message: "អេហ្ស៉ីប"},
    "FR": {message: "បារាំង"},
    "UZ": {message: "អ៊ូហ្សបេគីស្តង់"},
    "start": {message: "ចាប់​ផ្តើ​ម"},
    "LR": {message: "លីបេរីយ៉ា"},
    "RW": {message: "រវ៉ាន់ដា"},
    "TN": {message: "ទុយនេស៊ី"},
    "BE": {message: "បែលហ្ស៉ិក"},
    "EE": {message: "អេស្តូនី"},
    "BY": {message: "បេឡារុស្ស"},
    "Accelerator": {message: "បង្កើន​ល្បឿន"},
    "KR": {message: "សាធារណរដ្ឋកូរ៉េ"},
    "SA": {message: "អារ៉ាប៊ីសាអ៊ូឌីត"},
    "LS": {message: "លើសូតូ"},
    "NO": {message: "ន័រវែស"},
    "ZA": {message: "អាហ្វ្រិកខាងត្បូង"},
    "PT": {message: "ព័រទុយហ្កាល់"},
    "BF": {message: "ប៊ូរគីណាហ្វាសូ"},
    "CA": {message: "កាណាដា"},
    "AM": {message: "អារមេនី"},
    "Starting...": {message: "កំពុង​ចាប់ផ្ដើម ..."},
    "CM": {message: "កាមេរូន"},
    "SR": {message: "សូរីណាម"},
    "MG": {message: "ម៉ាដាហ្កាស្ការ"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "កំណែ​ដែល​ឥត​គិត​ថ្លៃ​នៃ Hola ត្រូវការ​ត្រូវ​បាន​បើក​ឡើង​វិញ​ជា​រៀង​រាល់ 4 ម៉ោង​ហើយ​ត្រូវ​បាន​ឧបត្ថម្ភ​ដោយ​ការផ្សាយពាណិជ្ជកម្ម​។"},
    "ON": {message: "លើ"},
    "NP": {message: "នេប៉ាល់"},
    "Hola": {message: "Hola"},
    "BT": {message: "ប៊ូតាន"},
    "PL": {message: "ប៉ូលូញ"},
    "GA": {message: "ហ្គាបុង"},
    "CF": {message: "សាធារណរដ្ឋអាហ្វ្រិកកណ្ដាល"},
    "TM": {message: "ទួគមេនីស្តង់"},
    "AE": {message: "អេមីរ៉ែទអារ៉ាប់រួម"},
    "BA": {message: "បូស្ន៉ី"},
    "TH": {message: "ថៃ"},
    "Author:": {message: "អ្នកនិពន្ធ​:"},
    "Verify you have Internet": {message: "សុទ្ធតែ​បាន​បញ្ជាក់​់​អ្នក​មាន​អ៊ី​ន​ធឺ​ណែ"},
    "LA": {message: "ឡាវ"},
    "PH": {message: "ហ្វ៉ីលីពីន"},
    "NI": {message: "នីការ៉ាហ្គ័រ"},
    "KZ": {message: "កាហ្សាក់ស្តាង់់"},
    "MM": {message: "មីយ៉ាន់ម៉ា"},
    "NE": {message: "នីហ្សេរ"},
    "DM": {message: "ដូមីនីកា"},
    "TO": {message: "តុងហ្គា"},
    "MR": {message: "ម៉ូរីតានី"},
    "AD": {message: "អានដូរ៉ា"},
    "SE": {message: "ស៊ុយអែដ"},
    "changing...": {message: "ការ​ផ្លាស់​ប្តូ​រ ..."},
    "AZ": {message: "អាហ៊្សែរបែហ្សង់"},
    "AF": {message: "អាហ្វហ្គានីស្ថាន"},
    "NG": {message: "នីហ្សេរីយ៉ា"},
    "KE": {message: "កេនយ៉ា"},
    "BJ": {message: "បេណាំង"},
    "Turn on to get started": {message: "បើក​នៅ​លើ​ដើម្បី​ចាប់​ផ្តើ​ម"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "កំណែ​ដែល​ចាស់​ណាស់​នៃ Chrome​, <a> ធ្វើ​ឱ្យ​ទាន់​សម័យ </a> Chrome ដើម្បី​ប្រើ Hola"},
    "OM": {message: "អូម៉ង់"},
    "VN": {message: "វៀតណាម"},
    "DZ": {message: "អាល់ហ្សេរី"},
    "YE": {message: "យេមែន"},
    "CI": {message: "កូដឌីវ័រ"},
    "LK": {message: "ស្រីលង្កា"},
    "ID": {message: "ឥណ្ឌូនេស៊ី"},
    "FM": {message: "មិក្រូនេស៊ី"},
    "(some Hola features are not available on your version)": {message: "(លក្ខណៈ​ពិសេស​មួយ​ចំនួន Hola គឺ​មិន​អាច​ប្រើ​បាន​នៅ​លើ​កំណែ​របស់​អ្នក​)"},
    "GE": {message: "ហ្សកហ្ស៉ី"},
    "GM": {message: "ហ្គាំប៊ី"},
    "LV": {message: "ឡាតវីយ៉ា"},
    "LB": {message: "លីបង់"},
    "RU": {message: "រូស្ស៊ី"},
    "DE": {message: "អាល្លឺម៉ង់"},
    "FI": {message: "ហ្វាំងឡង់"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "ទទួល​បាន Hola បូក​សម្រាប់​ការ​អង្គការ​សហ​ប្រជាជាតិ​ផ្អាក​សេវា Ad​-ឥត​គិត​ថ្លៃ​។"},
    "even more...": {message: "ទោះ​បី​ជា​មាន​ច្រើន​ទៀត ..."},
    "LU": {message: "លុចហ្សំបួរ"},
    "VE": {message: "វេនេហ្ស៊ុយឡា"},
    "BH": {message: "បារ៉ែន"},
    "RO": {message: "រូម៉ានី"},
    "IN": {message: "ឥណ្ឌា"},
    "AR": {message: "អាហ្សង់ទីន"},
    "SN": {message: "សេនេហ្កាល់"},
    "MX": {message: "ម៉ិចសិក"},
    "Unblocker site list": {message: "តំបន់​ប​ណ្តា​ញ​បញ្ជី Unblocker"},
    "HN": {message: "ហុងឌួរ៉ាស់"},
    "MC": {message: "ម៉ូណាកូ"},
    "BR": {message: "ប្រេស៊ីល"},
    "IL": {message: "អ៊ីស្រាអែល"},
    "Author site:": {message: "តំបន់​ប​ណ្តា​ញ​អ្នកនិពន្ធ​:"},
    "Translate to your language": {message: "បកប្រែ​ទៅ​ជា​ភាសា​របស់​អ្នក"},
    "HU": {message: "ហុងគ្រី"},
    "DO": {message: "សាធារណរដ្ឋដូមីនីកែន"},
    "NZ": {message: "នូវែលហ្សេឡង់"},
    "PS": {message: "ប៉ាលេស្ទីន"},
    "UG": {message: "អ៊ូហ្កង់ដា"},
    "OFF": {message: "បិត"},
    "KH": {message: "កម្ពុជា"},
    "TG": {message: "តូហ្គូ"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola មិន​អាច​ធ្វើការ​បាន​ត្រឹមត្រូវ​ទេ​ព្រោះ​ផ្នែក​បន្ថែម​មួយ​ផ្សេង​ទៀត​ត្រូវ​បាន​ត្រួតពិនិត្យ​ការ​កំណត់​ប្រូកស៊ី​របស់​អ្នក​។ សូម​បិទ​ផ្នែក​បន្ថែម​ផ្សេង​ទៀត​ដែល​អ្នក​គិត​ថា​អាច​នឹង​ត្រួត​ពិនិត្យ​ការ​កំណត់​ប្រូកស៊ី​របស់​អ្នក​នៅ​ក្នុង​ផ្នែក​<a> បន្ថែម </a> (ដូច​ជា Ad បាន​ទប់​ស្កាត់​សេវាកម្ម VPN ផ្សេង​ទៀត​ជាដើម​) ។"},
    "BB": {message: "បារបាដូស"},
    "Remove ads": {message: "យក​ព​ត៌​មាន​ផ្សព្វផ្សាយ"},
    "HT": {message: "ហៃទី"},
    "DK": {message: "ដាណឺម៉ាក"},
    "PA": {message: "ប៉ាណាម៉ា"},
    "QA": {message: "កាតារ"},
    "CV": {message: "កាបវែរ"},
    "Reload": {message: "ផ្ទុក​ឡើង​វិញ"},
    "Number of users that use this option": {message: "ចំនួន​នៃ​អ្នក​ប្រើ​ដែល​ប្រើ​ជម្រើស​នេះ"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "កំណែ​ចាស់​នៃ​ការ​របស់ Firefox ។ សារ​ព​ត៌​មាន <a> នៅ​ទីនេះ </a> ដើម្បី​ធ្វើ​ឱ្យ​ប្រសើរ​ឡើង​។"},
    "KM": {message: "កុំម៉ូរ៉ូស"},
    "KW": {message: "គុយវ៉ែត"},
    "HR": {message: "ក្រូអាស៊ី"},
    "CZ": {message: "សាធារណរដ្ឋឆេក"},
    "MZ": {message: "ម៉ូហ្សាំប៊ិក"},
    "ES": {message: "អេស្ប៉ាញ"},
    "BO": {message: "បូលីវី"},
    "AU": {message: "អូស្ត្រាលី"},
    "AL": {message: "អាល់បានី"},
    "IR": {message: "អ៊ីរ៉ង់"},
    "CG": {message: "កុងហ្គោ"},
    "MD": {message: "សាធារណរដ្ឋម៉ុលដាវី"},
    "TR": {message: "ទួរគី"},
    "BI": {message: "ប៊ូរុនឌី"},
    "GN": {message: "ហ្គីណេ"},
    "GW": {message: "ហ្គីណេប៊ីសូ"},
    "MK": {message: "ម៉ាសេដន"},
    "GR": {message: "ក្រិច"},
    "SI": {message: "ស្លូវេនី"},
    "CO": {message: "កូឡុំប៊ី"},
    "Settings": {message: "ការ​កំណត់"},
    "JO": {message: "ហ៊្សកដានី"},
    "UA": {message: "អ៊ុយក្រែន"},
    "CL": {message: "ឈីលី"},
    "CU": {message: "គុយបា"},
    "EH": {message: "សាហារ៉ាខាងលិច"},
    "ML": {message: "ម៉ាលី"},
    "ET": {message: "អេត្យូពី"},
    "SC": {message: "សីសែល"},
    "IS": {message: "អ៉ីស្លង់"},
    "NL": {message: "ហូល្លង់"},
    "Reload Hola": {message: "ផ្ទុក​ឡើង​វិញ Hola"},
    "EC": {message: "អេក្វាឌ័រ"},
    "HK": {message: "ហុងកុង"},
    "MY": {message: "ម៉ាលេស៉ី"},
    "CR": {message: "កូស្តារីកា"},
    "VA": {message: "វ៉ាទីកង់"},
    "back to": {message: "ត្រលប់​ទៅ"},
    "SD": {message: "ស៊ូដង់"},
    "CN": {message: "ចិន"},
    "BG": {message: "ប៊ុលហ្គារី"},
    "UY": {message: "អ៊ុយរុយហ្គាយ"},
    "PY": {message: "ប៉ារ៉ាហ្គាយ"},
    "BS": {message: "បាហាម៉ា"},
    "TL": {message: "ទីម័រខាងកើត"},
    "MU": {message: "ម៉ូរីទុស"},
    "LI": {message: "លិចទេនស្តែន"},
    "CH": {message: "ស្វីស"},
    "KG": {message: "គៀរហ្គីស្តង់"},
    "GH": {message: "ហ្កាណា"},
    "PE": {message: "ប៉េរូ"},
    "US": {message: "សហរដ្ឋអាមេរិក"},
    "BZ": {message: "បេលីហ្ស"},
    "SL": {message: "សេរ៉ាឡេអូន"},
    "CY": {message: "ស៉ីពរ៍"},
    "FJ": {message: "ហ្វ៉ីហ្ស៉ី"},
    "IE": {message: "អៀរឡង់"},
    "Get help from engineer over skype:": {message: "ទទួល​បាន​ជំនួយ​ពី​វិស្វករ​នៅ​លើ Skype​:"},
    "TW": {message: "តៃវ៉ាន់"},
    "KP": {message: "សាធារណរដ្ឋប្រជាធិបតេយ្យប្រជាមានិតកូរ៉េ"},
    "ER": {message: "អេរីទ្រា"},
    "app_name": {message: "អ៊ិ​ន​ធឺ​ណិ Hola កាន់តែ​ប្រសើរ"},
    "IQ": {message: "អ៊ីរ៉ាក់"},
    "Update": {message: "ធ្វើ​ឱ្យ​ទាន់សម័យ"},
    "TZ": {message: "តង់ហ្សានី"},
    "LY": {message: "លីប៊ី"},
    "GT": {message: "ហ្គាតេម៉ាឡា"},
    "GY": {message: "ហ្គីយ៉ាណា"},
    "Unblocker is disabled": {message: "Unblocker ត្រូវ​បាន​បិទ"},
    "$1 blocked?": {message: "$1 បាន​ទប់ស្កាត់​?"},
    "GQ": {message: "ហ្គីណេអេក្វាទ័រ"},
    "PK": {message: "ប៉ាគីស្ថាន"},
    "$1 unblocked": {message: "$1 unblocked"},
    "LT": {message: "លីទុយអានី"},
    "Number of users that pressed not working": {message: "ចំនួន​នៃ​អ្នក​ប្រើ​ដែល​បាន​សង្កត់​មិន​ធ្វើការ​ងារ"},
    "SG": {message: "សិង្ហបុរី"},
    "Initializing...": {message: "កំពុង​ចាប់​ផ្ដើម ..."},
    "TT": {message: "ទ្រីនីដាដនឹងតូបាហ្គោ"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola មិន​ធ្វើការ​បាន​យ៉ាង​ល្អ​ក្នុង Windows 8 របៀប​។ សូម​ប្ដូរ​ទៅ​របៀប​ផ្ទៃតុ​។ ចុច <a> នៅ​ទីនេះ </a> សម្រាប់​សេចក្តី​ណែនាំ"},
    "TD": {message: "ឆាដ"},
    "SO": {message: "សូម៉ាលី"},
    "SY": {message: "ស៊ីរី"},
    "SK": {message: "ស្លូវ៉ាគី"},
    "BD": {message: "បង់ក្លាដេស្ហ"},

};
return E; });