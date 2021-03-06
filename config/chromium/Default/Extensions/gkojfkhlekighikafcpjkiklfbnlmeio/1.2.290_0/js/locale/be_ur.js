'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "GL": {message: "گرین لینڈ"},
    "PG": {message: "پاپوا نیو گنی"},
    "AT": {message: "آسٹریا"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "دوسرے آلات پر Hola چاہتے ہیں؟ (ایکس بکس، پی ایس، ایپل ٹی وی، فون ...). یہاں کلک کریں"},
    "KI": {message: "کِرباتی"},
    "SZ": {message: "سوازی لینڈ"},
    "ZM": {message: "زیمبیا"},
    "CD": {message: "کانگو، جمہوری ریاست"},
    "app_desc": {message: "انٹرنیٹ کے سبھی رسائی! بلاک سائٹ پر جائیں -> کلک Hola آئکن -> تبدیلی ملک پرچم -> لطف اندوز ہوں!"},
    "AO": {message: "انگولا"},
    "BW": {message: "بوٹسوانا"},
    "Improve translation": {message: "ترجمہ کو بہتر بنانے کے"},
    "ZW": {message: "زمبابوے"},
    "VC": {message: "سینٹ کیرن اور گریناڈائنز"},
    "more...": {message: "مزید ..."},
    "JP": {message: "جاپان"},
    "NA": {message: "نمیبیا"},
    "SH": {message: "سینٹ ھیلینا"},
    "TJ": {message: "تاجکستان"},
    "LC": {message: "سینٹ لوسیا"},
    "There seems to be an error": {message: "ایک خرابی نہیں ہے"},
    "MA": {message: "مراکش"},
    "VU": {message: "وانواٹو"},
    "MN": {message: "منگولیا"},
    "MP": {message: "شمالی ماریاناجزائر"},
    "IT": {message: "اٹلی"},
    "WS": {message: "ساموا"},
    "Unblocker": {message: "Unblocker"},
    "Enable": {message: "فعال کریں"},
    "Access any site from any country, free": {message: "مفت، کسی بھی ملک کی طرف سے کوئی ویب سائٹ تک رسائی حاصل کریں"},
    "Loading": {message: "لوڈ کر رہا ہے"},
    "Try to <span>reload</span>": {message: "<span> دوبارہ لوڈ </span> میں کرنے کی کوشش کریں"},
    "EG": {message: "مصر"},
    "FR": {message: "فرانس"},
    "UZ": {message: "ازبکستان"},
    "start": {message: "شروع کریں"},
    "LR": {message: "لائبیریا"},
    "TK": {message: "ٹوکیلاؤ"},
    "RW": {message: "روانڈا"},
    "BE": {message: "بیلجئیم"},
    "TN": {message: "تیونس"},
    "UM": {message: "ریاست ہائے متحدہ اور بیرونی جزائر"},
    "EE": {message: "ایسٹونیا"},
    "CK": {message: "جزائر کُک"},
    "BY": {message: "بیلا رس"},
    "Accelerator": {message: "سرعت"},
    "NO": {message: "ناروے"},
    "LS": {message: "لیسوتھو"},
    "SA": {message: "سعودی عرب"},
    "KR": {message: "جنوبی کوریا"},
    "ZA": {message: "جنوبی افریقہ"},
    "PT": {message: "پرتگال"},
    "BF": {message: "برکینا فاسو"},
    "CA": {message: "کینیڈا"},
    "AM": {message: "آر مینیا"},
    "Starting...": {message: "شروع ہورہا ہے ..."},
    "CM": {message: "کیمرون"},
    "MG": {message: "مڈغاسکر"},
    "SR": {message: "سورینام"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "Hola کے مفت ورژن ہر 4 گھنٹے کو دوبارہ فعال کیا جائے گا اور اشتھارات کی طرف سے سپانسر کیا جاتا ہے کی ضرورت ہے."},
    "ON": {message: "پر"},
    "NP": {message: "نیپال"},
    "Hola": {message: "Hola"},
    "BT": {message: "بھوٹان"},
    "PL": {message: "پولینڈ"},
    "GA": {message: "غیبون"},
    "CF": {message: "جمہوریہ وسطی افریقہ"},
    "TM": {message: "ترکمانستان"},
    "AE": {message: "متحدہ عرب امارات"},
    "BA": {message: "بوسنیا ہرزگوینا"},
    "KY": {message: "جزائر کیمن"},
    "TH": {message: "تھائی لینڈ"},
    "Author:": {message: "مصنف:"},
    "Verify you have Internet": {message: "آپ کو انٹرنیٹ کی توثیق ہے"},
    "LA": {message: "لاؤس"},
    "CC": {message: "جزائر کوکوز"},
    "PH": {message: "فلپائن"},
    "NI": {message: "نکاراگوا"},
    "TF": {message: "جنوبی فرانسیسی علاقہ جات"},
    "NC": {message: "نیو کیلیڈونیا"},
    "KZ": {message: "قزاقستان"},
    "MM": {message: "میانمر"},
    "NE": {message: "نائیجر"},
    "MR": {message: "موریطانیہ"},
    "TO": {message: "تونگا"},
    "SE": {message: "سویڈن"},
    "changing...": {message: "بدلتے ہوئے ..."},
    "AZ": {message: "آذر بائجان"},
    "AF": {message: "افغانستان"},
    "NG": {message: "نائیجیریا"},
    "GS": {message: "جنوبی جارجیا اور جزائر جنوبی سینڈوچ"},
    "KE": {message: "کینیا"},
    "BJ": {message: "بینن"},
    "Turn on to get started": {message: "شروع کرنے کے لئے کو چالو کریں"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "کروم کے بہت پرانے ورژن، <a> اپ ڈیٹ کریں </a> کروم Hola استعمال کرنے کے لئے"},
    "OM": {message: "عمان"},
    "VN": {message: "ویت نام"},
    "VG": {message: "جزائر ورجن، برٹش"},
    "YE": {message: "یمن"},
    "DZ": {message: "الجیریا"},
    "LK": {message: "سری لنکا"},
    "ID": {message: "انڈونیشیا"},
    "FM": {message: "مائکرونیزیا"},
    "(some Hola features are not available on your version)": {message: "(کچھ Hola خصوصیات آپ کے ورژن پر دستیاب نہیں ہیں)"},
    "GE": {message: "جارجیا"},
    "GM": {message: "گیمبیا"},
    "CX": {message: "جزیرہ کرسمس"},
    "LV": {message: "لٹوِیا"},
    "LB": {message: "لبنان"},
    "RU": {message: "روس"},
    "FK": {message: "جزائر فاک لینڈ"},
    "FI": {message: "فن لینڈ"},
    "DE": {message: "جرمنی"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "غیر خلل پیدا ہوگیا، اشتھار مفت کی خدمت کے لئے Hola پلس حاصل کریں."},
    "even more...": {message: "اس سے بھی زیادہ ..."},
    "VE": {message: "وینزولا"},
    "WF": {message: "والس اور فتونہ"},
    "RO": {message: "رومانیہ"},
    "TV": {message: "ٹوالو"},
    "AR": {message: "ارجنٹینا"},
    "IN": {message: "بھارت"},
    "VI": {message: "جزائر ورجن، امریکہ"},
    "MX": {message: "میکسیکو"},
    "SN": {message: "سینیگال"},
    "CS": {message: "سربیا اور مانٹینیگرو"},
    "FO": {message: "جزائرفارو"},
    "Unblocker site list": {message: "Unblocker سائٹ کی فہرست"},
    "HN": {message: "ہونڈوراس"},
    "BR": {message: "برازیل"},
    "GG": {message: "گرنزی"},
    "IL": {message: "اسرائیل"},
    "SB": {message: "جزائرسولمون"},
    "Author site:": {message: "مصنف سائٹ:"},
    "Translate to your language": {message: "آپ کی زبان کا ترجمہ کرنے کے لئے"},
    "HU": {message: "ہنگری"},
    "DO": {message: "ڈومینیکن ریپبلک"},
    "NZ": {message: "نیوزی لینڈ"},
    "PS": {message: "فلسطین"},
    "UG": {message: "یوگنڈا"},
    "OFF": {message: "بند"},
    "KH": {message: "کمبوڈیا"},
    "GB": {message: "برطانیہ"},
    "TG": {message: "ٹوگو"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "ایک اور توسیع اپنے پراکسی ترتیبات کا کنٹرول ہے کیونکہ Hola مناسب طریقے سے کام نہیں کر سکتے. آپ <a> ملانے </a> پر میں آپ کی پراکسی ترتیبات (جیسے اشتھار blockers، دیگر وی پی این خدمات، وغیرہ کے طور پر) کو کنٹرول کر سکتے ہیں لگتا ہے کہ دوسرے کو ملانے کو غیر فعال کریں."},
    "JE": {message: "جرسی"},
    "HT": {message: "ہائٹی"},
    "DK": {message: "ڈنمارک"},
    "Reload": {message: "دوبارہ لوڈ کریں"},
    "Number of users that use this option": {message: "اس اختیار کو استعمال کرنے والے صارفین کی تعداد"},
    "GF": {message: "فرانسیسی گی آنا"},
    "MO": {message: "ماکاؤ"},
    "ZZ": {message: "Unknown or Invalid Region"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "فائر فاکس کے پرانے ورژن. پریس <a> یہاں </a> کو اپ گریڈ کرنے کے لئے."},
    "KM": {message: "کوموروس"},
    "HR": {message: "کروشیا"},
    "TC": {message: "جزائر کیکس اور ترکیّہ"},
    "CZ": {message: "جمہوریہ چیک"},
    "ES": {message: "سپین"},
    "MZ": {message: "موزنبیق"},
    "BO": {message: "بولیویا"},
    "AU": {message: "آسٹریلیا"},
    "AL": {message: "البانیا"},
    "IR": {message: "ایران"},
    "CG": {message: "کانگو"},
    "TR": {message: "ترکی"},
    "MD": {message: "مالدووا"},
    "GW": {message: "گنی بسائو"},
    "GN": {message: "گنی"},
    "BI": {message: "برنڈی"},
    "MK": {message: "مقدونیہ"},
    "GR": {message: "یونان"},
    "AG": {message: "انٹیگوا اور باربودا"},
    "CO": {message: "کولمبیا"},
    "SI": {message: "سلوانیہ"},
    "Settings": {message: "ترتیبات"},
    "AQ": {message: "انٹار ٹکا"},
    "AN": {message: "نیدرلینڈز انٹیلیز"},
    "JO": {message: "اردن"},
    "SM": {message: "سان میرینو"},
    "UA": {message: "یوکرائن"},
    "CU": {message: "کیوبا"},
    "CL": {message: "چلی"},
    "EH": {message: "مغربی صحارا"},
    "KN": {message: "سینٹ کٹس اور نیوس"},
    "ML": {message: "مالی"},
    "ET": {message: "ایتھوپیا"},
    "SC": {message: "سے شلز"},
    "IS": {message: "آئس لینڈ"},
    "NL": {message: "نیدرلینڈ"},
    "Reload Hola": {message: "Hola کو دوبارہ لوڈ کریں"},
    "EC": {message: "ایکواڈور"},
    "MY": {message: "ملائیشیا"},
    "VA": {message: "ویٹیکن سٹی"},
    "IO": {message: "بحرھند کا برٹش علاقہ"},
    "back to": {message: "پر واپس"},
    "SD": {message: "سوڈان"},
    "CN": {message: "چین"},
    "MH": {message: "جزائر مارشل"},
    "BG": {message: "بلغاریہ"},
    "UY": {message: "ہوراگوئے"},
    "PY": {message: "پیراگوئے"},
    "BS": {message: "باھا ماس"},
    "TL": {message: "مشرقی تیمور"},
    "CH": {message: "سوئزر لینڈ"},
    "LI": {message: "لکٹنسٹائن"},
    "GH": {message: "گھانا"},
    "KG": {message: "کرغستان"},
    "PE": {message: "پیرو"},
    "US": {message: "ریاست ہائے متحدہ امریکا"},
    "SL": {message: "سیرالیون"},
    "CY": {message: "قبرص"},
    "IE": {message: "آئر لینڈ"},
    "Get help from engineer over skype:": {message: "اسکائپ سے زائد انجینئر سے مدد حاصل:"},
    "TW": {message: "تائیوان"},
    "KP": {message: "شمالی کوریا"},
    "PF": {message: "فرانسیسی پولینیسیا"},
    "ER": {message: "اریٹیریا"},
    "app_name": {message: "Hola بہتر انٹرنیٹ"},
    "IQ": {message: "عراق"},
    "AS": {message: "امریکی ساموا"},
    "Update": {message: "اپ ڈیٹ کریں"},
    "MW": {message: "ملاوی"},
    "TZ": {message: "تنزانیہ"},
    "LY": {message: "لیبیا"},
    "Unblocker is disabled": {message: "Unblocker غیر فعال ہے"},
    "PK": {message: "پاکستان"},
    "GQ": {message: "استوائی گنی"},
    "BV": {message: "جزیرہ بووٹ"},
    "LT": {message: "لتھوانیا"},
    "Number of users that pressed not working": {message: "کام نہیں کر رہا پر زور دیا ہے کہ صارفین کی تعداد"},
    "PM": {message: "سینٹ پائرے اور میکویلون"},
    "Initializing...": {message: "ابتدا ..."},
    "TT": {message: "ٹرینیڈاڈ اور ٹوباگو"},
    "NF": {message: "جزیرہ نارفولک"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola ونڈوز 8 موڈ میں اچھی طرح سے کام نہیں کرتا. ڈیسک ٹاپ کے انداز پر تبدیل کریں. ہدایات کے لیے <a> یہاں </a> پر کلک کریں"},
    "TD": {message: "چاڈ"},
    "SO": {message: "صوپالیہ"},
    "SK": {message: "سلوواکیہ"},
    "SY": {message: "سیریا"},
    "BD": {message: "بنگلا دیش"},
    "HM": {message: "جزیرہ ہرڈ اور جزائر مکڈونلڈ"},

};
return E; });