const lyrics = "shada shada kala kala, rongjomeche shada kala, tumi bondhu kala pakhi, ami jeno kii, boshonto kaale eshe tomay vulte parini";

const doesExist = lyrics.includes("kala");
console.log(doesExist);

console.log(lyrics.includes("kailla"));
console.log(lyrics.indexOf("kailla")); //output -1 cause there is no kailla in the lyrics

console.log(lyrics.startsWith("kala"));
console.log(lyrics.startsWith("shada"));
console.log(lyrics.endsWith("shada"));
console.log(lyrics.endsWith("parini"));

