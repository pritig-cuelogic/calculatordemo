var arr = [];
var arr1 = [];

function sendValue(value1){
var textval = document.getElementById("display").value;
if(textval !=''){
  arr.push(textval);
  document.getElementById("display").value = '';
}
if(value1 != '='){

  arr.push(value1);
  var html1 = document.getElementById("calculation");
  html1.innerHTML = html1.innerHTML + value1;
  console.log(arr);
}
else{
  var elm1 = '';
  arr.forEach(function(item,index){
    elm1 = elm1+item;
  });
  arr1.push(elm1);
  arr = [];
  document.getElementById("calculation").innerHTML = "";
   var node = document.getElementById("calculation");
   arr1.forEach(function(item,index){
   
    node.innerHTML = node.innerHTML+"<div onclick='getId(this.innerHTML);' id='item"+index+"' >"+item+"</div>";
   });
}


}

function getId(exp){
 
  document.getElementById("display").value = '';
  document.getElementById("display").value = eval(exp);
}

function deleteExp(){
  arr1 = [];
  document.getElementById("display").value = '';
  document.getElementById("calculation").innerHTML = "";
}

