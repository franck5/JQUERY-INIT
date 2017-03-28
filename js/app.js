$('#removeDiv').click(function(){ 
	$('#remove').remove() })

$('#setText').keyup(function(){
	var result = $(this).val()
	$('#needText').text(result) })

	


$('#setColor').click(function(){
	$('#changeColor').css("background-color", "red")})
