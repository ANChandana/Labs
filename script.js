function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  //let RIN = "rock.png" // Update this randomly
  let ImageSource1 = "img/rock.png"; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  //let HIN = "hand.png" // Update this randomly
  let ImageSource2 = "img/hand.png";

  //let SIN = "scissors.png" // Update this randomly
  let ImageSource3 = "img/scissors.png";  


  // Update images
  document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);
  document.querySelectorAll("img")[2].setAttribute("src", ImageSource3);

  // Print the winner. Use if statement or other appropriate logic.
  if ((random1 == 0 && random2 == 0) || (random1 == 1 && random2 == 1) ||(random1 == 2 && random2 == 2)){
  document.querySelector("h1").innerHTML = "It's a Tie!";}
  else if (random1 == 0 && random2 == 1){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";}
  else if (random1 == 1 && random2 == 2){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";}
  else if (random1 == 0 && random2 == 2){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";}
  else if (random1 == 1 && random2 == 0){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";}  
  else if (random1 == 2 && random2 == 1){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";}
  else if (random1 == 2 && random2 == 0){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";}
}
