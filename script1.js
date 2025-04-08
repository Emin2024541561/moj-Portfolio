// On scroll događaj
window.onscroll = function() {
    var scrollButton = document.getElementById("scrollToTop");
    var header = document.querySelector('header');
    var cards = document.querySelectorAll('.skill-card');
    var headerTitle = document.getElementById("headerTitle");
    var contactSection = document.getElementById("contact");

    // Pokazivanje i skrivanje strelice
    if (document.documentElement.scrollTop > 200) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }

    // Dinamičko dodavanje hover efekta na skill cards
    cards.forEach(function(card) {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.style.opacity = 1;
            card.style.transition = 'opacity 1s ease-in';
        }
    });

    if (document.documentElement.scrollTop > 100) {
    header.classList.add('sticky');
    header.classList.add("hidden-header"); // Sakriva cijeli header
} else {
    header.classList.remove('sticky');
    header.classList.remove("hidden-header");
}

// Dodavanje animacije za kontakt sekciju
var distance = contactSection.getBoundingClientRect().top;
if (distance < window.innerHeight) {
    contactSection.classList.add("fade-in");
}


// Funkcija za pomeranje na vrh stranice kada se klikne na strelicu
document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Dodavanje animacije pri učitavanju stranice
window.addEventListener('load', function () {
    const hobbies = document.querySelectorAll('.hobby-box');
    hobbies.forEach((hobby, index) => {
        setTimeout(() => {
            hobby.classList.add('animate');
        }, index * 200);
    });
});

// CSS za fade-in animaciju
document.styleSheets[0].insertRule(`
    #contact.fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s ease, transform 1s ease;
    }
`, 0);

}


 
        const words = ["designer", "web developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseTime = 1000;

    function typeWriter() {
      const element = document.getElementById('typewriter');
      const currentWord = words[wordIndex];
      element.textContent = currentWord.substring(0, charIndex);

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          charIndex++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          isDeleting = true;
          setTimeout(typeWriter, pauseTime);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTimeout(typeWriter, typingSpeed);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWriter, typingSpeed);
        }
      }
    }

    typeWriter();
    



    document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.getElementById("about");
  
  const observerOptions = {
    root: null,
    threshold: 0.5  // Animacija se pokreće kad je 50% sekcije vidljivo
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("visible");
      } else {
        aboutSection.classList.remove("visible");
      }
    });
  }, observerOptions);

  observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function () {
    const languageMenu = document.querySelector('.language-menu');
    
    languageMenu.addEventListener('click', function () {
        // Toggle 'active' class to show/hide dropdown
        this.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const projectsSection = document.getElementById("projects");
    
    const observerOptions = {
        root: null,
        threshold: 0.3 // Pokreće se kada je 30% sekcije vidljivo
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectsSection.querySelector('.project-card').classList.add('animate-project-reveal');
            }
        });
    }, observerOptions);

    observer.observe(projectsSection);
});