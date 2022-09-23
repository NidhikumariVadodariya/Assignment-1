/*
	WEB 303 Assignment 1 - jQuery
	{Nidhikumari Vadodariya - 0788964}
*/

$(document).ready(function()
{
	$("input").change(function()
	{
		let salary = $("#yearly-salary").val();
		let percent = $("#percent").val();

		let total = ((salary * percent) / 100).toFixed(1);

		$('#amount').text('$' + total);
	});
});
