var btn = document.querySelector(".circle");
var toggle = document.querySelector(".mode");
var bg = document.querySelector("body");
var modes = document.querySelector("h1");

var flag = 0;

toggle.addEventListener("click",function(){

    if(flag==0){
        bg.style.backgroundColor = "#000";
        toggle.style.border = "2px solid #fff";
        btn.style.backgroundColor = "#fff";
        btn.style.transition = "all ease 0.3s";
        btn.style.translate = "44px";
        flag = 1;
        modes.innerHTML = "Dark Mode";
        modes.style.color = "#fff";
    }
    else{
        bg.style.backgroundColor = "#fff";
        toggle.style.border = "2px solid #000";
        btn.style.backgroundColor = "#000";
        btn.style.transition = "all ease 0.3s";
        btn.style.translate = "0px";
        flag = 0;
        modes.innerHTML = "Classic Mode";
        modes.style.color = "#000";
    }
    
})