function phpfaitMoiUntriangle()
{
	$.ajax({
		url : "phpRequete/triangle.php",
		type : 'GET',
		success : function(code_html, statut){
			$('#triangle').html(code_html);
		},
		dataType : 'html',
		error: function () {

		}
	});
}

function changeCouleurTriangle(couleur)
{
	$('#triangle').css('color',couleur.value);
}

$(document).ready(function(){
		$('input').change(function(){
		changeCouleurTriangle(this);
	});
});
