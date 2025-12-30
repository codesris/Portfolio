/* ===============================
   SMOOTH NAVIGATION SCROLL
================================ */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* ===============================
   SECTION SCROLL ANIMATION
================================ */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.25,
  }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }
});

/* ===============================
   CONTACT FORM FEEDBACK
================================ */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const status = contactForm.querySelector(".contact-status");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Message sent successfully.";
    contactForm.reset();
  });
}

/* ===============================
   NAVBAR ACTIVE LINK STATE
================================ */
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
