window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('blur');
  } else {
    header.classList.remove('blur');
  }
});

var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;
  
  if (scrollPosition > lastScrollTop) {
    header.style.transition = "transform 0.3s ease";
    header.style.transform = "translateY(-100%)"; 
  } else {
    header.style.transition = "transform 0.3s ease";
    header.style.transform = "translateY(0)"; 
  }
  
  lastScrollTop = scrollPosition;
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
}

const navLink = document.querySelectorAll(".b-nav");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}


