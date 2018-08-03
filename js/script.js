class Player {
    constructor(tomato,potato,gold){
        this.tomato=tomato;
        this.potato=potato;
        this.gold = gold;
        this.plot = [];
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
window.onload = function WindowLoad(event) {
    alert("Page is loaded");
    player = new Player(0,0,100);
    shopTomato = document.querySelector(".shop-tomato");
    shopTomato.addEventListener('click',buyTomato);

    shopPotato = document.querySelector(".shop-potato");
    shopPotato.addEventListener('click',buyPotato);
    alert("Code is maybe good");
}
// let player = document.querySelector("body").addEventListener("load", function(){
//     return new Player(0,0,100);
// });



