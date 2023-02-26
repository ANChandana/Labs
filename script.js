function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  let randomImageName1 = "rock.png" // Update this randomly
  let ImageSource1 = "img/" + randomImageName1; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  let randomImageName2 = "hand.png" // Update this randomly
  let ImageSource2 = "img/" + randomImageName2; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  let randomImageName3 = "hand.png" // Update this randomly
  let ImageSource3 = "img/" + randomImageName3; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  /*var playerImage1 = () => random1;// Update this randomly
  if (playerImage1 == 1) {
    document.querySelectorAll("#img1")[1].setAttribute("src", ImageSource1);
  }
  else if (playerImage1 == 2){
    document.querySelectorAll("#img1")[2].setAttribute("src", ImageSource2); 
  }
  else if (playerImage1 == 3){
    document.querySelectorAll("#img1")[3].setAttribute("src", ImageSource3);
  }

  var playerImage2 = () =>random2; // Update this randomly
  if (playerImage2 == 1){
    document.querySelectorAll("#img2")[1].setAttribute("src", ImageSource1);
  }
  else if (playerImage2 == 2){
    document.querySelectorAll("#img2")[2].setAttribute("src", ImageSource2); 
  }
  else if (playerImage2 == 3){
    document.querySelectorAll("#img2")[3].setAttribute("src", ImageSource3);
  }


  // Update images
  */
  const imgs = document.querySelectorAll('.img');
  const options = ['rock', 'paper', 'scissors'];
  imgs.forEach((img,index) => {
  img.setAttribute('src', '${options[index === 0 ? random1 : random2]}.png');
  });
  
// Print the winner. Use if statement or other appropriate logic.
  
  if (random1 === random2){
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


/*let ImageSource1 = "img/rock.png"; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
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
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  //document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[2].setAttribute("src", ImageSource2);
  document.querySelectorAll("img")[3].setAttribute("src", ImageSource3);
  
  
  /*document.querySelectorAll("img")[2].setAttribute("src", ImageSource2);
  document.querySelectorAll("img")[3].setAttribute("src", ImageSource3);
*/
