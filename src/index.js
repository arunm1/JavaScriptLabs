import "./site.css";
//alert("Hello World");
document.getElementById("main").innerHTML = "Hello World"; 
/* eslint no-console:off */
function rand() {
	let min = 1;
	let max = 10;
	console.log("Getting the Random Number...");
	let random = Math.floor(Math.random() * (max - min +1)) + min;
	console.info("Random number is....", random);
	document.write("<p> Random number:" + random + "</p>");

	let i=1;
	let rhyme;
	while (i<random) 
	{

		switch (i){

		case 1 : 
			rhyme = "fun";
			break;
		case 2 :
			rhyme = "blue";
			break;
		case 3 : 
			rhyme = "free";
			break;
		case 4 : 
			rhyme = "door";
			break;
		case 5 : 
			rhyme = "hive";
			break;
		default :
			rhyme = "no rhyme found here...";
			break;
	
		}
		document.write("<p>" + i + " - " + rhyme + "</p>");


		i++;

	}
	document.write("<p>" + i + " - " + rhyme + "</p>");
}
rand();
