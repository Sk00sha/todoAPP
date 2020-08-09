var counter=0;
var tasksdone=0;
function getvaluefromform(){
    document.getElementById("nvm").addEventListener("click", function(event){
        event.preventDefault()
      });
    var headlight=document.getElementById("name");
    var task=document.getElementById("taskname");
    creatediv(headlight,task);
    counter++;
    console.log(counter);
}
function creatediv(head,task){
    var grid=document.getElementById("grid");
    var uli=document.getElementById("tasks");
    var li=document.createElement("div");
    var p=document.createElement("p");
    var h=document.createElement("h2");
    li.setAttribute("class","taskcard");
    li.addEventListener('click',function(){
        li.setAttribute('class','classdone');
        tasksdone++;
        console.log(taskcounter(counter,tasksdone));
    });
    p.textContent=task.value;
    h.textContent="Názov: "+head.value;
    li.appendChild(h);
    li.appendChild(p);
uli.appendChild(li);
grid.appendChild(uli);
}
function taskcounter(param1,param2) {
    let percent=0;
    if(param2>0){
    percent= (param2/param1)*100;
    document.querySelector(".html").style.width=percent+"%";
    document.querySelector(".html").innerHTML=Math.ceil(percent)+"%";
}
return Math.ceil(percent);
}
