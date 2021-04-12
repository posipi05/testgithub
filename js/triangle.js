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