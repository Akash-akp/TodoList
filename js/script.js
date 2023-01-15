let upperaddlen = window.innerWidth*0.5;
// document.getElementsByClassName("upperadd")[0].style.width = upperaddlen+"px";
let inp = document.getElementsByTagName("input")[0];
let u = document.getElementsByClassName("upperadd");
// u[1].style.width = upperaddlen+"px";
inp.addEventListener("focus",function(){
    u[0].classList.add("anihorizontal");
    setTimeout(()=>{
        u[1].classList.add("anivertical");
        u[2].classList.add("anivertical");
    },1000)
    // document.getElementsByTagName("h1")[0].style.color = "red";
});
inp.addEventListener("blur",function(){
    u[0].classList.remove("anihorizontal");
    u[1].classList.remove("anivertical");
    u[2].classList.remove("anivertical");
    // document.getElementsByTagName("h1")[0].style.color = "red";
});
u[1].addEventListener("click",function(){
    inp.focus();
});