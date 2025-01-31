document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
      fetch(file)
        .then(response => response.text())
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(error => console.error(`Error loading ${file}:`, error));
    }
  
    loadComponent("navbar-container", "navbarComponent.html");
    loadComponent("footer-container", "footerComponent.html");
  });