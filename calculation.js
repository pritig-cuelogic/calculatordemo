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

var calc = new  Calculator(res2[0]);

  for(var i=0; i<res2.length; i++){
    if(isNaN(res2[i])){
      op = res2[i];
    }
    else{
      if(i==0){
         //n1 = res2[i];
      }
      else{
        n2 = res2[i];
      }
    }
    if(n2 != undefined && op != undefined ){
        if(op == '+'){
          cres = calc.add(n2);
          //console.log(calc.add(n2));
        }
        if(op == '-'){
         cres = calc.subtract(n2);
         
        }
        if(op == '*'){
         cres = calc.multiply(n2);
         
        }
        if(op == '/'){
         cres = calc.devide(n2);
         
        }

        n2 = undefined;
    }
  }
 
document.getElementById("display").value = '';
document.getElementById("display").value = cres;
}


function Calculator(n1){
  var no = parseInt(n1);
  function setNo(n1){
    no = parseInt(n1);
  }
  function getNo(){
    return no;
  }
  return {
    
    add: function(n2){
      var n2 = parseInt(n2);
      var res = getNo() + n2;
      setNo(res);
      return res;
    },
    subtract: function(n2){
      var n2 = parseInt(n2);
      var res = getNo() - n2;
      setNo(res);
      return res;
    },
    multiply: function(n2){
      var n2 = parseInt(n2);
      var res = getNo() * n2;
      setNo(res);
      return res;
    },
    devide: function(n2){
      var n2 = parseInt(n2);
      var res = getNo() / n2;
      setNo(res);
      return res;
    }
  }
}

function deleteExp(){

  arr1.pop(); 
  document.getElementById("calculation").innerHTML = "";
   var node = document.getElementById("calculation");
   arr1.forEach(function(item,index){
  
    node.innerHTML = node.innerHTML+"<div onclick='getId(this.innerHTML);' id='item"+index+"' >"+item+"</div>";
   });
}


