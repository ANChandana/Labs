function Game() {
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  const img = document.querySelectorAll("img"); 
  // Assign the appropriate image
  let randomImageName1 = "rock.png" // Update this randomly
  let ImageSource1 = "img/" + randomImageName1; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  console.log(ImageSource1);
  let randomImageName2 = "hand.png" // Update this randomly
  let ImageSource2 = "img/" + randomImageName2; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  console.log(ImageSource2);
  let randomImageName3 = "scissors.png" // Update this randomly
  let ImageSource3 = "img/" + randomImageName3; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  console.log(ImageSource3);
  var playerImage1 =random1;// Update this randomly
  //console.log(playerImage1);
  //console.log(random1);
  if (playerImage1 == 1) {
    img[0].src = ImageSource1; // image 1
    console.log("hi");
  }
  else if (playerImage1 == 2) {
    img[0].src = ImageSource2; // image 2
    console.log("hi1");
  }
  else if (playerImage1 == 3) {
    img[0].src = ImageSource3; // image 3
    console.log("h0i");    
  }

  var playerImage2 =random2; // Update this randomly
  console.log(playerImage2);
  console.log(random2);
  if (playerImage2 == 1) {
    img[1].src = ImageSource1; // image 1
      console.log("hi");
  }
  else if (playerImage2 == 2) {
    img[1].src = ImageSource2; // image 2
    console.log("hi1");
  }
  else if (playerImage2 == 3) {
    img[1].src = ImageSource3; // image 3
    console.log("h0i");    
  }
  // Print the winner. Use if statement or other appropriate logic.

  if (random1 === random2) {
    document.querySelector("h1").innerHTML = "It's a Tie!";
  }
  else if (random1 == 1 && random2 == 2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
  }
  else if (random1 == 2 && random2 == 3) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
  }
  else if (random1 == 1 && random2 == 3) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
  }
  else if (random1 == 2 && random2 == 1) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
  }
  else if (random1 == 3 && random2 == 2) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
  }
  else if (random1 == 3 && random2 == 1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
  }
}
