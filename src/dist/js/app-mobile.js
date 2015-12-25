$(function(){
	$('#tool').on('click', function(){
		$('#main-content').addClass('open');
		$('#tool-box').addClass('vis');
		$('#mask').show().addClass('open');
	})
	$('#mask').on('click', function(){
		$('#main-content').removeClass('open');
		setTimeout(function(){
			$('#tool-box').removeClass('vis');
		},500);
		$('#mask').hide().removeClass('open');
	})
})