let face = document.querySelector("#face")
//this is a query for move, button 1.

let move = document.querySelector("#button1")

move.addEventListener('click', startMove)

function startMove(){
    face.classList.toggle('move');

    //this is the query for fade, button 6.




let fade = document.querySelector("#button2")

fade.addEventListener('click', startFade)

function startFade(){
    face.classList.toggle('fade');
}


