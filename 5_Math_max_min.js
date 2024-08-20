const jim = 85;
const dela = 95;
const chinku = 98;

//using else-if
if(jim>dela && jim>chinku){
    console.log("Jim will get the cake");
}
else if(dela>jim && dela>chinku){
    console.log("dela will get the cake");
}
else{
    console.log("chinku will get the cake");
}

//using Math.max

console.log(Math.max(1, 3, 2));

const maxScore = Math.max(jim, dela, chinku);

if (maxScore === jim) {
    console.log("Jim will get the cake");
} else if (maxScore === dela) {
    console.log("Dela will get the cake");
} else {
    console.log("Chinku will get the cake");
}
