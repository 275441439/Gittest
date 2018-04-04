function showMenu(){
	$("#year").toggle();
}

function showMenu2(){
	$("#years").toggle();
}

function showMenu3(){
	$("#now").toggle();
}



window.onload=function(){
	var uld = document.getElementById('uld');
    var lia = uld.getElementsByTagName('a');
    
    for(var a=0;a<lia.length;a++){
    	lia[a].onclick=function(){
    		for(var b=0;b<lia.length;b++){
    			lia[b].className='';
    		}
    	     this.className='color';
    	}
    }

    var ule = document.getElementById('ule');
    var lic = ule.getElementsByTagName('li');
    var span = document.getElementById('span');
    var now = document.getElementById('now');

    for(var c=0;c<lic.length;c++){
    	lic[c].onclick=function(){
    		span.innerHTML = this.innerHTML;
    	    now.style.display = 'none';
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


