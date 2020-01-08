const video__btn = document.querySelector('.video__btn');
const video__player = document.querySelector('.video__player');
const video__image = document.querySelector('.video__image');

function play() {
  video__player.muted = false;
  video__player.controls = "controls";
  video__player.currentTime = 0;
  video__player.loop = false;
  video__player.play();
  video__btn.style.display = "none";
  video__image.style.display = "none";
};

function end() {
  video__player.controls = "";
  video__btn.style.display = "block";
  video__image.style.display = "block";
  video__player.autoplay = false;
  video__player.load();
};


video__btn.addEventListener('click', play);
video__player.addEventListener('ended', end);