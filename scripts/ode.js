$(document).ready(function(){
	var cityButton = $('#citybutton');
	var foodButton = $('#foodbutton');
	
	//$("body").backstretch("images/odebourbon.jpg");
	$("#thenmore").backstretch("images/odebourbon2.jpg");
	//$("#bourbonglass").backstretch("images/odebourbon.jpg");
	$("#history").backstretch("images/odesportsmanhill.jpg");
	$("#hospitality").backstretch("images/odefourth.jpg");
	$("#somuchmore").backstretch("images/odeali.jpg");
	$("#bball").backstretch("images/odeuofl.jpg");
	$("#derby").backstretch("images/odederby.jpg");
	$("#final").backstretch("images/guidebkg.jpg");
	$('#title').fadeIn('slow');
	$('#thetext').fadeIn('slow').slideDown('slow');
	$('#thecitytext').fadeIn('slow').slideDown('slow');
	$('#guidenav').fadeIn('slow');
	
	$('#tnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#bourbonglass'), 'slow')
		});
		
	$('#bnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#thenmore'), 'slow')
		});
		
	$('#mnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#history'), 'slow')
		});
	
	$('#thnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#derby'), 'slow')
		});
		
	$('#dnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#bball'), 'slow')
		});
		
	$('#bballnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#hospitality'), 'slow')
		});
		
	$('#hnext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#somuchmore'), 'slow')
		});
		
	$('#snext').click(function(e){
		e.preventDefault();
		$('html, body').scrollTo($('#final'), 'slow')
		});
		
	});