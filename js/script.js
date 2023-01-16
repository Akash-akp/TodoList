let upperaddlen = window.innerWidth*0.5;
let inp = document.getElementsByTagName("input")[0];
let u = document.getElementsByClassName("upperadd");
inp.addEventListener("focus",function(){
    u[0].classList.add("anihorizontal");
    setTimeout(()=>{
        if(this == document.activeElement){
            u[1].classList.add("anivertical");
            u[2].classList.add("anivertical");
        }
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
u[2].addEventListener("click",function(){
    inp.focus();
});


let tasks = [];
let delList = document.querySelectorAll("listadd button");
let taskList = document.getElementById("listadd");
function addTodo(task){
    tasks.push(task);
    renderList();
}

function deleteTodo(){
    let delbutton = document.querySelectorAll("#listadd button");
    for(let i=0;i<delbutton.length;i++){
        delbutton[i].addEventListener("click",()=>{
            document.querySelectorAll("#listadd li")[i].remove();
        });
    }
}

function checkTodo(){
    let check = document.querySelectorAll("#listadd input");
    for(let i=0;i<check.length;i++){
        check[i].addEventListener("change",function(){
            if(check[i].checked){
                document.querySelectorAll("#listadd p")[i].classList.add("linethrough");
            }else{
                document.querySelectorAll("#listadd p")[i].classList.remove("linethrough");
            }
        });
    }
}

function showNotification(text){
    alert(text);
}

inp.addEventListener("keyup",passTask);
function passTask(e){
    if(e.key == "Enter"){
        const value = e.target.value;
        if(!value){
            showNotification("You cannot input empty task")
        }else{
            let task = {
                value,
                id : Date.now().toString(),
                done: false
            }
            addTodo(task);
            inp.value = "";
        }
    }
}

function renderList(){
    taskList.innerHTML = "";
    for(let i=0;i<tasks.length;i++){
        addTaskToDom(tasks[i]);
    }
    document.getElementById("Totaltskcount").innerHTML = tasks.length;
}

function addTaskToDom(task){
    const li = document.createElement("li");

    li.innerHTML = 
        `
            <div>
                <input type="checkbox">
                <p>${task.value}</p>
            </div>
            <button data-id="${task.id}" >Delete</button>
        `
    ;
    taskList.append(li);
}