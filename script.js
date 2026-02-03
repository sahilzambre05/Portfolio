document.addEventListener('DOMContentLoaded', function () {
  // Ensure project links open reliably in a new tab/window
  document.querySelectorAll('.project-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var href = el.getAttribute('href');
      try {
        window.open(href, '_blank', 'noopener');
      } catch (err) {
        // Fallback: navigate if window.open is blocked
        window.location.href = href;
      }
    });
  });

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
  }

  // Animate skill bars on load
  document.querySelectorAll('.skill-progress').forEach(function (bar) {
    var inline = bar.getAttribute('style') || '';
    var match = inline.match(/width:\s*([0-9.]+%)/);
    if (match) {
      var value = match[1];
      bar.style.width = '0%';
      setTimeout(function () { bar.style.width = value; }, 250);
    }
  });
});
