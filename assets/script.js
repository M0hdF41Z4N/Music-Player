// Play fucntion for Bottom Music Player

document.getElementById("playAudio").addEventListener("click", function () {
  var audio = document.getElementById("testAudio");
  if (this.className == "is-playing") {
    this.className = "";
    this.innerHTML = "<i class='bi bi-play-circle'></i>";
    audio.pause();
  } else {
    this.className = "is-playing";
    this.innerHTML = "<i class='bi bi-pause-circle'></i>";
    audio.play();
  }
});

//  for player status
const slider = document.getElementById("music-status");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, green 0%, red ${
  ((value - min) / (max - min)) * 100
}%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, green 0%, red ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 100%)`;
};

// Play Function for Latest Release Section

document.getElementById("latPlayAudio").addEventListener("click", function () {
  var audio1 = document.getElementById("latestTestAudio");
  if (this.className == "is-playing") {
    this.className = "";
    this.innerHTML = "<i class='bi bi-play-fill'></i>";
    audio1.pause();
  } else {
    this.className = "is-playing";
    this.innerHTML = "<i class='bi bi-pause-fill'></i>";
    audio1.play();
  }
});

document.getElementById("latPlayAudio1").addEventListener("click", function () {
  var audio2 = document.getElementById("latestTestAudio1");
  if (this.className == "is-playing") {
    this.className = "";
    this.innerHTML = "<i class='bi bi-play-fill'></i>";
    audio1.pause();
  } else {
    this.className = "is-playing";
    this.innerHTML = "<i class='bi bi-pause-fill'></i>";
    audio1.play();
  }
});

document.getElementById("latPlayAudio2").addEventListener("click", function () {
  var audio3 = document.getElementById("latestTestAudio2");
  if (this.className == "is-playing") {
    this.className = "";
    this.innerHTML = "<i class='bi bi-play-fill'></i>";
    audio1.pause();
  } else {
    this.className = "is-playing";
    this.innerHTML = "<i class='bi bi-pause-fill'></i>";
    audio1.play();
  }
});

document.getElementById("latPlayAudio3").addEventListener("click", function () {
  var audio4 = document.getElementById("latestTestAudio3");
  if (this.className == "is-playing") {
    this.className = "";
    this.innerHTML = "<i class='bi bi-play-fill'></i>";
    audio1.pause();
  } else {
    this.className = "is-playing";
    this.innerHTML = "<i class='bi bi-pause-fill'></i>";
    audio1.play();
  }
});
