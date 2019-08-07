var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
var counterDiv = document.createElement('link');
counterDiv.setAttribute('src','https://eb54b6c3.ngrok.com/cdns/visitorlogger.css');
counterDiv.setAttribute('rel','stylesheet');
document.head.appendChild(counterDiv);

window.onload = function() {
	console.log('Hello world');
	$.get("https://680f3e02.ngrok.io/users/visit", function(result) {
		console.log("result ", result);
		if(result.status)
			document.getElementById('visit-count').innerHTML = "<br>Total Visits: " + result.totalVisitorCount;
		else
			document.getElementById('counter').innerHTML = "<br>Error: " + result.message;
		document.getElementById('spinner').hidden = true;
	});
}