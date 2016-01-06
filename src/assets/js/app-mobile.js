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
	});

	//院校咨询&教育咨询
	$('#school-btn, #edu-btn').on('click', function(e){
		var listItems = $(this).find('.select-list');
		listItems.addClass('show');
		listItems.find('li').each(function(index){
			var con =$('#all-news-box .hide');
			$(this).on('click', function(e){
				$('.select-list').removeClass('show');
				con.removeClass('show');
				con.eq(index).addClass('show');
				e.stopPropagation();
			})
		});
		e.stopPropagation();
	});
	$('#all-news-box').on('click', 'li', function(){
		$('#all-news-box').removeClass('show');
		$('#all-news-info').addClass('show');
	})
	/*$('.select-list').on('click', 'li', function(e){
		$('.select-list').removeClass('show');
		$('#all-news-box').removeClass('show');
		$('#all-news-info').addClass('show');
		e.stopPropagation();
	});*/

	$('#close-news').on('click', function(){
		$('#all-news-info').removeClass('show');
		$('#all-news-box').addClass('show');
	});
	$('body').on('click', function(){
		$('.select-list').removeClass('show');
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