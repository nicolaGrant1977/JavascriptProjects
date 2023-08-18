
var string2 = "This is string 2"; // declaring a string	
var string3 = "This is string 3"; // declaring a string

var newstring = string2 + string3; // concatenating the two strings
document.write(newstring); //displaying the newly created string value
string2 += string3; // concatenating string2 to string 3
document.write(string2); // displaying string2

function myFunction(){   // declaring a function
	
	var sentence = "I am learnging a lot ";  //declaring a string variable
	sentence += "from this book"; // concatenating the string with a new value	
	document.getElementById("btn-demo").innerHTML = sentence;// displaying the new variable to a html value
	
}

window.alert("Well hello there");  // dispalying a string alert

var dad = "Tom", mam = "Mary", kid = "Dave"; // assigning multiply variablesl

document.write(mam);  //Displaying one of the variables
document.write(3+3); //Dispplaying an expression.