function describeCountry(country,population,capital){
    console.log("Country:",country);
    console.log("Population:",population);
    console.log("Capital:",capital);
    final=country+"'s "+"Capital is "+capital+" and it's popn is "+population;
    return final;
}
/*country=window.prompt("Enter name of the Country: ");
population=window.prompt("Enter population: ");
capital=window.prompt("Enter capital city: ");
console.log(describeCountry(country,population,capital));*/
function worldpopulation(population){
    percent=(population/7900000000)*100;
    console.log(population+" is "+percent+"% of world population:");
}
function worldpopulation1(population){
    percent=(population/7900000000)*100;
    console.log(population+" is "+percent+"% of world population:");
    return percent;
}
population=Number(window.prompt("Enter population"));
worldpopulation(population);
pop1=30000000;
pop2=200000;
pop3=10101010;
pop4=90008009;
per1=worldpopulation1(pop1);
per2=worldpopulation1(pop2);
per3=worldpopulation1(pop3);
per4=worldpopulation1(pop4);
populationofworld3=population=>(population/7900000000)*100;
console.log(populationofworld3(pop1));
console.log(populationofworld3(pop2));
console.log(populationofworld3(pop3));
function describePopulation(country,population){
    worldpopulation1(population)
    console.log(country+" has "+population+" people ,which is about "+percent+"% of the world");
}
con1="Nepal";
con2="UK";
con3="Iceland";
describePopulation(con1,pop1);
describePopulation(con2,pop2);
describePopulation(con3,pop3);
popa=[30000000,200000,10101010,90008009];
console.log(popa.length===4);
percentages=[per1,per2,per3,per4];
console.log(percentages);
neighbours=["India,China"];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if(!neighbours.includes("Germany")){
    console.log("No Germany");
}
neighbours[neighbours.indexOf('China')]='Nepal';
console.log(neighbours);
myCountry={//object creation
    country:"Nepal",
    capital:"Kathmandu",
    language:"Nepali",
    population:300000000,
    neighbours:["India","China"],
    describe:function(){
        console.log(`${myCountry.country} has ${myCountry.population} people who speak ${myCountry.language}, neighbours: ${myCountry.neighbours} and capital: ${myCountry.capital}`);
    },
    checkIsland:function(){
        this.isIland=this.neighbours.length===0?console.log(true):console.log(false);
    }
};
console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} people who speak ${myCountry.language}, neighbours: ${myCountry.neighbours} and capital: ${myCountry.capital}`);
myCountry.population+=2000000;
console.log(myCountry.population);
myCountry.population-=4000000;
console.log(myCountry.population);
myCountry.describe();
myCountry.checkIsland();
console.log();
function election(){
    for(let i=1;i<51;i++){
        console.log("Voter "+i+" is voting");
    }
}
election();
percentages2=[];
for(let i=0;i<popa.length;i++){
    perc=worldpopulation1(popa[i]);
    percentages2.push(perc);
}
console.log(percentages);
console.log(percentages2);
count=0;
for(let i=0;i<popa.length;i++){
    if(percentages[i]=percentages2[i]){
        count=count+1;
    }
    if(count==4){
        console.log("Equal");
    }
}
listofNeighbours=[["Canada","Mexico"],["Spain"],["Norway","Sweden","Russia"]];
for(let i=0;i<listofNeighbours.length;i++){
    for(let j=0;j<listofNeighbours.length;j++){
        console.log(`Neighbour: ${listofNeighbours[i][j]}`);
    }
}
percentages3=[];
let i=0;
while(i<popa.length){
    perc3=worldpopulation1(popa[i]);
    percentages3.push(perc3);
    i++;
}
console.log(percentages3);