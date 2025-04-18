// Initialisation d'EmailJS
(function() {
    emailjs.init("Eyb-KMCDG6e4yz1pw"); // Remplace par ton User ID EmailJS
  })();
  
  document.getElementById('trip-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const participation = document.getElementById("present").checked ? "Oui" : "Non";
  
    // Envoyer un mail via EmailJS
    emailjs.send("service_7qgg03k", "template_bthmvtl", {
      nom,
      prenom,
      email,
      participation,
    })
    .then(function(response) {
      document.getElementById("confirmation").textContent = "Confirmation envoyée par mail ! 🎉";
    }, function(error) {
      console.log("Erreur:", error);
      document.getElementById("confirmation").textContent = "Erreur lors de l'envoi.";
    });
  });
  