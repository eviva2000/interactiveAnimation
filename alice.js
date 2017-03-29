//characters and items//
let alice = document.querySelector("#alice");
let rabbit = document.querySelector("#rabbit");

let drinkme = document.querySelector("#drinkme");
let eatme = document.querySelector("#eatme");
let bg = document.querySelector("#bg");

//buttons//
let StartBtn = document.querySelector("#StartBtn");
let ResetBtn = document.querySelector("#ResetBtn");


//animations//

StartBtn.addEventListener("click", StartStory);

function StartStory() {

    console.log("Story Starting!");

    //remove start button
    document.getElementById("StartBtn").style.display = "none";

    //Rabbit moves towards the hole
    rabbit.classList.add("rabbitMoveTowardsHole");

    //Alice moves towards the hole
    alice.classList.add("aliceMoveTowardsHole");
    alice.classList.add("characterMove");


}




//After 4 seconds
//Rabbit jumps 3 times up and down and say something
setTimeout(function () {
    rabbit.classList.remove("characterWait");
    rabbit.classList.add("rabbitJumpingUpDown");
    var rabbitImLate = new Audio('audio/im_late.mp3');
    rabbitImLate.play();
}, 4000);



//After 3 seconds
//Rabbit jumps into the hole

setTimeout(function () {
    console.log("make rabbit jump into hole");

    rabbit.classList.remove("rabbitJumpingUpDown");
    rabbit.classList.add("rabbitJumpingIntoHole");



}, 5000);

//After 10 seconds
//Ask alice to jump into hole
setTimeout(function () {
    document.getElementById("jumpIntoHoleText").style.display = "block";
    var hole = document.querySelector("#hole");
    hole.addEventListener("click", aliceJumpIntoHole);
}, 7000);



//Alice jumping into hole and change to scene 2, when clicked
function aliceJumpIntoHole() {
    alice.classList.add("aliceJumpingIntoHole");

    //Change scene after 2 seconds
    setTimeout(function () {
        document.getElementById("jumpIntoHoleText").style.display = "none";
        document.getElementById("hole").style.display = "none";
        bg.classList.remove("bg1");
        bg.classList.add("bg2");
      var aliceSong = new Audio('audio/alice_in_hole.mp3');
        aliceSong.loop=true;
        aliceSong.play();
         aliceSong.volume=.5;

    }, 1500);

    //drinkme and eatme appears//

    alice.addEventListener("animationend", function () {
        console.log("called med nowq");
        setTimeout(function () {
            alice.classList.remove("aliceJumpingIntoHole");
            alice.classList.remove("aliceMoveTowardsHole");
            alice.classList.remove("characterMove");
            alice.style.left = "100px";
            drinkme.classList.add("visibledrink");
            eatme.classList.add("visibleeat");

        }, 2000);

        //scaledown//

        drinkme.addEventListener("click", function () {
                console.log("becomming small");
                setTimeout(function () {
                    alice.classList.add("alicescaledown");
                    alice.classList.remove("alicescaleup");


                }, 500);

            })
            //scaleup//

        eatme.addEventListener("click", function () {
            console.log("becomming big");
            setTimeout(function () {
                alice.classList.add("alicescaleup");
                alice.classList.remove("alicescaledown");


            }, 500);

        })
    })

}
