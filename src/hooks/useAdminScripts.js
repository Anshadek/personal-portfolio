// src/hooks/useVendorScripts.js
import { useEffect } from 'react';

// CSS imports
import '/public/assets/admin/vendor/fonts/iconify-icons.css';
import '/public/assets/admin/vendor/css/core.css';
import '/public/assets/admin/vendor/css/pages/page-auth.css';
import '/public/assets/admin/css/demo.css';
import '/public/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '/public/assets/admin/vendor/libs/apex-charts/apex-charts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS bundle (includes Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function useAdminScripts() {
  useEffect(() => {
    const loadScript = (src, async = false, defer = false) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.defer = defer;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('/assets/admin/vendor/js/helpers.js');                      // <- Added
        await loadScript('/assets/admin/js/config.js');                              // <- Added
        await loadScript('/assets/admin/vendor/libs/popper/popper.js');
        await loadScript('/assets/admin/vendor/js/bootstrap.js');
        await loadScript('/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.js');
        await loadScript('/assets/admin/vendor/js/menu.js');
        await loadScript('/assets/admin/vendor/libs/apex-charts/apexcharts.js');
        await loadScript('/assets/admin/js/main.js');
        await loadScript('/assets/admin/js/dashboards-analytics.js');
        await loadScript('https://buttons.github.io/buttons.js', true, true); // async + defer
      } catch (err) {
        console.error('Error loading admin scripts:', err);
      }
    };

    loadScripts();
  }, []);
}
