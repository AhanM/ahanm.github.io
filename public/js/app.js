/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// For button scrolls
var scrollToProjects = function() {
	$('html,body').animate({
			scrollTop: $('#projects').offset().top
		}, 1000);
}

var scrollToTerminal = function() {
	$('html,body').animate({
			scrollTop: $('#terminal').offset().top
		}, 1000);
}

var scrollToContact = function() {
	$('html,body').animate({
			scrollTop: $('#contact').offset().top
		}, 1000);
}

// To Change CSS when Terminal is in focus
$('.termbody').focusin(function() {
	$(this).children('div').addClass('active');
	$('.termheader').addClass('active');
	$('.termheader').children('button').removeClass('grey');
	// $('.terminput').focus();
});

$('.termbody').focusout(function() {
	$(this).children('div').removeClass('active');
	$('.termheader').removeClass('active');
	$('.termheader').children('button').addClass('grey')
});

document.getElementById('termheader').onclick = function () {
    document.getElementById('termbody').focus();
};

// For the blinking cursor and input focus on the Terminal
$(function() {
	$('#termbody').click(function() {
		$('.terminput').focus();

		cursor = window.setInterval(function() {
			if ($('#cursor').css('visibility') === 'visible') {
				$('#cursor').css({ visibility: 'hidden' });
			} else {
				$('#cursor').css({ visibility: 'visible' });  
			}  
		},500);

	});

	$('.terminput').keyup(function() {
		console.log($(this).val());
		$('#text').text($(this).val());

	});

	$('.terminput').blur(function() {
		clearInterval(cursor);
		$('#cursor').css({ visibility: 'visible' });    
	});

});

