

 let random_number1=Math.floor((Math.random()*6))+1   
 console.log(random_number1)
 let random_number2=Math.floor((Math.random()*6))+1   
 console.log(random_number2)
 
if(random_number1>random_number2){
    document.querySelector("h1").innerText="Player 1 won"
}
else{
    document.querySelector("h1").innerText="Player 2 won"

}
if(random_number1===1){
    document.querySelector(".img1").setAttribute("src", "dice1.png")
}
else if(random_number1===2){
    document.querySelector(".img1").setAttribute("src", "dice2.png")
}
else if(random_number1===3){
    document.querySelector(".img1").setAttribute("src", "dice3.png")
}
else if(random_number1===4){
    document.querySelector(".img1").setAttribute("src", "dice4.png")
}
else if(random_number1===5){
    document.querySelector(".img1").setAttribute("src", "dice5.png")
}
else{
    document.querySelector(".img1").setAttribute("src", "dice6.png")
}

if(random_number2===1){
    document.querySelector(".img2").setAttribute("src", "dice1.png")
}
else if(random_number2===2){
    document.querySelector(".img2").setAttribute("src", "dice2.png")
}
else if(random_number2===3){
    document.querySelector(".img2").setAttribute("src", "dice3.png")
}
else if(random_number2===4){
    document.querySelector(".img2").setAttribute("src", "dice4.png")
}
else if(random_number2===5){
    document.querySelector(".img2").setAttribute("src", "dice5.png")
}
else{
    document.querySelector(".img2").setAttribute("src", "dice6.png")
}




 random_number1=Math.floor((Math.random()*6))+1   
console.log(random_number1)
random_number2=Math.floor((Math.random()*6))+1   
console.log(random_number2)
