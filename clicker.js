var requiredSizes = [9, 9.5, 10, 8.5, 8, 10.5, "L"];
var x;
var mouseUp = new Event("mouseup");
function runForever() {
	alert("Running Forever...");

	x = setInterval(function () {
		var all = document.getElementsByTagName("*");
		var sizes = [];
		var cart = [];
		for (var i = 0, max = all.length; i < max; i++) {
			for (var t = 0; t < requiredSizes.length; t++) {
				// Find all buttons relating to size options
				if (all[i].textContent.includes(requiredSizes[t]) && looksLikeSize(all[i].textContent, requiredSizes[t])) {
					sizes.push(all[i]);
				}
			}
			// Find add to cart button
			if (!(all[i].outerHTML.includes("script") ||
				all[i].outerHTML.includes("style")) && looksLikeAddToCart(all[i].textContent)) {
				if (!all[i].outerHTML.includes("button")) {
					cart.push(all[i].parentElement);
				}
				else {
					cart.push(all[i]);
				}
			}
		}
		//console.log(sizes);
		//console.log(cart);
		for (let p = 0; p < sizes.length; p++) {
			$(sizes[p]).click();
			sizes[p].dispatchEvent(mouseUp);
			for (let o = 0; o < cart.length; o++) {
				$(cart[o]).click();
			}
		}
		
		var notifications = document.getElementsByClassName("notification-button");

		for (let g = 0; g < notifications.length; g++) {
			$(notifications[g]).click();
		}

		console.log("...Finished");
	}, 500);
}

function runOnce() {
	alert("Running Once...");
	
	var all = document.getElementsByTagName("*");
	var sizes = [];
	var cart = [];
	for (var i = 0, max = all.length; i < max; i++) {
		for (var t = 0; t < requiredSizes.length; t++) {
			// Find all buttons relating to size options
			if (all[i].textContent.includes(requiredSizes[t]) && looksLikeSize(all[i].textContent, requiredSizes[t])) {
				sizes.push(all[i]);
			}
		}
		// Find add to cart button
		if (!(all[i].outerHTML.includes("script") ||
			all[i].outerHTML.includes("style")) && looksLikeAddToCart(all[i].textContent)) {
			if (!all[i].outerHTML.includes("button")) {
				cart.push(all[i].parentElement);
			}
			else {
				cart.push(all[i]);
			}
		}
	}
	//console.log(sizes);
	//console.log(cart);
	for (let p = 0; p < sizes.length; p++) {
		$(sizes[p]).click();
		sizes[p].dispatchEvent(mouseUp);
		console.log(sizes[p]);
		for (let o = 0; o < cart.length; o++) {
			$(cart[o]).click();
		}
	}
	console.log("...Finished");
}

function runTest() {
	alert("Running Once...");
	
	var all = document.getElementsByTagName("*");
	var sizes = [];
	var cart = [];
	for (var i = 0, max = all.length; i < max; i++) {
		for (var t = 0; t < requiredSizes.length; t++) {
			// Find all buttons relating to size options
			if (all[i].textContent.includes(requiredSizes[t]) && looksLikeSize(all[i].textContent, requiredSizes[t])) {
				sizes.push(all[i]);
			}
		}
		// Find add to cart button
		if (!(all[i].outerHTML.includes("script") ||
			all[i].outerHTML.includes("style")) && looksLikeAddToCart(all[i].textContent)) {
			if (!all[i].outerHTML.includes("button")) {
				cart.push(all[i].parentElement);
			}
			else {
				cart.push(all[i]);
			}
		}
	}
	console.log(sizes);
	console.log(cart);
	
	console.log("...Finished");
}

function looksLikeSize(text, size) {
	let words = [];
	let v = 0;
	let tmp = ""
	
	for(let x = 0; x < text.length; x++)	{
		if(tmp == "" && text[x] != " ") { 
			tmp += text[x];
		} else if (tmp != "" && text[x] == " ") {
			words[v] = tmp;
			v++;
			tmp = ""
		} else if (text[x] != " ") {
			tmp += text[x];
		}
	}
	words[v] = tmp;
	
	if(words.length > 10) { return false; }
	
	for (let z = 0; z < words.length; z++) { 
		if(words[z].includes("Colours") || words[z].includes("cart") || words[z].includes("Cart")) {
			return false;
		}
	}

	for (let m = 0; m < words.length; m++) { 
		if(words[m] == size) {
			return true;
		}
	}
	return false;
}

function looksLikeAddToCart(text) {
	let words = [];
	let v = 0;
	let tmp = ""
	
	let letters = /^[A-Za-z]+$/;
	let requiredWords = ["add", "to", "cart", "bag"];

	for(let x = 0; x < text.length; x++)	{
		if(tmp == "" && text[x].match(letters)) { 
			tmp += text[x];
		} else if (tmp != "" && !text[x].match(letters)) {
			words[v] = tmp;
			v++;
			tmp = ""
		} else if (text[x].match(letters)) {
			tmp += text[x];
		}
	}
	words[v] = tmp;

	for (let m = 0; m < words.length; m++) { 
		if(words[m].toLowerCase() == requiredWords[0] && words[m+1].toLowerCase() == requiredWords[1] 
				&& (words[m+2].toLowerCase() == requiredWords[2] || words[m+2].toLowerCase() == requiredWords[3])) {
				return true;
		}
	}
	return false;
}