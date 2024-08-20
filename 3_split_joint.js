const lyrics = "shada shada kala kala, rongjomeche shada kala, tumi bondhu kala pakhi, ami jeno kii, boshonto kaale eshe tomay vulte parini";

const parts = lyrics.split(' ');
console.log(parts);

const sentences = lyrics.split('.');
console.log(sentences);

const chars = lyrics.split('');
console.log(chars);

const partial = lyrics.slice(5,8);
console.log(partial);

const partial2 = lyrics.substring(5,8);
console.log(partial2);

const partial3 = lyrics.trim(5,8); //removes white space from the string
console.log(partial3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);