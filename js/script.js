let upperaddlen = window.innerWidth*0.5;
let inp = document.getElementsByTagName("input")[0];
let u = document.getElementsByClassName("upperadd");
inp.addEventListener("focus",function(){
    u[0].classList.add("anihorizontal");
    setTimeout(()=>{
        u[1].classList.add("anivertical");
        u[2].classList.add("anivertical");
    },1000)
});
inp.addEventListener("blur",function(){
    u[0].classList.remove("anihorizontal");
    u[1].classList.remove("anivertical");
    u[2].classList.remove("anivertical");
});
u[1].addEventListener("click",function(){
    inp.focus();
});