'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "지부티"},
    "JM": {message: "자메이카"},
    "AT": {message: "오스트리아"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "다른 장치에 안녕을 원하십니까? (X 박스, PS, 애플 TV, 아이폰 ...). 여기를 클릭하십시오"},
    "SZ": {message: "스와질랜드"},
    "YT": {message: "마요티"},
    "BN": {message: "브루나이"},
    "ZM": {message: "잠비아"},
    "app_desc": {message: "인터넷의 모든 액세스! 차단 된 사이트로 이동 -> 클릭 안녕 아이콘 -> 변경 국기 -> 즐긴다!"},
    "Improve translation": {message: "번역 개선"},
    "more...": {message: "더 ..."},
    "PR": {message: "푸에르토리코"},
    "SH": {message: "세인트헬레나"},
    "There seems to be an error": {message: "오류가있는 것 같습니다"},
    "MA": {message: "모로코"},
    "SV": {message: "엘살바도르"},
    "MT": {message: "몰타"},
    "MP": {message: "북마리아나제도"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "무료, 어떤 국가에서 어떤 사이트에 액세스"},
    "Try to <span>reload</span>": {message: "<span> 재 장전 </span>을 ​​시도"},
    "PW": {message: "팔라우"},
    "UZ": {message: "우즈베키스탄"},
    "TK": {message: "토켈라우"},
    "LR": {message: "라이베리아"},
    "TN": {message: "튀니지"},
    "EE": {message: "에스토니아"},
    "CK": {message: "쿡제도"},
    "BY": {message: "벨라루스"},
    "NO": {message: "노르웨이"},
    "KR": {message: "대한민국"},
    "BF": {message: "부르키나파소"},
    "AM": {message: "아르메니아"},
    "SR": {message: "수리남"},
    "MG": {message: "마다가스카르"},
    "ON": {message: "ON"},
    "BT": {message: "부탄"},
    "CF": {message: "중앙 아프리카 공화국"},
    "AE": {message: "아랍에미리트 연합"},
    "BA": {message: "보스니아 헤르체고비나"},
    "TH": {message: "태국"},
    "Author:": {message: "저자 :"},
    "CC": {message: "코코스제도"},
    "NC": {message: "뉴 칼레도니아"},
    "TO": {message: "통가"},
    "SE": {message: "스웨덴"},
    "AZ": {message: "아제르바이잔"},
    "AF": {message: "아프가니스탄"},
    "NG": {message: "나이지리아"},
    "KE": {message: "케냐"},
    "BJ": {message: "베냉"},
    "Turn on to get started": {message: "시작하기 켭니다"},
    "OM": {message: "오만"},
    "LK": {message: "스리랑카"},
    "ID": {message: "인도네시아"},
    "FM": {message: "미크로네시아"},
    "(some Hola features are not available on your version)": {message: "(일부 안녕 기능은 버전에 사용할 수 없습니다)"},
    "GM": {message: "감비아"},
    "LV": {message: "라트비아"},
    "RU": {message: "러시아"},
    "FI": {message: "핀란드"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "취소 중단, 무료 광고 서비스를 안녕 플러스를 얻을."},
    "LU": {message: "룩셈부르크"},
    "VE": {message: "베네수엘라"},
    "TV": {message: "투발루"},
    "VI": {message: "미국령 버진 아일랜드"},
    "SN": {message: "세네갈"},
    "MX": {message: "멕시코"},
    "IL": {message: "이스라엘"},
    "GG": {message: "건지"},
    "Author site:": {message: "저자 사이트 :"},
    "HU": {message: "헝가리"},
    "DO": {message: "도미니카 공화국"},
    "OFF": {message: "OFF"},
    "KH": {message: "캄보디아"},
    "TG": {message: "토고"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "다른 확장 프록시 설정을 제어하기 때문에 안녕이 제대로 작동하지 않을 수 있습니다. 당신이 <a> 확장 </a>에서 프록시 설정을 (예 : 광고 차단제, 다른 VPN 서비스 등)를 제어 할 수 있다고 생각되는 다른 확장을 비활성화하시기 바랍니다."},
    "BB": {message: "바베이도스"},
    "JE": {message: "저지"},
    "Remove ads": {message: "광고를 제거"},
    "DK": {message: "덴마크"},
    "PA": {message: "파나마"},
    "QA": {message: "카타르"},
    "CV": {message: "까뽀베르데"},
    "Reload": {message: "새로 고침"},
    "GD": {message: "그레나다"},
    "Number of users that use this option": {message: "이 옵션을 사용하는 사용자의 수"},
    "MO": {message: "마카오, 중국 특별행정구"},
    "MF": {message: "생 마르탱"},
    "HR": {message: "크로아티아"},
    "CZ": {message: "체코"},
    "BL": {message: "생 바르텔르미"},
    "AU": {message: "오스트레일리아"},
    "ST": {message: "상투메 프린시페"},
    "IR": {message: "이란"},
    "CG": {message: "콩고"},
    "GW": {message: "기네비쏘"},
    "BI": {message: "부룬디"},
    "MK": {message: "마케도니아"},
    "GR": {message: "그리스"},
    "AG": {message: "앤티가 바부다"},
    "AI": {message: "안길라"},
    "AN": {message: "네덜란드령 안틸레스"},
    "UA": {message: "우크라이나"},
    "EH": {message: "서사하라"},
    "KN": {message: "세인트크리스토퍼 네비스"},
    "SC": {message: "쉐이쉘"},
    "NL": {message: "네덜란드"},
    "MS": {message: "몬트세라트"},
    "HK": {message: "홍콩, 중국 특별행정구"},
    "EC": {message: "에콰도르"},
    "MY": {message: "말레이시아"},
    "CR": {message: "코스타리카"},
    "VA": {message: "바티칸"},
    "IO": {message: "영국령인도양식민지"},
    "RS": {message: "세르비아"},
    "SD": {message: "수단"},
    "CN": {message: "중국"},
    "UY": {message: "우루과이"},
    "PY": {message: "파라과이"},
    "MU": {message: "모리셔스"},
    "LI": {message: "리히텐슈타인"},
    "CH": {message: "스위스"},
    "KG": {message: "키르기스스탄"},
    "GH": {message: "가나"},
    "NU": {message: "니우에"},
    "PE": {message: "페루"},
    "US": {message: "미국"},
    "SL": {message: "시에라리온"},
    "FJ": {message: "피지"},
    "ER": {message: "에리트리아"},
    "IQ": {message: "이라크"},
    "AS": {message: "아메리칸 사모아"},
    "TZ": {message: "탄자니아"},
    "LY": {message: "리비아"},
    "GT": {message: "과테말라"},
    "BM": {message: "버뮤다"},
    "BV": {message: "부베"},
    "LT": {message: "리투아니아"},
    "SG": {message: "싱가포르"},
    "PM": {message: "세인트피에르-미케롱"},
    "Initializing...": {message: "초기화 ..."},
    "TT": {message: "트리니다드 토바고"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "안녕은 윈도우 8 모드에서 제대로 작동하지 않습니다. 바탕 화면 모드로 전환하십시오. 지침 <a> 여기를 클릭하십시오 </a>"},
    "SY": {message: "시리아"},
    "SK": {message: "슬로바키아"},
    "GL": {message: "그린란드"},
    "PG": {message: "파푸아뉴기니"},
    "KI": {message: "키리바시"},
    "CD": {message: "콩고 민주공화국"},
    "BW": {message: "보츠와나"},
    "AO": {message: "앙골라"},
    "ZW": {message: "짐바브웨"},
    "VC": {message: "세인트빈센트그레나딘"},
    "JP": {message: "일본"},
    "NA": {message: "나미비아"},
    "TJ": {message: "타지키스탄"},
    "LC": {message: "세인트루시아"},
    "VU": {message: "바누아투"},
    "MN": {message: "몽골"},
    "IT": {message: "이탈리아"},
    "RE": {message: "리유니온"},
    "WS": {message: "사모아"},
    "Enable": {message: "사용"},
    "Loading": {message: "로드"},
    "EG": {message: "이집트"},
    "FR": {message: "프랑스"},
    "start": {message: "스타트"},
    "RW": {message: "르완다"},
    "UM": {message: "미국령 해외 제도"},
    "BE": {message: "벨기에"},
    "Accelerator": {message: "가속기"},
    "LS": {message: "레소토"},
    "SA": {message: "사우디아라비아"},
    "ZA": {message: "남아프리카"},
    "PT": {message: "포르투갈"},
    "CA": {message: "캐나다"},
    "Starting...": {message: "시작 ..."},
    "CM": {message: "카메룬"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "안녕의 무료 버전은 4 시간마다 다시 활성화하고 광고 후원이 필요합니다."},
    "Hola": {message: "안녕"},
    "NP": {message: "네팔"},
    "PL": {message: "폴란드"},
    "GA": {message: "가봉"},
    "TM": {message: "투르크메니스탄"},
    "KY": {message: "케이맨제도"},
    "Verify you have Internet": {message: "당신은 인터넷을 확인"},
    "LA": {message: "라오스"},
    "PH": {message: "필리핀"},
    "NI": {message: "니카라과"},
    "GU": {message: "괌"},
    "TF": {message: "프랑스 남부 지방"},
    "KZ": {message: "카자흐스탄"},
    "SJ": {message: "스발바르제도-얀마웬섬"},
    "MM": {message: "미얀마"},
    "NR": {message: "나우루"},
    "DM": {message: "도미니카"},
    "NE": {message: "니제르"},
    "MR": {message: "모리타니"},
    "AD": {message: "안도라"},
    "changing...": {message: "변경 ..."},
    "GS": {message: "사우스조지아-사우스샌드위치제도"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "크롬의 아주 오래된 버전 <a> 업데이트 </a>에 크롬 안녕을 사용하는"},
    "ME": {message: "몬테네그로"},
    "AX": {message: "올란드 제도"},
    "VN": {message: "베트남"},
    "VG": {message: "영국령 버진 아일랜드"},
    "DZ": {message: "알제리"},
    "YE": {message: "예멘"},
    "CI": {message: "코트디부아르"},
    "GE": {message: "그루지야"},
    "CX": {message: "크리스마스섬"},
    "LB": {message: "레바논"},
    "FK": {message: "포클랜드 군도"},
    "DE": {message: "독일"},
    "even more...": {message: "더 ..."},
    "MV": {message: "몰디브"},
    "PN": {message: "핏케언섬"},
    "BH": {message: "바레인"},
    "GI": {message: "지브롤터"},
    "RO": {message: "루마니아"},
    "WF": {message: "왈리스-푸투나 제도"},
    "GP": {message: "과달로프"},
    "AR": {message: "아르헨티나"},
    "IN": {message: "인도"},
    "Unblocker site list": {message: "Unblocker 사이트 목록"},
    "CS": {message: "세르비아 및 몬테네그로"},
    "AW": {message: "아루바"},
    "FO": {message: "페로제도"},
    "MC": {message: "모나코"},
    "BR": {message: "브라질"},
    "HN": {message: "온두라스"},
    "Translate to your language": {message: "당신의 언어로 번역"},
    "SB": {message: "솔로몬 제도"},
    "NZ": {message: "뉴질랜드"},
    "PS": {message: "팔레스타인 지구"},
    "UG": {message: "우간다"},
    "GB": {message: "영국"},
    "HT": {message: "아이티"},
    "GF": {message: "프랑스령 기아나"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "파이어 폭스의 이전 버전. 보도 <a> 여기 </a> 업그레이드 할 수 있습니다."},
    "ZZ": {message: "알수없거나 유효하지 않은 지역"},
    "KM": {message: "코모로스"},
    "KW": {message: "쿠웨이트"},
    "MQ": {message: "말티니크"},
    "TC": {message: "터크스케이커스제도"},
    "MZ": {message: "모잠비크"},
    "ES": {message: "스페인"},
    "BO": {message: "볼리비아"},
    "AL": {message: "알바니아"},
    "MD": {message: "몰도바"},
    "TR": {message: "터키"},
    "GN": {message: "기니"},
    "SI": {message: "슬로베니아"},
    "CO": {message: "콜롬비아"},
    "Settings": {message: "설정"},
    "AQ": {message: "남극 대륙"},
    "JO": {message: "요르단"},
    "SM": {message: "산마리노"},
    "CL": {message: "칠레"},
    "CU": {message: "쿠바"},
    "ML": {message: "말리"},
    "ET": {message: "이디오피아"},
    "IS": {message: "아이슬란드"},
    "Reload Hola": {message: "안녕 다시로드"},
    "back to": {message: "로 다시"},
    "BG": {message: "불가리아"},
    "MH": {message: "마샬 군도"},
    "BS": {message: "바하마"},
    "TL": {message: "동티모르"},
    "BZ": {message: "벨리즈"},
    "CY": {message: "사이프러스"},
    "IM": {message: "맨 섬"},
    "IE": {message: "아일랜드"},
    "Get help from engineer over skype:": {message: "스카이프를 통해 엔지니어들의 도움을 받아 :"},
    "TW": {message: "대만"},
    "KP": {message: "조선 민주주의 인민 공화국"},
    "PF": {message: "프랑스령 폴리네시아"},
    "app_name": {message: "안녕 더 나은 인터넷"},
    "Update": {message: "업데이트"},
    "MW": {message: "말라위"},
    "GY": {message: "가이아나"},
    "Unblocker is disabled": {message: "Unblocker이 비활성화됩니다"},
    "PK": {message: "파키스탄"},
    "GQ": {message: "적도 기니"},
    "Number of users that pressed not working": {message: "작동하지 누르면 사용자 수"},
    "NF": {message: "노퍽섬"},
    "TD": {message: "차드"},
    "SO": {message: "소말리아"},
    "HM": {message: "허드섬-맥도널드제도"},
    "BD": {message: "방글라데시"},

};
return E; });