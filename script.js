var counter=0;
var tasksdone=0;
var array=[];
function getvaluefromform(){
    document.getElementById("nvm").addEventListener("click", function(event){
        event.preventDefault()
      });
    var headlight=document.getElementById("name");
    var task=document.getElementById("taskname");
    if (array.length==0){
        var objekt={
            nazov:headlight.value,
            popis:task.value,
        }
        counter++;
        array.push(objekt);
        localStorage.setItem('polozka'+counter,JSON.stringify(objekt));
        creatediv(headlight.value,task.value);
    }else{
    array.forEach(element => {
        if (element.popis==task.value || element.nazov==headlight.value){
            console.log("element je už in");
        }
        else{
            var objekt={
                nazov:headlight.value,
                popis:task.value,
            }
            counter++;
        localStorage.setItem('polozka'+counter,JSON.stringify(objekt));
        creatediv(headlight.value,task.value);
        
    }
    });
}    
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
        taskcounter(counter,tasksdone);
    });
    p.textContent=task;
    h.textContent="Názov: "+head;
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
function collectstoragedata() {
    if (localStorage.length>0) {
        var local=localStorage;
        Object.keys(local).forEach(function(key){
            counter++;
            var objekt=(JSON.parse(local.getItem(key)));
            console.log(creatediv(objekt.nazov,objekt.popis));
         });
    }
}
collectstoragedata();