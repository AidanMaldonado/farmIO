/*TODO
Simplify plant function to just one function. 
*/
let player, currentCommand, water = 5;
let timeToGrow = new Map();
timeToGrow.set("tomato",6);
timeToGrow.set("potato",8);

let sellPrice = new Map();
sellPrice.set("tomato",10);
sellPrice.set("potato",15);

class Player {
    constructor(tomato,potato,gold){
        this.tomato=tomato;
        this.potato=potato;
        this.gold = gold;
        this.plot = [null,null,null,null,null,null,null,null,null]; //plot for players plants
        this.inventory = new Map();
        this.inventory.set("tomato",0);
        this.inventory.set("potato",0);
    }
}
class Plant {
    constructor(name, plotPos){
        this.name=name;
        this.age = 0;
        this.harvestable = false;
        this.plotPos = plotPos; // Plant's position in plot array
        this.watered = false;
        this.penalty = 0; // If the plant is not watered after a day, there will be a penalty in its selling price
    }
    harvest(){
        console.log("Harvesting "+ this.name + " with penalty " + this.penalty);
        player.plot[player.plot.indexOf(this)] = null; // Remove plant from plot
        player.gold += sellPrice.get(this.name) - this.penalty;
        // player.inventory.set(this.name, player.inventory.get(this.name)+1); // Increases tomatos in players inventory
        // document.querySelector("#plot-"+this.plotPos).innerHTML = "Plant here!"; // Resets button text. 
        // //This whole if else statment is just to update the players inventory on screen. 
        // if(document.querySelector("#"+this.name+"SellNum")==null){
        //     let inventory = document.querySelector(".inventory");
        //     let plantDiv = document.createElement("div");
        //     plantDiv.appendChild(document.createTextNode(this.name.charAt(0).toUpperCase() + this.name.slice(1)+": "));
        //     let plantCount = document.createElement("p");
        //     plantCount.innerHTML = 1;
        //     plantCount.setAttribute("id",this.name+"AmtNum")
        //     plantDiv.appendChild(plantCount);
        //     let tCount = document.createElement("input");
        //     tCount.setAttribute("id",this.name+"SellNum");
        //     tCount.setAttribute("type","number");
        //     tCount.setAttribute("min", 1);
        //     tCount.setAttribute("max", 1);
        //     tCount.setAttribute("step", 1);
        //     tCount.value = 0;
        //     plantDiv.appendChild(tCount);
        //     inventory.appendChild(plantDiv);
        // }
        // else{
        //     document.querySelector("#"+this.name+"AmtNum").innerHTML = player.inventory.get(this.name);
        //     document.querySelector("#"+this.name+"SellNum").setAttribute("max",player.inventory.get(this.name));
        // }
    }
    grow(){
        this.age++;
        console.log("I'm a " + this.name + " and I'm " + this.age + " days old.")
        if(this.age == timeToGrow.get(this.name)){ // Checking to see if it grows again, will it be harvestable
            this.harvestable = true;
            let btn = document.querySelector("#plot-"+this.plotPos);
            btn.innerHTML = this.name.charAt(0).toUpperCase() + this.name.slice(1) + ": Harvest me!";
        } // maybe add in mechanic that if they keave a harvestable plant in it will start to go bad.
        else{
            if(this.watered == false){
                this.penalty = this.penalty * 2 + 1;
            }
            else{
                this.watered = false;
            }
        }
    }

}


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

function changeCommand(plant){
    currentCommand = plant;
}

function interact(plotNum){
    if(currentCommand == "water"){
        if(player.plot[parseInt(plotNum)] == "null"){
            console.log("Nothing to water!")
        }
        else{
            console.log("Watering plot "+plotNum);
            player.plot[parseInt(plotNum)].watered = true;
        }

    }
    else if(currentCommand == "harvest"){
        if(player.plot[parseInt(plotNum)] == "null" || player.plot[parseInt(plotNum)].harvestable == false){
            console.log("Nothing to harvest!")
        }
        else{
            player.plot[parseInt(plotNum)].harvest();
        }
    }
    else if(eval("player."+currentCommand)>0){
        let plant = new Plant(currentCommand, parseInt(plotNum));
        if(player.plot[parseInt(plotNum)]==null){
            player.plot[parseInt(plotNum)] = plant;
            let btn = document.querySelector("#plot-"+plotNum);
            btn.innerHTML = currentCommand.charAt(0).toUpperCase() + currentCommand.slice(1);
        }
        else {
            console.log("Plant already planted");
        }
        // player.plot.push(plant);  //push plant onto plot
        eval("player."+currentCommand+" --");
        
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

function advanceDay(){
    player.plot.forEach(function(plant) {
        if(plant != null){
            plant.grow();
        }
    })
}

window.onload = function WindowLoad(event) {
    //Initialize player
    player = new Player(0,0,100);
}





