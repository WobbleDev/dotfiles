var addition = {
	"options" : {
		"url" : "",
	},

	"init" : function() {
		if (localStorage["addition_options"] == null) {
			saveObject("addition_options", this.options);
		} else {
			this.loadOptions();
		}
	},

	"loadOptions" : function() {
		this.options = readObject("addition_options");
	},

	"send" : function(q) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://" + this.options.url + "/?q=" + q, true);
		xhr.send();
	}
};