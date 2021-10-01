





document.addEventListener('DOMContentLoaded', initiate);  //After page loads initiate named function runs
function initiate(){
	
	var store = document.getElementById('start');  //after start div is clicked function named allow runs
	store.addEventListener('click', allow);
}
function allow(){
	var jammaPaisa = document.getElementById('funds').innerHTML;   //gets what's inside div named ID funds
    var rokekoPaisa = document.getElementById('amount').value;  //gets the value of amount the user inputs or already stored there
    if(rokekoPaisa == ""){
    	alert("Please Enter Amount to bet !");   //alerts when user clicks start race without bet amont
    }
    else if(parseInt(rokekoPaisa) > parseInt(jammaPaisa)){
    alert("You do not have sufficient funds ! Please Enter amount within range ! Thank You !!")  //alerts when user inputs more amount then in funds
     }
    else if(isNaN(amount.value) 
        ){
      alert("This input is invalid !");  //alerts when user inputs value other then numbers

    }
     else {
             clearStep1();  //After all these conditions , finally horse starts to run in right direction
         }
         }

  
function clearStep1(){
	step1 = setInterval(animalRight,5);    
}
function animalRight (){

document.getElementById("start").style.display="none"; //after race starts the start race button dissappers by this line of code
  for(x=1;x<5;x++)   //for selecting all horses , loop is used and to reduce code length
  {
  var store = document.getElementById('horse'+x);
  var Lf = store.offsetLeft; 
  store.className = 'horse runRight character walkRight '; //this is animation of both horses and the rider

  if (Lf >= window.innerWidth * 0.42 && Lf <= window.innerWidth * 0.52) //This is for responsive running of horses in track
   {
  	   clearInterval(step1); 
       clearStep2();
  }
	else
	store.style.left = Lf + (Math.random()*3) +'px';   //this is for random movement of the horse in right direction 
  }
  }


function clearStep2(){
	step2 = setInterval(animalDown,5);
}

 function animalDown(){	
  for(x=1;x<5;x++){
  var store = document.getElementById('horse'+x);
  var Tp = store.offsetTop;
  store.className = 'horse runDown character walkDown ';
  if (Tp >= window.innerHeight * 0.80 && Tp <= window.innerHeight * 0.90) //If the horse enters in between 80% to 90% of height 
                                                                           //of screeen the following condition gets executed,
  {	 		
  	      clearInterval(step2);
        clearStep3();
  }
	else
	store.style.top = Tp + (Math.random()*3) +'px';   
  }
  }

function clearStep3(){
	step3 = setInterval(animalDownRight,5);
}

// To clear step 4
function clearStep4(){
	step4 = setInterval(animalDownRight,6);
}


 function animalDownRight (){

 for(x=1;x<5;x++){
 	//var ran1 = Math.random()*2;
  var store = document.getElementById('horse'+x);
  var Lf = store.offsetLeft; 
  store.className = 'horse runRight character walkRight ';

  if (Lf >= window.innerWidth * 0.78 && Lf <= window.innerWidth * 0.88) {
  	   clearInterval(step3); 
       clearStep4();
  }
	else
	store.style.left = Lf + (Math.random()*3) +'px';   
  }
  }


function clearStep4 (){
	step4 = setInterval(animalRightUp,5);
}

  function animalRightUp(){
  	 	for(x=1;x<5;x++){
  var store = document.getElementById('horse'+x);
  var Tp = store.offsetTop;
  store.className = 'horse runUp character walkUp ';
  if (Tp >= window.innerHeight * 0.010 && Tp <= window.innerHeight * 0.020) {
  	        clearInterval(step4);
            clear44();
  }
	else
	store.style.top = Tp - (Math.random()*3) +'px';  
  }
  }


function clear44 (){
	step5 = setInterval(animalUpLeft,5);
}

  function animalUpLeft(){
  		for(x=1;x<5;x++){
  var store = document.getElementById('horse'+x);
  var Lf = store.offsetLeft;
  store.className = 'horse runLeft character walkLeft ';
  if (Lf >= window.innerWidth * 0.30 && Lf <= window.innerWidth * 0.40) {
  	        clearInterval(step5);	
        step6 = setInterval(animalLeftDown,5);
  }
	else
	store.style.left = Lf - (Math.random()*3) +'px';  
 }


 function animalLeftDown(){
 	 for(x=1;x<5;x++){
  var store = document.getElementById('horse'+x);
  var Tp = store.offsetTop;
  store.className = 'horse runDown character walkDown ';
  //element[i].style.left = 200;
  if (Tp >= window.innerHeight * 0.80 && Tp <= window.innerHeight * 0.90) {	 		
  	      clearInterval(step6);
        step6 = setInterval(animalDownLeft,5); //here instead of putting interval's variable inside function like up , i have assigned value here itself
  }
	else
	store.style.top = Tp + (Math.random()*3) +'px';   
  }

 }
  }

  function animalDownLeft(){
	 for(x=1;x<5;x++){
  var store = document.getElementById('horse'+x);
  var Lf = store.offsetLeft; 
  store.className = 'horse runLeft character walkLeft ';

  if (Lf >= window.innerWidth * 0.02 && Lf <= window.innerWidth * 0.030) {
  	   clearInterval(step6); 
       clearStep6();
  }
	else
	store.style.left = Lf - (Math.random()*3) +'px';   
  }
}

function clearStep6(){
	step7 = setInterval(animalUp,5);
}


  function animalUp(){
  	for(x=1;x<5;x++){
  var store = document.getElementById('horse'+x);
  var Tp = store.offsetTop;
  store.className = 'horse runUp character walkUp ';
  if (Tp >= window.innerHeight * 0.010 && Tp <= window.innerHeight * 0.020) {
  	        clearInterval(step7);
            clearStep8();
  }
	else
	store.style.top = Tp - (Math.random()*3) +'px';  
  }
  }

  function clearStep8(){
    step8 = setInterval(raceFinish,5);
}
	
 function raceFinish(){
  var store = document.getElementsByClassName('horse');
  for (var x = 0;x < store.length; x++) {
  Lf = store[x].offsetLeft; 

  store[x].className = 'horse runRight character walkRight ';

  if (Lf >= window.innerWidth * 0.30 && Lf <= window.innerWidth * 0.37) {
  	   clearInterval(step8);
       for (x =0;x<4;x++) {
       store[x].className = 'horse standRight';
        }
  	   document.getElementById("start").style.display="block"; //After finish of race , start div is again visible
  	   var store = document.getElementById('start');
       store.firstChild.nodeValue = 'Race Again'; //After race finishes , the div start reappears but instead of "Start Race" , it says "Race again"
  	   
  	     	 AviResult1();  //This function runs for position of horse1 after race
  	     	 AviResult2(); //This function runs for position of horse2 after race
  	     	 AviResult3(); //This function runs for position of horse3 after race
  	     	 AviResult4(); //This function runs for position of horse4 after race
  	     	 parinaam();  //This function is for addition and subtraction of amount inside funds ID and alert message stuffs.
  	   }
	   else
	   store[x].style.left = Lf + (Math.random()*3) +'px';   	
	   }
       }

 function parinaam(){
	    	 
	 var jammaPaisa = document.getElementById('funds').innerHTML;
     var rokekoPaisa = document.getElementById('amount').value;
     var thisHorse = document.getElementsByTagName('td');
     var jitneGhoda = thisHorse[1].className; //This var stores the scoreboard information like heads of riders

     var bets = document.getElementById('bethorse'); 
     var baajiGhoda = bets.options[bets.selectedIndex].value; //After user does selection of horse before race, the selection is stored inside baajiGhoda variable.
     if( jitneGhoda == baajiGhoda ) //If selected horse and winner horse match following condition gets executed
     {
     document.getElementById('funds').innerHTML = parseInt(jammaPaisa) + parseInt(rokekoPaisa); // Money is added
     alert("You won " + parseInt(rokekoPaisa) + " Bucks ! Hurray !! , Press Ok to Collect it." ); //alerts and gives information to user about win
     }
     else {
     document.getElementById('funds').innerHTML = parseInt(jammaPaisa) - parseInt(rokekoPaisa); //Money is subtracted
     alert("You Loss " + parseInt(rokekoPaisa) + " Bucks ! Sorry ! "); //alerts and gives information to user about loss.
     }
     }      
      
 


  function AviResult1(){

  var store = document.getElementsByClassName('horse');
  Lf1 = store[0].offsetLeft; //Stores length from left side of window to position of horse1 after it stops racing.
  Lf2 = store[1].offsetLeft; //Stores length from left side of window to position of horse2 after it stops racing.
  Lf3 = store[2].offsetLeft; //Stores length from left side of window to position of horse3 after it stops racing.
  Lf4 = store[3].offsetLeft; //Stores length from left side of window to position of horse4 after it stops racing.

    var thisHorse = document.getElementsByTagName('td');

		if (Lf1 > Lf2 && Lf1 > Lf3 && Lf1 > Lf4){   //This is condition for horse 1 to become 1st.
		thisHorse[1].className = 'horse1';
		
	    }
		else if (Lf1 > Lf4 && Lf1 > Lf3 && Lf1 < Lf2){   //This is condition for horse 1  to become 2nd.
		thisHorse[3].className = 'horse1';}

		else if (Lf1 > Lf2 && Lf1 > Lf4 && Lf1 < Lf3){   //This is condition for horse 1 to become 2nd.
		thisHorse[3].className = 'horse1';
	    }
		else if (Lf1 > Lf3 && Lf1 > Lf2 && Lf1 < Lf4){  //This is condition for horse 1 to become 2nd.
		thisHorse[3].className = 'horse1';
		}
		else if (Lf1 < Lf4 && Lf1 < Lf3 && Lf1 > Lf2){   //This is condition for horse 1 to become 3rd.
		thisHorse[5].className = 'horse1';		
	    }
		else if (Lf1 < Lf2 && Lf1 < Lf4 && Lf1 > Lf3){   //This is condition for horse 1 to become 3rd.
		thisHorse[5].className = 'horse1';
		}

		else if (Lf1 < Lf3 && Lf1 < Lf2 && Lf1 > Lf4){   //This is condition for horse 1 to become 3rd.
		thisHorse[5].className = 'horse1';
		}

		else {
		thisHorse[7].className = 'horse1';}   //If no condition match , horse 1 is 4th.
	    }


function AviResult2(){

 var store = document.getElementsByClassName('horse');
  Lf1 = store[0].offsetLeft; 
  Lf2 = store[1].offsetLeft; 
  Lf3 = store[2].offsetLeft; 
  Lf4 = store[3].offsetLeft; 

	var thisHorse = document.getElementsByTagName('td');

		if (Lf2 > Lf1 && Lf2 > Lf3 && Lf2 > Lf4){     //This is condition for horse 2 to become 1st.
		thisHorse[1].className = 'horse2';
		
	    }
		else if (Lf2 > Lf4 && Lf2 > Lf3 && Lf2 < Lf1){  //This is condition for horse 2 to become 2nd.
		thisHorse[3].className = 'horse2';
		}
		else if (Lf2 > Lf1 && Lf2 > Lf4 && Lf2 < Lf3){   //This is condition for horse 2 to become 2nd.
		thisHorse[3].className = 'horse2';
	    }
		else if (Lf2 > Lf3 && Lf2 > Lf1 && Lf2 < Lf4){   //This is condition for horse 2 to become 2nd.
		thisHorse[3].className = 'horse2';
		}
		else if (Lf2 < Lf4 && Lf2 < Lf3 && Lf2 > Lf1){  //This is condition for horse 2 to become 3rd.
		thisHorse[5].className = 'horse2';
		}
		else if (Lf2 < Lf1 && Lf2 < Lf4 && Lf2 > Lf3){   //This is condition for horse 2 to become 3rd.
		thisHorse[5].className = 'horse2';
		}
		else if (Lf2 < Lf3 && Lf2 < Lf1 && Lf2 > Lf4){   //This is condition for horse 2 to become 3rd.
		thisHorse[5].className = 'horse2';
		}

		else {
		thisHorse[7].className = 'horse2';   //If no condition match , horse 2 is 4th.
		}
	    }


function AviResult3(){

 var store = document.getElementsByClassName('horse');
  Lf1 = store[0].offsetLeft; 
  Lf2 = store[1].offsetLeft; 
  Lf3 = store[2].offsetLeft; 
  Lf4 = store[3].offsetLeft; 

	var thisHorse = document.getElementsByTagName('td');

		if (Lf3 > Lf2 && Lf3 > Lf1 && Lf3 > Lf4){  //This is condition for horse 3 to become 1st.
		thisHorse[1].className = 'horse3';
		
	    }
		else if (Lf3 > Lf4 && Lf3 > Lf1 && Lf3 < Lf2){   //This is condition for horse 3 to become 2nd.
		thisHorse[3].className = 'horse3';
		}
		else if (Lf3 > Lf2 && Lf3 > Lf4 && Lf3 < Lf1){   //This is condition for horse 3 to become 2nd.
		thisHorse[3].className = 'horse3';
	    }
		else if (Lf3 > Lf1 && Lf3 > Lf2 && Lf3 < Lf4){   //This is condition for horse 3 to become 2nd.
		thisHorse[3].className = 'horse3';
		}
		else if (Lf3 < Lf4 && Lf3 < Lf1 && Lf3 > Lf2){   //This is condition for horse 3 to become 3rd.
		thisHorse[5].className = 'horse3';
				}
		else if (Lf3 < Lf2 && Lf3 < Lf4 && Lf3 > Lf1){   //This is condition for horse 3 to become 3rd.
		thisHorse[5].className = 'horse3';
		}
		else if (Lf3 < Lf1 && Lf3 < Lf2 && Lf3 > Lf4){   //This is condition for horse 3 to become 3rd.
		thisHorse[5].className = 'horse3';
		}

		else {
		thisHorse[7].className = 'horse3';		//If no condition match , horse 3 is 4th.
  }
	    }

function AviResult4(){

 var store = document.getElementsByClassName('horse');
  Lf1 = store[0].offsetLeft; 
  Lf2 = store[1].offsetLeft; 
  Lf3 = store[2].offsetLeft; 
  Lf4 = store[3].offsetLeft; 

	var thisHorse = document.getElementsByTagName('td');

		if (Lf4 > Lf2 && Lf4 > Lf3 && Lf4 > Lf1){  //This is condition for horse 4 to become 1st.
		thisHorse[1].className = 'horse4';
		
	    }
		else if (Lf4 > Lf1 && Lf4 > Lf3 && Lf4 < Lf2){    //This is condition for horse 4 to become 2nd.
		thisHorse[3].className = 'horse4';
		}
		else if (Lf4 > Lf2 && Lf4 > Lf1 && Lf4 < Lf3){    //This is condition for horse 4 to become 2nd.
		thisHorse[3].className = 'horse4';
	    }
		else if (Lf4 > Lf3 && Lf4 > Lf2 && Lf4 < Lf1){    //This is condition for horse 4 to become 2nd.
		thisHorse[3].className = 'horse4';
		}
		else if (Lf4 < Lf1 && Lf4 < Lf3 && Lf4 > Lf2){    //This is condition for horse 4 to become 3rd.
		thisHorse[5].className = 'horse4';
		}
		else if (Lf4 < Lf2 && Lf4 < Lf1 && Lf4 > Lf3){    //This is condition for horse 4 to become 3rd.
		thisHorse[5].className = 'horse4';
		}
		else if (Lf4 < Lf3 && Lf4 < Lf2 && Lf4 > Lf1){     //This is condition for horse 4 to become 3rd.
		thisHorse[5].className = 'horse4';
		}
		else {
		thisHorse[7].className = 'horse4';     //If no condition match , horse 4 4th.
		}
	    }










                                                      //**********END OF CODES***********



