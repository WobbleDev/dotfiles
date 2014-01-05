var swagbucks = {
	"options" : {
		"limit" : 15,
		"timeout" : 6
	},

	"init" : function() {
		if (localStorage["swagbucks_options"] == null) {
			saveObject("swagbucks_options", this.options);
		} else {
			this.loadOptions();
		}
		if (localStorage["swagbucks_total"] == null) {
			localStorage["swagbucks_total"] = "0";
		}
		if (localStorage["swagbucks_hit"] == null) {
			localStorage["swagbucks_hit"] = "0";
		}
		if (localStorage["swagbucks_count"] == null) {
			localStorage["swagbucks_count"] = "0";
		}
		if (localStorage["swagbucks_time"] == null) {
			localStorage["swagbucks_time"] = "0";
		}
	},

	"loadOptions" : function() {
		this.options = readObject("swagbucks_options");
	},

	"isRunning" : function() {
		return parseInt(localStorage["swagbucks_time"]) < new Date();
	},

	"suspend" : function() {
		var _swagbucks_time = new Date();
		_swagbucks_time.setHours(_swagbucks_time.getHours()
				+ this.options.timeout);
		localStorage["swagbucks_time"] = _swagbucks_time.getTime();
		localStorage["swagbucks_count"] = "0";
	},

	"send" : function(q) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://www.swagbucks.com/?q=" + q, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				var _swagbucks_count = parseInt(localStorage["swagbucks_count"]) + 1;
				localStorage["swagbucks_count"] = _swagbucks_count;
				if (_swagbucks_count >= swagbucks.options.limit) {
					swagbucks.suspend();
				}
				localStorage["swagbucks_total"] = parseInt(localStorage["swagbucks_total"]) + 1;
				var p;
				var str;
				var url;
				p = xhr.responseText.indexOf("\">Congratulations!</div>");
				if (p != -1) {
					localStorage["swagbucks_hit"] = parseInt(localStorage["swagbucks_hit"]) + 1;
					swagbucks.suspend();
				}
				p = xhr.responseText.indexOf("/?cmd=cp-claim-prize");
				if (p == -1) {
					return;
				}
				str = xhr.responseText.substring(p);
				p = str.indexOf("\"");
				url = str.substring(0, p);
				str = str.substring(p);
				p = str.indexOf("name=\"tai\" value=");
				if (p == -1) {
					return;
				}
				str = str.substring(p + 18);
				p = str.indexOf("\"");
				str = str.substring(0, p);
				url = "http://www.swagbucks.com" + url + "&tai=" + str;
				chrome.tabs.create({
					url : url
				});
			}
		};
		xhr.send();
	}
};
