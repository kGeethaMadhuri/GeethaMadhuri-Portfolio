 function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('show');
    }

    function submitForm(e) {
      e.preventDefault();
      alert("Thanks! I'll get back to you shortly.");
    }