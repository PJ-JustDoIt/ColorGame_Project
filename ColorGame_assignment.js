



var colors=[];
var pickedcolors;
var usersquares=document.querySelectorAll(".usersquare");    
var h1=document.querySelector("h1");
var messagedisplay=document.querySelector("#message");
var headlinecolor=document.querySelector("#headlinecolor");
var choice1display=document.querySelector("#choice1");
var choice2display=document.querySelector("#choice2");
var choice3display=document.querySelector("#choice3");
var numtiles=6;

tilegenerate(numtiles);

 // for generating new colors option and for play again option.
choice1display.addEventListener("click",function(){            
	if(this.textContent="PLAY AGAIN ?"){this.textContent="NEW COLORS"; }
	   colors=generaterandomcolors(numtiles);
	   for( var i=0;i<usersquares.length;i++){
  			usersquares[i].style.background=colors[i];}
  		pickedcolor=colors[random1(colors.length)-1];
  		headlinecolor.textContent = pickedcolor;
  		h1.style.background="steelblue";
  		messagedisplay.textContent="";
})

//This is for EASY option
choice2display.addEventListener("click",function(){
	numtiles=3;
    choice2display.classList.add("selected");
    choice3display.classList.remove("selected");
    messagedisplay.textContent="";
    // An array of 3 different colors for the 3 tiles
    tilegenerate(numtiles);
    for(var i=3;i<usersquares.length;i++){
        usersquares[i].style.display="none";   // to make the bottom 3 squares vanish for EASY option
      }
});


//This is for HARD option
choice3display.addEventListener("click",function(){
	numtiles=6;
    choice3display.classList.add("selected");
    choice2display.classList.remove("selected");
    messagedisplay.textContent="";
    // An array of 6 different colors for the 6 tiles
    tilegenerate(numtiles);
    for(var i=3;i<usersquares.length;i++){
        usersquares[i].style.display="block";  // to make the bottom 3 squares reappear for HARD option
      }
});

 



// Add event listeners to the squares
for( var i=0;i<usersquares.length;i++){
   usersquares[i].addEventListener("click",function(){
  	clickedcolor=this.style.background;				     
  	if(clickedcolor === pickedcolor){ Correct();}  
  	 else{this.style.background="#232323";				// square vanishes into body background color when wrong color picked
  	      messagedisplay.textContent="Try Again!";}   
});
}




// turns all tiles to the picked color
function Correct(){
	messagedisplay.textContent="Correct!";
    for( var j=0;j<usersquares.length;j++){
    	usersquares[j].style.background=pickedcolor;}   
    h1.style.background=pickedcolor;
    choice1display.textContent="PLAY AGAIN ?";
}


// function to pick a color for pickedcolor
function random1(innum){   
    return Math.floor(Math.random()*innum+1);  
}

// function to generate random colors for all the tiles
function random2(innum){    
    return Math.floor(Math.random()*innum);   
}

// function generates an array of size random colors
function generaterandomcolors(size){    
	var colorsarray=[];
	for (var i=1;i<=size;i++){
      colorsarray.push("rgb("+random2(256)+", "+ random2(256)+", "+ random2(256)+")"); }   

    return colorsarray;
}


function tilegenerate(numtiles){
	// An array of 6 different colors for the 6 tiles
    colors=generaterandomcolors(numtiles);  
    // one color among the 6 tile colors is picked randomly
    pickedcolor=colors[random1(colors.length)-1];   
    // Add initial colors to the squares
    for( var i=0;i<usersquares.length;i++){
    usersquares[i].style.background=colors[i];
       }
    // to display the picked color's rgb on the header
    headlinecolor.textContent = pickedcolor; 
    h1.style.background="steelblue";

}
