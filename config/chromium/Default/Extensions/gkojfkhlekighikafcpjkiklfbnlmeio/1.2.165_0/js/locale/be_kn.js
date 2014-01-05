'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "ಜಿಬೋಟಿ"},
    "JM": {message: "ಜಮೈಕಾ"},
    "AT": {message: "ಆಸ್ಟ್ರಿಯಾ"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "ಇತರ ಸಾಧನಗಳಲ್ಲಿ ಹೊಲಾ ಬಯಸುವಿರಾ? (ಎಕ್ಸ್ ಬಾಕ್ಸ್, ಪಿಎಸ್, ಆಪಲ್ ಟಿವಿ, ಐಫೋನ್ ...). ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ"},
    "SZ": {message: "ಸ್ವಾಜಿಲ್ಯಾಂಡ್"},
    "YT": {message: "ಮಯೊಟ್ಟೆ"},
    "BN": {message: "ಬ್ರೂನಿ"},
    "ZM": {message: "ಝಾಂಬಿಯಾ"},
    "app_desc": {message: "ಇಂಟರ್ನೆಟ್ ಎಲ್ಲಾ ಪ್ರವೇಶಿಸಿ! ನಿರ್ಬಂಧಿಸಿದ ಸೈಟ್ ಹೋಗಿ -> ಕ್ಲಿಕ್ ಹೊಲಾ ಐಕಾನ್ -> ಬದಲಾವಣೆ ದೇಶದ ಧ್ವಜ -> ಆನಂದಿಸಿ!"},
    "Improve translation": {message: "ಅನುವಾದ ಸುಧಾರಿಸಿ"},
    "more...": {message: "ಹೆಚ್ಚು ..."},
    "PR": {message: "ಪ್ಯೂರ್ಟೋ ರಿಕೊ"},
    "SH": {message: "ಸೇಂಟ್ ಹೆಲೆನಾ"},
    "There seems to be an error": {message: "ದೋಷ ಹಾಗಿದೆ"},
    "MA": {message: "ಮೊರಾಕ್ಕೊ"},
    "MT": {message: "ಮಾಲ್ಟಾ"},
    "SV": {message: "ಎಲ್ ಸಾಲ್ವೇಡಾರ್"},
    "MP": {message: "ಉತ್ತರ ಮರಿಯಾನಾ ದ್ವೀಪಗಳು"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "ಉಚಿತ, ಯಾವುದೇ ದೇಶದ ಯಾವುದೇ ಸೈಟ್ ಪ್ರವೇಶಿಸಿ"},
    "Try to <span>reload</span>": {message: "<span> ಮರುಲೋಡ್ </span> ಪ್ರಯತ್ನಿಸಿ"},
    "PW": {message: "ಪಲಾವು"},
    "UZ": {message: "ಉಜ್ಬೇಕಿಸ್ಥಾನ್"},
    "LR": {message: "ಲಿಬೇರಿಯಾ"},
    "TK": {message: "ಟೊಕೆಲಾವ್"},
    "TN": {message: "ಟುನಿಶಿಯಾ"},
    "EE": {message: "ಎಸ್ತೊನಿಯ"},
    "CK": {message: "ಕುಕ್ ದ್ವೀಪಗಳು"},
    "BY": {message: "ಬೊಲಿವಿಯಾ"},
    "NO": {message: "ನಾರ್ವೇ"},
    "KR": {message: "ದಕ್ಷಿಣ ಕೋರಿಯಾ"},
    "BF": {message: "ಬುರ್ಕಿನಾ ಫಾಸೋ"},
    "AM": {message: "ಅರ್ಮೇನಿಯಾ"},
    "SR": {message: "ಸುರಿನಾಮ"},
    "MG": {message: "ಮಡಗಾಸ್ಕರ್"},
    "ON": {message: "ರಂದು"},
    "BT": {message: "ಭೂತಾನ್"},
    "CF": {message: "ಮಧ್ಯ ಆಫ್ರಿಕಾ ಗಣರಾಜ್ಯ"},
    "AE": {message: "ಸಂಯುಕ್ತ ಅರಬ್ ಎಮಿರೇಟಸ್"},
    "BA": {message: "ಬೋಸ್ನಿಯಾ ಮತ್ತು ಹರ್ಜೆಗೋವಿನಾ"},
    "TH": {message: "ಥೈಲ್ಯಾಂಡ್"},
    "Author:": {message: "ಲೇಖಕ:"},
    "CC": {message: "ಕೊಕೊಸ್ ದ್ವೀಪಗಳು"},
    "NC": {message: "ನ್ಯೂ ಕ್ಯಾಲಿಡೋನಿಯಾ"},
    "TO": {message: "ಟೊಂಗ"},
    "SE": {message: "ಸ್ವೀಡನ್"},
    "AZ": {message: "ಅಜರ್ಬೈಜಾನ್"},
    "AF": {message: "ಅಫಘಾನಿಸ್ಥಾನ್"},
    "NG": {message: "ನೈಜೀರಿಯಾ"},
    "BJ": {message: "ಬೆನಿನ್"},
    "KE": {message: "ಕೀನ್ಯಾ"},
    "Turn on to get started": {message: "ಪ್ರಾರಂಭಿಸಲು ಆನ್ ಮಾಡಿ"},
    "OM": {message: "ಓಮನ್"},
    "LK": {message: "ಶ್ರೀಲಂಕಾ"},
    "ID": {message: "ಇಂಡೋನೇಶಿಯಾ"},
    "FM": {message: "ಮೈಕ್ರೋನೇಶಿಯಾ"},
    "(some Hola features are not available on your version)": {message: "(ಕೆಲವು ಹೊಲಾ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನಿಮ್ಮ ಆವೃತ್ತಿಗೆ ಲಭ್ಯವಿರುವುದಿಲ್ಲ)"},
    "GM": {message: "ಗ್ಯಾಂಬಿಯಾ"},
    "LV": {message: "ಲಾಟ್ವಿಯಾ"},
    "RU": {message: "ರಶಿಯಾ"},
    "FI": {message: "ಫಿನ್‍‍ಲ್ಯಾಂಡ್"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "UN-ಅಡಚಣೆ, ಜಾಹೀರಾತು ರಹಿತ ಸೇವೆಗೆ ಹೊಲಾ ಪ್ಲಸ್ ಪಡೆಯಿರಿ."},
    "LU": {message: "ಲಕ್ಸಂಬರ್ಗ್"},
    "VE": {message: "ವೆನೆಜುವೆಲಾ"},
    "VI": {message: "ಯು.ಎಸ್. ವರ್ಜಿನ್ ದ್ವೀಪಗಳು"},
    "TV": {message: "ಟುವಾಲು"},
    "SN": {message: "ಸೆನೆಗಲ್"},
    "MX": {message: "ಮೆಕ್ಸಿಕೊ"},
    "GG": {message: "ಗುರ್ನಜೀ"},
    "IL": {message: "ಇಸ್ರೇಲ್"},
    "Author site:": {message: "ಲೇಖಕ ಸೈಟ್:"},
    "HU": {message: "ಹಂಗೇರಿ"},
    "DO": {message: "ಡೊಮೆನಿಕ್ ರಿಪಬ್ಲಿಕ್"},
    "OFF": {message: "ಆಫ್"},
    "KH": {message: "ಕಾಂಬೋಡಿಯಾ"},
    "TG": {message: "ಟೋಗೋ"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "ಮತ್ತೊಂದು ವಿಸ್ತರಣಾ ನಿಮ್ಮ ಪ್ರಾಕ್ಸಿ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಏಕೆಂದರೆ ಹೊಲಾ ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ. ನೀವು <a> ವಿಸ್ತರಣೆಗಳನ್ನು </a> ನಿಮ್ಮ ಪ್ರಾಕ್ಸಿ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು (ಉದಾಹರಣೆಗೆ ಜಾಹೀರಾತು ಬ್ಲಾಕರ್ ಇತರ VPN ಸೇವೆಗಳು, ಇತ್ಯಾದಿ) ನಿಯಂತ್ರಿಸಲು ಸಂಶಯವಿಲ್ಲ ಇತರ ವಿಸ್ತರಣೆಗಳನ್ನು ದಯವಿಟ್ಟು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ."},
    "BB": {message: "ಬಾರ್ಬಡೋಸ್"},
    "JE": {message: "ಜೆರ್ಸಿ"},
    "Remove ads": {message: "ಜಾಹೀರಾತುಗಳನ್ನು ತೆಗೆದುಹಾಕಲು"},
    "DK": {message: "ಡೆನ್ಮಾರ್ಕ್"},
    "PA": {message: "ಪನಾಮಾ"},
    "QA": {message: "ಕತಾರ್"},
    "CV": {message: "ಕೇಪ್ ವರ್ಡೆ"},
    "Reload": {message: "ಪುನಃ ಭಾರಹೇರು"},
    "GD": {message: "ಗ್ರೆನೆಡಾ"},
    "Number of users that use this option": {message: "ಈ ಆಯ್ಕೆಯನ್ನು ಬಳಸುವ ಬಳಕೆದಾರರ ಸಂಖ್ಯೆ"},
    "MO": {message: "ಮಕಾವ್ SAR ಚೀನಾ"},
    "MF": {message: "ಸೇಂಟ್ ಮಾರ್ಟಿನ್"},
    "HR": {message: "ಕ್ರೋಯೇಶಿಯಾ"},
    "CZ": {message: "ಚೆಕ್ ರಿಪಬ್ಲಿಕ್"},
    "BL": {message: "ಸೇಂಟ್ ಬಾರ್ಥೆಲೆಮಿ"},
    "ST": {message: "ಸಾವೋ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪೆ"},
    "AU": {message: "ಆಸ್ಟ್ರೇಲಿಯ"},
    "IR": {message: "ಇರಾನ್"},
    "CG": {message: "ಕಾಂಗೋ - ಬ್ರಾಜಾವಿಲ್ಲೇ"},
    "BI": {message: "ಬುರುಂಡಿ"},
    "GW": {message: "ಗಿನಿ-ಬಿಸ್ಸಾವ್"},
    "MK": {message: "ಮ್ಯಾಸಿಡೋನಿಯಾ"},
    "GR": {message: "ಗ್ರೀಸ್"},
    "AG": {message: "ಆಂಟಿಗುವಾ ಮತ್ತು ಬರ್ಬುಡಾ"},
    "AI": {message: "ಆಂಗುಯಿಲ್ಲಾ"},
    "AN": {message: "ನೆದರ್‌ಲ್ಯಾಂಡ್"},
    "UA": {message: "ಉಕ್ರೈನ್"},
    "EH": {message: "ಪಶ್ಚಿಮ ಸಹಾರಾ"},
    "KN": {message: "ಸೇಂಟ್ ಕಿಟ್ಸ್ ಮತ್ತು ನೆವಿಸ್"},
    "SC": {message: "ಸೀಶೆಲ್ಲೆಸ್"},
    "MS": {message: "ಮೋಂಟ್‌ಸೆರೆಟ್"},
    "NL": {message: "ನೆದರ್‌ಲ್ಯಾಂಡ್ಸ್"},
    "HK": {message: "ಹಾಂಗ್ ಕಾಂಗ್ SAR ಚೀನಾ"},
    "EC": {message: "ಈಕ್ವೆಡಾರ್"},
    "MY": {message: "ಮಲೇಶಿಯಾ"},
    "CR": {message: "ಕೊಸ್ಟಾ ರಿಕಾ"},
    "VA": {message: "ವ್ಯಾಟಿಕನ್"},
    "IO": {message: "ಬ್ರಿಟೀಶ್ ಇಂಡಿಯನ್ ಮಹಾಸಾಗರ ಪ್ರದೇಶ"},
    "RS": {message: "ಸೆರ್ಬಿಯಾ"},
    "SD": {message: "ಸೂಡಾನ್"},
    "CN": {message: "ಚೀನ"},
    "UY": {message: "ಉರುಗ್ವೇ"},
    "PY": {message: "ಪರಾಗ್ವೇ"},
    "MU": {message: "ಮಾರಿಶಿಯಸ್"},
    "CH": {message: "ಸ್ವಿಡ್ಜರ್‌ಲ್ಯಾಂಡ್"},
    "LI": {message: "ಲಿಚೆನ್‌ಸ್ಟೈನ್"},
    "KG": {message: "ಕಿರ್ಗಿಸ್ಥಾನ್"},
    "GH": {message: "ಘಾನಾ"},
    "NU": {message: "ನಿಯು"},
    "PE": {message: "ಪೆರು"},
    "US": {message: "ಅಮೇರಿಕಾ ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನ"},
    "SL": {message: "ಸಿಯೆರ್ರಾ ಲಿಯೋನ್"},
    "FJ": {message: "ಫಿಜಿ"},
    "ER": {message: "ಏರಿಟ್ರಿಯಾ"},
    "IQ": {message: "ಇರಾಕ್"},
    "AS": {message: "ಅಮೇರಿಕನ್ ಸಮೋವಾ"},
    "TZ": {message: "ಟಾಂಜಾನಿಯಾ"},
    "LY": {message: "ಲಿಬಿಯಾ"},
    "GT": {message: "ಗ್ವಾಟೆಮಾಲಾ"},
    "BM": {message: "ಬರ್ಮುಡಾ"},
    "BV": {message: "ಬೋವೆಟ್ ದ್ವೀಪ"},
    "LT": {message: "ಲಿಥುವೇನಿಯಾ"},
    "PM": {message: "ಸೇಂಟ್ ಪಿಯರೆ ಮತ್ತು ಮಿಕೆಲನ್"},
    "SG": {message: "ಸಿಂಗಪುರ"},
    "Initializing...": {message: "ಆರಂಭಿಸಲಾಗುತ್ತಿದೆ ..."},
    "TT": {message: "ಟ್ರಿನಿಡಾಡ್ ಮತ್ತು ಟೊಬ್ಯಾಗೊ"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "ಹೊಲಾ ವಿಂಡೋಸ್ 8 ಕ್ರಮದಲ್ಲಿ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ. ಡೆಸ್ಕ್ಟಾಪ್ ಮೋಡ್ಗೆ ಬದಲಿಸಿ ದಯವಿಟ್ಟು. ಸೂಚನೆಗಳಿಗಾಗಿ <a> ಇಲ್ಲಿ </a> ಕ್ಲಿಕ್ ಮಾಡಿ"},
    "SK": {message: "ಸ್ಲೋವಾಕಿಯಾ"},
    "SY": {message: "ಸಿರಿಯಾ"},
    "GL": {message: "ಗ್ರೀನ್‌ಲ್ಯಾಂಡ್"},
    "PG": {message: "ಪಪುವಾ ನ್ಯೂಗೀನಿಯಾ"},
    "KI": {message: "ಕಿರಿಬಾತಿ"},
    "CD": {message: "ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ"},
    "AO": {message: "ಅಂಗೋಲಾ"},
    "BW": {message: "ಬೋಟ್ಸ್‌ವಾನಾ"},
    "ZW": {message: "ಜಿಂಬಾಬ್ವೆ"},
    "VC": {message: "ಸೇಂಟ್ ವಿನ್ಸೆಂಟ್ ಮತ್ತು ಗ್ರೆನೆಡೈನ್ಸ್"},
    "JP": {message: "ಜಪಾನ್"},
    "NA": {message: "ನಮೀಬಿಯಾ"},
    "TJ": {message: "ತಜಾಕಿಸ್ಥಾನ್"},
    "LC": {message: "ಸೇಂಟ್ ಲೂಸಿಯಾ"},
    "VU": {message: "ವನೌಟು"},
    "MN": {message: "ಮೊಂಗೋಲಿಯಾ"},
    "IT": {message: "ಇಟಲಿ"},
    "RE": {message: "ರೀಯೂನಿಯನ್"},
    "WS": {message: "ಸಮೋವಾ"},
    "Enable": {message: "ಸಕ್ರಿಯಗೊಳಿಸಿ"},
    "Loading": {message: "ಹೇರಿಕೆ"},
    "EG": {message: "ಈಜಿಪ್ಟ್"},
    "FR": {message: "ಫ್ರಾನ್ಸ್"},
    "start": {message: "ಆರಂಭಿಸಲು"},
    "RW": {message: "ರುವಾಂಡಾ"},
    "BE": {message: "ಬೆಲ್ಜಿಯಮ್"},
    "UM": {message: "ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನ ಮೈನರ್ ಔಟ್‌ಲೈಯಿಂಗ್ ದ್ವೀಪಗಳು"},
    "Accelerator": {message: "ವೇಗವರ್ಧಕ"},
    "LS": {message: "ಲೆಥೋಸೊ"},
    "SA": {message: "ಸೌದಿ ಅರೇಬಿಯಾ"},
    "ZA": {message: "ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ"},
    "PT": {message: "ಪೋರ್ಚುಗಲ್"},
    "CA": {message: "ಕೆನಡಾ"},
    "Starting...": {message: "ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ ..."},
    "CM": {message: "ಕ್ಯಾಮರೋನ್"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "ಹೊಲಾ ಉಚಿತ ಆವೃತ್ತಿಯಂತೆ ಪ್ರತಿ 4 ಗಂಟೆಗಳ ಮರು ಶಕ್ತಗೊಳಿಸುವುದು ಮತ್ತು ಜಾಹೀರಾತುಗಳನ್ನು ಪ್ರಾಯೋಜಿಸುತ್ತಿದೆ ಅಗತ್ಯವಿದೆ."},
    "Hola": {message: "ಹೊಲಾ"},
    "NP": {message: "ನೇಪಾಳ"},
    "PL": {message: "ಪೋಲ್ಯಾಂಡ್"},
    "GA": {message: "ಗೆಬೊನ್"},
    "TM": {message: "ತುರ್ಕಮೆನಿಸ್ಥಾನ್"},
    "KY": {message: "ಕೇಮನ್ ದ್ವೀಪಗಳು"},
    "Verify you have Internet": {message: "ನೀವು ಇಂಟರ್ನೆಟ್ ಹೊಂದಿರುತ್ತವೆ ಪರಿಶೀಲಿಸಿ"},
    "LA": {message: "ಲಾವೋಸ್"},
    "PH": {message: "ಫಿಲಿಫೈನ್ಸ್"},
    "NI": {message: "ನಿಕಾರಾಗುವಾ"},
    "GU": {message: "ಗುಯಾಮ್"},
    "TF": {message: "ಫ್ರೆಂಚ್ ದಕ್ಷಿಣ ಪ್ರದೇಶಗಳು"},
    "KZ": {message: "ಕಝಾಕಿಸ್ಥಾನ್"},
    "SJ": {message: "ಸ್ವಾಲ್ಬಾರ್ಡ್ ಮತ್ತು ಜಾನ್ ಮಾಯೆನ್"},
    "MM": {message: "ಮಯನ್ಮಾರ್"},
    "NR": {message: "ನೌರು"},
    "DM": {message: "ಡೊಮಿನಿಕಾ"},
    "NE": {message: "ನೈಜರ್"},
    "AD": {message: "ಅಂಡೋರಾ"},
    "MR": {message: "ಮಾರಿಟಾನಿಯಾ"},
    "changing...": {message: "ಬದಲಾವಣೆ ..."},
    "GS": {message: "ದಕ್ಷಿಣ ಜಾರ್ಜಿಯಾ ಮತ್ತು ದಕ್ಷಿಣ ಸ್ಯಾಂಡ್‌ವಿಚ್ ದ್ವೀಪಗಳು"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "ಕ್ರೋಮ್ನ ಅತ್ಯಂತ ಹಳೆಯ ಆವೃತ್ತಿ, <a> ಅಪ್ಡೇಟ್ </a> ಕ್ರೋಮ್ ಹೊಲಾ ಬಳಸಲು"},
    "ME": {message: "ಮೊಂಟೆನೆಗ್ರೋ"},
    "AX": {message: "ಆಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು"},
    "VG": {message: "ಬ್ರಿಟಿಷ್ ವರ್ಜಿನ್ ದ್ವೀಪಗಳು"},
    "VN": {message: "ವಿಯೇಟ್ನಾಮ್"},
    "CI": {message: "ಐವರಿ ಕೋಸ್ಟ್"},
    "DZ": {message: "ಅಲ್ಗೇರಿಯಾ"},
    "YE": {message: "ಯೆಮನ್"},
    "GE": {message: "ಜಾರ್ಜಿಯಾ"},
    "CX": {message: "ಕ್ರಿಸ್‌ಮಸ್ ದ್ವೀಪ"},
    "LB": {message: "ಲೆಬನಾನ್"},
    "FK": {message: "ಫ್ಹಾಕ್‌ಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು"},
    "DE": {message: "ಜರ್ಮನಿ"},
    "even more...": {message: "ಇನ್ನೂ ..."},
    "MV": {message: "ಮಾಲ್ಡಿವ್ಸ್"},
    "PN": {message: "ಪಿಟ್‌ಕೈರ್ನ್"},
    "BH": {message: "ಬಹರೈನ್"},
    "GI": {message: "ಗಿಬ್ರಾಲ್ಟರ್"},
    "RO": {message: "ರೊಮ್ಯಾನಿಯಾ"},
    "WF": {message: "ವಾಲಿಸ್ ಮತ್ತು ಫುಟುನಾ"},
    "AR": {message: "ಅರ್ಜೆಂಟೈನಾ"},
    "GP": {message: "ಗುಡೆಲೋಪ್"},
    "IN": {message: "ಭಾರತ"},
    "Unblocker site list": {message: "Unblocker ಸೈಟ್ ಪಟ್ಟಿ"},
    "AW": {message: "ಅರುಬಾ"},
    "FO": {message: "ಫರೋ ದ್ವೀಪಗಳು"},
    "CS": {message: "ಸೆರ್ಬಿಯಾ ಮತ್ತು ಮೊಂಟೊನೆಗ್ರೋ"},
    "BR": {message: "ಬ್ರೆಜಿಲ್"},
    "MC": {message: "ಮೊನಾಕೊ"},
    "HN": {message: "ಹೊಂಡುರಾಸ್"},
    "Translate to your language": {message: "ನಿಮ್ಮ ಭಾಷೆಗೆ ಭಾಷಾಂತರಿಸಿ"},
    "SB": {message: "ಸೊಲೊಮನ್ ದ್ವೀಪಗಳು"},
    "NZ": {message: "ನ್ಯೂಜಿಲೆಂಡ್"},
    "PS": {message: "ಪ್ಯಾಲಿಸ್ಟೇನಿಯನ್ ಪ್ರದೇಶ"},
    "UG": {message: "ಉಗಾಂಡಾ"},
    "GB": {message: "ಬ್ರಿಟನ್/ಇಂಗ್ಲೆಂಡ್"},
    "HT": {message: "ಹೈಟಿ"},
    "GF": {message: "ಫ್ರೆಂಚ್ ಗಯಾನಾ"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "ಫೈರ್ಫಾಕ್ಸ್ ಹಳೆಯ ಆವೃತ್ತಿ. ಪ್ರೆಸ್ <a> ಇಲ್ಲಿ </a> ಅಪ್ಗ್ರೇಡ್ ಮಾಡಲು."},
    "ZZ": {message: "ಅಪರಿಚಿತ ಅಥವಾ ಅಮಾನ್ಯ ಪ್ರದೇಶ"},
    "KM": {message: "ಕೊಮೊರೊಸ್"},
    "KW": {message: "ಕುವೈತ್"},
    "TC": {message: "ಟರ್ಕ್ಸ್ ಮತ್ತು ಕೈಕೋಸ್ ದ್ವೀಪಗಳು"},
    "MQ": {message: "ಮಾರ್ಟಿನಿಕ್"},
    "MZ": {message: "ಮೊಜಾಂಬಿಕ್"},
    "ES": {message: "ಸ್ಪೈನ್"},
    "BO": {message: "ಬಲ್ಗೇರಿಯಾ"},
    "AL": {message: "ಅಲ್ಬೇನಿಯಾ"},
    "TR": {message: "ಟರ್ಕಿ"},
    "MD": {message: "ಮೊಲ್ಡೋವಾ"},
    "GN": {message: "ಗಿನಿ"},
    "CO": {message: "ಕೊಲಂಬಿಯಾ"},
    "SI": {message: "ಸ್ಲೋವೇನಿಯಾ"},
    "Settings": {message: "ಸೆಟ್ಟಿಂಗ್ಗಳು"},
    "AQ": {message: "ಅಂಟಾರ್ಟಿಕಾ"},
    "JO": {message: "ಜೋರ್ಡಾನ್"},
    "SM": {message: "ಸ್ಯಾನ್ ಮೆರಿನೋ"},
    "CL": {message: "ಚಿಲಿ"},
    "CU": {message: "ಕ್ಯೂಬಾ"},
    "ML": {message: "ಮಾಲಿ"},
    "ET": {message: "ಇಥಿಯೋಪಿಯಾ"},
    "IS": {message: "ಐಸ್‌ಲ್ಯಾಂಡ್"},
    "Reload Hola": {message: "ಹೊಲಾ ರೀಲೋಡ್"},
    "back to": {message: "ಗೆ ಬ್ಯಾಕ್"},
    "BG": {message: "ಬಲ್ಗೇರಿಯನ್"},
    "MH": {message: "ಮಾರ್ಶಲ್ ದ್ವೀಪಗಳು"},
    "BS": {message: "ಬಹಾಮಾಸ್"},
    "TL": {message: "ಪೂರ್ವ ತಿಮೋರ್"},
    "BZ": {message: "ಬೆಲಿಜ್"},
    "CY": {message: "ಸೈಪ್ರಸ್"},
    "IM": {message: "ಐಲ್ ಆಫ್ ಮ್ಯಾನ್"},
    "IE": {message: "ಐರ್ಲೆಂಡ್"},
    "Get help from engineer over skype:": {message: "ಸ್ಕೈಪ್ ಪ್ರತಿ ಎಂಜಿನಿಯರ್ ಸಹಾಯ ಪಡೆಯಿರಿ:"},
    "TW": {message: "ಥೈವಾನ್"},
    "KP": {message: "ಉತ್ತರ ಕೋರಿಯಾ"},
    "PF": {message: "ಫ್ರೆಂಚ್ ಪೋಲಿನೇಶಿಯಾ"},
    "app_name": {message: "ಹೊಲಾ ಉತ್ತಮ ಇಂಟರ್ನೆಟ್"},
    "Update": {message: "ನವೀಕರಿಸಿ"},
    "MW": {message: "ಮಲಾವಿ"},
    "GY": {message: "ಗಯಾನಾ"},
    "$1 blocked?": {message: "$1 ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ?"},
    "Unblocker is disabled": {message: "Unblocker ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ"},
    "GQ": {message: "ಈಕ್ವೆಟೋರಿಯಲ್ ಗಿನಿ"},
    "PK": {message: "ಪಾಕಿಸ್ತಾನ"},
    "$1 unblocked": {message: "ಅನಿರ್ಬಂಧಿಸಲಾಗಿದೆ $1"},
    "Number of users that pressed not working": {message: "ಕಾರ್ಯನಿರ್ವಹಿಸದಿದ್ದರೆ PRESSED ಬಳಕೆದಾರರ ಸಂಖ್ಯೆ"},
    "NF": {message: "ನಾರ್‌ಫೋಕ್ ದ್ವೀಪ"},
    "SO": {message: "ಸೊಮಾಲಿಯಾ"},
    "TD": {message: "ಚಾಡ್"},
    "HM": {message: "ಹರ್ಡ್ ದ್ವೀಪ ಮತ್ತು ಮಾಕ್‌ಡೊನಾಲ್ಡ್ ದ್ವೀಪಗಳು"},
    "BD": {message: "ಬಾಂಗ್ಲಾದೇಶ್"},

};
return E; });