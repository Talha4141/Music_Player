const play = document.getElementById("play");

const music = document.querySelector("audio");

const img = document.querySelector("img");

//const artist = document.querySelector("artist");

const artist = document.getElementById("artist");

const heading = document.getElementById("heading");

const next = document.getElementById("next");

const prev = document.getElementById("prev");

let isPlaying = false;

// for playing function
const musicPlay = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

// for pause function
const musicPause = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

// play and pause main function call
play.addEventListener("click", () => {
  if (isPlaying == false) {
    musicPlay();
  } else {
    musicPause();
  }
});

let songIndex = 0;

const songs = [
  {
    name: "s-1",
    heading: "sajna",
    artist: "badsha",
  },

  {
    name: "s-2",
    heading: "pardeshi",
    artist: "pardeshi 2",
  },
];

const newsongs = (songs) => {

  heading.textContent = songs.heading;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "image/" + songs.name + ".jpg";
};

const nextSong = () =>{
  songIndex = (songIndex + 1) % songs.length;
  newsongs(songs[songIndex]);
  music.pause();
  music.play();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  newsongs(songs[songIndex]);
  music.pause();
  music.play();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);