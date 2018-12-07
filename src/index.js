import './site.css'
import getBrowserInfo from './getBrowserInfo';
alert("Hello guys");
document.getElementById("main").innerHTML = "Hello guys";
let min = 1;
let max = 20;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
document.write("<p> Random number in between 1 and 10 is " + random);

for (var i=1;i<=random;i++)
document.write( "<br> " + i );

i=1;
while (i<=random)
{
document.write( "<br>"+i );
i++
}

switch (random)
{
case 1: document.write("<br> Fun");
		break;
case 2: document.write("<br>Blue");
	break;
case 3: document.write("<br>Free");
	break;
case 4: document.write("<br>pour");
	break;
case 5: document.write("<br>Hive");
	break;
case 6 : document.write("<br>Kicks");
	break;
case 7: document.write("<br>Heaven");
	break;
case 8 : document.write("<br>Night");
	break;
case 9 : document.write("<br> Line");
	break;
case 10 : document.write("<br> Ben");
	break;
default : document.write("<br> Not in range");
}
document.getElementById("main").innerHTML = getBrowserInfo();
