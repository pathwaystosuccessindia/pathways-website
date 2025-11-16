// Component loader for Pathways to Success India website
// Loads header and footer dynamically into pages

(function() {
    'use strict';

    // Determine base URL based on page location
    function getBaseUrl() {
        const path = window.location.pathname;
        // If in pages/ or pages/schools/ subdirectory, go up one or two levels
        if (path.includes('/pages/schools/')) {
            return '../../';
        } else if (path.includes('/pages/')) {
            return '../';
        }
        return '';
    }

    // Load component from file
    async function loadComponent(componentName, targetId) {
        try {
            const baseUrl = getBaseUrl();
            const response = await fetch(`${baseUrl}components/${componentName}.html`);

            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}`);
            }

            let html = await response.text();

            // Replace {baseUrl} placeholders with actual base URL
            html = html.replace(/{baseUrl}/g, baseUrl);

            // Insert the component
            const target = document.getElementById(targetId);
            if (target) {
                target.innerHTML = html;

                // If it's the header, set active page
                if (componentName === 'header') {
                    setActivePage();
                }
            }
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
        }
    }

    // Set active page in navigation
    function setActivePage() {
        const currentPage = document.body.getAttribute('data-page');
        if (!currentPage) return;

        const navLinks = document.querySelectorAll('.nav-menu a[data-page]');
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Initialize components when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Load header and footer
        loadComponent('header', 'header-placeholder');
        loadComponent('footer', 'footer-placeholder');
    }
})();
