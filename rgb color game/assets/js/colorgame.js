 var numsquare=6
 var colors= generaterandomcolor(numsquare);
 var squares =document.querySelectorAll(".square");
 var h1 = document.querySelector("h1");
 var pickedcolor=pickcolor();
 var colordisplay=document.getElementById("colordisplay");
 colordisplay.textContent=pickedcolor;
 var messagedisplay =document.querySelector("#message"); 
 var resetbutton=document.querySelector("#reset");
 var easybutton=document.querySelector("#easybtn");
 var hardbutton=document.querySelector("#hardbtn")

 var questions =document.querySelector("#question")
 var a;
 var b;
 var op;
 	  

  function randomquestion()
 {
 	 a = Math.floor(Math.random() * 10) + 1;
     b = Math.floor(Math.random() * 10) + 1;
     op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
    return "How much is " + a + " " + op + " " + b + "?";
 }

 var randomQuestion= randomquestion();
 questions.textContent= randomQuestion;








easybutton.addEventListener("click",function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	numsquare=3;
	 colors =generaterandomcolor(numsquare);
	 
	 pickedcolor=pickcolor();
	 colordisplay.textContent=pickcolor();

	 var randomQuestion= randomquestion();
 questions.textContent= randomQuestion;

	  for(var i=0;i<squares.length;i++){
	  	if(colors[i])
	  	{
	  		squares[i].style.backgroundColor=colors[i];

	  	}
	  	else{
	  		squares[i].style.display="none";
	  	}
	  }

});

hardbutton.addEventListener("click",function(){
	easybutton.classList.remove("selected");
	hardbutton.classList.add("selected");
	colors =generaterandomcolor(numsquare);
	 pickedcolor=pickcolor();

	 var randomQuestion= randomquestion();
 questions.textContent= randomQuestion;

	 colordisplay.textContent=pickcolor();
	  for(var i=0;i<squares.length;i++){
	  	squares[i].style.backgroundColor=colors[i];

	  	
	  		squares[i].style.display="block";
	  }
	  		
	  	
	  

});

resetbutton.addEventListener("click",function()
{
	
	colors= generaterandomcolor(6);
	
	pickedcolor=pickcolor();
	colordisplay.textContent=pickcolor();

	var randomQuestion= randomquestion();
 questions.textContent= randomQuestion;

	resetbutton.textContent="New Colors"
	
	for(var i=0;i<squares.length;i++)
	   {
	 	squares[i].style.backgroundColor = colors[i];
	   }

	   h1.style.backgroundColor="#232323";
	   messagedisplay.textContent="";
});


 for(var i= 0;i<=squares.length; i++)
{
  
  squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function()
    {
  	 var clickedcolor= this.style.backgroundColor;
  	    if(clickedcolor === pickedcolor)
  	    {
  	    	
  	    	messagedisplay.textContent="correct!!";
  	    	changecolor(clickedcolor);
  	    	h1.style.backgroundColor=clickedcolor;
  	    	alert(eval(a + op + b));
  	    	resetbutton.textContent="playagain!"
  	    }
  	    
  	    else
  	    {
  	    	this.style.backgroundColor="#232323";
  	    	messagedisplay.textContent="tryagain"
  	    }
  	});


}


 function changecolor(colors)
 {
 	 for(var i=0;i<squares.length;i++)
	   {
	 	squares[i].style.backgroundColor=colors;
	   }
 }

 function pickcolor()
 {
 	var random=Math.floor(Math.random()*colors.length);
 	return colors[random];
 }


 function generaterandomcolor(num)
 { 
 	var arr=[]
 	for(var i=0;i<num;i++)
 	{
   arr.push(randomcolor())
 	}
 	return arr;
 }

 function randomcolor()
 {
 	var r=Math.floor(Math.random() * 256);

 	var g=Math.floor(Math.random() * 256);

 	var b=Math.floor(Math.random() * 256);
 	return "rgb("+r+", "+g+", "+b+")";
 }
 	  


 	   

 


