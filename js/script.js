$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

// alert("@#%^&@%$&Injecting Virus#&%@^#%");

// $('email-area').on('submit', 'form', function(){
// 	event.preventDefault();
// 	const $emailInput=$('your-email')}
//  

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});