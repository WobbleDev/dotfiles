function $_s_(){var x = document.createElement('div');x.appendChild(window.getSelection().getRangeAt(0).cloneContents());return x.innerHTML;}
chrome.extension.sendRequest("laeghehalempfenbefbjbhccjcoakpmm", {r: "processSelection", html: $_s_(), location: window.location.href});