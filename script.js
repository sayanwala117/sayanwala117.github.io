/* script.js */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const main = document.getElementById('main-content');
  const header = document.querySelector('.header'); // Get the header element

  // Loader fade-out and content display
  setTimeout(() => loader.classList.add('fade-out'), 300);
  loader.addEventListener('transitionend', () => {
    loader.remove();
    main.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
  }, { once: true });

  // Typed.js initialization
  new Typed('#typed', {
    strings: [
      'Welcome To My Website',
      'I am a Business Student',
      'I am a Full-Stack Engineer',
      'A Computer Science Student',
      'Tech enthusiast & Tinkerer'
    ],
    typeSpeed: 90,
    backSpeed: 30,
    backDelay: 1700,
    loop: true
  });

  // Tab switching for timeline
  const tabButtons = document.querySelectorAll('.timeline-tabs .tab');
  const lists = {
    work: document.getElementById('work'),
    education: document.getElementById('education')
  };
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Object.values(lists).forEach(ul => ul.classList.add('hidden'));
      const target = btn.getAttribute('data-target');
      lists[target].classList.remove('hidden');
    });
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    header.classList.toggle('menu-open'); // Toggle menu-open class on header
  });

  // Smooth scroll for navigation links and automatically close mobile nav
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor jump
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      navMenu.classList.remove('active'); // Hide the mobile menu
      header.classList.remove('menu-open'); // Remove menu-open class from header
    });
  });

  /* ── Scroll-reveal Observer ─────────────────────────────── */
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  /* Helper – tag + observe any selector list */
  function addReveals(selector) {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });
  }

  /* Register everything you want to animate */
  addReveals(`
    #experience, /* Added #experience to be revealed on scroll */
    .timeline-item,
    .project,
    #contact .container,
    #contact .logo-row, 
    #contact h2,
    #contact h3,
    .resume-content,
    .about-content,
    .about-image,
    .section-title-section
  `);

  // Add scroll event listener for header transparency and centering
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
