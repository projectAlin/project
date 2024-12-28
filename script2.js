// Function to apply the theme from localStorage when the page loads
function randomLink() {
  var links = [
    "https://www.youtube.com/watch?v=uSTJGrzVyvA",
    "https://www.youtube.com/watch?v=b41J0YuQOVs",
    "https://www.youtube.com/watch?v=Xx4CaexQUnY",
    "https://www.youtube.com/watch?v=tYO3IKW0vZo",
    "https://www.youtube.com/watch?v=k2rYqrmyWAE",
    "https://www.youtube.com/watch?v=q_Yp7KVPz0M",
    "https://www.vbs-hobby.at/ideen-und-anleitungen/?srsltid=AfmBOorJlO9VAbFuRJyxbfSLxhrqgprB-8-NGGpdGpS7Nlexe44m6NGN",
    "https://www.youtube.com/watch?v=FLkpIlvZcDY",
    "https://www.youtube.com/watch?v=rmpyNatYvzE",
    "https://www.youtube.com/watch?v=Y07EfVxEdqA",
    "https://www.youtube.com/watch?v=CCGBzLz-A9Q",
    "https://www.youtube.com/watch?v=YolH8YB1sQo&pp=ygUNb3JpZ2FtaSBpZGVlbg%3D%3D",
    "https://www.youtube.com/watch?v=VF-jgltXozk",
    "https://www.youtube.com/watch?v=dTMF5ziwEZA"
  ];
  var randomIndex = Math.floor(Math.random() * links.length); // Random index
    var randomUrl = links[randomIndex]; // Get random URL

    // Open the random link in a new tab
    window.open(randomUrl, "_blank");
  }
window.onload = function () {
  const theme = localStorage.getItem('theme');
  if (theme) {
    applyTheme(theme);
  }
};

function applyTheme(theme) {
  // Apply the saved theme to the body and elements
  if (theme === 'dark') {
    dark();
  } else if (theme === 'light') {
    light();
  } else if (theme === 'nature') {
    nature();
  } else if (theme === 'blue') {
    blue();
  }
}

function dark() {
  document.body.style.backgroundColor = "black";
  document.getElementById("head").style.backgroundColor = "gray";
  document.getElementById("head").style.color = "white";
  document.getElementById("body1").style.borderColor = "black";
  document.getElementById("head").style.borderColor = "black";
  document.getElementById("footer").style.borderColor = "black";
  document.getElementById("body1").style.backgroundColor = "gray";
  document.getElementById("footer").style.backgroundColor = "gray";

  // Save the theme to localStorage
  localStorage.setItem('theme', 'dark');
}

function light() {
  document.body.style.backgroundColor = "white";
  document.getElementById("head").style.backgroundColor = "white";
  document.getElementById("head").style.color = "black";
  document.getElementById("body1").style.borderColor = "black";
  document.getElementById("head").style.borderColor = "black";
  document.getElementById("footer").style.borderColor = "black";
  document.getElementById("body1").style.backgroundColor = "white";
  document.getElementById("footer").style.backgroundColor = "white";

  // Save the theme to localStorage
  localStorage.setItem('theme', 'light');
}

function nature() {
  document.body.style.backgroundColor = "white";
  document.getElementById("head").style.backgroundColor = "rgba(143, 188, 143, 0.79)";
  document.getElementById("head").style.color = "rgb(0, 65, 0)";
  document.getElementById("body1").style.borderColor = "rgb(0, 65, 0)";
  document.getElementById("head").style.borderColor = "rgb(0, 65, 0)";
  document.getElementById("footer").style.borderColor = "rgb(0, 65, 0)";
  document.getElementById("body1").style.backgroundColor = "rgba(143, 188, 143, 0.79)";
  document.getElementById("footer").style.backgroundColor = "rgba(143, 188, 143, 0.79)";

  // Save the theme to localStorage
  localStorage.setItem('theme', 'nature');
}

function blue() {
  document.body.style.backgroundColor = "white";
  document.getElementById("head").style.backgroundColor = "rgba(0, 255, 251, 0.37)";
  document.getElementById("head").style.color = "rgb(0, 0, 0)";
  document.getElementById("body1").style.borderColor = "rgb(0, 62, 220)";
  document.getElementById("head").style.borderColor = "rgb(0, 62, 220)";
  document.getElementById("footer").style.borderColor = "rgb(0, 62, 220)";
  document.getElementById("body1").style.backgroundColor = "rgba(0, 255, 251, 0.37)";
  document.getElementById("footer").style.backgroundColor = "rgba(0, 255, 251, 0.37)";

  // Save the theme to localStorage
  localStorage.setItem('theme', 'blue');
}

 
var songs = [
  './songs/beethoven-concert-nr3-relaxing-classical-piano-216328.mp3', 
  './songs/beethoven-fur-elise-relaxing-classical-piano-268551.mp3', 
  './songs/classical-happiness-optimistic-loop-272449.mp3',
  './songs/classical-moder-piano-music-276051.mp3',
  './songs/classical-piano-sad-amp-emotional-264657.mp3',
  './songs/inspirational-chamber-symphony-classical-royal-263014.mp3',
  './songs/inspirational-symphony-classical-music-loop-243157 (1).mp3',
  './songs/ludwig-van-beethoven-moonlight-sonata-classical-remix-8097.mp3',
  './songs/moonlight-sonata-classical-piano-241539.mp3',
  './songs/romantic-classical-loop-love-story-277144.mp3',
  './songs/sad-violin-amp-orchestral-233798.mp3',
  './songs/sad-waltz-calm-classical-piano-music-241537.mp3'
];

// Function to play a random song
function playRandomSong() {
  var audioPlayer = document.getElementById("audioPlayer");

  // Choose a random song from the list
  var randomIndex = Math.floor(Math.random() * songs.length);
  var randomSong = songs[randomIndex];

  // Set the audio player source to the random song
  audioPlayer.src = randomSong;

  // Play the song
  audioPlayer.play();

  // When the current song ends, play the next one
  audioPlayer.onended = function() {
    playRandomSong();  // Call the function again to play a random song
  };
}