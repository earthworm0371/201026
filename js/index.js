$(document).ready(function(){
	$(".point").on("click",function(){
		$(".box5").addClass("active")

	})
	$(".point").on("dblclick",function(){
		$(".box5.active").removeClass("active")
	})
	

})