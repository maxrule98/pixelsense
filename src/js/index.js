let date = new Date();

document.querySelector('.date').innerHTML = date.getFullYear();

/*
var topForm = document.querySelector('.form-top');
var bottomForm = document.querySelector('.form-bottom');

// Add a listener for the "submit" event.
topForm.addEventListener('submit', function(event) {

  // Prevent the browser from submitting the form
  // and thus unloading the current page.
  event.preventDefault();

  // Send the event to Google Analytics and
  // resubmit the form once the hit is done.
  gtag('event', 'top_form_submitted', {
    'event_callback': function() {
      topForm.submit();
    }
  });
});

// Add a listener for the "submit" event.
bottomForm.addEventListener('submit', function(event) {

  // Prevent the browser from submitting the form
  // and thus unloading the current page.
  event.preventDefault();

  // Send the event to Google Analytics and
  // resubmit the form once the hit is done.
  gtag('event', 'bottom_form_submitted', {
    'event_callback': function() {
      bottomForm.submit();
    }
  });
});
*/