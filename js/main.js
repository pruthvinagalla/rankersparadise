/**
 * Rankers' Paradise - Main JavaScript
 * Handles all interactive functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  applyConfigColors();
  applyConfigContent();
  setupNavigation();
  setupMobileMenu();
  setupScrollEffects();
  setupPopup();
  setupForm();
  observeSections();
});

/**
 * Apply colors from config to CSS variables
 */
function applyConfigColors() {
  const root = document.documentElement;
  const colors = CONFIG.colors;

  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-secondary', colors.secondary);
  root.style.setProperty('--color-accent', colors.accent);
  root.style.setProperty('--color-dark', colors.dark);
  root.style.setProperty('--color-light', colors.light);
  root.style.setProperty('--color-text', colors.text);
  root.style.setProperty('--color-text-light', colors.textLight);

  // Update theme-color meta tag
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', colors.primary);
  }
}

/**
 * Apply content from config to HTML elements
 */
function applyConfigContent() {
  // Contact information
  const phone1Link = document.getElementById('phone1-link');
  const phone2Link = document.getElementById('phone2-link');
  const emailLink = document.getElementById('email-link');
  const addressText = document.getElementById('address-text');
  const founderName = document.getElementById('founder-name');
  const founderTitle = document.getElementById('founder-title');

  if (phone1Link) {
    phone1Link.href = `tel:+91${CONFIG.contact.phone1}`;
    phone1Link.textContent = `+91 ${CONFIG.contact.phone1}`;
  }
  if (phone2Link) {
    phone2Link.href = `tel:+91${CONFIG.contact.phone2}`;
    phone2Link.textContent = `+91 ${CONFIG.contact.phone2}`;
  }
  if (emailLink) {
    emailLink.href = `mailto:${CONFIG.contact.email}`;
    emailLink.textContent = CONFIG.contact.email;
  }
  if (addressText) {
    addressText.textContent = CONFIG.map.address;
  }
  if (founderName) {
    founderName.textContent = CONFIG.contact.founderName;
  }
  if (founderTitle) {
    founderTitle.textContent = CONFIG.contact.founderTitle;
  }

  // Google Map
  const googleMap = document.getElementById('google-map');
  if (googleMap) {
    googleMap.src = CONFIG.map.embedURL;
  }

  // MulteArts link
  const multeArtsLink = document.getElementById('multearts-link');
  if (multeArtsLink) {
    multeArtsLink.href = CONFIG.partner.url;
  }

  // Popup content
  const popupTitle = document.getElementById('popup-title');
  const popupSubtitle = document.getElementById('popup-subtitle');
  if (popupTitle) {
    popupTitle.textContent = CONFIG.popup.title;
  }
  if (popupSubtitle) {
    popupSubtitle.textContent = CONFIG.popup.subtitle;
  }
}

/**
 * Setup smooth scrolling navigation
 */
function setupNavigation() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Close mobile menu if open
        closeMobileMenu();

        // Calculate offset for fixed header
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Setup mobile hamburger menu
 */
function setupMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', openMobileMenu);
  }

  if (navClose) {
    navClose.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function openMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.add('active');
  document.body.classList.add('menu-open');
}

function closeMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('active');
  document.body.classList.remove('menu-open');
}

/**
 * Setup scroll-based effects (header styling)
 */
function setupScrollEffects() {
  const header = document.getElementById('header');
  let lastScrollPosition = 0;

  function handleScroll() {
    const currentScrollPosition = window.pageYOffset;

    // Add scrolled class when page is scrolled
    if (currentScrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollPosition = currentScrollPosition;
  }

  // Initial check
  handleScroll();

  // Listen for scroll events with throttling
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

/**
 * Setup popup modal functionality
 */
function setupPopup() {
  const popup = document.getElementById('popup');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupClose = document.getElementById('popup-close');
  const registerInterestBtn = document.getElementById('register-interest-btn');

  if (!popup) return;

  // Show popup on page load if configured
  if (CONFIG.popup.showEveryVisit) {
    // Small delay for better UX
    setTimeout(showPopup, 500);
  }

  // Register Interest button in contact section
  if (registerInterestBtn) {
    registerInterestBtn.addEventListener('click', showPopup);
  }

  // Close popup handlers
  if (popupClose) {
    popupClose.addEventListener('click', hidePopup);
  }

  if (popupOverlay) {
    popupOverlay.addEventListener('click', hidePopup);
  }

  // Close popup on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      hidePopup();
    }
  });
}

function showPopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset form and button state
    const form = document.getElementById('lead-form');
    if (form) {
      form.reset();
      clearFormErrors();
    }

    // Reset submit button
    const submitBtn = document.getElementById('submit-btn');
    const submitText = submitBtn?.querySelector('.form__submit-text');
    const submitLoading = submitBtn?.querySelector('.form__submit-loading');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.hidden = false;
      if (submitLoading) submitLoading.hidden = true;
    }
    if (successMessage) successMessage.hidden = true;
    if (errorMessage) errorMessage.hidden = true;

    // Focus the first input
    const firstInput = popup.querySelector('input');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }
}

function hidePopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = '';

    // Reset form
    const form = document.getElementById('lead-form');
    if (form) {
      form.reset();
      clearFormErrors();
    }

    // Reset submit button state
    const submitBtn = document.getElementById('submit-btn');
    const submitText = submitBtn?.querySelector('.form__submit-text');
    const submitLoading = submitBtn?.querySelector('.form__submit-loading');
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.hidden = false;
      if (submitLoading) submitLoading.hidden = true;
    }
  }
}

/**
 * Setup form validation and submission
 */
function setupForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);

  // Real-time validation
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  if (nameInput) {
    nameInput.addEventListener('blur', () => validateName(nameInput));
    nameInput.addEventListener('input', () => clearError('name'));
  }

  if (phoneInput) {
    phoneInput.addEventListener('blur', () => validatePhone(phoneInput));
    phoneInput.addEventListener('input', () => {
      // Only allow digits
      phoneInput.value = phoneInput.value.replace(/\D/g, '');
      clearError('phone');
    });
  }
}

function validateName(input) {
  const value = input.value.trim();
  const errorElement = document.getElementById('name-error');

  if (!value) {
    showError(input, errorElement, 'Please enter your name');
    return false;
  }

  clearError('name');
  return true;
}

function validatePhone(input) {
  const value = input.value.trim();
  const errorElement = document.getElementById('phone-error');

  if (!value) {
    showError(input, errorElement, 'Please enter your phone number');
    return false;
  }

  if (!/^\d{10}$/.test(value)) {
    showError(input, errorElement, 'Please enter a valid 10-digit phone number');
    return false;
  }

  clearError('phone');
  return true;
}

function showError(input, errorElement, message) {
  input.classList.add('error');
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearError(fieldName) {
  const input = document.getElementById(fieldName);
  const errorElement = document.getElementById(`${fieldName}-error`);

  if (input) {
    input.classList.remove('error');
  }
  if (errorElement) {
    errorElement.textContent = '';
  }
}

function clearFormErrors() {
  clearError('name');
  clearError('phone');

  const successMessage = document.getElementById('form-success');
  const errorMessage = document.getElementById('form-error');

  if (successMessage) successMessage.hidden = true;
  if (errorMessage) errorMessage.hidden = true;
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = submitBtn.querySelector('.form__submit-text');
  const submitLoading = submitBtn.querySelector('.form__submit-loading');
  const successMessage = document.getElementById('form-success');
  const errorMessage = document.getElementById('form-error');

  // Clear previous messages
  if (successMessage) successMessage.hidden = true;
  if (errorMessage) errorMessage.hidden = true;

  // Validate form
  const isNameValid = validateName(nameInput);
  const isPhoneValid = validatePhone(phoneInput);

  if (!isNameValid || !isPhoneValid) {
    return;
  }

  // Prepare data
  const formData = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    source: 'Website Popup'
  };

  // Show loading state
  submitBtn.disabled = true;
  if (submitText) submitText.hidden = true;
  if (submitLoading) submitLoading.hidden = false;

  try {
    // Check if Google Sheet URL is configured
    if (CONFIG.googleSheet.webAppURL && CONFIG.googleSheet.webAppURL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
      // Send to Google Sheets
      const response = await fetch(CONFIG.googleSheet.webAppURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Note: With no-cors, we can't read the response, but the request goes through
    }

    // Show success message
    if (successMessage) successMessage.hidden = false;

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      hidePopup();
      // Use location.href instead of window.open to avoid popup blocker
      const whatsappNumber = CONFIG.whatsapp.number;
      const message = encodeURIComponent(CONFIG.whatsapp.message);
      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    }, 1500);

  } catch (error) {
    console.error('Form submission error:', error);

    // Show error message
    if (errorMessage) errorMessage.hidden = false;

    // Reset button
    submitBtn.disabled = false;
    if (submitText) submitText.hidden = false;
    if (submitLoading) submitLoading.hidden = true;
  }
}

/**
 * Redirect to WhatsApp with pre-filled message
 */
function redirectToWhatsApp() {
  const whatsappNumber = CONFIG.whatsapp.number;
  const message = encodeURIComponent(CONFIG.whatsapp.message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappURL, '_blank');
}

/**
 * Intersection Observer for section fade-in animations
 */
function observeSections() {
  const sections = document.querySelectorAll('.section');

  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  } else {
    // Fallback: show all sections immediately
    sections.forEach(section => {
      section.classList.add('visible');
    });
  }
}
