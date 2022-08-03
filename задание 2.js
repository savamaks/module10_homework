let x = [3,"fd"]

if (typeof x === "number"){
  console.log("X-число");
} else if (typeof x === "string"){
  console.log("X-строка");
}else if(typeof x === "boolean"){
  console.log("X-boolean");
}else{
  console.log("Тип x не определён");
}