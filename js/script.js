// TODO
// Add in dynamic id to plant for appending to and removal from the dom
// Add harvest method to plants



function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
class Player {
    constructor(tomato,potato,gold){
        this.tomato=tomato;
        this.potato=potato;
        this.gold = gold;
        this.plot = [];
        this.inventory = new Map();
        this.inventory.set("Tomato",0);
        this.inventory.set("Potato",0);
    }
}
class Plant {
    constructor(name){
        this.name=name;
    }

}
let player, shopPotato, shopTomato;
function buyTomato(){
    let price = 10;
    console.log("tomato");
    if(player.gold<price){
        alert("You can't afford any of my tomatos sonny!");
    }
    else{
        player.tomato++;
        player.gold-=price;
    }
}
function buyPotato(){
    let price = 10;
    console.log("potato");
    if(player.gold<price){
        alert("You can't afford any of my potatos sonny!");
    }
    else{
        player.potato++;
        player.gold-=price;
    }
}
function plantT(){
    let plant = new Plant("Tomato");
    player.plot.push(plant); //push plant onto plot
    window.setTimeout(plant.grow,10000);//grow plant after 10 seconds
}
window.onload = function WindowLoad(event) {
    //Initialize player
    player = new Player(0,0,100);
    //set up shop buttons
    shopTomato = document.querySelector(".shop-tomato");
    shopTomato.addEventListener('click',buyTomato);

    shopPotato = document.querySelector(".shop-potato");
    shopPotato.addEventListener('click',buyPotato);
}





