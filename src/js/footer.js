const container = document.querySelector('.footer__wrapper');

const about = document.createElement('div');
about.classList.add('footer__about-wrapper');
about.innerHTML = `
  <h3 class="footer__title-about">О Нас</h3>
  <p class="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quae voluptas illum quod est doloribus consectetur veniam nemo mollitia animi quos ullam blanditiis ab pariatur hic molestias, odit harum temporibus.</p>
  `;

const nav = document.createElement('nav');
nav.classList.add('footer__nav');
nav.innerHTML = `
  <h3 class="footer__title-nav">Навигация</h3>
  <a class="footer__item" href="#" >главная</a>
  <a class="footer__item" href="#" >продукция</a>
  <a class="footer__item" href="#" >блог</a>
  <a class="footer__item" href="#" >о нас</a>
  <a class="footer__item" href="#" >контакты</a>
  `;

const contacts = document.createElement('div');
contacts.classList.add('footer__contacts');
contacts.innerHTML = `
  <h3 class="footer__title-contacts">Контакты</h3>
  <div class="footer__wrapper-link">
    <svg class="footer__svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/></svg>
    <a href="tel:+7 777 777 77 77" class="footer__link">+7 777 777 77 77</a>
  </div>
  <div class="footer__wrapper-link">
    <svg class="footer__svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
    <a href="" class="footer__link">e-mail@mail.ee</a>
  </div>
  `;

if (window.matchMedia("(min-width: 1024px)").matches) {
  container.append(about);
  about.after(nav);
  nav.after(contacts);
}

if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
  container.append(nav);
  nav.after(contacts);
}

if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
  container.style.flexDirection = 'column';
  container.append(nav);
  nav.after(contacts);
}