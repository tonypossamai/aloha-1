$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$('.email-container').on('submit', 'form', function() {
  event.preventDefault();
  const $emailInput= $('.email-input');
  console.log($emailInput.val());
    console.log($emailInput.val().length);

  if ($emailInput.val().length !== 0) {
    alert('Thanks for subscribing!');
  } else {
    alert('Please enter a valid email');
  }
});