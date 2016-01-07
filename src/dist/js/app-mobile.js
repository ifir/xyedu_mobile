$(function(){
	//课程年份显示

	var data= [
		['2016.01', '名校MBA校友分享学习经验,向优秀的人学习'],
		['2016.02', '独门秘笈轻松闯过单词关,英语考试so easy'],
		['2016.03', '西游带你做公益,大爱无疆,从心出发'],
		['2016.04', '组建班委会,凝心聚力,携手前进,目标必达'],
		['2016.05', '艺术品鉴赏,丰富生活体验,提升个人修养'],
		['2016.06', '西游带你做公益续,一份关爱,一份收获'],
		['2016.07', '社交技巧指导,一点风度＋一份得体'],
		['2016.08', '红酒品鉴课堂,高端体验精品生活'],
		['2016.09', '面试技巧,模拟实战全过程'],
		['2016.10', '学习分享会,交流学习体会,吸取经验'],
		['2016.11', '心理专家辅导,积极调整心态,轻松过考试'],
		['2016.12', '考前激励,梦想成真']
	];
	var timer1=null,
		yearIndex = 0,
		leftYear = $('.left-center label'),
		rightYear = $('.right-center label'),
		centerYear = $('.center .center-label'),
		hisInfo = $('#his-info');
		leftYear.text(data[11][0]);
		centerYear.text(data[0][0]);
		rightYear.text(data[1][0]);
		hisInfo.text(data[0][1]);
	timer = setInterval(function(){
		yearIndex ++ ;
		if(yearIndex<12){
			var ly = yearIndex - 1 < 0 ? 11 : yearIndex - 1;
			var ry = yearIndex + 1 > 11 ? 1 : yearIndex + 1;
			leftYear.text(data[ly][0]);
			centerYear.text(data[yearIndex][0]);
			rightYear.text(data[ry][0]);
			hisInfo.text(data[yearIndex][1]);
		}else{
			yearIndex = 0;
			leftYear.text(data[11][0]);
			centerYear.text(data[0][0]);
			rightYear.text(data[1][0]);
			hisInfo.text(data[0][1]);
		}

	},3000);

	//侧边栏事件
	var silderEles = $('#main-content,#nav-header,#nav-consult');
	$('#tool').on('click', function(){
		silderEles.addClass('open');
		$('#tool-box').addClass('vis');
		$('#mask').show().addClass('open');
	});
	$('#mask').on('click', function(){
		silderEles.removeClass('open');
		setTimeout(function(){
			$('#tool-box').removeClass('vis');
		},500);
		$('#mask').hide().removeClass('open');
	});

	//职位招聘
	var jobList = new List({
		ele: $('#job-box-ul .job-box-li'),
		con: $('#job-box-ul .job-explain'),
		cur: 'list-active',
		showed: 'openheight'
	});

	/*弹出框关闭*/

	$('.apply').on('click', function (){
		var popup = $('.popup, .mask-popup');
		if($('.popup').css('display') == 'block'){
			popup.hide();
		}else{
			popup.show();
		}
	});

	$('.mask-popup, .close-btn').on('click', function (){
		var popup = $('.popup, .mask-popup');
		popup.hide();
	});

	//院校咨询&教育咨询
	$('#school-btn, #edu-btn').on('click', function(e){
		var listItems = $(this).find('.select-list');
		$('.select-list').removeClass('show');
		listItems.addClass('show');
		var dir=$(this).attr('id');
		if(dir === 'school-btn'){
			dir = 'school';
		}else{
			dir = 'edu';
		}
		listItems.find('li').each(function(index){
			var con =$('#all-news-box-'+dir+' .hide');
			$(this).on('click', function(e){
				$('.section-new-box').removeClass('show');
				$('.select-list').removeClass('show');
				$('#all-news-box-'+dir).addClass('show');
				con.removeClass('show');
				con.eq(index).addClass('show');
				e.stopPropagation();
			})
		});
		e.stopPropagation();
	});
	$('#all-news-box').on('click', 'li', function(){
		$('#all-news-box').removeClass('show');
	});

	$('#close-news').on('click', function(){
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