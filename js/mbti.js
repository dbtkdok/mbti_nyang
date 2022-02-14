$(function () {
	$(".box").click(function () {
		$(".box").removeClass('large');
		$(this).toggleClass('large');
	});
});