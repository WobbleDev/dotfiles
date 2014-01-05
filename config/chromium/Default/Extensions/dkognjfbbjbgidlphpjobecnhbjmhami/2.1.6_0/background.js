var carry = false;
var online = false;
var options = {
	"bing" : true,
	"swagbucks" : false,
	"addition" : false
};

function compareVersions(version1, version2) {
	var v1 = version1.split('.');
	var v2 = version2.split('.');
	var longerLength = Math.max(v1.length, v2.length);
	for ( var i = 0; i < longerLength; i++) {
		if (isNaN(v1[i])) {
			v1[i] = 0;
		} else {
			v1[i] = parseInt(v1[i]);
		}
		if (isNaN(v2[i])) {
			v2[i] = 0;
		} else {
			v2[i] = parseInt(v2[i]);
		}
	}
	for (i = 0; i < longerLength; i++) {
		if (v1[i] < v2[i]) {
			return -1;
		} else if (v1[i] > v2[i]) {
			return 1;
		}
	}
	return 0;
}

chrome.runtime.onInstalled
		.addListener(function(details) {
			var major = false;
			if (details.reason == "update") {
				if (compareVersions(details.previousVersion, "2.1") == -1) {
					var _options = readObject("options");
					_options.addition = false;
					saveObject("options", _options);
					major = true;
				}
				if (compareVersions(details.previousVersion, "2.1.5") == -1) {
					var _options = readObject("options");
					_options.bing = true;
					saveObject("options", _options);
				}
				if (major) {
					alert("Your Bingo has been updated to version 2.1.5. Please visit http://gtiny.me/bingolog to see changes.");
				}
			}
		});

function updateUserInfo() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://www.bing.com/rewards/dashboard", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var p;
			var str;
			var count;
			var limit;
			p = xhr.responseText.indexOf("Bing searches up to");
			if (p == -1) {
				return;
			}
			str = xhr.responseText.substring(p + 20, p + 150);
			limit = str.substring(0, str.indexOf(" "));
			p = str.indexOf("progress tile-height") + 22;
			str = str.substring(p);
			p = str.indexOf(" of");
			if (p == -1) {
				count = limit;
			} else {
				count = str.substring(0, p);
			}
			online = true;
			if (isNaN(count)) {
				online = false;
			} else {
				localStorage["count"] = count;
			}
			if (isNaN(limit)) {
				online = false;
			} else {
				localStorage["limit"] = limit;
			}
		}
	};
	online = false;
	var currentDate = new Date().toDateString();
	if (localStorage["date"] != currentDate) {
		localStorage["date"] = currentDate;
		localStorage["count"] = "0";
	}
	xhr.send();
	var rate = parseInt(localStorage["rate"]);
	var remain = parseInt(localStorage["limit"])
			- parseInt(localStorage["count"]);
	if (rate > remain) {
		rate = remain;
	}
	for (; rate > 0; rate--) {
		setTimeout(bing, Math.floor(Math.random() * 1800000), getKeyword());
	}
}

function saveObject(name, object) {
	localStorage[name] = JSON.stringify(object);
}

function readObject(name) {
	if (localStorage[name] == null) {
		return null;
	}
	return JSON.parse(localStorage[name]);
}

function loadOptions() {
	options = readObject("options");
}

function initAllPlugins() {
	// if (options.swagbucks) { swagbucks.init(); }
	if (options.addition) {
		addition.init();
	}
}

function init() {
	updateUserInfo();
	setInterval(updateUserInfo, 1800000);
	if (localStorage["options"] == null) {
		localStorage["options"] = JSON.stringify(options);
	} else {
		loadOptions();
	}
	initAllPlugins();
	if (localStorage["limit"] == null) {
		localStorage["limit"] = "20";
	}
	if (localStorage["count"] == null) {
		localStorage["count"] = "0";
	}
	if (localStorage["keywords"] == null) {
		localStorage["keywords"] = JSON.stringify(new Array(5));
	}
	if (localStorage["multiplier"] == null) {
		localStorage["multiplier"] = "1";
	}
	if (localStorage["rate"] == null) {
		localStorage["rate"] = "0";
	}
	if (localStorage["keywords_method"] == null) {
		localStorage["keywords_method"] = "0";
	}
	if (localStorage["search_keywords"] == null) {
		localStorage["search_keywords"] = JSON.stringify(new Array(0));
	}
}

function bing(q) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://www.bing.com/search?q=" + q, true);
	xhr.send();
	if (carry) {
		carry = false;
		localStorage["count"] = parseInt(localStorage["count"]) + 1;
	} else {
		carry = true;
	}
}

function checkDuplicate(q) {
	var keywords = JSON.parse(localStorage["keywords"]);
	var p = keywords.indexOf(q);
	keywords.splice(p, 1);
	keywords.unshift(q);
	localStorage["keywords"] = JSON.stringify(keywords);
	return p == -1;
}

function getKeyword() {
	if (localStorage["keywords_method"] == 1) {
		var search_keywords = JSON.parse(localStorage["search_keywords"]);
		var q = search_keywords[Math.floor(Math.random()
				* search_keywords.length)];
		if (checkDuplicate(q)) {
			return q;
		} else {
			return search_keywords[Math.floor(Math.random()
					* search_keywords.length)];
		}
	} else {
		return Math.random();
	}
}

init();

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var doBing = options.bing;
	var doSwagbucks = options.swagbucks && swagbucks.isRunning();
	var doAddition = options.addition && addition.options.url != "";
	if (parseInt(localStorage["count"]) >= parseInt(localStorage["limit"])) {
		if (online) {
			doBing = false;
		} else {
			var currentDate = new Date().toDateString();
			if (localStorage["date"] != currentDate) {
				localStorage["date"] = currentDate;
				localStorage["count"] = "0";
			} else {
				doBing = false;
			}
		}
	}
	var url = changeInfo.url;
	var p;
	var q;
	if (url == null || url.substring(0, 4) != "http") {
		return;
	}
	if (doBing && url.indexOf("http://www.bing.com") == 0) {
		doBing = false;
	}
	if (doSwagbucks && url.indexOf("http://www.swagbucks.com") == 0) {
		doSwagbucks = false;
	}
	if (doAddition && url.indexOf(addition.options.url) == 0) {
		doAddition = false;
	}
	if (!doBing && !doSwagbucks && !doAddition) {
		return;
	}
	url = url.substring(url.indexOf("#"));
	if ((p = url.indexOf("&q=")) == -1 && (p = url.indexOf("#q=")) == -1
			&& (p = url.indexOf("?q=")) == -1) {
		return;
	}
	p = p + 3;
	q = url.substring(p).split("&")[0];
	if (q.length == 0 || !checkDuplicate(q)) {
		return;
	}
	if (doSwagbucks) {
		swagbucks.send(q);
	}
	if (doAddition) {
		addition.send(q);
	}
	if (doBing) {
		bing(q);
		var multiplier = parseInt(localStorage["multiplier"]);
		for (; multiplier > 1; multiplier--) {
			setTimeout(bing, 1000 * multiplier, getKeyword());
		}
	}
});