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

