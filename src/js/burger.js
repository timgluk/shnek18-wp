const button = document.querySelector('.burger');
const burger = document.querySelector('.burger-btn');
const list = document.querySelector('.list');
const body = document.querySelector('.body');

body.addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target === burger) {
    burger.classList.toggle('active');
    list.classList.toggle('list_active'); 
  } else {
    burger.classList.remove('active');
    list.classList.remove('list_active');
  }

  if (list.classList.contains('list_active')) {
    console.log('hidden');
    body.style.overflow = 'hidden';
  } else {
    console.log('visible');
    body.style.overflow = 'visible';
  }
})