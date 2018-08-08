/*TODO
Simplify plant function to just one function. 
*/
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
        this.inventory.set("tomato",0);
        this.inventory.set("potato",0);
    }
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
        player.inventory.set(this.name, player.inventory.get(this.name)+1);
        if(document.querySelector("#"+this.name+"SellNum")==null){
            let inventory = document.querySelector(".inventory");
            let plantDiv = document.createElement("div");
            plantDiv.appendChild(document.createTextNode(this.name.charAt(0).toUpperCase() + this.name.slice(1)+": "));
            let plantCount = document.createElement("p");
            plantCount.innerHTML = 1;
            plantCount.setAttribute("id",this.name+"AmtNum")
            plantDiv.appendChild(plantCount);
            let tCount = document.createElement("input");
            tCount.setAttribute("id",this.name+"SellNum");
            tCount.setAttribute("type","number");
            tCount.setAttribute("min", 1);
            tCount.setAttribute("max", 1);
            tCount.setAttribute("step", 1);
            tCount.value = 0;
            plantDiv.appendChild(tCount);
            inventory.appendChild(plantDiv);
        }
        else{
            document.querySelector("#"+this.name+"AmtNum").innerHTML = player.inventory.get(this.name);
            document.querySelector("#"+this.name+"SellNum").setAttribute("max",player.inventory.get(this.name));
        }
    }
    grow(){
        this.harvestable = true;
    }
}
let player, seedToPlant;

function buySeed(seedName,price){
    price = parseInt(price);
    console.log("Buying "+seedName);
    if(player.gold<price){
        alert("You can't afford any of my potatos sonny!");
    }
    else{
        eval("player."+seedName+"++");
        player.gold-=price;
    }
}

function changePlanting(plant){
    seedToPlant = plant;
}

function plantSeed(){
    if(eval("player."+seedToPlant)>0){
        let plant = new Plant(seedToPlant,guidGenerator());
        player.plot.push(plant); //push plant onto plot
        window.setTimeout(plant.grow,10000);//grow plant after 10 seconds
        eval("player."+seedToPlant+" --");
        
    }
    else{
        console.log("Sorry you don't have the seeds to do this");
    }
    
}

function sell(plantName){
    if(player.inventory.get[plantName]>0){
        player.gold += 10;
        player.inventory.set(plantName,player.inventory.get[plantName]-1);
    }
    else{
        console.log("No "+plantName+"'s to sell!")
    }
}

window.onload = function WindowLoad(event) {
    //Initialize player
    player = new Player(0,0,100);
}





