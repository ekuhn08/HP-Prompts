

  // Wait for the entire page to load before running the number guessing game
  window.addEventListener("load", function () {
    setTimeout(function () {
      // Set a fixed target number between 1 and 5
      const targetNum = Math.floor(Math.random() * 5) + 1;
      console.log("Target number:", targetNum); // Just for debugging in console

      // Ask the user to guess a number
      let guess = parseInt(prompt("Hello Wizard! To enter Numerology class, prove your psychic powers by guessing the correct number between 1 and 5."));

      // Gets mad and corrects a user if they enter a letter
      while (!guess) {
  guess = parseInt(prompt("Wrong! Come on Muggle, you can only input numbers. Guess a number betweeen 1 and 5."));
}
      // Keep asking until the user guesses the correct number
      while (guess !== targetNum) {
        if (guess > targetNum) {
          guess = parseInt(prompt("Too high, Muggle! Enter a new number between 1 and 5:"));
        } else {
          guess = parseInt(prompt("Too low! Try again between 1 aoo low, Mud Blood! Enter a new number between 1 and 5:"));
        }
      }

      // Show success message and trigger broomstick animation
      alert("Great job, wise Wizard! You may now enter the Numerology classroom! 🪄");
      document.getElementById("broomstick").classList.add("fly");
    }, 300); // Delay to let the page render first
  });

   // Function to check the user's input against the correct house name
  function checkInput() {
    const input = document.getElementById("userInput").value.trim();
    if (input === "Gryffindor") {
      alert("Correct, wonderful Warlock! Welcome to Gryffindor House!");
    } else {
      alert("Come on, Muggle. You did not guess correctly, try again (hint: the correct house's mascot is a Lion 🦁).");
    }
  }