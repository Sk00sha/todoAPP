function getvaluefromform(){
    document.getElementById("nvm").addEventListener("click", function(event){
        event.preventDefault()
      });
    var headlight=document.getElementById("name");
    var task=document.getElementById("taskname");
    creatediv(headlight,task);
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
    });
    p.textContent=task.value;
    h.textContent=head.value;
    li.appendChild(h);
    li.appendChild(p);
uli.appendChild(li);
grid.appendChild(uli);
}
