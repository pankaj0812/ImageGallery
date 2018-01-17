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



	$('body').on('click','#lefty,#left',function(){
		if (img_index == 0)
		{
			img_index= $('.thumbs_style').last().index();
		}
		else
		{
			img_index=img_index-1;
		}

		

		image_address=$('.thumbs_style').eq(img_index).find('img').attr('src');
		list=image_address.split('/',3);
		name=list[2];
		$('#image img').fadeOut(150,function(){
			$('#image').html(" <img class='gallery_img_style' src='Images/"+name+"' > ");
			$('#image img').fadeOut(0);
			$('#image img').fadeIn(150);
		});

		$('body').find('#large_img').fadeOut(150,function(){

			$(this).attr('src','Images/'+name);
			$(this).fadeIn(150);
		});
		
		$('.thumbs_style img').css('border','3px solid #333');
		$('.thumbs_style').eq(img_index).find('img').css('border','3px solid #fff');

		$('.thumbs_style').css('marginLeft', '0');
		$('.thumbs_style').eq(img_index).css('marginLeft','3px');

	});




	$('body').on('click','#righty,#right',function(){
		var last_index= $('.thumbs_style').last().index();

		if (img_index == last_index)
		{
			img_index=$('.thumbs_style').first().index();;
		}
		else
		{
			img_index=img_index+1;
		}

		

		image_address=$('.thumbs_style').eq(img_index).find('img').attr('src');
		list=image_address.split('/',3);
		name=list[2];
		$('#image img').fadeOut(150,function(){
			$('#image').html(" <img class='gallery_img_style' src='Images/"+name+"' > ");
			$('#image img').fadeOut(0);
			$('#image img').fadeIn(150);
		});

		$('body').find('#large_img').fadeOut(150,function(){

			$(this).attr('src','Images/'+name);
			$(this).fadeIn(150);
		});

		$('.thumbs_style img').css('border','3px solid #333');
		$('.thumbs_style').eq(img_index).find('img').css('border','3px solid #fff');

		$('.thumbs_style').css('marginLeft', '0');
		$('.thumbs_style').eq(img_index).css('marginLeft','3px');

	});

	$('#large_icons').click(function(){
		name = $('.gallery_img_style').attr('src');
		$('body').append("<div id='enlarge'><div><img id='large_img' src='"+name+ "'><img class='larged_icons' id='close' src='Images/close.png'><img class='larged_icons' id='left' src='Images/left.png'><img class='larged_icons' id='right' src='Images/right.png'></div></div>");

		$('#enlarge').fadeOut(0,function(){

			$(this).fadeIn(250);

		});

		$('#enlarge').css({
			'background':'rgba(0,0,0,0.9)',
			'width':'100%',
			'height':'100%',
			'position':'fixed',
			'top':'0',
			'left':'0'
		});

		$('#enlarge div').css({
			'width':'1000px',
			'height':'700px',
			'margin': '0px auto',
			'marginTop':'35px',
			'position': 'relative'
		});

		$('#large_img').css({
			'width':'1000px',
			'height':'700px'
		});

		$('#close').css({
			'width':'13px',
			'height':'13px',
			'position':'absolute',
			'top':'8px',
			'right':'8px'
		});

		$('#left').css({
			'width':'32px',
			'height':'32px',
			'position':'absolute',
			'top':'314px',
			'left':'10px'
		});

		$('#right').css({
			'width':'32px',
			'height':'32px',
			'position':'absolute',
			'top':'314px',
			'right':'10px'
		});

		$('.larged_icons').css('opacity','0.6');

		$('.larged_icons').hover(function(){
			
			$(this).css('opacity','1.0');
			
			},function(){
			
			$(this).css('opacity','0.6');

		});
	});

	$('body').on('click','#close',function(){

		$('#enlarge').fadeOut(250,function(){
			$(this).remove();	
		});
		
	});

});