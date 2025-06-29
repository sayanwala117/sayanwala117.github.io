/* script.js */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const main = document.getElementById('main-content');
    loader.classList.add('fade-out');
    loader.addEventListener('transitionend', () => {
        loader.remove();
        main.classList.remove('hidden');
        document.body.style.overflow = 'auto';
    });
    document.querySelector('.nav-toggle').addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
  });
  
  new Typed('#typed', {
    strings: [
      'Welcome To My Website',
      'I am a Business Student',
      'I am a Full‑Stack Engineer',
      'A Computer Science Student',
      'Tech enthusiast & Tinkerer'
    ],
    typeSpeed: 90,      // typing speed (ms per char)
    backSpeed: 30,      // backspace speed
    backDelay: 1700,    // pause before deleting
    loop: true          // repeat forever
  });
  
    // Tab switching for timeline
    const tabButtons = document.querySelectorAll('.timeline-tabs .tab');
    const lists = {
      work: document.getElementById('work'),
      education: document.getElementById('education')
    };
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // toggle active tab styles
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        // show/hide lists
        Object.values(lists).forEach(ul => ul.classList.add('hidden'));
        const target = btn.getAttribute('data-target');
        lists[target].classList.remove('hidden');
      });
    });
  
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const main   = document.getElementById('main-content');
    
      loader.classList.add('fade-out');
    
      // When the fade‑out finishes, remove overlay and unlock scrolling
      loader.addEventListener('transitionend', () => {
        loader.remove();
        main.classList.remove('hidden');
        document.body.classList.remove('no-scroll');   // <‑‑ changed line
      }, { once: true });
    
      // Mobile‑menu toggle (only if the button exists)
      const navToggle = document.querySelector('.nav-toggle');
      if (navToggle) {
        navToggle.addEventListener('click', () => {
          document.querySelector('.mobile-menu').classList.toggle('hidden');
        });
      }
    });


    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });


    /* script.js */
window.addEventListener('load', () => {
  const loader  = document.getElementById('loader');
  const main    = document.getElementById('main-content');

  /* give the browser a beat to finish rendering the overlay,
     then start fading it out */
  setTimeout(() => loader.classList.add('fade-out'), 300);

  /* when the CSS transition finishes, remove the overlay
     and unlock the page */
  loader.addEventListener('transitionend', () => {
    loader.remove();
    main.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
  }, { once: true });

  /* mobile menu toggle (if the button exists) */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () =>
      document.querySelector('.mobile-menu').classList.toggle('hidden')
    );
  }

  /* ── Experience tabs ── */
const tabButtons = document.querySelectorAll('.timeline-tabs .tab');
const lists = {
  work:      document.getElementById('work'),
  education: document.getElementById('education')
};
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    /* toggle active button */
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    /* show / hide lists */
    Object.values(lists).forEach(ul => ul.classList.add('hidden'));
    lists[btn.getAttribute('data-target')].classList.remove('hidden');
  });
});

/* ── Scroll‑reveal Observer ─────────────────────────────── */
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);                 // animate once
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
  .timeline-item,          /* Experience cards           */
  .project,                /* Project cards              */
  #contact .container,     /* Contact text block         */
  #contact .logo,          /* Individual contact logos   */
  section > h2             /* Section headings (Projects, Contact, etc.) */
`);


});

// Automatically close mobile nav when a link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav-menu');
    if (nav.classList.contains('active')) {
      nav.classList.remove('active'); // Hide the mobile menu
    }
  });
});
