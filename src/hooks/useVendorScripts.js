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

// Import Bootstrap via Vite (only JS, CSS should be linked via index.html or imported separately)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function useVendorScripts() {
  useEffect(() => {
    // Init AOS
    AOS.init();

    // Init PureCounter
    new PureCounter();

    // Init GLightbox
    GLightbox({ selector: '.glightbox' });

    // Init Swiper (example)
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });

    // Init Isotope (example)
    const grid = document.querySelector('.portfolio-container');
    if (grid) {
      new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });
    }

    // Init Typed.js (example)
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
