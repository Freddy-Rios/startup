document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.message a').forEach(function(element) {
      element.addEventListener('click', function(event) {
        event.preventDefault();
        var forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
          form.classList.toggle('active');
        });
      });
    });
  });