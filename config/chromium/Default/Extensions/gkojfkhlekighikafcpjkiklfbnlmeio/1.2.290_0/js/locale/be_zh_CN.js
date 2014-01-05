'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    "DJ": {message: "吉布提"},
    "JM": {message: "牙买加"},
    "AT": {message: "奥地利"},
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {message: "想在其他设备上使用Hola吗？ （Xbox，PS，Apple TV，iPhone 等等）。请点击这里"},
    "SZ": {message: "斯威士兰"},
    "YT": {message: "马约特"},
    "BN": {message: "文莱"},
    "ZM": {message: "赞比亚"},
    "app_desc": {message: "访问整个互联网！前往被屏蔽的站点 - >点击Hola图标 - >更改国旗标志 - > 畅享浏览"},
    "Improve translation": {message: "提高翻译"},
    "more...": {message: "更多..."},
    "PR": {message: "波多黎各"},
    "SH": {message: "圣赫勒拿"},
    "There seems to be an error": {message: "可能发生了一个错误"},
    "MA": {message: "摩洛哥"},
    "MT": {message: "马耳他"},
    "SV": {message: "萨尔瓦多"},
    "MP": {message: "北马里亚纳群岛"},
    "Unblocker": {message: "Unblocker"},
    "Access any site from any country, free": {message: "免费访问任何国家的任何网站"},
    "Try to <span>reload</span>": {message: "尝试<span>重载</span>"},
    "PW": {message: "帕劳"},
    "UZ": {message: "乌兹别克斯坦"},
    "TK": {message: "托克劳"},
    "LR": {message: "利比里亚"},
    "TN": {message: "突尼斯"},
    "EE": {message: "爱沙尼亚"},
    "CK": {message: "库克群岛"},
    "BY": {message: "白俄罗斯"},
    "KR": {message: "韩国"},
    "NO": {message: "挪威"},
    "BF": {message: "布基纳法索"},
    "AM": {message: "亚美尼亚"},
    "MG": {message: "马达加斯加"},
    "SR": {message: "苏里南"},
    "ON": {message: "开"},
    "BT": {message: "不丹"},
    "CF": {message: "中非共和国"},
    "AE": {message: "阿拉伯联合酋长国"},
    "BA": {message: "波斯尼亚和黑塞哥维那"},
    "not working?": {message: "不起作用？"},
    "TH": {message: "泰国"},
    "Author:": {message: "作者："},
    "CC": {message: "科科斯群岛"},
    "NC": {message: "新喀里多尼亚"},
    "TO": {message: "汤加"},
    "SE": {message: "瑞典"},
    "AZ": {message: "阿塞拜疆"},
    "AF": {message: "阿富汗"},
    "NG": {message: "尼日利亚"},
    "BJ": {message: "贝宁"},
    "KE": {message: "肯尼亚"},
    "Turn on to get started": {message: "开启后开始浏览"},
    "OM": {message: "阿曼"},
    "LK": {message: "斯里兰卡"},
    "ID": {message: "印度尼西亚"},
    "FM": {message: "密克罗尼西亚联邦"},
    "(some Hola features are not available on your version)": {message: "（Hola的一些功能在您的版本中无法使用）"},
    "GM": {message: "冈比亚"},
    "LV": {message: "拉脱维亚"},
    "RU": {message: "俄罗斯"},
    "FI": {message: "芬兰"},
    "Get Hola Plus for un-interrupted, ad-free service.": {message: "获取Hola增强版，免除广告打扰的服务。"},
    "LU": {message: "卢森堡"},
    "VE": {message: "委内瑞拉"},
    "VI": {message: "美属维京群岛"},
    "TV": {message: "图瓦卢"},
    "MX": {message: "墨西哥"},
    "SN": {message: "塞内加尔"},
    "GG": {message: "格恩西岛"},
    "IL": {message: "以色列"},
    "more options...": {message: "更多选项..."},
    "Author site:": {message: "作者网站："},
    "DO": {message: "多米尼加共和国"},
    "HU": {message: "匈牙利"},
    "OFF": {message: "关"},
    "KH": {message: "柬埔寨"},
    "TG": {message: "多哥"},
    "Hola cannot work properly because another extension is controlling your proxy settings. Please disable other extensions that you think might control your proxy settings in <a>extensions</a> (such as ad-blockers, other VPN services, etc.).": {message: "Hola无法正常运行，因为另一个扩展正在控制您的代理设置。请在<a>扩展</a>中禁用其他您认为可能影响代理设置的扩展（例如ad-blocker，其他VPN服务等）。"},
    "BB": {message: "巴巴多斯"},
    "JE": {message: "泽西岛"},
    "DK": {message: "丹麦"},
    "PA": {message: "巴拿马"},
    "CV": {message: "佛得角"},
    "QA": {message: "卡塔尔"},
    "Reload": {message: "重载"},
    "GD": {message: "格林纳达"},
    "Number of users that use this option": {message: "使用此选项的用户数"},
    "MO": {message: "中国澳门特别行政区"},
    "MF": {message: "圣马丁"},
    "HR": {message: "克罗地亚"},
    "CZ": {message: "捷克共和国"},
    "BL": {message: "圣巴泰勒米"},
    "AU": {message: "澳大利亚"},
    "ST": {message: "圣多美和普林西比"},
    "IR": {message: "伊朗"},
    "CG": {message: "刚果（布）"},
    "GW": {message: "几内亚比绍"},
    "BI": {message: "布隆迪"},
    "MK": {message: "马其顿"},
    "GR": {message: "希腊"},
    "AG": {message: "安提瓜和巴布达"},
    "AI": {message: "安圭拉"},
    "AN": {message: "荷属安的列斯群岛"},
    "UA": {message: "乌克兰"},
    "EH": {message: "西撒哈拉"},
    "KN": {message: "圣基茨和尼维斯"},
    "SC": {message: "塞舌尔群岛"},
    "MS": {message: "蒙塞拉特群岛"},
    "NL": {message: "荷兰"},
    "EC": {message: "厄瓜多尔"},
    "HK": {message: "中国香港特别行政区"},
    "MY": {message: "马来西亚"},
    "CR": {message: "哥斯达黎加"},
    "VA": {message: "梵蒂冈"},
    "IO": {message: "英属印度洋领地"},
    "SD": {message: "苏丹"},
    "RS": {message: "塞尔维亚"},
    "CN": {message: "中国"},
    "UY": {message: "乌拉圭"},
    "PY": {message: "巴拉圭"},
    "MU": {message: "毛里求斯"},
    "CH": {message: "瑞士"},
    "LI": {message: "列支敦士登"},
    "KG": {message: "吉尔吉斯斯坦"},
    "GH": {message: "加纳"},
    "NU": {message: "纽埃"},
    "US": {message: "美国"},
    "PE": {message: "秘鲁"},
    "SL": {message: "塞拉利昂"},
    "FJ": {message: "斐济"},
    "ER": {message: "厄立特里亚"},
    "IQ": {message: "伊拉克"},
    "AS": {message: "美属萨摩亚"},
    "TZ": {message: "坦桑尼亚"},
    "LY": {message: "利比亚"},
    "GT": {message: "危地马拉"},
    "BM": {message: "百慕大"},
    "BV": {message: "布维特岛"},
    "LT": {message: "立陶宛"},
    "SG": {message: "新加坡"},
    "PM": {message: "圣皮埃尔和密克隆"},
    "Initializing...": {message: "初始化..."},
    "TT": {message: "特立尼达和多巴哥"},
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {message: "Hola在Windows 8模式下不能顺利运行。请切换到桌面模式。点击<a>这里</a>查看说明"},
    "SK": {message: "斯洛伐克"},
    "SY": {message: "叙利亚"},
    "GL": {message: "格陵兰"},
    "PG": {message: "巴布亚新几内亚"},
    "KI": {message: "基里巴斯"},
    "CD": {message: "刚果（金）"},
    "BW": {message: "博茨瓦纳"},
    "AO": {message: "安哥拉"},
    "ZW": {message: "津巴布韦"},
    "VC": {message: "圣文森特和格林纳丁斯"},
    "JP": {message: "日本"},
    "NA": {message: "纳米比亚"},
    "TJ": {message: "塔吉克斯坦"},
    "LC": {message: "圣卢西亚"},
    "VU": {message: "瓦努阿图"},
    "MN": {message: "蒙古"},
    "IT": {message: "意大利"},
    "RE": {message: "留尼汪"},
    "WS": {message: "萨摩亚"},
    "Enable": {message: "启用"},
    "Loading": {message: "加载"},
    "EG": {message: "埃及"},
    "FR": {message: "法国"},
    "start": {message: "开始"},
    "RW": {message: "卢旺达"},
    "BE": {message: "比利时"},
    "UM": {message: "美国边远小岛"},
    "Accelerator": {message: "加速器"},
    "SA": {message: "沙特阿拉伯"},
    "LS": {message: "莱索托"},
    "ZA": {message: "南非"},
    "PT": {message: "葡萄牙"},
    "CA": {message: "加拿大"},
    "Starting...": {message: "启动中..."},
    "CM": {message: "喀麦隆"},
    "The free version of Hola needs to be re-enabled every 4 hours and is sponsored by ads.": {message: "免费版本的Hola每4小时需要被重新启用，由广告提供赞助。"},
    "Hola": {message: "Hola"},
    "NP": {message: "尼泊尔"},
    "PL": {message: "波兰"},
    "GA": {message: "加蓬"},
    "TM": {message: "土库曼斯坦"},
    "KY": {message: "开曼群岛"},
    "Verify you have Internet": {message: "检查您的互联网链接"},
    "LA": {message: "老挝人民民主共和国"},
    "PH": {message: "菲律宾"},
    "NI": {message: "尼加拉瓜"},
    "GU": {message: "关岛"},
    "TF": {message: "法属南部领土"},
    "KZ": {message: "哈萨克斯坦"},
    "SJ": {message: "斯瓦尔巴特和扬马延"},
    "MM": {message: "缅甸"},
    "NR": {message: "瑙鲁"},
    "DM": {message: "多米尼加"},
    "NE": {message: "尼日尔"},
    "AD": {message: "安道尔"},
    "MR": {message: "毛里塔尼亚"},
    "changing...": {message: "改变..."},
    "GS": {message: "南乔治亚岛和南桑威齐群岛"},
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {message: "Chrome版本过老，<a>更新</a>Chrome浏览器以使用Hola"},
    "ME": {message: "黑山共和国"},
    "AX": {message: "奥兰群岛"},
    "VG": {message: "英属维京群岛"},
    "VN": {message: "越南"},
    "YE": {message: "也门"},
    "CI": {message: "象牙海岸"},
    "DZ": {message: "阿尔及利亚"},
    "GE": {message: "格鲁吉亚"},
    "CX": {message: "圣诞岛"},
    "LB": {message: "黎巴嫩"},
    "FK": {message: "福克兰群岛"},
    "DE": {message: "德国"},
    "even more...": {message: "更多..."},
    "MV": {message: "马尔代夫"},
    "PN": {message: "皮特凯恩"},
    "BH": {message: "巴林"},
    "GI": {message: "直布罗陀"},
    "WF": {message: "瓦利斯和富图纳"},
    "RO": {message: "罗马尼亚"},
    "IN": {message: "印度"},
    "GP": {message: "瓜德罗普岛"},
    "AR": {message: "阿根廷"},
    "Unblocker site list": {message: "Unblocker网站列表"},
    "CS": {message: "塞尔维亚和黑山"},
    "FO": {message: "法罗群岛"},
    "AW": {message: "阿鲁巴"},
    "BR": {message: "巴西"},
    "MC": {message: "摩纳哥"},
    "HN": {message: "洪都拉斯"},
    "Translate to your language": {message: "转换为您的语言"},
    "SB": {message: "所罗门群岛"},
    "PS": {message: "巴勒斯坦领土"},
    "NZ": {message: "新西兰"},
    "UG": {message: "乌干达"},
    "GB": {message: "英国"},
    "HT": {message: "海地"},
    "GF": {message: "法属圭亚那"},
    "Old version of Firefox. Press <a>here</a> to upgrade.": {message: "老版本的Firefox。按<a>这里</a>升级。"},
    "ZZ": {message: "未知或无效地区"},
    "KM": {message: "科摩罗"},
    "KW": {message: "科威特"},
    "TC": {message: "特克斯和凯科斯群岛"},
    "MQ": {message: "马提尼克群岛"},
    "MZ": {message: "莫桑比克"},
    "ES": {message: "西班牙"},
    "BO": {message: "玻利维亚"},
    "AL": {message: "阿尔巴尼亚"},
    "MD": {message: "摩尔多瓦"},
    "TR": {message: "土耳其"},
    "GN": {message: "几内亚"},
    "CO": {message: "哥伦比亚"},
    "SI": {message: "斯洛文尼亚"},
    "Settings": {message: "设置"},
    "AQ": {message: "南极洲"},
    "JO": {message: "约旦"},
    "SM": {message: "圣马力诺"},
    "CU": {message: "古巴"},
    "CL": {message: "智利"},
    "ML": {message: "马里"},
    "ET": {message: "埃塞俄比亚"},
    "IS": {message: "冰岛"},
    "Reload Hola": {message: "重载Hola"},
    "back to": {message: "回到"},
    "BG": {message: "保加利亚"},
    "MH": {message: "马绍尔群岛"},
    "BS": {message: "巴哈马"},
    "TL": {message: "东帝汶"},
    "BZ": {message: "伯利兹"},
    "CY": {message: "塞浦路斯"},
    "IM": {message: "曼岛"},
    "IE": {message: "爱尔兰"},
    "Get help from engineer over skype:": {message: "通过Skype获取帮助："},
    "TW": {message: "台湾"},
    "KP": {message: "朝鲜"},
    "PF": {message: "法属波利尼西亚"},
    "app_name": {message: "Hola 更好的互联网"},
    "Update": {message: "更新"},
    "MW": {message: "马拉维"},
    "GY": {message: "圭亚那"},
    "Unblocker is disabled": {message: "Unblocker被禁用"},
    "GQ": {message: "赤道几内亚"},
    "PK": {message: "巴基斯坦"},
    "Number of users that pressed not working": {message: "报告无法运行的用户数"},
    "NF": {message: "诺福克岛"},
    "SO": {message: "索马里"},
    "TD": {message: "乍得"},
    "HM": {message: "赫德与麦克唐纳群岛"},
    "BD": {message: "孟加拉国"},

};
return E; });