// the DOMContentLoad is event fires when the initial HTML document 
//has been completely loaded and parsed, without waiting for stylesheets, 
//images, and subframes to finish loading. 

//next queryselectorAll to .message a (which is the the sign in and creat account)
//and does a foreach for both elements thenaddes a event listener for click
// prevent defualt 
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