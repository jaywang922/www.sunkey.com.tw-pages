
var av = "d1";

var dc = "c1";

function cg(div,c){

if(dc!=c){

showss(av,dc,false);

av = div.id

dc = c;

showss(av,dc,true);

}

}

function showss(div,c,tm){

var fd = document.getElementById(div);

var fc = document.getElementById(c);

fd.className = tm?"ac":"in";

fc.style.display = tm?"block":"none";

}
