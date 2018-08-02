
class Player {
    constructor(tomato,potato,gold){
        this.tomato=tomato;
        this.potato=potato;
        this.gold = gold;
        this.plot = [];
    }
    buyTomato(price){
        if(this.gold<price){
            alert("You can't afford any of my tomatos sonny!");
            break;
        }
        else{
            this.tomato++;
            gold-=price;
        }
    }
    buyPotato(price){
        if(this.gold<price){
            alert("You can't afford any of my potatos sonny!");
            break;
        }
        else{
            this.potato++;
            gold-=price;
        }
    }
    

}
let player = object.addEventListener("load", function(){
    return new Player(0,0,100);
});