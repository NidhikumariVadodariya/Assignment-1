//code by nidhikumari vadodariya - 0788964

$(document).ready(function()
{

	$('.tab_container:first').show();
	$('.tab_navigation li:first').addClass('active');

	$('.tab_navigation li').click(function(event) {
		index = $(this).index();
		$('.tab_navigation li').removeClass('active');
		$(this).addClass('active');
		$('.tab_container').hide();
		$('.tab_container').eq(index).show();
	});

	$('.tab_container1:first').show();
	$('.tab_navigation1 li:first').addClass('active');

	$('.tab_navigation1 li').click(function(event) {
		index = $(this).index();
		$('.tab_navigation1 li').removeClass('active');
		$(this).addClass('active');
		$('.tab_container1').hide();
		$('.tab_container1').eq(index).show();
	});

});