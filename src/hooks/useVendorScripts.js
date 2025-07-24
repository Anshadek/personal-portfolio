// src/hooks/useVendorScripts.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';
import Swiper from 'swiper/bundle';
import Isotope from 'isotope-layout';

import 'swiper/css/bundle';
import 'glightbox/dist/css/glightbox.css';

// Import CSS files via Vite (you can scope these via layout if needed)
import '/public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '/public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '/public/assets/vendor/aos/aos.css';
import '/public/assets/vendor/glightbox/css/glightbox.min.css';
import '/public/assets/vendor/swiper/swiper-bundle.min.css';
import '/public/assets/css/main.css';

// JS only
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function useVendorScripts() {
  useEffect(() => {
    // Init AOS
    AOS.init({ once: true });

    // Init PureCounter
    new PureCounter();

    // Init GLightbox
    GLightbox({ selector: '.glightbox' });

    // Init Swiper
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Init Isotope
    const grid = document.querySelector('.portfolio-container');
    if (grid) {
      new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });
    }

    // Init Typed.js
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      new Typed('.typed', {
        strings: typedElement.getAttribute('data-typed-items').split(','),
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []);
}
