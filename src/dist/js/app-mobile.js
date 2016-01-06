$(function(){
	//侧边栏事件
	var silderEles = $('#main-content,#nav-header,#nav-consult');
	$('#tool').on('click', function(){
		silderEles.addClass('open');
		$('#tool-box').addClass('vis');
		$('#mask').show().addClass('open');
	})
	$('#mask').on('click', function(){
		silderEles.removeClass('open');
		setTimeout(function(){
			$('#tool-box').removeClass('vis');
		},500);
		$('#mask').hide().removeClass('open');
	})

	//职位招聘
	var jobList = new List({
		ele: $('#job-box-ul .job-box-li'),
		con: $('#job-box-ul .job-explain'),
		cur: 'list-active',
		showed: 'openheight'
	})

	/*弹出框关闭*/

	$('.apply').on('click', function (){
		var popup = $('.popup, .mask-popup');
		if($('.popup').css('display') == 'block'){
			popup.hide();
		}else{
			popup.show();
		}
	})

	$('.mask-popup, .close-btn').on('click', function (){
		var popup = $('.popup, .mask-popup');
		popup.hide();
	})
	//轮播图
	$('#swiper-container,#swiper-container img').css('height','200px')
	var swiper = new Swiper('.swiper-container', {
	 pagination: '.swiper-pagination',
	 nextButton: '.swiper-button-next',
	 prevButton: '.swiper-button-prev',
	 paginationClickable: true,
	 centeredSlides: true,
	 autoplay: 5000,
	 loop: true,
	 autoplayDisableOnInteraction: false
	});

})




function List(opt){
	this.ele = opt.ele;
	this.con = opt.con;
	this.cur = opt.cur;
	this.showed = opt.showed;
	this.eachList();

}
List.prototype.eachList = function (){
	var _this = this;
	_this.ele.each(function (index){
		$(this).on('click',function(){
			var con = _this.con;
			var self = $(this);
			if(self.hasClass(_this.cur)){
				setTimeout(function(){
					self.removeClass(_this.cur);
				},1100);
				con.eq(index).removeClass(_this.showed);
			}else{
				self.addClass(_this.cur);
				con.eq(index).addClass(_this.showed);
			}
		});
	});
}