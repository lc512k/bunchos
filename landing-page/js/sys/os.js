/** Определение операционной системы **/
var os = {
	init: function() {
		this.name = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	dataOS : [
		{
			   string: navigator.userAgent,
			   subString: "Windows Phone",
			   identity: "wp"
	    },
		{
			string: navigator.platform,
			subString: "Win",
			identity: "win"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPad",
			   identity: "ios"
	    },
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "ios"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "linux"
		}
	]
};

/*Browser detection patch*/
jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());