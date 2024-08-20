// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
document.addEventListener('DOMContentLoaded', function() {
  const seasonContainer = document.querySelector('.season');
  const isMobile = window.innerWidth <= 480;
  const numberOfElements = isMobile ? 30 : 80;

  const now = new Date();
  const month = now.getMonth(); 
  let season;

  if (month >= 2 && month <= 4) {
      season = 'spring'; 
  } else if (month >= 5 && month <= 7) {
      season = 'summer'; 
  } else if (month >= 8 && month <= 10) {
      season = 'autumn'; 
  } else {
      season = 'winter'; 
  }

  for (let i = 0; i < numberOfElements; i++) {
      const element = document.createElement('div');

      switch (season) {
          case 'summer':
              element.className = 'leaf';
              element.style.backgroundImage = 'url(img/leaf-yellow.png)';
              break;
          case 'winter':
              element.className = 'snowflake';
              break;
          case 'spring':
              element.className = 'blossom';
              element.style.backgroundImage = 'url(img/cherry-blossom.png)';
              break;
          case 'autumn':
              element.className = 'redleaf';
              element.style.backgroundImage = 'url(img/leaf-red.png)';
              break;
      }

      if (element.className === 'leaf' || element.className === 'redleaf') {
          element.style.width = `${Math.random() * 10 + 20}px`; 
          element.style.height = element.style.width;
      } else if (element.className === 'blossom') {
          element.style.width = `${Math.random() * 10 + 20}px`; 
          element.style.height = element.style.width;
      } else {
          element.style.width = `${Math.random() * 10 + 10}px`; 
          element.style.height = element.style.width;
      }

      element.style.left = `${Math.random() * 100}vw`;
      element.style.animationDuration = `${Math.random() * 10 + 5}s`;
      element.style.animationDelay = `${Math.random() * 10}s`;

      seasonContainer.appendChild(element);
  }
});