'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "ჯიბუტი"},
    "JM": {message: "იამაიკა"},
    "AT": {message: "ავსტრია"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "გინდა Hola სხვა მოწყობილობები? (Xbox, PS, Apple TV, iPhone ...). დააწკაპუნეთ აქ"},
    "SZ": {message: "სვაზილენდი"},
    "BN": {message: "ბრუნეი"},
    "ZM": {message: "ზამბია"},
    "app_desc": {message: "ხელმისაწვდომობა ყველა ინტერნეტი! გადასვლა დაბლოკა საიტი -> დაჭერით Hola ხატი -> ცვლილება ქვეყნის დროშა -> ისიამოვნეთ!"},
    "Improve translation": {message: "გაუმჯობესება თარგმანი"},
    "more...": {message: "დაწვრილებით ..."},
    "PR": {message: "პუერტო რიკო"},
    "SH": {message: "წმინდა ელენეს კუნძული"},
    "There seems to be an error": {message: "როგორც ჩანს შეცდომა"},
    "MA": {message: "მაროკო"},
    "SV": {message: "სალვადორი"},
    "MT": {message: "მალტა"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "ხელმისაწვდომობა ნებისმიერი საიტი ნებისმიერი ქვეყნის, უფასო"},
    "Try to <span>reload</span>": {message: "შეეცადეთ <span> ჩატვირთვა </span>"},
    "UZ": {message: "უზბეკეთი"},
    "PW": {message: "პალაუ"},
    "LR": {message: "ლიბერია"},
    "TN": {message: "ტუნისი"},
    "EE": {message: "ესტონეთი"},
    "CK": {message: "კუკის კუნძულები"},
    "BY": {message: "ბელორუსია"},
    "KR": {message: "სამხრეთი კორეა"},
    "NO": {message: "ნორვეგია"},
    "BF": {message: "ბურკინა-ფასო"},
    "AM": {message: "სომხეთი"},
    "SR": {message: "სურინამი"},
    "MG": {message: "მადაგასკარი"},
    "ON": {message: "ON"},
    "BT": {message: "ბუტანი"},
    "CF": {message: "ცენტრალური აფრიკის რესპუბლიკა"},
    "AE": {message: "არაბეთის გაერთიანებული ემირატები"},
    "BA": {message: "ბოსნია და ჰერცეგოვინა"},
    "TH": {message: "ტაილანდი"},
    "Author:": {message: "ავტორი:"},
    "NC": {message: "ახალი კალედონია"},
    "TO": {message: "ტონგა"},
    "SE": {message: "შვეცია"},
    "AZ": {message: "აზერბაიჯანი"},
    "AF": {message: "ავღანეთი"},
    "NG": {message: "ნიგერია"},
    "KE": {message: "კენია"},
    "BJ": {message: "ბენინი"},
    "Turn on to get started": {message: "ჩართეთ უნდა დაიწყო"},
    "OM": {message: "ომანი"},
    "LK": {message: "შრი-ლანკა"},
    "ID": {message: "ინდონეზია"},
    "FM": {message: "მიკრონეზია"},
    "(some Hola features are not available on your version)": {message: "(ზოგიერთი Hola ფუნქცია შეიძლება არ ჰქონდეს თქვენს ვერსია)"},
    "GM": {message: "გამბია"},
    "LV": {message: "ლატვია"},
    "RU": {message: "რუსეთი"},
    "FI": {message: "ფინეთი"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "მიიღეთ Hola პლუსია un-გაწყდება, რეკლამა თავისუფალი მომსახურება."},
    "LU": {message: "ლუქსემბურგი"},
    "VE": {message: "ვენესუელა"},
    "TV": {message: "ტუვალუ"},
    "SN": {message: "სენეგალი"},
    "MX": {message: "მექსიკა"},
    "IL": {message: "ისრაელი"},
    "Author site:": {message: "ავტორი ადგილზე:"},
    "HU": {message: "უნგრეთი"},
    "DO": {message: "დომინიკანის რესპუბლიკა"},
    "OFF": {message: "OFF"},
    "KH": {message: "კამბოჯა"},
    "TG": {message: "ტოგო"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola ვერ იმუშავებს, რადგან კიდევ გაგრძელების აკონტროლებენ თქვენს მარიონეტული პარამეტრები. გთხოვთ გამორთოთ სხვა გაგრძელება, რომელიც თქვენი აზრით შეიძლება გააკონტროლოს თქვენი მარიონეტული პარამეტრების <a> გაგრძელება </a> (როგორიცაა სარეკლამო ბლოკატორი, სხვა VPN მომსახურება და სხვა)."},
    "BB": {message: "ბარბადოსი"},
    "JE": {message: "ჯერსი"},
    "Remove ads": {message: "ამოღება განცხადებები"},
    "DK": {message: "დანია"},
    "PA": {message: "პანამა"},
    "CV": {message: "კაბო-ვერდე"},
    "QA": {message: "კატარი"},
    "Reload": {message: "თავიდან"},
    "GD": {message: "გრენადა"},
    "Number of users that use this option": {message: "პუნქტების წევრებს, რომ გამოიყენოს ეს ვარიანტი"},
    "MO": {message: "მაკაო"},
    "HR": {message: "ჰორვატია"},
    "CZ": {message: "ჩეხეთის რესპუბლიკა"},
    "ST": {message: "საო-ტომე და პრინსიპი"},
    "AU": {message: "ავსტრალია"},
    "IR": {message: "ირანი"},
    "CG": {message: "კონგო"},
    "BI": {message: "ბურუნდი"},
    "GW": {message: "გვინეა-ბისაუ"},
    "MK": {message: "მაკედონია"},
    "GR": {message: "საბერძნეთი"},
    "AG": {message: "ანტიგუა და ბარბუდა"},
    "AI": {message: "ანგვილა"},
    "AN": {message: "ნიდერლანდების ანტილები"},
    "UA": {message: "უკრაინა"},
    "EH": {message: "დასავლეთი საჰარა"},
    "KN": {message: "სენტ-კიტსი და ნევისი"},
    "SC": {message: "სეიშელის კუნძულები"},
    "NL": {message: "ნიდერლანდები"},
    "MS": {message: "მონსერატი"},
    "HK": {message: "ჰონგ კონგი"},
    "EC": {message: "ეკვადორი"},
    "MY": {message: "მალაიზია"},
    "CR": {message: "კოსტა-რიკა"},
    "VA": {message: "ვატიკანი"},
    "IO": {message: "ბრიტანული ტერიტორია ინდოეთის ოკეანეში"},
    "SD": {message: "სუდანი"},
    "RS": {message: "სერბია"},
    "CN": {message: "ჩინეთი"},
    "UY": {message: "ურუგვაი"},
    "PY": {message: "პარაგვაი"},
    "MU": {message: "მავრიკია"},
    "CH": {message: "შვეიცარია"},
    "LI": {message: "ლიხტენშტაინი"},
    "KG": {message: "ყირგიზეთი"},
    "GH": {message: "განა"},
    "PE": {message: "პერუ"},
    "US": {message: "ამერიკის შეერთებული შტატები"},
    "SL": {message: "სიერა-ლეონე"},
    "FJ": {message: "ფიჯი"},
    "ER": {message: "ერიტრეა"},
    "IQ": {message: "ერაყი"},
    "AS": {message: "ამერიკული სამოა"},
    "TZ": {message: "ტანზანია"},
    "LY": {message: "ლიბია"},
    "GT": {message: "გვატემალა"},
    "BM": {message: "ბერმუდა"},
    "BV": {message: "ბუვეს კუნძული"},
    "LT": {message: "ლიტვა"},
    "SG": {message: "სინგაპური"},
    "PM": {message: "სენტ-პიერი და მიქელონი"},
    "Initializing...": {message: "მომზადება ..."},
    "TT": {message: "ტრინიდადი და ტობაგო"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola არ მუშაობს კარგად Windows 8 რეჟიმში. გთხოვთ გადავიდეს კომპიუტერში რეჟიმში. Click <a> აქ </a> ინსტრუქციებისა"},
    "SK": {message: "სლოვაკეთი"},
    "SY": {message: "სირია"},
    "GL": {message: "გრენლანდია"},
    "PG": {message: "პაპუა-ახალი გვინეა"},
    "KI": {message: "კირიბატი"},
    "CD": {message: "კონგო - კინშასა"},
    "AO": {message: "ანგოლა"},
    "BW": {message: "ბოტსვანა"},
    "ZW": {message: "ზიმბაბვე"},
    "VC": {message: "სენტ-ვინსენტი და გრენადინები"},
    "JP": {message: "იაპონია"},
    "NA": {message: "ნამიბია"},
    "TJ": {message: "ტაჯიკეთი"},
    "LC": {message: "სენტ-ლუსია"},
    "VU": {message: "ვანუატუ"},
    "MN": {message: "მონღოლეთი"},
    "IT": {message: "იტალია"},
    "RE": {message: "რეიუნიონი"},
    "WS": {message: "სამოა"},
    "Enable": {message: "ჩართვა"},
    "Loading": {message: "დატვირთვა"},
    "EG": {message: "ეგვიპტე"},
    "FR": {message: "საფრანგეთი"},
    "start": {message: "დაიწყოს"},
    "RW": {message: "რუანდა"},
    "BE": {message: "ბელგია"},
    "UM": {message: "შეერთებული შტატების მცირე დაშორებული კუნძულები"},
    "Accelerator": {message: "Accelerator"},
    "LS": {message: "ლესოთო"},
    "SA": {message: "საუდის არაბეთი"},
    "ZA": {message: "სამხრეთ აფრიკა"},
    "PT": {message: "პორტუგალია"},
    "CA": {message: "კანადა"},
    "Starting...": {message: "სასტარტო ..."},
    "CM": {message: "კამერუნი"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "უფასო მობილური Hola საჭიროებს ხელახლა საშუალება მისცა ყოველ 4 საათში და სპონსორები არიან განცხადებები."},
    "Hola": {message: "Hola"},
    "NP": {message: "ნეპალი"},
    "PL": {message: "პოლონეთი"},
    "GA": {message: "გაბონი"},
    "TM": {message: "თურქმენეთი"},
    "KY": {message: "კაიმანის კუნძულები"},
    "Verify you have Internet": {message: "გადაამოწმონ თქვენ გაქვთ ინტერნეტ"},
    "LA": {message: "ლაოსი"},
    "PH": {message: "ფილიპინები"},
    "NI": {message: "ნიკარაგუა"},
    "GU": {message: "გუამი"},
    "TF": {message: "ფრანგული სამხრეთის ტერიტორიები"},
    "KZ": {message: "ყაზახეთი"},
    "MM": {message: "მიანმარი"},
    "NR": {message: "ნაურუ"},
    "DM": {message: "დომინიკა"},
    "NE": {message: "ნიგერი"},
    "AD": {message: "ანდორა"},
    "MR": {message: "მავრიტანია"},
    "changing...": {message: "იცვლება ..."},
    "GS": {message: "სამხრეთი ჯორჯია და სამხრეთ სენდვიჩის კუნძულები"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "ძალიან ძველი ვერსია Chrome, <a> განახლება </a> Chrome გამოყენება Hola"},
    "ME": {message: "მონტენეგრო"},
    "AX": {message: "ალანდის კუნძულები"},
    "VN": {message: "ვიეტნამი"},
    "DZ": {message: "ალჟირი"},
    "YE": {message: "იემენი"},
    "CI": {message: "სპილოს ძვლის სანაპირო"},
    "GE": {message: "საქართველო"},
    "CX": {message: "შობის კუნძული"},
    "LB": {message: "ლიბანი"},
    "FK": {message: "ფალკლენდის კუნძულები"},
    "DE": {message: "გერმანია"},
    "even more...": {message: "კიდევ უფრო მეტი ..."},
    "MV": {message: "მალდივის კუნძულები"},
    "BH": {message: "ბაჰრეინი"},
    "GI": {message: "გიბრალტარი"},
    "WF": {message: "ვალისი და ფუტუნა"},
    "RO": {message: "რუმინეთი"},
    "GP": {message: "გვადელუპე"},
    "AR": {message: "არგენტინა"},
    "IN": {message: "ინდოეთი"},
    "Unblocker site list": {message: "Unblocker საიტი სია"},
    "AW": {message: "არუბა"},
    "CS": {message: "სერბია და მონტენეგრო"},
    "FO": {message: "ფაროს კუნძულები"},
    "BR": {message: "ბრაზილია"},
    "MC": {message: "მონაკო"},
    "HN": {message: "ჰონდურასი"},
    "Translate to your language": {message: "თარგმნა თქვენი ენა"},
    "SB": {message: "სოლომონის კუნძულები"},
    "NZ": {message: "ახალი ზელანდია"},
    "PS": {message: "პალესტინის ტერიტორია"},
    "UG": {message: "უგანდა"},
    "GB": {message: "დიდი ბრიტანეთი"},
    "HT": {message: "ჰაიტი"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "ძველი ვერსია Firefox. პრეს <a> აქ </a> განახლება."},
    "ZZ": {message: "უცნობი ან არასწორი რეგიონი"},
    "KM": {message: "კომორის კუნძულები"},
    "KW": {message: "კუვეიტი"},
    "MQ": {message: "მარტინიკი"},
    "ES": {message: "ესპანეთი"},
    "MZ": {message: "მოზამბიკი"},
    "BO": {message: "ბოლივია"},
    "AL": {message: "ალბანეთი"},
    "TR": {message: "თურქეთი"},
    "MD": {message: "მოლდოვა"},
    "GN": {message: "გვინეა"},
    "CO": {message: "კოლუმბია"},
    "SI": {message: "სლოვენია"},
    "Settings": {message: "პარამეტრები"},
    "AQ": {message: "ანტარქტიკა"},
    "JO": {message: "იორდანია"},
    "SM": {message: "სან-მარინო"},
    "CU": {message: "კუბა"},
    "CL": {message: "ჩილე"},
    "ML": {message: "მალი"},
    "ET": {message: "ეთიოპია"},
    "IS": {message: "ისლანდია"},
    "Reload Hola": {message: "თავიდან Hola"},
    "back to": {message: "თავში"},
    "MH": {message: "მარშალის კუნძულები"},
    "BG": {message: "ბულგარეთი"},
    "BS": {message: "ბაჰამის კუნძულები"},
    "TL": {message: "აღმოსავლეთი ტიმორი"},
    "BZ": {message: "ბელიზი"},
    "CY": {message: "კვიპროსი"},
    "IM": {message: "მანის კუნძული"},
    "IE": {message: "ირლანდია"},
    "Get help from engineer over skype:": {message: "მიიღეთ დახმარება ინჟინერი მეტი skype:"},
    "TW": {message: "ტაივანი"},
    "KP": {message: "ჩრდილოეთი კორეა"},
    "PF": {message: "ფრანგული პოლინეზია"},
    "app_name": {message: "Hola უკეთესი ინტერნეტი"},
    "Update": {message: "განახლების"},
    "MW": {message: "მალავი"},
    "GY": {message: "გაიანა"},
    "Unblocker is disabled": {message: "Unblocker გამორთულია"},
    "PK": {message: "პაკისტანი"},
    "GQ": {message: "ეკვატორული გვინეა"},
    "Number of users that pressed not working": {message: "პუნქტების წევრებს, რომ დაპრესილი არ მუშაობს"},
    "NF": {message: "ნორფოლკის კუნძული"},
    "TD": {message: "ჩადი"},
    "SO": {message: "სომალი"},
    "HM": {message: "ჰერდის კუნძული და მაკდონალდის კუნძულები"},
    "BD": {message: "ბანგლადეში"},

};
return E; });