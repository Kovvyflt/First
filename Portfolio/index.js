const links= document.querySelectorAll(".navigation__link");
var background= document.getElementById("background");
var nav= document.getElementById("nav-toggle");
for(let i=0; i<links.length; i++){

    links[i].addEventListener('click',()=>{
        unchecked();
    })
}

function unchecked(){
    document.getElementById("nav-toggle").checked = false;
}