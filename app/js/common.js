$(function() {

	$('.more_contacts img').on('click' , function () {
		$(this).toggleClass('activeArrow');
		$('.more_contacts-inner').toggleClass('activeInfo');
	})
	$('.close').on('click', function () {
		$('.more_contacts img').toggleClass('activeArrow');
		$('.more_contacts-inner').removeClass('activeInfo');
	} )
});
