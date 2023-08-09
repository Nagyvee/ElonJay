const images = [
    'images/card1.jpeg',
    'images/card2.jpeg',
    'images/card3.jpeg',
    'images/card4.jpeg',
    'images/card5.jpeg',
    'images/card6.jpeg',
    'images/card7.jpeg',
    'images/card8.jpeg',
    'images/card9.jpeg',
    'images/card10.jpeg',
    'images/card11.jpeg',
    'images/card12.jpeg',
    'images/card13.jpeg',
    'images/card14.jpeg',
    'images/card15.jpeg',
    'images/card16.jpeg',
    'images/card17.jpeg',
    'images/card18.jpeg',
    'images/card19.jpeg',
    'images/card20.jpeg',
    'images/card21.jpeg',
    'images/card22.jpeg',
    'images/card23.jpeg',
    'images/card24.jpeg',
    'images/card25.jpeg',
    'images/card26.jpeg',
    'images/card27.jpeg',
    'images/card28.jpeg',
    'images/card29.jpeg',
    'images/card30.jpeg',
    // Add more image URLs here
  ];
  const audio = document.getElementById('audio');
  
  let currentIndex = 0;
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  
  function updateImages() {
    image1.src = images[currentIndex];
    image2.src = images[currentIndex + 1];
  
    currentIndex = (currentIndex + 2) % images.length;
  }
  
  function rotateImages() {
    updateImages();
    setTimeout(rotateImages, 4000); // 4 seconds
  }
  
  // Play audio and rotate images
  audio.play();
  currentIndex = (currentIndex + 2) % images.length;
  rotateImages();
  
  function playMusic() {
    if (isMusicPlaying) {
      audio.pause();
      isMusicPlaying = false;
    } else {
      audio.play();
      isMusicPlaying = true;
    }
  }
 
  
  // Play audio and rotate images
  playMusic();