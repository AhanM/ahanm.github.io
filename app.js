/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

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