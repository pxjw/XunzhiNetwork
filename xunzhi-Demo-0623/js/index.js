/**
 * Created by lenovo on 2015/6/7.
 */
/*����ƶ���ͷ��Ч��*/
$(function(){
	$(".img_go").mouseenter(function(){
		 var i = $(this).attr("rel");
		 var ps = $("#img"+i).position();
		 $("#display"+i).css("position", "absolute");
		 $("#display"+i).css("left", ps.left - 20); //������߾�
		 $("#display"+i).css("top", ps.top - 120); //�����ϱ߾�
		 $("#img"+i).mouseenter(function () {
			 $("#display"+i).show();
		 });

		 $("#display"+i).mouseenter(function () {
			$("#display"+i).show();
		 });

		 $("#display"+i).mouseleave(function () {
			$("#display"+i).hide();
		 });

		 $("#img"+i).mouseleave(function () {
			 $("#display"+i).hide();
		 });
	});
});


/*���𣬲鿴js*/
$(function() {
	$(".all_info_click").click(function () {
		var i = $(this).attr("rel");
		$(this).text($("#all_info"+i).is(":hidden") ? "����" : "�鿴ȫ��");
		if ($(this).text == "�鿴ȫ��") {
			$("#part_info"+i).hidden;
		}
		$("#all_info"+i).slideToggle();
		$("#part_info"+i).slideToggle();
	});
});

/*����˳�ʱ����*/
function exit(){
	document.getElementById("user1").style.display="inline-block";
	document.getElementById("user2_1").style.display="none";
}
/*���ı��༭��*/
$(function(){
	$('#textarea1').wangEditor();
});
/*���Կ��*/
function width(){
	var width = document.documentElement.clientWidth;
	var height = document.getElementById("changeheight");
	if(width<848&&width>750){
		height.style.marginTop = 110 +'px';
	}else if(width>848&&width<1011){
		height.style.marginTop = 110 +'px';
	}else{
		height.style.marginTop = 55 +'px';
	}
}

