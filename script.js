function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  let ImageSource1 = "img/rock.png"; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  let ImageSource2 = "img/hand.png";
  let ImageSource3 = "img/scissors.png";  

  let playerImage1 =  ()=> random1;// Update this randomly
  if (playerImage1 == 1) {
    document.querySelectorAll("img1")[1].setAttribute("src", ImageSource1);
  }
  else if (playerImage1 == 2){
    document.querySelectorAll("img1")[2].setAttribute("src", ImageSource2); 
  }
  else if (playerImage1 == 3){
    document.querySelectorAll("img1")[3].setAttribute("src", ImageSource3);
  }

  let playerImage2 = () => random2; // Update this randomly
  if (playerImage2 == 1){
    document.querySelectorAll("img2")[1].setAttribute("src", ImageSource1);
  }
  else if (playerImage2 == 2){
    document.querySelectorAll("img2")[2].setAttribute("src", ImageSource2); 
  }
  else if (playerImage2 == 3){
    document.querySelectorAll("img2")[3].setAttribute("src", ImageSource3);
  }

  //let SIN = "scissors.png" // Update this randomly
  

  // Update images
  
  /*document.querySelectorAll("img")[2].setAttribute("src", ImageSource2);
  document.querySelectorAll("img")[3].setAttribute("src", ImageSource3);
*/
  // Print the winner. Use if statement or other appropriate logic.
  if ((random1 == 1 && random2 == 1) || (random1 == 2 && random2 == 2) ||(random1 == 3 && random2 == 3)){
  document.querySelector("h1").innerHTML = "It's a Tie!";}
  else if (random1 == 1 && random2 == 2){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";}
  else if (random1 == 2 && random2 == 3){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";}
  else if (random1 == 1 && random2 == 3){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";} 
  else if (random1 == 2 && random2 == 1){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";}  
  else if (random1 == 3 && random2 == 2){
  document.querySelector("h1").innerHTML = "Play 1 Wins!";}
  else if (random1 == 3 && random2 == 1){
  document.querySelector("h1").innerHTML = "Play 2 Wins!";}
}
