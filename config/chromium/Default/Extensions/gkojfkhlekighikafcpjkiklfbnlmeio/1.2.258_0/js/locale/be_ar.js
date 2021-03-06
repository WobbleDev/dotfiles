'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "جيبوتي"},
    "JM": {message: "جامايكا"},
    "AT": {message: "النمسا"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "هل تريد هولا على أجهزة أخرى؟ (إكس بوكس، PS، آبل، آي فون ...). انقر هنا"},
    "SZ": {message: "سوازيلاند"},
    "YT": {message: "مايوت"},
    "BN": {message: "بروناي"},
    "ZM": {message: "زامبيا"},
    "app_desc": {message: "لوصول إلى كل من شبكة الإنترنت! الذهاب إلى موقع محجوب > انقر على أيقونة حولا > تغير بلد العلم > استمتع!"},
    "more...": {message: "أكثر..."},
    "PR": {message: "بورتوريكو"},
    "SH": {message: "سانت هيلنا"},
    "There seems to be an error": {message: "يبدو أن هناك خطأ"},
    "MA": {message: "المغرب"},
    "MT": {message: "مالطا"},
    "SV": {message: "السلفادور"},
    "MP": {message: "جزر ماريانا الشمالية"},
    "Unblocker": {message: "فك الحظر"},
    "Access any site from any country, free": {message: "الوصول إلى أي موقع من أي بلد!"},
    "Try to <span>reload</span>": {message: "في محاولة ل <span>تحميل</span>"},
    "PW": {message: "بالاو"},
    "UZ": {message: "أوزبكستان"},
    "LR": {message: "ليبيريا"},
    "TK": {message: "توكيلو"},
    "TN": {message: "تونس"},
    "EE": {message: "استونيا"},
    "CK": {message: "جزر كوك"},
    "BY": {message: "روسيا البيضاء"},
    "KR": {message: "كوريا الجنوبية"},
    "NO": {message: "النرويج"},
    "BF": {message: "بوركينا فاسو"},
    "AM": {message: "أرمينيا"},
    "MG": {message: "مدغشقر"},
    "SR": {message: "سورينام"},
    "ON": {message: "تشغيل"},
    "BT": {message: "بوتان"},
    "CF": {message: "جمهورية افريقيا الوسطى"},
    "AE": {message: "الامارات العربية المتحدة"},
    "BA": {message: "البوسنة والهرسك"},
    "TH": {message: "تايلند"},
    "CC": {message: "جزر كوكوس"},
    "NC": {message: "كاليدونيا الجديدة"},
    "TO": {message: "تونجا"},
    "SE": {message: "السويد"},
    "AZ": {message: "أذربيجان"},
    "AF": {message: "أفغانستان"},
    "NG": {message: "نيجيريا"},
    "KE": {message: "كينيا"},
    "BJ": {message: "بنين"},
    "Turn on to get started": {message: "بداء التشغيل"},
    "OM": {message: "عمان"},
    "LK": {message: "سريلانكا"},
    "ID": {message: "اندونيسيا"},
    "FM": {message: "ميكرونيزيا"},
    "(some Hola features are not available on your version)": {message: "(بعض الملامح حولا لا تتوفر في الإصدار الخاص بك)"},
    "GM": {message: "غامبيا"},
    "LV": {message: "لاتفيا"},
    "RU": {message: "روسيا"},
    "FI": {message: "فنلندا"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: ".احصل حولا زائد لغير متقطع الخدمة، خالية من الاعلانات"},
    "LU": {message: "لوكسمبورج"},
    "VE": {message: "فنزويلا"},
    "VI": {message: "جزر فرجين الأمريكية"},
    "TV": {message: "توفالو"},
    "SN": {message: "السنغال"},
    "MX": {message: "المكسيك"},
    "IL": {message: "اسرائيل"},
    "DO": {message: "جمهورية الدومينيك"},
    "HU": {message: "المجر"},
    "OFF": {message: "ايقاف"},
    "KH": {message: "كمبوديا"},
    "TG": {message: "توجو"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "دار إعدادات الوكيل الخاص بك عن طريق شبكة تمديد آخر. تعطيل هذا التمديد. مواصلة مع هولا <a>extensions</a>"},
    "BB": {message: "بربادوس"},
    "JE": {message: "جيرسي"},
    "DK": {message: "الدانمرك"},
    "PA": {message: "بنما"},
    "QA": {message: "قطر"},
    "CV": {message: "الرأس الأخضر"},
    "Reload": {message: "تحديث"},
    "GD": {message: "جرينادا"},
    "MO": {message: "ماكاو الصينية"},
    "MF": {message: "سانت مارتين"},
    "HR": {message: "كرواتيا"},
    "CZ": {message: "جمهورية التشيك"},
    "ST": {message: "ساو تومي وبرينسيبي"},
    "AU": {message: "أستراليا"},
    "IR": {message: "ايران"},
    "CG": {message: "الكونغو - برازافيل"},
    "GW": {message: "غينيا بيساو"},
    "BI": {message: "بوروندي"},
    "MK": {message: "مقدونيا"},
    "GR": {message: "اليونان"},
    "AG": {message: "أنتيجوا وبربودا"},
    "AI": {message: "أنجويلا"},
    "AN": {message: "جزر الأنتيل الهولندية"},
    "UA": {message: "أوكرانيا"},
    "EH": {message: "الصحراء الغربية"},
    "KN": {message: "سانت كيتس ونيفيس"},
    "SC": {message: "سيشل"},
    "NL": {message: "هولندا"},
    "MS": {message: "مونتسرات"},
    "HK": {message: "هونج كونج الصينية"},
    "EC": {message: "الاكوادور"},
    "MY": {message: "ماليزيا"},
    "CR": {message: "كوستاريكا"},
    "VA": {message: "الفاتيكان"},
    "IO": {message: "المحيط الهندي البريطاني"},
    "RS": {message: "صربيا"},
    "SD": {message: "السودان"},
    "CN": {message: "الصين"},
    "UY": {message: "أورجواي"},
    "PY": {message: "باراجواي"},
    "MU": {message: "موريشيوس"},
    "LI": {message: "ليختنشتاين"},
    "CH": {message: "سويسرا"},
    "KG": {message: "قرغيزستان"},
    "GH": {message: "غانا"},
    "NU": {message: "نيوي"},
    "US": {message: "الولايات المتحدة الأمريكية"},
    "PE": {message: "بيرو"},
    "SL": {message: "سيراليون"},
    "FJ": {message: "فيجي"},
    "ER": {message: "اريتريا"},
    "IQ": {message: "العراق"},
    "AS": {message: "ساموا الأمريكية"},
    "TZ": {message: "تانزانيا"},
    "LY": {message: "ليبيا"},
    "GT": {message: "جواتيمالا"},
    "BM": {message: "برمودا"},
    "BV": {message: "جزيرة بوفيه"},
    "LT": {message: "ليتوانيا"},
    "SG": {message: "سنغافورة"},
    "PM": {message: "سانت بيير وميكولون"},
    "Initializing...": {message: "تهيئة، يرجى الانتظار..."},
    "TT": {message: "ترينيداد وتوباغو"},
    "SY": {message: "سوريا"},
    "SK": {message: "سلوفاكيا"},
    "GL": {message: "جرينلاند"},
    "PG": {message: "بابوا غينيا الجديدة"},
    "KI": {message: "كيريباتي"},
    "CD": {message: "جمهورية الكونغو الديمقراطية"},
    "AO": {message: "أنجولا"},
    "BW": {message: "بتسوانا"},
    "ZW": {message: "زيمبابوي"},
    "VC": {message: "سانت فنسنت وغرنادين"},
    "JP": {message: "اليابان"},
    "NA": {message: "ناميبيا"},
    "TJ": {message: "طاجكستان"},
    "LC": {message: "سانت لوسيا"},
    "VU": {message: "فانواتو"},
    "MN": {message: "منغوليا"},
    "IT": {message: "ايطاليا"},
    "RE": {message: "روينيون"},
    "WS": {message: "ساموا"},
    "Enable": {message: "تمكين"},
    "Loading": {message: "تحميل"},
    "FR": {message: "فرنسا"},
    "EG": {message: "مصر"},
    "start": {message: "بداية"},
    "RW": {message: "رواندا"},
    "BE": {message: "بلجيكا"},
    "UM": {message: "جزر الولايات المتحدة البعيدة الصغيرة"},
    "Accelerator": {message: "مسرع"},
    "SA": {message: "المملكة العربية السعودية"},
    "LS": {message: "ليسوتو"},
    "ZA": {message: "جمهورية جنوب افريقيا"},
    "PT": {message: "البرتغال"},
    "CA": {message: "كندا"},
    "Starting...": {message: "ابتداء ..."},
    "CM": {message: "الكاميرون"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: ".يحتاج نسخة مجانية من هولا أن تكون إعادة تمكين كل 4 ساعات وبرعاية الإعلانات"},
    "NP": {message: "نيبال"},
    "PL": {message: "بولندا"},
    "GA": {message: "الجابون"},
    "TM": {message: "تركمانستان"},
    "KY": {message: "جزر الكايمن"},
    "Verify you have Internet": {message: "التحقق من أن يكون لديك إنترنت"},
    "LA": {message: "لاوس"},
    "PH": {message: "الفيلبين"},
    "NI": {message: "نيكاراجوا"},
    "TF": {message: "المقاطعات الجنوبية الفرنسية"},
    "GU": {message: "جوام"},
    "KZ": {message: "كازاخستان"},
    "SJ": {message: "سفالبارد وجان مايان"},
    "MM": {message: "ميانمار"},
    "NR": {message: "نورو"},
    "NE": {message: "النيجر"},
    "DM": {message: "دومينيكا"},
    "AD": {message: "أندورا"},
    "MR": {message: "موريتانيا"},
    "changing...": {message: "متغير..."},
    "GS": {message: "جورجيا الجنوبية وجزر ساندويتش الجنوبية"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "الكروم لاستخدام هولا <a>تحديث</a>"},
    "ME": {message: "الجبل الأسود"},
    "AX": {message: "جزر أولان"},
    "VG": {message: "جزر فرجين البريطانية"},
    "VN": {message: "فيتنام"},
    "YE": {message: "اليمن"},
    "DZ": {message: "الجزائر"},
    "CI": {message: "ساحل العاج"},
    "GE": {message: "جورجيا"},
    "CX": {message: "جزيرة الكريسماس"},
    "LB": {message: "لبنان"},
    "FK": {message: "جزر فوكلاند"},
    "DE": {message: "ألمانيا"},
    "even more...": {message: "حتى أكثر..."},
    "MV": {message: "جزر الملديف"},
    "PN": {message: "بتكايرن"},
    "BH": {message: "البحرين"},
    "GI": {message: "جبل طارق"},
    "WF": {message: "جزر والس وفوتونا"},
    "RO": {message: "رومانيا"},
    "IN": {message: "الهند"},
    "AR": {message: "الأرجنتين"},
    "GP": {message: "جوادلوب"},
    "Unblocker site list": {message: "قائمة موقع فك الحظر"},
    "AW": {message: "آروبا"},
    "FO": {message: "جزر فارو"},
    "CS": {message: "صربيا والجبل الأسود"},
    "BR": {message: "البرازيل"},
    "MC": {message: "موناكو"},
    "HN": {message: "هندوراس"},
    "SB": {message: "جزر سليمان"},
    "PS": {message: "فلسطين"},
    "NZ": {message: "نيوزيلاندا"},
    "UG": {message: "أوغندا"},
    "GB": {message: "المملكة المتحدة"},
    "HT": {message: "هايتي"},
    "GF": {message: "غويانا"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "إصدار قديم من فايرفوكس. الصحافة <a>هنا</a> لترقية "},
    "ZZ": {message: "منطقة غير معرفة"},
    "KM": {message: "جزر القمر"},
    "KW": {message: "الكويت"},
    "TC": {message: "جزر الترك وجايكوس"},
    "MQ": {message: "مارتينيك"},
    "ES": {message: "أسبانيا"},
    "MZ": {message: "موزمبيق"},
    "BO": {message: "بوليفيا"},
    "AL": {message: "ألبانيا"},
    "TR": {message: "تركيا"},
    "MD": {message: "مولدافيا"},
    "GN": {message: "غينيا"},
    "SI": {message: "سلوفينيا"},
    "CO": {message: "كولومبيا"},
    "Settings": {message: "إعدادات"},
    "AQ": {message: "القطب الجنوبي"},
    "JO": {message: "الأردن"},
    "SM": {message: "سان مارينو"},
    "CL": {message: "شيلي"},
    "CU": {message: "كوبا"},
    "ML": {message: "مالي"},
    "ET": {message: "اثيوبيا"},
    "IS": {message: "أيسلندا"},
    "Reload Hola": {message: "تحديث هولا"},
    "back to": {message: "الرجوع"},
    "MH": {message: "جزر المارشال"},
    "BG": {message: "بلغاريا"},
    "BS": {message: "الباهاما"},
    "TL": {message: "تيمور الشرقية"},
    "BZ": {message: "بليز"},
    "CY": {message: "قبرص"},
    "IM": {message: "جزيرة مان"},
    "IE": {message: "أيرلندا"},
    "Get help from engineer over skype:": {message: "الحصول على مساعدة من مهندس على سكايب:"},
    "TW": {message: "تايوان"},
    "KP": {message: "كوريا الشمالية"},
    "PF": {message: "بولينيزيا الفرنسية"},
    "app_name": {message: "Hola أفضل الإنترنت"},
    "Update": {message: "تحديث"},
    "MW": {message: "ملاوي"},
    "GY": {message: "غيانا"},
    "Unblocker is disabled": {message: "تم تعطيل فك الحظر"},
    "GQ": {message: "غينيا الاستوائية"},
    "PK": {message: "باكستان"},
    "NF": {message: "جزيرة نورفوك"},
    "SO": {message: "الصومال"},
    "TD": {message: "تشاد"},
    "BD": {message: "بنجلاديش"},
    "HM": {message: "جزيرة هيرد وماكدونالد"},

};
return E; });