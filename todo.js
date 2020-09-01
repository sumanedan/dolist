var dolist = [];
var tomlist = [];
function todo() {
  let ls = document.getElementById("txt1");
  if(ls.value!=""){
  dolist.push(ls.value);
  console.log(dolist);
  //console.log(dolist[0]);
  }else{
    alert("Empty...Enter value")
    return null;
  }


  for (let lis of dolist) {
    var li = document.createElement("li");

    li.innerText = lis;
    var btn1 = document.createElement("button")
    btn1.innerText = "Remove";

    var btn2 = document.createElement("button")
    btn2.innerText = "Move";

    //li.innerHtml=lis+`<br><button onclick=remove(${todo.indexOf(lis)})>-</button>`
    btn1.onclick = function () { remove(dolist.indexOf(lis)); }
    btn2.onclick = function () { addtom(dolist[dolist.indexOf(lis)]) ;}
  }


  document.getElementById("mylist").appendChild(li)
  li.appendChild(btn1);
  li.appendChild(btn2);



function remove(l) {
  console.log("Remove todolist fn called");
  dolist.splice(l, 1);
  console.log(dolist);

  document.getElementById("mylist").removeChild(li)
  li.removeChild(btn1);
  li.removeChild(btn2);
}
function addtom(i) {
  console.log("tomo list");
  tomlist.push(i);
  console.log(tomlist);
  document.getElementById("mylist").removeChild(li)
  li.removeChild(btn1);
  li.removeChild(btn2);
  tom();
}
}
function tom(){
  for (let tom of tomlist) {
    var li = document.createElement("li");

    li.innerText = tom;
    var btn3 = document.createElement("button")
    btn3.innerText = "Remove";   
    btn3.onclick = function () { remtom(tomlist.indexOf(tom)); }
    
  }


  document.getElementById("mytomlist").appendChild(li)
  li.appendChild(btn3);


function remtom(n){
  console.log("remove tomolist fn called");
  tomlist.splice(n, 1);
  console.log(tomlist);
  document.getElementById("mytomlist").removeChild(li)
  li.removeChild(btn3);
}
}