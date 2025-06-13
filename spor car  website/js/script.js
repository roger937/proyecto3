//toggle menu boton
function toggleMenu() {
    const menu= document.querySelector('.menu');
    const nav= document.querySelector('.nav');
    menu.classList.toggle('active'); 
    nav.classList.toggle('active'); 
}

//change the backgroundvideo when click on the galeryimages
function changeVideo(name) {
 const bgVideoList = document.querySelectorAll('.bg-video');
 const trailers = document.querySelectorAll('.trailer');
 const models = document.querySelectorAll('.model');
    
  //javascript higher order array function for Each
  bgVideoList.forEach(video => {
   video.classList.remove('active');
    if(video.classList.contains(name)){
      video.classList.add('active');
    }
  });

  //maping model name chanse
  models.forEach(model => {
    model.classList.remove('active');
    if(model.classList.contains(name)){
      model.classList.add('active');
    }
  });
  //mapimg trailer video change
  trailers.forEach(video => {
    video.classList.remove('active');
    if(video.classList.contains(name)){
      video.classList.add('active');
    }
  });
} 

//change the play and pause button on click event
function toggleplay() {
  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  play.classList.toggle('active');
  pause.classList.toggle('active');
}

//video play and pause
function pauseVideo() {
  const bgVideoList = document.querySelectorAll('.bg-video');
  bgVideoList.forEach(video => {
    video.pause();
  });
  
  //a challenge for you
  //think how to hide the video in the screen  on pause
  toggleplay();
}

function playVideo() {
  const bgVideoList = document.querySelectorAll('.bg-video');
  bgVideoList.forEach(video => {
    video.play();
  });

  //think how to show the video in the screen  on play
  //she the intro again if you don't know what I mean
  toggleplay();
}

