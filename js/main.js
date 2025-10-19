// Custom Cursor
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  setTimeout(() => {
    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";
  }, 100);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 3D Card Tilt Effect
const card = document.getElementById("profileCard");
const glow = document.getElementById("cardGlow");

if (card && glow) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    glow.style.left = x + "px";
    glow.style.top = y + "px";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
}

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all project cards and skill cards
document.querySelectorAll(".project-card, .skill-card").forEach((card) => {
  observer.observe(card);
});

// Active Navigation Highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Project Card Click Effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function () {
    // Add pulse animation
    this.style.animation = "pulse 0.5s";
    setTimeout(() => {
      this.style.animation = "";
    }, 500);
  });
});

// Parallax Effect for Shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Console Easter Egg
console.log(
  "%c👋 Hey there, curious developer!",
  "font-size: 20px; color: #8b5cf6; font-weight: bold;"
);
console.log(
  "%cLike what you see? Let's build something amazing together! 🚀",
  "font-size: 14px; color: #a78bfa;"
);

// Loading Animation (optional)
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "1";
  }, 100);
});

// Contact Form Handling with Formspree
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form action URL
    const formAction = contactForm.getAttribute("action");

    // Show loading state
    formStatus.textContent = "Sending message...";
    formStatus.className = "form-status loading";
    formStatus.style.display = "block";

    // Get form data
    const formData = new FormData(contactForm);

    try {
      // Send to Formspree
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success!
        formStatus.textContent =
          "✅ Message sent successfully! I'll get back to you soon.";
        formStatus.className = "form-status success";
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 5000);
      } else {
        // Error from Formspree
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Network error or other issue
      formStatus.textContent =
        "❌ Oops! Something went wrong. Please try again or email me directly.";
      formStatus.className = "form-status error";

      // Hide error after 7 seconds
      setTimeout(() => {
        formStatus.style.display = "none";
      }, 7000);
    }
  });
}

// Animated Counter for Stats
const stats = document.querySelectorAll(".stat-number");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute("data-target"));
        animateValue(entry.target, 0, target, 2000);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

stats.forEach((stat) => statsObserver.observe(stat));

function animateValue(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}
