document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu variables
    const mobileNav = document.getElementById('mobile-nav');
    const aside = document.getElementById('aside');
    const closeBtn = document.querySelector('.close-menu');
    const body = document.body;
    
    // Map functionality
    const viewMapButton = document.getElementById('viewMapButton');
    const mapPlaceholder = document.getElementById('mapPlaceholder');
    const mapIframeWrapper = document.getElementById('mapIframeWrapper');
    
    if (viewMapButton && mapPlaceholder && mapIframeWrapper) {
        viewMapButton.addEventListener('click', function(e) {
            e.preventDefault();
            mapPlaceholder.style.display = 'none';
            mapIframeWrapper.style.display = 'block';
        });
    }

    // Toggle mobile menu
    mobileNav.addEventListener('click', function(e) {
        e.stopPropagation();
        aside.classList.add('open');
        body.classList.add('menu-open');
    });

    // Close menu when clicking close button
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!aside.contains(e.target) && e.target !== mobileNav) {
            closeMenu();
        }
    });

    // Close menu when clicking on a link
    const navLinks = aside.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Function to close the menu
    function closeMenu() {
        aside.classList.remove('open');
        body.classList.remove('menu-open');
    }
});

// ---------------------------------------------------------------------
// let mobileNav = document.getElementById('mobile-nav');
// let aside = document.getElementById('aside');

// mobile_nav.addEventListener('click' , function(){
//     if (aside.style.right == '0px') {
//         aside.style.right = "-250px"
//     } else {
//         aside.style.right = "0px"
//     }
// });

// document.addEventListener('click' , function(event) {
//     if (!aside.contains(event.target) && event.target !== mobile_nav) {
//         aside.style.right = "-250px"
//     }
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});