function box(){
	$("#menu").toggle();
}

function box2(){
	$("#type").toggle();
}

function box3(){
	$("#subd").toggle();
}

function box4(){
	$("#price").toggle();
}

function box5(){
	$("#local").toggle();
}

function box6(){
	$("#matters").toggle();
}

function box7(){
	$("#source").toggle();
}


window.onload=function(){
	var ul3 = document.getElementById('ul3');
    var li1 = ul3.getElementsByTagName('li');
    var type = document.getElementById('type');
    var span1 = document.getElementById('span1');
     for(var i=0;i<li1.length;i++){
         	   li1[i].onclick=function(){
         	   	   span1.innerHTML = this.innerHTML;
         	   	   type.style.display='none'; 
         	   }
         }

    var ul4 = document.getElementById('ul4');
    var li2 = ul4.getElementsByTagName('li');
    var subd = document.getElementById('subd');
    var span2 = document.getElementById('span2');
     for(var a=0;a<li2.length;a++){
         	   li2[a].onclick=function(){
         	   	   span2.innerHTML = this.innerHTML;
         	   	   subd.style.display='none'; 
         	   }
         }

    var ul5 = document.getElementById('ul5');
    var li3 = ul5.getElementsByTagName('li');
    var price = document.getElementById('price');
    var span3 = document.getElementById('span3');
     for(var b=0;b<li3.length;b++){
         	   li3[b].onclick=function(){
         	   	   span3.innerHTML = this.innerHTML;
         	   	   price.style.display='none'; 
         	   }
         }

    var ul6 = document.getElementById('ul6');
    var li4 = ul6.getElementsByTagName('li');
    var local = document.getElementById('local');
    var span4 = document.getElementById('span4');
     for(var c=0;c<li4.length;c++){
         	   li4[c].onclick=function(){
         	   	   span4.innerHTML = this.innerHTML;
         	   	   local.style.display='none'; 
         	   }
         }

    var ul7 = document.getElementById('ul7');
    var li5 = ul7.getElementsByTagName('li');
    var matters = document.getElementById('matters');
    var span5 = document.getElementById('span5');
     for(var d=0;d<li5.length;d++){
         	   li5[d].onclick=function(){
         	   	   span5.innerHTML = this.innerHTML;
         	   	   matters.style.display='none'; 
         	   }
         }

    var ul8 = document.getElementById('ul8');
    var li6 = ul8.getElementsByTagName('li');
    var source = document.getElementById('source');
    var span6 = document.getElementById('span6');
     for(var e=0;e<li6.length;e++){
         	   li6[e].onclick=function(){
         	   	   span6.innerHTML = this.innerHTML;
         	   	   source.style.display='none'; 
         	   }
         }

    var ul9 = document.getElementById('ul9');
    var li7 = ul9.getElementsByTagName('li');
    for(var g=0;g<li7.length;g++){
    	li7[g].onclick=function(){ 		
    	for(var f=0;f<li7.length;f++){
    	      li7[f].className='';               
         }  
            this.className='active';
     }
    
}
    
var ul0 = document.getElementById('ul0');  
var li8 = ul0.getElementsByTagName('li');
   for(var h=0;h<li8.length;h++){
    	li8[h].onclick=function(){ 		
    	for(var j=0;j<li8.length;j++){
    	      li8[j].className='';               
         }  
            this.className='list';
     }
    
}
};
