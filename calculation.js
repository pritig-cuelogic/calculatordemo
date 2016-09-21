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
  //console.log(arr);
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

function getId(html){
var n1,n2,op, cres;
var res1= html.match(/(\d+|[^\d]+)/g).join(',');
var res2 = res1.split(","); 
  for(var i=0; i<res2.length; i++){
    if(isNaN(res2[i])){
      op = res2[i];
    }
    else{
      if(i==0){
         n1 = res2[i];
      }
      else{
        n2 = res2[i];
      }
    }
    if(n1 != undefined && n2 != undefined && op != undefined ){
        cres = doOperations(n1,n2,op); 
        n1 = cres;
        n2 = undefined;
    }
  }
document.getElementById("display").value = '';
document.getElementById("display").value = n1;
}

function doOperations(n1,n2,op){
 
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  var result;
 
    var operation = function(){
      
      switch(op){
        case '+':
        result =  n1 + n2;
        break;

        case '-':
        result =  n1 - n2;
        break;

        case '*':
        result =  n1 * n2;
        break;

        case '/':
        result =  n1 / n2;
        break;
      }
    }


  operation();
  return result;
}

// we can also store data on local browser using sessionStorage.setItem('fopr', n2);

function deleteExp(){

  arr1.pop(); 
  document.getElementById("calculation").innerHTML = "";
   var node = document.getElementById("calculation");
   arr1.forEach(function(item,index){
  
    node.innerHTML = node.innerHTML+"<div onclick='getId(this.innerHTML);' id='item"+index+"' >"+item+"</div>";
   });
}
