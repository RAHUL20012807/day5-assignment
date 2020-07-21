 var get = parseInt(prompt("give a number"));

 var arr = [];
var i=0;
 do{
     arr.push(i);
     i++;
 }
while(i<=get);

console.log(arr);

let odd = arr.filter(el=>el%2==1);

let oddcube = arr.filter(el=>el%2==1).map(el=>el**3);

console.log(odd);
console.log(oddcube);