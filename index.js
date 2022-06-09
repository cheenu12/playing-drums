
var fi = document.querySelectorAll(".drum").length;

for(var i=0;i<fi;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var co=this.innerHTML;
    fun(co);
    buttonAnimation(co);



 });
   

}

 document.addEventListener("keypress", function(event) {

    fun(event.key);
  
    buttonAnimation(event.key);
  
  });
  

  

/// hanji hanji main chej//

function fun(key)
{

    
    
   switch(key)
   {

   case"a":

       var ch1=new Audio("sounds/tom-4.mp3" );
       ch1.play();
       break;
   
   case"j":
       var ch2=new Audio("sounds/snare.mp3");
       ch2.play();
       break;
       
   case"d":
   
   
       var ch3=new Audio("sounds/tom-2.mp3");
       ch3.play();
       break;

       case "s":
       
  
       var ch4=new Audio("sounds/tom-3.mp3");
       ch4.play();
       break;
       
       case"k":
  
       var ch5=new Audio("sounds/crash.mp3");
       ch5.play();
       break;

   
  case"w":
       var ch6=new Audio("sounds/tom-1.mp3");
       ch6.play();
       break;
       
  case"l":

       var ch7=new Audio("sounds/kick-bass.mp3");
       ch7.play();
       break;
      
      
       default:
           console.log(key);

       
   
   }

}


//animation 

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  

