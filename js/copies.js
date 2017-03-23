$(document).ready(function(){

    $(".ctc-category").mouseenter(function(){
		$(this).removeClass("card-outline-primary");
		$(this).addClass("card-inverse card-primary");
    });
	
	$(".ctc-category").mouseleave(function(){
		$(this).removeClass("card-inverse card-primary");
		$(this).addClass("card-outline-primary");
    });
	
	var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        console.log(e);});
    clipboard.on('error', function(e) {
        console.log(e);});
});