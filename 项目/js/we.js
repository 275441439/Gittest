function box8(){
	$("#ask").toggle();
}
function box9(){
	$("#num").toggle();
}
function box0(){
	$("#way").toggle();
}



     window.onload=function(){
		var ula = document.getElementById('ula');  
        var li9 = ula.getElementsByTagName('li');
        var span7 = document.getElementById('span7');
        var ask = document.getElementById('ask');
   
			   for(var k=0;k<li9.length;k++){
			   	  li9[k].onclick=function(){
			   	  	  span7.innerHTML = this.innerHTML;
			   	      ask.style.display='none'; 
		   	  }
		   }
 
        var ulb = document.getElementById('ulb');  
        var lia = ulb.getElementsByTagName('li');
        var span8 = document.getElementById('span8');
        var num = document.getElementById('num');
   
			   for(var l=0;l<lia.length;l++){
			   	  lia[l].onclick=function(){
			   	  	  span8.innerHTML = this.innerHTML;
			   	      num.style.display='none'; 
		   	  }
		   }

        var ulc = document.getElementById('ulc');  
        var lib = ulc.getElementsByTagName('li');
        var span9 = document.getElementById('span9');
        var way = document.getElementById('way');
   
			   for(var m=0;m<lib.length;m++){
			   	  lib[m].onclick=function(){
			   	  	  span9.innerHTML = this.innerHTML;
			   	      way.style.display='none'; 
		   	  }
		   }
  };