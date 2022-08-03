let map = new Map();
map.set(1,23);
map.set(true,"a");
map.set("s",false);
map.set("w",34);


map.forEach((value, key, map) => {
  console.log(`ключ-${key}, значение-${value}`);
});