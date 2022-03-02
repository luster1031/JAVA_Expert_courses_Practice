<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<title>mysite</title>

<link rel="stylesheet" href="${pageContext.request.contextPath }/assets/css/guestbook-spa.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/assets/js/jquery/jquery-1.9.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script>
var render = function(vo){
	startNo=vo.no;
	var html = 
		"<li data-no='" + vo.no + "'>" +
			"<strong>"+vo.name+"</strong>" + 
			"<p>"+ vo.message + "</p>" + 
			"<strong></strong>"+
			"<a href='' data-no='" + vo.no + "'>삭제</a></li>";
	return html;
}
var startNo=-1;
var fetch = function(){
	
	$.ajax({
		url:"${pageContext.request.contextPath }/api/guestbook/list?startno="+startNo
		,type:'get'
		,dataType:"json"
		,success:function(response){
			console.log(response);
			if(response.result!= "success"){
				console.error(response.message);
				return;
			}
			
			console.log(startNo);
			for(var i = 0; i<response.data.length && i<3; i++){
				var vo = response.data[i];
				var html = render(vo);
				$("#list-guestbook").append(html);
				startNo = response.data[i].no;
			}
			
		}
	});
}
$(window).scroll(function(){
	var $window = $(this);
	var $document = $(document);
	
	var windowHeight = $window.height();
	var documentHeight = $document.height();
	var scrollTop = $window.scrollTop();
	
	if(scrollTop + windowHeight +1 > documentHeight){
		console.log("fetch() call");	//	스크롤 맨 밑에까지
		console.log(startNo);
		//startNo-=3;
		fetch();
	}
	
});
$(function(){
//	삭제 다이알로그 객체 만들기 
	$("#add-form").submit(function(event){
		//	ajax로 포스팅
		//	join과 다른 차이점
		event.preventDefault();
		//	vo={} 만들어주는 얘가 있다. 시리얼라이즈? serialize()
		
		$.ajax({
			url:"${pageContext.request.contextPath }/api/guestbook/add"
			,type:'post'
			,dataType:"json"	
			,contextType:"application/x-www-form-urlencoded"
			,data:$("#add-form").serialize()
			,success:function(response){
				
				console.log(response);
				console.log($("#add-form"));
				console.log($("#add-form").serialize());
				if(response.result !== 'success'){
					console.error(response.message);
					return;
				}
				var html = render(response.data);
				$("#list-guestbook").prepend(html);
				$("#input-name").val("");
				$("#input-password").val("");
				$("#tx-content").val("");
				
			}
		});
	});
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
					,type:'delete' // delete로 해야함
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
	// 도큐먼트 고르기
	$(document).on("click","#list-guestbook li a", function(event){	//	click 이벤트가 생기면 function 실행
		event.preventDefault();
		var no = $(this).data("no");
		$("#hidden-no").val(no);
		dialogDelete.dialog("open");
	});
	fetch();
});
</script>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="${pageContext.request.contextPath }/assets/css/guestbook-spa.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/assets/js/jquery/jquery-1.9.0.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</head>
<body>
	<div id="container">
		<c:import url="/WEB-INF/views/includes/header.jsp" />
		<div id="content">
			<div id="guestbook">
				<h1>방명록</h1>
				<form id="add-form" action="" method="post">
					<input type="text" name="name" id="input-name" placeholder="이름">
					<input type="password" name="password" id="input-password" placeholder="비밀번호">
					<textarea id="tx-content" name="message" placeholder="내용을 입력해 주세요."></textarea>
					<input type="submit" value="보내기" />
				</form>
				<ul id="list-guestbook"></ul>
			</div>
			<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  				<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
  				<p class="validateTips error" style="display:none">비밀번호가 틀립니다.</p>
  				<form>
 					<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
					<input type="hidden" id="hidden-no" value="">
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  				</form>
			</div>
			<div id="dialog-message" title="" style="display:none">
  				<p></p>
			</div>						
		</div>
		<c:import url="/WEB-INF/views/includes/navigation.jsp">
			<c:param name="menu" value="guestbook-spa"/>
		</c:import>
		<c:import url="/WEB-INF/views/includes/footer.jsp" />
	</div>
</body>
</html>