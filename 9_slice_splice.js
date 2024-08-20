const friends = [12,13,45,56,78,89,45,65,32,21,54];
const partial = friends.slice(2,5);
console.log(partial);
console.log(friends);


const partial2 = friends.splice(2,7,1,2,3,4,5,6);
console.log(partial2);
console.log(friends);