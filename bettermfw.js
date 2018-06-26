setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);

function change_css(){
    //change le fond de la page en magenta
    document.getElementById('result').style.cssText = 'background:#FF00FF;'
   
    //change la couleur de la police des paragraphes en bleu et police en papyrus
    var ps = document.getElementsByTagName('p');

    for (var i = 0, c = ps.length ; i < c ; i++) {
       ps[i].style.color = 'blue';
                  ps[i].style.fontFamily = "Papyrus";

    }
    
    //change la couleur des h1 en vert et police en Comic Sans
     var heading1 = document.getElementsByTagName('h1');

    for (var i = 0, c = heading1.length ; i < c ; i++) {
       heading1[i].style.color = 'green';
          heading1[i].style.fontFamily = "Comic Sans MS", "Comic Sans";
        
    }
    
    //change la couleur des h2 en vert et police en Comic Sans 
    var heading2 = document.getElementsByTagName('h2');

    for (var i = 0, c = heading2.length ; i < c ; i++) {
       heading2[i].style.color = 'green';
          heading2[i].style.fontFamily = "Comic Sans MS", "Comic Sans";

    }
    
     //change la couleur des h3 en vert et police en Comic Sans
    var heading3 = document.getElementsByTagName('h3');

    for (var i = 0, c = heading3.length ; i < c ; i++) {
       heading3[i].style.color = 'green';
          heading3[i].style.fontFamily = "Comic Sans MS", "Comic Sans";

    }
}