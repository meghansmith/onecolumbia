$(document).ready(function(){
	
	$(".menuHide").addClass('hide');
	$('#menuButton').click(function(){
		$(".menuHide").slideToggle('fast');
	})
});