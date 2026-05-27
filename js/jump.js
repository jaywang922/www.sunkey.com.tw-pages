
//回到頂部
$(function(){
    $(".gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });

});






	$(function(){
		// 幫 a.jump_NEW 加上 click 往下掉事件
		$('a.jump_01').click(function(){
			// 讓捲軸用動畫的方式移動到 #Focus_NEW 的 top 位置
			// 並加入動畫效果
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#Focus_01').offset().top
			}, 1000, 'easeOutQuad');

			return false;
		});
	});







	$(function(){
		// 幫 a.jump_Product 加上 click 往下掉事件
		$('a.jump_02').click(function(){
			// 讓捲軸用動畫的方式移動到 #Focus_Product 的 top 位置
			// 並加入動畫效果
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#Focus_02').offset().top
			}, 1000, 'easeOutQuad');

			return false;
		});
	});







	$(function(){
		// 幫 a.jump_About 加上 click 往下掉事件
		$('a.jump_03').click(function(){
			// 讓捲軸用動畫的方式移動到 #Focus_About 的 top 位置
			// 並加入動畫效果
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#Focus_03').offset().top
			}, 1000, 'easeOutQuad');

			return false;
		});
	});





	$(function(){
		// 幫 a.jump_Contact 加上 click 往下掉事件
		$('a.jump_04').click(function(){
			// 讓捲軸用動畫的方式移動到 #Focus_Contact 的 top 位置
			// 並加入動畫效果
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $('#Focus_04').offset().top
			}, 2000, 'easeOutQuint');

			return false;
		});
	});



