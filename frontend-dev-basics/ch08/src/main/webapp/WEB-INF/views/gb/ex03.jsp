<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ex03</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script>
var render = function(vo){
	var html = 
	"<li data-no='"+ vo.no + "'>"+
		"<strong>" + vo.name + "</strong>"+
	"<p>"+ vo.message + "</p>"+
	"<strong></strong> "+
	"<a href='' data-no='"+vo.no+"'>삭제</a></li>"
	
	return html;

}
//var startNo = -1;
var fetch = function(){
	$.ajax({
		url:"${pageContext.request.contextPath }/api/guestbook/list" /*?startno=" + startNo*/
		,type:'post'
		,dataType:"json"	
		,success:function(response){
			console.log(response);
			if(response.result !== 'success'){
				console.error(response.message);
				return;
			}
			
			for(var i = 0; i<response.data.length; i++){
				var vo = response.data[i];
				console.log(i, vo);
				var html = render(vo);
				$("#list-guestbook").append(html);
			
				//startNo = response.data[i].no;
				
				
			}
		}
	});
}
$(function(){
	//	...
	//	...
	//	...
	//	삭제 다이알로그 객체 만들기 
	var dialogDelete = $("#dialog-delete-form").dialog({
		autoOpen:false
		,modal : true
		,buttons:{
			"삭제":function(){
				//	눌렀을 때의 번호 - html 에 해놓는게 좋다. hidden
				var no = $("#hidden-no").val();
				var password = $("#password-delete").val();
				var url = "${pageContext.request.contextPath }/api/guestbook/delete/"+no;
				
				
				$.ajax({
					url:url
					,type:'post' // delete로 해야함
					,dataType:'json'
					,data:"password="+password
					,success:function(response){
						if(response.result !=='success'){
							console.error(response.message);
							return;
						}
						
						if(response.data == -1){
							$('.validateTips.error').show();
							$("#password-delete").val("").focus();
							return;
						}
						console.log(password);
						//	삭제가 된 경우
						$("#list-guestbook li[data-no='"+response.data+"']").remove();
						dialogDelete.dialog('close');
					}
				});
			},
			"취소":function(){
				$(this).dialog('close');
			}
		},
		close:function(){
			$('.validateTips.error').hide();
			$("#password-delete").val("");
			$("#hidden-no").val("");
		}
	});
	

	
	//	글 삭제 시 클릭 이벤트 처리
	//	document한테 위임해줘야함 (Live Event)
		//	이런게 생길건데,, 뭐 해라,, 
		//	event handler함수를 주고,
	
	//	버튼 누르면
	//	dialogDelete.dialog("open");
	
	// 도큐먼트 고르기
	$(document).on("click","#list-guestbook li a", function(event){	//	click 이벤트가 생기면 function 실행
		event.preventDefault();
		//	번호 저장
		//	data-no인데 data빼고 해줘도 됨
		var no = $(this).data("no");
		$("#hidden-no").val(no);
		//	부모를 데리고 와야함
		//	this가 a라서 -> 근데 data-no에 저장되어 있어서 괜ㅊ낳다.
		
		
		dialogDelete.dialog("open");
	});
	
	
	//	최초 리스트 가져오기
	fetch();
});
</script>
</head>
<body>
	<div id="guestbook">
		<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름"> <input
				type="password" id="input-password" placeholder="비밀번호">
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook"></ul>
		<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  				<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
  				<p class="validateTips error" style="display:none">비밀번호가 틀립니다.</p>
  				<form>
 					<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
					<input type="hidden" id="hidden-no" value="">
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  				</form>
			</div>
	</div>
</body>
</html>