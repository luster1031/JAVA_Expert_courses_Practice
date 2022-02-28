<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>json01</title>
<script>
//	DOM Load Event
//	1. load : 모두 다(DOM, CSSOM, Image)로딩
//	2. DOMContentLoaded : DOM 만 로딩(CSSOM 아니고, Image도 아니)
//	
window.addEventListener("DOMContentLoaded",function(){
	
	//$('button').click(function(){
	document
		.getElementsByTagName("button")[0]
		.addEventListener("click", function(){
			var xhr = null;
			
			// XmlHttpRequest 생성
			if(window.ActiveXObject){	//	<= IE9
				xhr = new ActiveXObject("Microsft.XMLHTTP");
			}else if(window.XMLHttpRequest){
			 	xhr = new XMLHttpRequest();	//	Standard Browser
			 	console.log("XMLHttpRequest");
			}else{
				console.log("Ajax 기능을 사용할 수 없습니다.");
				return;
			}
			
			
			//	통신하기 전에 이벤트 
			//	이벤트에 대한 핸들러 다루기
			xhr.addEventListener('readystatechange', function(){
				if(this.readyState == XMLHttpRequest.UNSENT){	//	readyState : 0
					//	request가 초기화 되기 전
					console.log("state : UNSENT");
				}else if(this.readyState == XMLHttpRequest.OPENED){	//	readyState : 1
					//	server와 연결이 성공
					console.log("state : OPENED");
				}else if(this.readyState == XMLHttpRequest.HEADERS_RECEIVED){	//	요청보냈을 때 //	readyState : 2
					//	server가 request를 받음
					console.log("state : HEADERS_RECEIVED");
				}else if(this.readyState == XMLHttpRequest.LOADING){	//	readyState : 3
					//	response를 처리 중 (response body 파싱 중)
					//	Json의 스트링을 객체로 바꿈
					//	JSON 파싱 중
					console.log("state : LOADING");

				}else if(this.readyState == XMLHttpRequest.DONE){	//	readyState : 4
					//	Json 파싱 끝남	
					//	JSON (response body)파싱 완료
					//	,success:function(response/*응답된 객체*/) 와 같음
					console.log("state : DONE");
					if(this.status != 200){
						console.error("error", this.status);	
						return;
					}
					console.log(this.responseText,typeof(this.responseText));
					
					var response = JSON.parse(this.responseText);	//	파싱
					console.log(response,typeof(response));
					
					
					if(response.result !== "success"){
						console.error(response.message);
						return;
					}
					
					//	랜더링
					var html="";
					html += ("<h1>"+ response.data.no +"</h1>");
					html += ("<h2>"+ response.data.name +"</h2>");
					html += ("<h3>"+ response.data.message +"</h3>");
					
					
					document
						.getElementById("data")
						.innerHTML += html;
				}
				
				
			});
			
			
			
			// 통신
			xhr.open("get","${pageContext.request.contextPath }/api/json",true/*비동기로*/);
			xhr.send();	//	AJAX로 통신 됨
			
			//$.ajax({
				//url:"${pageContext.request.contextPath }/api/json"
				//,async:true
				//,type:'get'
				//,dataType:"json"	//	내가 데이터 받는 포맷
				
				
				/*
				,success:function(response){
					if(response.result !== "success"){
						console.error(response.message);
						return;
					}
					
					//	랜더링
					var html="";
					html += ("<h1>"+ response.data.no +"</h1>");
					html += ("<h2>"+ response.data.name +"</h2>");
					html += ("<h3>"+ response.data.message +"</h3>");
					
					
					$("#data").append(html);
				}
				
			});
			*/
	});
});
</script>
</head>
<body>
	<h1>AJAX Test : JSON Format Data : XmlHttpRequest를 직접 사용하기</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
	
</body>
</html>