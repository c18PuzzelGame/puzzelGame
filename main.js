function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
// var button=$("#ok")
// button.click(function () { 
//   $("td").empty()
  
// });
// if ($(#td1).val()=$(#drag1)&&$(#td2).val()=$(#drag2)&&$(#td3).val()=$(#drag3)&&$(#td4).val()=$(#drag4)&&$(#td5).val()=$(#drag5)&&$(#td6).val()=$(#drag6)&&$(#td7).val()=$(#drag7)&&$(#td18).val()=$(#drag8)&&$(#td9).val()=$(#drag9)){
//   $("p").text()="you win"
// }else
// $("p").text()="good luck"
// }