var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

window.onload = function() {
	console.log('Hello world');
	// $.get("https://8cae5683.ngrok.io/users/visit", function(result) {
	// 	console.log("result ", result);
	// 	if(result.status)
	// 		document.getElementById('counter').innerHTML = result.visitorCount;
	// 	else
	// 		document.getElementById('counter').innerHTML = result.message;
	// });
	$.get("https://bb95ea1c.ngrok.io/user/fetch", function(result) {
		console.log("result ", result);
			document.getElementById('counter').innerHTML = result;
	});
}