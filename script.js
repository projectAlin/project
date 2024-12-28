function pass() {
  var searchInput = document.getElementById("search").value;
  var gif = document.getElementById("gif");
  var body = document.body;

  // Reference to the audio element
  var audio = document.getElementById("errorAudio");

  // If input is incorrect, show the GIF, play the audio, and make changes
  if (searchInput != "f") {
    // Play the error sound
    audio.play();

    gif.style.display = "block"; // Make GIF container visible
    setTimeout(function() {
      gif.style.opacity = 1; // Fade in GIF
    }, 10); // Wait a bit to allow display to be set

    setTimeout(function() {
      gif.style.opacity = 0; // Fade out GIF after 3 seconds
    }, 30000); // 3000 milliseconds = 3 seconds

    // Hide the GIF completely after the fade-out
    setTimeout(function() {
      gif.style.display = "none"; // Hide GIF after the fade-out
    }, 40000); // Wait 1 second after fade-out before hiding

    // Change the background color to pink and then revert after 3 seconds
    body.style.backgroundColor = "pink"; // Change background to pink
    setTimeout(function() {
      body.style.backgroundColor = ""; // Revert background color to original
    }, 30000); // Revert after 3 seconds
  } else {
    window.location.href = "http://127.0.0.1:5501/index2.html";
  }
}
