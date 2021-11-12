const menu = document.querySelector('.nav-elements2');
const menuItems = document.querySelectorAll('.nav-item2');
const hambrger = document.querySelector('.ham-menu');
const menuIcon = document.querySelector('.ham-icon');
const closeIcon = document.querySelector('.close-icon');

function menuToggle() {
  if (menu.classList.contains('menuAppear')) {
    menu.classList.remove('menAppear');
    closIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('menuAppear');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

haburger.addEventListener('click', menToggle);

menuItems.forEach((menuItems) => {
  menuItems.addEventListener('click', menuToggle);
});
