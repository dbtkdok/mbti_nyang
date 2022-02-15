$(function () {
	$(".box").click(function () {
		$(".box").removeClass('large');
		$(this).toggleClass('large');

		var id = $(this).attr('id');
		$('.modal-body *').remove();
		$('.modal-body').append('<img src="./bingo/' + id + '_bingo.jpg" width="100%">');
		$('#myModal').modal('toggle');
	});
});
