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
    // spendgold(amt){
    //     this.gold -= amt;
    // }
    // get gold(){
    //     return this.gold;
    // }
    //should I be using getters and setters?
}
class Plant {
    constructor(name,id){
        this.name=name;
        this.id = id;
        this.harvestable = false;
    }
    harvest(){
        console.log("Harvesting "+ this.name);
        player.plot.splice(player.plot.indexOf(this),1);
        if(this.name == "Tomato"){
            player.inventory.set("Tomato", player.inventory.get("Tomato")+1); 
            //console.log(player.inventory);
        }
        else if(this.name == "Potato"){
            player.inventory.set("Potato", player.inventory.get("Potato")+1); 
            console.log(player.inventory);
        }
        else{
            console.log("Name is " + this.name);
        }
    }
    grow(){
        this.harvestable = true;
    }

}
let player, shopPotato, shopTomato;
function buyTomato(){
    let price = 10;
    console.log("Buying tomato");
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
    console.log("Buying potato");
    if(player.gold<price){
        alert("You can't afford any of my potatos sonny!");
    }
    else{
        player.potato++;
        player.gold-=price;
    }
}
function plantT(){
    if(player.tomato>0){
        let plant = new Plant("Tomato",guidGenerator());
        player.plot.push(plant); //push plant onto plot
        window.setTimeout(plant.grow,10000);//grow plant after 10 seconds
    }
    else{
        console.log("Sorry you don't have the seeds to do this");
    }
    
}
function plantP(){
    if(player.potato>0){
        let plant = new Plant("Potato",guidGenerator());
        player.plot.push(plant); //push plant onto plot
        window.setTimeout(plant.grow,10000);//grow plant after 10 seconds
    }
    else{
        console.log("Sorry you don't have the seeds to do this");
    }
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





