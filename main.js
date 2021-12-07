function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
  }
  var counter=0
  var arr=[]
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(data)
    console.log(ev.target.id)
    arr.push({dt:data,id:ev.target.id})
    counter++
    console.log(counter)
    checkElem(counter,res)
    
}


$(document).ready(function () {
relaod()
});
function relaod(){
  $('#left2').append('<div id="left2"><div><img src="images/conteneur/1.jpg"class="im" id="drag1"draggable="true" ondragstart="drag(event)"><img src="images/conteneur/6.jpg"class="im" id="drag2"draggable="true" ondragstart="drag(event)"><img src="images/conteneur/9.jpg"class="im" id="drag3"draggable="true" ondragstart="drag(event)"></div><div><img src="images/conteneur/4.jpg"class="im" id="drag4"draggable="true" ondragstart="drag(event)"><img src="images/conteneur/2.jpg"class="im" id="drag5"draggable="true" ondragstart="drag(event)"><img src="images/conteneur/7.jpg"class="im" id="drag6"draggable="true" ondragstart="drag(event)"></div><div> <img src="images/conteneur/3.jpg"class="im" id="drag7"draggable="true" ondragstart="drag(event)"><img src="images/conteneur/8.jpg"class="im" id="drag8"draggable="true" ondragstart="drag(event)"><img src="images/conteneur/5.jpg"class="im" id="drag9"draggable="true" ondragstart="drag(event)"></div></div>')
}
$("button").click(function () {
  console.log("work")
  $("#left2").empty()
  $("td").empty()
  console.log($("td"))
  relaod()
  arr.splice(0,arr.length)
  counter=0
  $('h2').text("you are ready to play again")
  $('td').css("border-color","black")
  $('h2').css({"border-color":"black","color":"black"})
});

var res=[
{dt: 'drag1', id: 'td1'},
 {dt: 'drag2', id: 'td6'},
 {dt: 'drag3', id: 'td9'},
 {dt: 'drag5', id: 'td2'},
 {dt: 'drag7', id: 'td3'},
 {dt: 'drag6', id: 'td7'},
 {dt: 'drag9', id: 'td5'},
 {dt: 'drag8', id: 'td8'},
 {dt: 'drag4', id: 'td4'}]
function checkElem(counter,res){
if(counter<9){
      $("h2").text("you play")
}else if (counter===9){
  var check=false;
  var arrcheck=[]
  for(var i=0;i<res.length;i++){
    check=false
    for(var j=0;j<arr.length;j++){
      if(res[i].id==arr[j].id&&res[i].dt==arr[j].dt){
        check=true
      }
      console.log(check)
    }
    arrcheck.push(check)
    
  }
 if(arrcheck.includes(false)){
   $("h2").text("you lose")
   $(".text").css({"border-color": "red","color":"red"})
   $('td').css("border-color","red")
 }
 else{
   $("h2").text("you win")
   $(".text").css({"color":"green","border-color":"green"}) 
   $('td').css("border-color","green")
 } 
}
else{
  $("h2").text("you lose")
  $(".text").css("color","red") 
  $(".text").css("border-color", "red")
  $('td').css("border-color","red")
}
}

