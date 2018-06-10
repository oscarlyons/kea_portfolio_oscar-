let face = document.querySelector("#face")


let jump = document.querySelector("#button1")

jump.addEventListener('click', startJump)

function startJump(){
    face.classList.toggle('jump');
}
//this is a query for move, button 2.

let move = document.querySelector("#button2")

move.addEventListener('click', startMove)

function startMove(){
    face.classList.toggle('move');
}

//this is the query for move to 30, button 3.

let moveTo30 = document.querySelector("#button3")

moveTo30.addEventListener('click', startMoveTo30)

function startMoveTo30(){
    face.classList.toggle('moveTo30');
}

//this is the query for move from 30, button 4.

let moveFrom30 = document.querySelector("#button4")

moveFrom30.addEventListener('click', startMoveFrom30)

function startMoveFrom30(){
    face.classList.toggle('moveFrom30');
}

//this is the query for jump once, button 5.

let jumpOnce = document.querySelector("#button5")

jumpOnce.addEventListener('click', startJumpOnce)

function startJumpOnce(){
    face.classList.toggle('jumpOnce');
}

//this is the query for fade, button 6.

let fade = document.querySelector("#button6")

fade.addEventListener('click', startFade)

function startFade(){
    face.classList.toggle('fade');
}

//this is the query for glow, button 7.

let glow = document.querySelector("#button7")

glow.addEventListener('click', startGlow)

function startGlow(){
    face.classList.toggle('glow');
}

//this is the query for fall, button 8.

let fall = document.querySelector("#button8")

fall.addEventListener('click', startFall)

function startFall(){
    face.classList.toggle('fall');
}

//this is the query for disco, button 9.

let disco = document.querySelector("#button9")

disco.addEventListener('click', startDisco)

function startDisco(){
    face.classList.toggle('disco');
}

//this is the query for shake, button 9.

let shake = document.querySelector("#button10")

shake.addEventListener('click', startShake)

function startShake(){
    face.classList.toggle('shake');
}
