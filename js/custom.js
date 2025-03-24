(function ($) {

  "use strict";

  // PRE LOADER
  $(window).on('load', function () { // Use .on('load', ...) instead of .load()
      $('.preloader').fadeOut(1000); // set duration in brackets
  });

  // CUSTOM LINK (Smooth Scrolling)
  $('.custom-link').click(function () {
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 10;

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight) {
          var offset = element.offset();
          var offsetTop = offset.top;
          var totalScroll = offsetTop - navheight;

          $('body, html').animate({
              scrollTop: totalScroll
          }, 300);
      }
  });

  // MODAL FUNCTIONALITY
  $(document).ready(function() { // Use $(document).ready() for DOM manipulation
      const modalTriggers = $('.modal-trigger');
      const modals = $('.modal');
      const modalCloses = $('.modal-close');

      modalTriggers.on('click', function() { // Use .on() instead of .click()
          const modalId = $(this).data('modal-id');
          const modal = $('#' + modalId);
          modal.css('display', 'block'); // Use .css() instead of .style.display
      });

      modalCloses.on('click', function() { // Use .on() instead of .click()
          $(this).closest('.modal').css('display', 'none'); // Use .css()
      });

      $(window).on('click', function(event) { // Use .on()
          modals.each(function() {
              if (event.target === this) {
                  $(this).css('display', 'none'); // Use .css()
              }
          });
      });
  });

  // FORM SUBMISSION HANDLING
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
          alert(`Thank you, ${name}! Your message has been sent.`);
          // Here you would typically send the form data to your server using fetch or XMLHttpRequest
      } else {
          alert('Please fill out all required fields.');
      }
  });

})(window.jQuery);
