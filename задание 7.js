let x = [8,4,3,0,5,88,0,73,44,10,"dg",'',null,false,NaN,true];
let even = 0;
let odd = 0;
let zero = 0;
let other = 0;
let b = 0;
for(i=0;i<x.length;i++){
       
if(typeof x[i] === 'number' && !isNaN(x[i])){
  if(x[i]===0){
   zero++;
 } else if(x[i]%2===0){
    even++;
 } else{
    odd++; 
   } 
 }
}ж
console.log('колличество элементов в массиве = '+ x.length,
            'колличество нулей = ' + zero,
            'колличество четных элементов = ' + even,
            'колличество нечетных элементов = ' + odd)
