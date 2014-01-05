function saveObject(name, object) {
	localStorage[name] = JSON.stringify(object);
}

function readObject(name) {
	if (localStorage[name] == null) {
		return null;
	}
	return JSON.parse(localStorage[name]);
}

function saveOptions(e) {
	if (e.target.id == "options_swagbucks") {
		if (e.target.checked) {
			chrome.permissions
					.request(
							{
								origins : [ "http://www.swagbucks.com/" ]
							},
							function(granted) {
								if (granted) {
									var _options = readObject("options");
									_options.swagbucks = true;
									saveObject("options", _options);
									chrome.extension.getBackgroundPage()
											.loadOptions();
									loadSwagbucks();
									document
											.getElementById("swagbucks_options").style.display = "block";
								} else {
									e.target.checked = false;
									document
											.getElementById("swagbucks_options").style.display = "none";
								}
							});
		} else {
			var _options = readObject("options");
			_options.swagbucks = false;
			saveObject("options", _options);
			chrome.extension.getBackgroundPage().loadOptions();
			document.getElementById("swagbucks_options").style.display = "none";
		}
	} else if (e.target.id == "options_addition") {
		if (e.target.checked) {
			var _options = readObject("options");
			_options.addition = true;
			saveObject("options", _options);
			chrome.extension.getBackgroundPage().loadOptions();
			loadAddition();
			document.getElementById("addition_options").style.display = "block";
		} else {
			var _options = readObject("options");
			_options.addition = false;
			saveObject("options", _options);
			chrome.extension.getBackgroundPage().loadOptions();
			document.getElementById("addition_options").style.display = "none";
		}
	}
}

function s_multiplier() {
	var multiplier = document.getElementById("multiplier").value;
	localStorage["multiplier"] = multiplier;
	alert("Saved.");
}

function s_rate() {
	var rate = document.getElementById("rate").value;
	localStorage["rate"] = rate;
	alert("Saved.");
}

function s_keywords_method() {
	if (document.getElementById("keywords_method_1").checked) {
		var search_keywords = JSON.parse(localStorage["search_keywords"]);
		if (search_keywords.length < 10) {
			document.getElementById("keywords_method_0").checked = true;
			alert("Must have at least 10 predefined keywords.");
			return;
		} else {
			localStorage["keywords_method"] = 1;
		}
	} else {
		localStorage["keywords_method"] = 0;
	}
	alert("Saved.");
}

function s_search_keywords() {
	var str_search_keywords = document.getElementById("search_keywords").value;
	var search_keywords = new Array(0);
	var p;
	var str;
	while (str_search_keywords.length > 0) {
		p = str_search_keywords.indexOf("\n");
		if (p == -1) {
			search_keywords.push(str_search_keywords);
			break;
		} else {
			str = str_search_keywords.substring(0, p);
			if (str.length > 0) {
				search_keywords.push(str);
			}
		}
		str_search_keywords = str_search_keywords.substring(p + 1);
	}
	localStorage["search_keywords"] = JSON.stringify(search_keywords);
	if (localStorage["keywords_method"] == 1 && search_keywords.length < 10) {
		localStorage["keywords_method"] = 0;
		document.getElementById("keywords_method_0").checked = true;
		alert("Must have at least 10 predefined keywords. Fall back to random method.");
		return;
	}
	alert("Saved.");
}

function s_limit() {
	var limit = document.getElementById("limit").value;
	localStorage["limit"] = limit;
	alert("Saved.");
}

function r_count() {
	localStorage["count"] = "0";
	restore_options();
}

function loadSwagbucks() {
	var _swagbucks_options = readObject("swagbucks_options");
	if (_swagbucks_options == null) {
		var _swagbucks = chrome.extension.getBackgroundPage().swagbucks;
		_swagbucks.init();
		_swagbucks_options = _swagbucks.options;
	}
	var select = document.getElementById("swagbucks_options_limit");
	for ( var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == _swagbucks_options.limit) {
			child.selected = "true";
			break;
		}
	}
	select = document.getElementById("swagbucks_options_timeout");
	for ( var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == _swagbucks_options.timeout) {
			child.selected = "true";
			break;
		}
	}
}

function saveSwagbucks() {
	var _swagbucks_options = {
		"limit" : document.getElementById("swagbucks_options_limit").value,
		"timeout" : document.getElementById("swagbucks_options_timeout").value
	};
	saveObject("swagbucks_options", _swagbucks_options);
	chrome.extension.getBackgroundPage().swagbucks.loadOptions();
}

function loadAddition() {
	var _addition_options = readObject("addition_options");
	if (_addition_options == null) {
		var _addition = chrome.extension.getBackgroundPage().addition;
		_addition.init();
		_addition_options = _addition.options;
	}
	document.getElementById("addition_options_url").value = _addition_options.url;
}

function saveAddition() {
	var _addition_options = {
		"url" : document.getElementById("addition_options_url").value
	};

	chrome.permissions.request({
		origins : [ "http://*/?q=*" ]
	}, function(granted) {
		if (granted) {
			saveObject("addition_options", _addition_options);
			chrome.extension.getBackgroundPage().addition.loadOptions();
			alert("Saved.");
		} else {
			document.getElementById("addition_options_url").value = "";
		}
	});
}

function restore_options() {
	var _options = readObject("options");
	/*
	 * if (_options.swagbucks) {
	 * document.getElementById("options_swagbucks").checked = true;
	 * loadSwagbucks();
	 * document.getElementById("swagbucks_options").style.display = "block"; }
	 * else { document.getElementById("options_swagbucks").checked = false;
	 * document.getElementById("swagbucks_options").style.display = "none"; }
	 */
	if (_options.addition) {
		document.getElementById("options_addition").checked = true;
		loadAddition();
		document.getElementById("addition_options").style.display = "block";
	} else {
		document.getElementById("options_addition").checked = false;
		document.getElementById("addition_options").style.display = "none";
	}
	var multiplier = localStorage["multiplier"];
	var rate = localStorage["rate"];
	var select = document.getElementById("multiplier");
	for ( var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == multiplier) {
			child.selected = "true";
			break;
		}
	}
	select = document.getElementById("rate");
	for ( var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == rate) {
			child.selected = "true";
			break;
		}
	}
	var search_keywords = JSON.parse(localStorage["search_keywords"]);
	var str_search_keywords = "";
	for ( var k in search_keywords) {
		str_search_keywords = str_search_keywords + search_keywords[k] + "\n";
	}
	if (localStorage["keywords_method"] == 1) {
		document.getElementById("keywords_method_1").checked = true;
	} else {
		document.getElementById("keywords_method_0").checked = true;
	}
	document.getElementById("search_keywords").value = str_search_keywords;
	document.getElementById("limit").value = localStorage["limit"];
	document.getElementById("count").innerText = localStorage["count"];
}

document.addEventListener('DOMContentLoaded', function() {
	var list;
	restore_options();
	list = document.getElementsByClassName("options");
	for ( var i = 0; i < list.length; i++) {
		list[i].addEventListener('change', saveOptions);
	}
	document.getElementById("s_multiplier").addEventListener('click',
			s_multiplier);
	document.getElementById("s_rate").addEventListener('click', s_rate);
	document.getElementById("s_keywords_method").addEventListener('click',
			s_keywords_method);
	document.getElementById("s_search_keywords").addEventListener('click',
			s_search_keywords);
	document.getElementById("s_limit").addEventListener('click', s_limit);
	document.getElementById("s_addition_options").addEventListener('click',
			saveAddition);
	document.getElementById("r_count").addEventListener('click', r_count);
	list = document.getElementsByClassName("swagbucks_options");
	for ( var i = 0; i < list.length; i++) {
		list[i].addEventListener('change', saveSwagbucks);
	}
});
