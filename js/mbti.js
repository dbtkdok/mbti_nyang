$(function () {
	$(".box").click(function () {
		$(".box").removeClass('large');
		$(this).toggleClass('large');

		var id = $(this).attr('id');
		$('.modal-body *').remove();
		var cls = '';
		var html = '';
		html += '<div class="col-sm-12 col-12">';
		for(var ii = 1; ii<26; ii++) {
			var ids = id + '_' + ii;
			if(ii == 13) {
				cls = '';
			} else {
				cls = 'bingos'
			}


			if(ii == 6) {
				html += '</div>';
				html += '<div class="col-sm-12 col-12">';
			} else if(ii == 11) {
				html += '</div>';
				html += '<div class="col-sm-12 col-12">';
			} else if(ii == 16) {
				html += '</div>';
				html += '<div class="col-sm-12 col-12">';
			} else if(ii == 21) {
				html += '</div>';
				html += '<div class="col-sm-12 col-12">';
			}

			html += '<div onclick="fnbingosClk(' + ids +')" id="' + ids +'" class="col-sm-2 ' + cls +'"">';

			

			if(ii < 10) {
				html += '<img src="./bingos/' + id + '_bingo_00' + ii +'.jpg" width="100%">';
			} else {
				html += '<img src="./bingos/' + id + '_bingo_0' + ii +'.jpg" class="' + cls +'" width="100%">';
			}
			
			html += '</div>';
		}


		html += '</div>';
		$('.modal-body').append(html);
		
		//$('.modal-body').append('<img src="./bingo/' + id + '_bingo.jpg" width="100%">');
		$('#myModal').modal('toggle');
	});
	

	$('.reloads').click(function() {
		$(".box").removeClass('large');
	})
	
});

function fnbingosClk(id) {
	var clss = $(id).attr('class');
	
	if($(id).hasClass('bingos_cls') == true ) {
		$(id).removeClass('bingos_cls');
	} else {
		$(id).addClass('bingos_cls');
	}
}