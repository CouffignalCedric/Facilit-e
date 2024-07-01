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