$('.port').hover(function(){
	
	$(this).find('a').find("span").remove();
	$(this).find('a').append($("<span>Proximamente!</span>"));
	
}, function() {
	$(this).find('a').find("span").remove();
	$(this).find('a').append($("<span>Portfolio</span>"));
});