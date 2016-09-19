function sendValue(value1){
 //console.log(value1);
var data = sessionStorage.getItem('fopr');
var oprat = sessionStorage.getItem('opr');
var data2 = sessionStorage.getItem('secopr');

console.log(oprat);
console.log(data);
console.log(data2);
 


 var n2,op ;
 if(value1 != '=' || value1 != '+' || value1 != '-' || value1 != 'x' || value1 != '/' || value1 != 'C'){
  if(oprat == null){
  if(data != null ){
  n1 = ''+data+value1;
  }
  else {
   n1 = ''+value1;
  }
  }
else{
	if(data2 != null ){
  n1 = ''+data2+value1;
  }
  else {
   n1 = ''+value1;
  }
}
  n2 = parseInt(n1);
  if(oprat != null) {
 sessionStorage.setItem('secopr', n2);
}
  else{
   sessionStorage.setItem('fopr', n2);
  }
 
 }
 if( value1 == '+' || value1 == '-' || value1 == 'x' || value1 == '/'){
  op = value1;
  sessionStorage.setItem('opr', op);
  
 }
  var val = document.getElementById("display").value ;
 if(value1 == '='){
    res = operate(data,oprat,data2);
   sessionStorage.removeItem('fopr');
   sessionStorage.removeItem('secopr');
   sessionStorage.removeItem('opr');
   var finalres = value1+''+res;
   document.getElementById("display").value = val+finalres;
   
   alert(document.getElementById("display").value);
   document.getElementById("display").value = "";
  }


 if(val){
 
  document.getElementById("display").value = val+value1;
 
}
else{
document.getElementById("display").value = value1;
}

if(value1 == 'C'){
 document.getElementById("display").value = '';
 sessionStorage.removeItem('opr');
}

}

function operate(val1,oprat,val2){
val1 = parseInt(val1);
val2 = parseInt(val2);
//console.log(typeof(val1));
//console.log(typeof(val2));
if(oprat == '+'){
  return val1 + val2;
}
if(oprat == '-'){
  return val1 - val2;
}
if(oprat == 'x'){
  return val1 * val2;
}
if(oprat == '/'){
  return val1 / val2;
}
}
