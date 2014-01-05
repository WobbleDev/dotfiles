'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "ジブチ"},
    "JM": {message: "ジャマイカ"},
    "AT": {message: "オーストリア"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "他のデバイスではいはいをしたいですか？ （のXbox、PS、Apple TVは、iPhone ...）。ここをクリック"},
    "SZ": {message: "スワジランド"},
    "YT": {message: "マヨット島"},
    "BN": {message: "ブルネイ"},
    "ZM": {message: "ザンビア"},
    "app_desc": {message: "インターネットのすべてにアクセス！ブロックされたサイトに移動 - >クリックはいはいアイコン - >変更国旗 - > ENJOY！"},
    "Improve translation": {message: "翻訳を向上させる"},
    "more...": {message: "もっと..."},
    "PR": {message: "プエルトリコ"},
    "SH": {message: "セントヘレナ"},
    "There seems to be an error": {message: "エラーがあるようです"},
    "MA": {message: "モロッコ"},
    "MT": {message: "マルタ"},
    "SV": {message: "エルサルバドル"},
    "MP": {message: "北マリアナ諸島"},
    "Unblocker": {message: "閉塞除去"},
    "Access any site from any country, free": {message: "自由に、どの国からの任意のサイトにアクセスする"},
    "Try to <span>reload</span>": {message: "<span>リロードしてみてください</span>"},
    "PW": {message: "パラオ"},
    "UZ": {message: "ウズベキスタン"},
    "LR": {message: "リベリア"},
    "TK": {message: "トケラウ諸島"},
    "TN": {message: "チュニジア"},
    "EE": {message: "エストニア"},
    "CK": {message: "クック諸島"},
    "BY": {message: "ベラルーシ"},
    "KR": {message: "大韓民国"},
    "NO": {message: "ノルウェー"},
    "BF": {message: "ブルキナファソ"},
    "AM": {message: "アルメニア"},
    "MG": {message: "マダガスカル"},
    "SR": {message: "スリナム"},
    "ON": {message: "ON"},
    "BT": {message: "ブータン"},
    "CF": {message: "中央アフリカ共和国"},
    "BA": {message: "ボスニア・ヘルツェゴビナ"},
    "AE": {message: "アラブ首長国連邦"},
    "TH": {message: "タイ"},
    "Author:": {message: "著者："},
    "CC": {message: "ココス (キーリング) 諸島"},
    "NC": {message: "ニューカレドニア"},
    "TO": {message: "トンガ"},
    "SE": {message: "スウェーデン"},
    "AZ": {message: "アゼルバイジャン"},
    "AF": {message: "アフガニスタン"},
    "NG": {message: "ナイジェリア"},
    "BJ": {message: "ベニン"},
    "KE": {message: "ケニア"},
    "Turn on to get started": {message: "始めるためにオン"},
    "OM": {message: "オマーン"},
    "LK": {message: "スリランカ"},
    "ID": {message: "インドネシア"},
    "FM": {message: "ミクロネシア"},
    "(some Hola features are not available on your version)": {message: "（一部はいはい機能がご使用のバージョンでは使用できません）"},
    "GM": {message: "ガンビア"},
    "LV": {message: "ラトビア"},
    "RU": {message: "ロシア"},
    "FI": {message: "フィンランド"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "非中断、広告なしのサービスのためにオラPlusを入手してください。"},
    "LU": {message: "ルクセンブルグ"},
    "VE": {message: "ベネズエラ"},
    "TV": {message: "ツバル"},
    "VI": {message: "アメリカ領ヴァージン諸島"},
    "MX": {message: "メキシコ"},
    "SN": {message: "セネガル"},
    "IL": {message: "イスラエル"},
    "GG": {message: "ガーンジー"},
    "Author site:": {message: "著者サイト："},
    "HU": {message: "ハンガリー"},
    "DO": {message: "ドミニカ共和国"},
    "OFF": {message: "OFF"},
    "KH": {message: "カンボジア"},
    "TG": {message: "トーゴ"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "別の拡張子があなたのプロキシの設定を制御しているので、オラは正常に動作しません。あなたは<a>拡張</a>をでプロキシの設定（例えば、広告ブロッカー、他のVPNサービスなど）を制御するかもしれないと思うことを他の拡張機能を無効にしてください。"},
    "BB": {message: "バルバドス"},
    "JE": {message: "ジャージー"},
    "Remove ads": {message: "広告を削除"},
    "DK": {message: "デンマーク"},
    "PA": {message: "パナマ"},
    "QA": {message: "カタール"},
    "CV": {message: "カーボベルデ"},
    "Reload": {message: "リロード"},
    "GD": {message: "グレナダ"},
    "Number of users that use this option": {message: "このオプションを使用するユーザーの数"},
    "MO": {message: "中華人民共和国マカオ特別行政区"},
    "MF": {message: "セント・マーチン"},
    "HR": {message: "クロアチア"},
    "CZ": {message: "チェコ共和国"},
    "BL": {message: "サン・バルテルミー"},
    "AU": {message: "オーストラリア"},
    "ST": {message: "サントメ・プリンシペ"},
    "IR": {message: "イラン"},
    "CG": {message: "コンゴ共和国 (ブラザビル)"},
    "BI": {message: "ブルンジ"},
    "GW": {message: "ギニアビサウ"},
    "MK": {message: "マケドニア"},
    "GR": {message: "ギリシャ"},
    "AG": {message: "アンティグア・バーブーダ"},
    "AI": {message: "アンギラ"},
    "AN": {message: "オランダ領アンティル諸島"},
    "UA": {message: "ウクライナ"},
    "EH": {message: "西サハラ"},
    "KN": {message: "セントクリストファー・ネイビス"},
    "SC": {message: "セーシェル"},
    "MS": {message: "モントセラト島"},
    "NL": {message: "オランダ"},
    "HK": {message: "中華人民共和国香港特別行政区"},
    "EC": {message: "エクアドル"},
    "MY": {message: "マレーシア"},
    "CR": {message: "コスタリカ"},
    "VA": {message: "バチカン市国"},
    "IO": {message: "英領インド洋植民地"},
    "SD": {message: "スーダン"},
    "RS": {message: "セルビア"},
    "CN": {message: "中国"},
    "UY": {message: "ウルグアイ"},
    "PY": {message: "パラグアイ"},
    "MU": {message: "モーリシャス"},
    "LI": {message: "リヒテンシュタイン"},
    "CH": {message: "スイス"},
    "KG": {message: "キルギスタン"},
    "GH": {message: "ガーナ"},
    "NU": {message: "ニウエ島"},
    "PE": {message: "ペルー"},
    "US": {message: "アメリカ合衆国"},
    "SL": {message: "シエラレオネ"},
    "FJ": {message: "フィジー"},
    "ER": {message: "エリトリア"},
    "IQ": {message: "イラク"},
    "AS": {message: "米領サモア"},
    "TZ": {message: "タンザニア"},
    "LY": {message: "リビア"},
    "GT": {message: "グアテマラ"},
    "BM": {message: "バミューダ"},
    "BV": {message: "ブーベ島"},
    "LT": {message: "リトアニア"},
    "PM": {message: "サンピエール島・ミクロン島"},
    "SG": {message: "シンガポール"},
    "Initializing...": {message: "初期化中..."},
    "TT": {message: "トリニダード・トバゴ"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "オラは、Windows 8のモードではうまく動作しません。デスクトップモードに切り替えてください。手順について<a>ここをクリック</a>し"},
    "SY": {message: "シリア"},
    "SK": {message: "スロバキア"},
    "GL": {message: "グリーンランド"},
    "PG": {message: "パプアニューギニア"},
    "KI": {message: "キリバス"},
    "CD": {message: "コンゴ民主共和国 (キンシャサ)"},
    "AO": {message: "アンゴラ"},
    "BW": {message: "ボツワナ"},
    "ZW": {message: "ジンバブエ"},
    "VC": {message: "セントビンセント・グレナディーン諸島"},
    "JP": {message: "日本"},
    "NA": {message: "ナミビア"},
    "TJ": {message: "タジキスタン"},
    "LC": {message: "セントルシア"},
    "VU": {message: "バヌアツ"},
    "MN": {message: "モンゴル"},
    "IT": {message: "イタリア"},
    "RE": {message: "レユニオン島"},
    "WS": {message: "サモア"},
    "Enable": {message: "可能にする"},
    "Loading": {message: "積載"},
    "EG": {message: "エジプト"},
    "FR": {message: "フランス"},
    "start": {message: "開始"},
    "RW": {message: "ルワンダ"},
    "BE": {message: "ベルギー"},
    "UM": {message: "米領太平洋諸島"},
    "Accelerator": {message: "アクセラレータ"},
    "SA": {message: "サウジアラビア"},
    "LS": {message: "レソト"},
    "ZA": {message: "南アフリカ"},
    "PT": {message: "ポルトガル"},
    "CA": {message: "カナダ"},
    "Starting...": {message: "開始..."},
    "CM": {message: "カメルーン"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "はいはいの無料版は4時間毎に再度有効にすると広告が主催している必要があります。"},
    "Hola": {message: "はいはい"},
    "NP": {message: "ネパール"},
    "PL": {message: "ポーランド"},
    "GA": {message: "ガボン"},
    "TM": {message: "トルクメニスタン"},
    "KY": {message: "ケイマン諸島"},
    "Verify you have Internet": {message: "あなたはインターネットを持っていることを確認"},
    "LA": {message: "ラオス"},
    "PH": {message: "フィリピン"},
    "NI": {message: "ニカラグア"},
    "GU": {message: "グアム"},
    "TF": {message: "フランス領極南諸島"},
    "KZ": {message: "カザフスタン"},
    "SJ": {message: "スバールバル諸島・ヤンマイエン島"},
    "MM": {message: "ミャンマー"},
    "NR": {message: "ナウル"},
    "DM": {message: "ドミニカ国"},
    "NE": {message: "ニジェール"},
    "AD": {message: "アンドラ"},
    "MR": {message: "モーリタニア"},
    "changing...": {message: "変化..."},
    "GS": {message: "南ジョージア島・南サンドイッチ諸島"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "クロームの非常に古いバージョン、<a>アップデート</a>のChromeははいはいを使用するように"},
    "ME": {message: "モンテネグロ"},
    "AX": {message: "オーランド諸島"},
    "VG": {message: "イギリス領ヴァージン諸島"},
    "VN": {message: "ベトナム"},
    "YE": {message: "イエメン"},
    "DZ": {message: "アルジェリア"},
    "CI": {message: "コートジボワール"},
    "GE": {message: "グルジア"},
    "CX": {message: "クリスマス島"},
    "LB": {message: "レバノン"},
    "FK": {message: "フォークランド諸島"},
    "DE": {message: "ドイツ"},
    "even more...": {message: "さらに..."},
    "MV": {message: "モルジブ"},
    "PN": {message: "ピトケアン島"},
    "BH": {message: "バーレーン"},
    "GI": {message: "ジブラルタル"},
    "WF": {message: "ウォリス・フツナ"},
    "RO": {message: "ルーマニア"},
    "AR": {message: "アルゼンチン"},
    "IN": {message: "インド"},
    "GP": {message: "グアドループ"},
    "Unblocker site list": {message: "閉塞除去サイト一覧"},
    "AW": {message: "アルバ島"},
    "CS": {message: "セルビア・モンテネグロ"},
    "FO": {message: "フェロー諸島"},
    "BR": {message: "ブラジル"},
    "HN": {message: "ホンジュラス"},
    "MC": {message: "モナコ"},
    "Translate to your language": {message: "あなたの言語に翻訳"},
    "SB": {message: "ソロモン諸島"},
    "NZ": {message: "ニュージーランド"},
    "PS": {message: "パレスチナ領土"},
    "UG": {message: "ウガンダ"},
    "GB": {message: "イギリス"},
    "HT": {message: "ハイチ"},
    "GF": {message: "仏領ギアナ"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "Firefoxの古いバージョンの。プレス<a>ここ</a>をアップグレードする。"},
    "ZZ": {message: "不明な地域"},
    "KM": {message: "コモロ"},
    "KW": {message: "クウェート"},
    "TC": {message: "タークス諸島・カイコス諸島"},
    "MQ": {message: "マルティニーク島"},
    "ES": {message: "スペイン"},
    "MZ": {message: "モザンビーク"},
    "BO": {message: "ボリビア"},
    "AL": {message: "アルバニア"},
    "TR": {message: "トルコ"},
    "MD": {message: "モルドバ"},
    "GN": {message: "ギニア"},
    "SI": {message: "スロベニア"},
    "CO": {message: "コロンビア"},
    "Settings": {message: "設定"},
    "AQ": {message: "南極大陸"},
    "JO": {message: "ヨルダン"},
    "SM": {message: "サンマリノ"},
    "CL": {message: "チリ"},
    "CU": {message: "キューバ"},
    "ML": {message: "マリ"},
    "ET": {message: "エチオピア"},
    "IS": {message: "アイスランド"},
    "Reload Hola": {message: "はいはいをリロード"},
    "back to": {message: "にバックアップ"},
    "BG": {message: "ブルガリア"},
    "MH": {message: "マーシャル諸島共和国"},
    "BS": {message: "バハマ"},
    "TL": {message: "東ティモール"},
    "BZ": {message: "ベリーズ"},
    "CY": {message: "キプロス"},
    "IM": {message: "マン島"},
    "IE": {message: "アイルランド"},
    "Get help from engineer over skype:": {message: "スカイプ以上エンジニアからの助けを得る："},
    "TW": {message: "台湾"},
    "KP": {message: "朝鮮民主主義人民共和国"},
    "PF": {message: "仏領ポリネシア"},
    "app_name": {message: "オラベターインターネット"},
    "Update": {message: "アップデート"},
    "MW": {message: "マラウィ"},
    "GY": {message: "ガイアナ"},
    "Unblocker is disabled": {message: "閉塞除去が無効になっている"},
    "GQ": {message: "赤道ギニア"},
    "PK": {message: "パキスタン"},
    "Number of users that pressed not working": {message: "働いていない押さユーザー数"},
    "NF": {message: "ノーフォーク島"},
    "SO": {message: "ソマリア"},
    "TD": {message: "チャド"},
    "BD": {message: "バングラデシュ"},
    "HM": {message: "ハード島・マクドナルド諸島"},

};
return E; });