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
    function loadComponent(componentName, targetId) {
        return new Promise(async (resolve, reject) => {
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
                resolve();
            } catch (error) {
                console.error(`Error loading ${componentName}:`, error);
                reject(error);
            }
        });
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
        loadComponent('header', 'header-placeholder').then(() => {
            // Initialize mobile menu after header is loaded
            initMobileMenu();
        });
        loadComponent('footer', 'footer-placeholder');
    }

    // Mobile menu initialization
    function initMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    mobileMenuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }
})();
