// // Smooth Scroll Highlighting
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-links a");

// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 120;
//     if (pageYOffset >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").includes(current)) {
//       link.classList.add("active");
//     }
//   });
// });

// // Contact form submission placeholder
// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   alert("Thanks for your message! I'll get back to you soon.");
//   this.reset();
// });



// // Smooth scrolling for nav links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Form submission alert
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert('Thank you for reaching out! I will get back to you soon.');
//   this.reset(); // Optional: clears the form
// });

// // Open project button functionality (edit URL as needed)
// document.querySelectorAll('.project-card button').forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     if (index === 1) {
//       // Second project (Online Food Delivery)
//       window.open('https://github.com/yourusername/food-delivery-project', '_blank');
//     } else if (index === 0) {
//       // First project (Portfolio Website)
//       window.open('https://yourportfolio.com', '_blank');
//     }
//   });
// });

// // Optional: Fade-in on scroll animation
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('fade-in');
//     }
//   });
// });

// document.querySelectorAll('.section').forEach(section => {
//   observer.observe(section);
// });
   

function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerText = imgElement.alt;
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

   const typingElement = document.getElementById("typing-text");
const text = "Hello, I'm Rajshri Patel";
const words = text.split(" ");
let index = 0;

function typeNextWord() {
  if (index < words.length) {
    typingElement.textContent += (index > 0 ? " " : "") + words[index];
    index++;
    setTimeout(typeNextWord, 500); // delay between words
  }
}

window.addEventListener("load", typeNextWord);


// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Hamburger toggle + close on link click
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

