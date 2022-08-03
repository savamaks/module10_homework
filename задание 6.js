let a = [1, 1, 1, 1, 1];

let b = a.filter(function(number) {
  return number === a[0];
});

console.log( b.length===a.length ); 
