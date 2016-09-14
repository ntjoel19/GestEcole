$(document).ready(function(){
	/*
	* Utilisons $.ajax pour creer une instance de XmlHttpRequest
	*/
	function infoContext(btnSurvole,msgContextuel){
		$(btnSurvole).mouseenter(function(){
			$('#c1').hide();
			$(msgContextuel).show();
		});
		$(btnSurvole).mouseleave(function(){
			$('#c1').show();
			$(msgContextuel).hide();
		});
		$(btnSurvole).mousedown(function(){
			$('#c1').hide();
			
		});
	}
	infoContext('#lecon1','"option_lecon');
	infoContext('#lecon2','#option_lecon');
	infoContext('#lecon3','#option_lecon');
	infoContext('#lecon4','#option_lecon');
});