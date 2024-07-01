document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;
   const subject = encodeURIComponent("Contact from Facilit-E Website");
   // Structure the body with a polite formula and proper formatting
   const body = `Bonjour,

Nom: ${name}
Email: ${email}

Message:
${message}

Cordialement,
${name}`
;
   const mailtoLink = `mailto:emilie.goyard@facilit-e.fr?subject=${subject}&body=${encodeURIComponent(body)}`;
   window.location.href = mailtoLink;
});
if (localStorage.getItem('visitCount')) {
   // Incrémenter le compteur de visites
   localStorage.setItem('visitCount', Number(localStorage.getItem('visitCount')) + 1);
} else {
   // Initialiser le compteur de visites
   localStorage.setItem('visitCount', 1);
}

// Mettre à jour le compteur de visites dans le footer
document.getElementById('visit-counter').innerText = localStorage.getItem('visitCount');
//Toggle
document.addEventListener("DOMContentLoaded", function () {
   const menuToggle = document.querySelector(".menu-toggle");
   const nav = document.querySelector("header nav");

   menuToggle.addEventListener("click", function () {
       menuToggle.classList.toggle("active");
       nav.classList.toggle("active");
   });
});