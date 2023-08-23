

document.write("Hello! ");
document.write(2<9);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




 
function slice() {  //declare a function slice
	
	var sentence = "all work and no play makes johnny a dull boy";// declare a var to a string
	var num = sentence.length;// use .length to get the lenght of the string
	var x = 12;  // declare a number varialble
    var slice = sentence.slice(27,33); //use the slice method to get a value
	var uppercase = slice.toUpperCase();// us the toUppercase method to make it uppercase
    document.getElementById("increment").innerHTML = uppercase +" The length of the sentence is " +num +" " +x.toString();//display the values and use tostring to get value of number
	

}
  
  
  function demo(){
	  
	  
	  
	var string1 = "The rain in spain";
	var string2 = " Stays mainly on the plane";
	var string3 = " Jolly good show";
	var total_sentence = string1.concat(string2, string3);
	
	var ono = 12345678.12345678;
	ono.toPrecision(10);
	document.getElementById("concat").innerHTML = +ono;
	  
	  alert("This is a test");
	  
  }
 
  function countdown(){
	  
	  var seconds = document.getElementById("seconds").value;
     
  
  
	 function tick(){
	
		  seconds = seconds - 1;
		  timer.innerHTML = seconds;
		  var time = setTimeout(tick, 1000)
           
		   if (seconds == -1)
		   {
			   
			   
			   
			alert("Time is up!")
			  clearTimeout(time);
			  timer.innerHTML = "";
			 
		   }
		   
		   
			
			   
		   }
  
  
  

     
	 
  
   tick();
  
  }


  
		  
		  
		  
		  
		  
		  
		  
		  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  
  
  
  
  
  
  