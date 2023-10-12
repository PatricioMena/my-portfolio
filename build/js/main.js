function initApp() {
  const mainNav = document.getElementById('main-navigation');
  const navItems = document.getElementById('navigation-items');
  const mobileBtn = document.getElementById('mobile-nav-toggle');
  const navLinks = document.querySelectorAll('.main-nav-link');

  const toggleMenu = () => {
    mainNav.toggleAttribute('open');
    const visibility = navItems.getAttribute('data-visible');

    if (visibility === 'false') {
      navItems.setAttribute('data-visible', true);
      mobileBtn.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
      navItems.setAttribute('data-visible', false);
      mobileBtn.setAttribute('aria-expanded', false);
    }
  };
  mobileBtn.addEventListener('click', toggleMenu);
  navLinks.forEach((navLink) => navLink.addEventListener('click', toggleMenu));
}

document.addEventListener('DOMContentLoaded', initApp);

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 400,
  lazyLoading: true,
  centerSlide: 'true',
  grabCursor: 'true',
  slidesPerView: 3,
  effect: 'slide',
  spaceBetween: 32,
  fade: 'true',
  keyboard: {
    enabled: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  },

  // // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    320: {
      slidesPerView: 1
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 2
    },

    976: {
      slidesPerView: 3
    }
  }
});

///////////////////////////////////////////////
// Sticky Navigation //
//////////////////////////////////////////////
const navBar = document.getElementById('navbar');
const hero = document.getElementById('hero');

const stickyNav = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add('sticky-nav');
    } else {
      navBar.classList.remove('sticky-nav');
    }
  });
};

const observer = new IntersectionObserver(stickyNav, {
  threshold: 0.5
});

observer.observe(hero);

///////////////////////////////////////////////
// Parallex Cards
let gallery = document.getElementById('screenshots-gallery');
let moveVal = 0;

moveGallery = () => {
  moveVal = window.scrollY * 0.4;
  gallery.style.transform = `translate3d(-${moveVal}px, 0, 0)`;
  requestAnimationFrame(moveGallery);
};

requestAnimationFrame(moveGallery);

// Scroll Animations
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.animation = `${entry.target.dataset.anim} 500ms ${entry.target.dataset.delay} forwards ease-in-out`;
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5
  }
);

const hiddenSection = document.querySelectorAll('.anim');
// Telling the observer what to observe
hiddenSection.forEach((el) => scrollObserver.observe(el));

/////////// set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
