let hand = document.querySelector("#hand")
//this is a query for move, button 1.

let move = document.querySelector("#button1")

move.addEventListener('click', startMove)

function startMove() {
    hand.classList.toggle('move');
}
//this is the query for fade, button 2.

let fade = document.querySelector("#button2")

fade.addEventListener('click', startFade)

function startFade() {
    hand.classList.toggle('fade');
}


//this is the query for jump once, button 3.

let jump = document.querySelector("#button3")

jump.addEventListener('click', startJump)

function startJump() {
    hand.classList.toggle('jump');
}
//this is the query for glow, button 4.

let glow = document.querySelector("#button4")

glow.addEventListener('click', startGlow)

function startGlow() {
    hand.classList.toggle('glow');
}
//this is the query for shake, button 5.
let shake = document.querySelector("#button5")

shake.addEventListener('click', startShake)

function startShake() {
    hand.classList.toggle('shake');
}

//this is the query for shake, button 6.
let fall = document.querySelector("#button6")

fall.addEventListener('click', startFall)

function startFall() {
    hand.classList.toggle('fall')
}
