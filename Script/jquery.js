$(document).ready(function(){
	$('#thumbs').niceScroll();
	var image_address,list;
	var name="1 (1).jpg";
	var img_index= 0;
	$('.thumbs_style img').first().css('border','3px solid #fff');
	$('.thumbs_style').first().css('marginLeft','3px');
	$('#image').html("<img class='gallery_img_style' src='Images/" +name+"' > ");


	$('.thumbs_style img').on("click", function(){

		img_index = $(this).parent().index();
		$('.thumbs_style img').css('border','3px solid #333');
		$(this).css('border','3px solid #fff');

		$('.thumbs_style').css('marginLeft', '0');
		$(this).parent().css('marginLeft','3px');

		image_address= $(this).attr('src');
		list=image_address.split('/',3);
		name=list[2];

		$('#image img').fadeOut(150,function(){
			$('#image').html(" <img class='gallery_img_style' src='Images/"+name+"' > ");
			$('#image img').fadeOut(0);
			$('#image img').fadeIn(150);
		});

	});
	$('body').on('click','lefty')

});