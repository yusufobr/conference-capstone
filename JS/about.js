const navBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-mobile');
const overly = document.getElementById('overly');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('open');
    navList.classList.toggle('hidden');
    overly.classList.toggle('hidden');
  });