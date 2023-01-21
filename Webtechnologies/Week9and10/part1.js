const country="Nepal";
const continent="Asia";
let population=30000000+10000000;
let isIsland=false;
let language="Nepali";
let description="Nepal is in Asia, and its 30000000 people speak Nepali";
console.log("Country: "+country);
console.log("Continent: "+continent);
console.log("Population: "+population);
console.log("isIsland Boolean Val: "+isIsland);
console.log("language: "+language);
let splitpopn=population/2;
console.log("Split Population: "+splitpopn);
console.log("Increased Population: "+population)
let fpopn=60000000;
let avgpopn=33000000;
if(fpopn>population){
    console.log("Finland's Population is more");
}
else{
    console.log("Nepal's population is more");
}
if(avgpopn>population){
    console.log("Nepal's Population is less than average population");
}
else{
    console.log("Nepal's Population is more than average population");
}
console.log(description);
let math1='9'-'5';
let math2='19'-'13'+'17';
let math3='19'-'13'+17;
let math4=5+6+'4'+9-4-2;
console.log("'9'-'5' = ",math1);
console.log("'19'-'13'+'17' = ",math2);
console.log("'19'-'13'+17 = ",math3);
console.log("5+6+'4'+9-4-2 = ",math4);
/*numneighbours=Number(window.prompt("How many neighbour nations does your country have? : "));
if(numneighbours===1){
    console.log("Only one border");//we should us === because it helps us to compare values and data types as well
}
else if(numneighbours>1){
    console.log("More than one border");
}
else{
    console.log("No border");
}
console.log(numneighbours===1)*/
console.log("Sarah's Requirements: ")
if(language=="English"){
    console.log("Language criteria matches with Nepal");
}
else{
    console.log("Language criteria doesn't match with Nepal")
}
if(population<50000000){
    console.log("Population criteria matches with Nepal")
}
else{
    console.log("Population criteria doesn't match with Nepal")
}
if(isIsland==false){
    console.log("Island criteria matches with Nepal")
}
else{
    console.log("Island criteria does not match with Nepal")
}
switch(language){
    case "Chinese":
        console.log("Most no of native Speakers");
        break;
    case "English":
        console.log("Third Place");
        break;
    case "Spanish":
        console.log("Second Place");
        break;
    case "Arabic":  
        console.log("Fourth Place");
        break;
    default:
        console.log("Great Language");
        break;          
}
population>33000000?console.log("Nepal's popn is above average"):console.log("Nepal's popn is below average");