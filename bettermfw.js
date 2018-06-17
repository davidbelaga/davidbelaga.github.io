/*
function popup(mylink, windowname) { 
    if (! window.focus)return true; var href; if (typeof(mylink) == 'string') href=mylink; else href=mylink.href; window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); return false; 
}

window.onload = function(){popup('autopopup.html', 'thp')};

*/


setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);

$("#btn1").click(function() {
 $('body').removeClass();
 $('body').addClass('normal_mode');
});

$("#btn2").click(function() {
 $('body').removeClass();
 $('body').addClass('psych_mode');
});





/*

// mode psychédélique
function doThatFuckingColorThing(){
  var color = 'hsl(' + currentHue + ',80%, 60%)';
  if(currentHue + hueAddition > 360)
  {
    currentHue = 0;
  }
  else {
    currentHue += hueAddition;
  }
  r.style.color = color;
  setTimeout(function(){doThatFuckingColorThing();}, 1000/25);
}


function someControl(id, textArr, className){
  // You see? No fucking jQuery needed, check http://jsperf.com/getelementbyid-vs-jquery-id/44
  var acbox = document.getElementById(id);
  var clickEvent = ('ontouchstart' in window ? 'touchend' : 'click');
  var el = document.getElementsByTagName('html')[0];
  acbox.addEventListener(clickEvent, function(){
    if(acbox.innerHTML === textArr[0]){
      el.classList.add(className);
      acbox.innerHTML = textArr[1];
    }
    else{
      el.classList.remove(className);
      acbox.innerHTML = textArr[0];
    }
  });
}


function addPsychColorControl(){
  someControl('psychmode', ['Mode Psychédélique', 'Normal mode'], 'psychedelic');
}

doThatFuckingColorThing();
addInvertedControl();
*/