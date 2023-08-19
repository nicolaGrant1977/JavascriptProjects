

function myFunction(){  
	
	var sentence = "I am learnging a lot ";  
	sentence += "from this book";
	document.getElementById("p_id").innerHTML = sentence;
	
}


function addTwo() {
	
	var num = 1+1;
	document.getElementById("math").innerHTML = "One plus one = " +num;
	
	
}

function subtract(){
	
	var num = 2-1;
	document.getElementById("subtract").innerHTML = "Two minus 1 = "  +num;
	
}

function multiply(){
	
	var mult = 6*5;
	document.getElementById("multiply").innerHTML = " Six multipy by six = " +mult;
	
}


function divide(){
	
	var divide = 36/6;
	document.getElementById("divide").innerHTML = " Thirty six divide by six = " +divide;
	
}

function multipleMath()

{
	
	var simple_Math = 4 * 5 + 5 - 3;
	document.getElementById("simple_Math").innerHTML = " The simple math equation is " +simple_Math;
	
	
	
}

function modulus() {
	
	var mod = 25 % 2;
	document.getElementById("modulus").innerHTML = " The remainder of 25 % 2 is " +mod;
	
	
	
}
function negative() {
	
	var x = -7;
	document.getElementById("negative").innerHTML = "The vavlue of x is " +x;
	
	
	
}
 
function increment(){
	
	var y = 5;
	y++; 
	document.getElementById("increment").innerHTML = "The value of y incrememented by 1 is " +y;
	
}

function increment(){
	
	var z = 5;
	z--; 
	document.getElementById("decrement").innerHTML = "The value of z decremented by 1 is " +z;
	
}

window.alert(Math.random());

