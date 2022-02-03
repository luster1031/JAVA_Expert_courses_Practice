<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@page import="com.poscoict.mysite.vo.UserVo"%>
<%@page import="java.util.List"%>
<%@page import="com.poscoict.mysite.dao.GuestbookDao"%>
<%@page import="com.poscoict.mysite.vo.GuestbookVo"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%pageContext.setAttribute("newline", "\n");%>
<!DOCTYPE html>
<html>
<head>
<title>mysite</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<link href="${pageContext.request.contextPath }/assets/css/guestbook.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div id="container">
		<jsp:include page="/WEB-INF/views/includes/header.jsp" />
		<div id="content">
			<div id="guestbook">
				<form action="${pageContext.request.contextPath }/guestbook" method="post">
					<input type="hidden" name="a" value="add">
					<table>
						<tr>
							<td>이름</td><td><input type="text" name="name"></td>
							<td>비밀번호</td><td><input type="password" name="password"></td>
						</tr>
						<tr>
							<td colspan=4><textarea name="message" id="content"></textarea></td>
						</tr>
						<tr>
							<td colspan=4 align=right><input type="submit" VALUE=" 확인 "></td>
						</tr>
					</table>
				</form>
				<ul>
					
					<c:set var  = "count" value = "${fn:length(list)}"></c:set>
					<c:set var  = "index" value = "0"></c:set>
					<c:forEach items="${list }" var = "vo">
						<li>
							<table>
								<tr>
								<td>${count - index }</td>
								   	<c:set var="index" value="${index + 1}"/>
									<td><c:out value="${vo.name}" /></td>
									<td><c:out value="${vo.regDate}" /></td>
									<td><a href="${pageContext.request.contextPath }/guestbook?a=deleteform&no=${vo.no }">삭제</a></td>
								
								</tr>
								<tr>
									<td colspan=4>${fn:replace(vo.message ,newline ,"<br/>")}</td>
								</tr>
							</table>
							</li>
					</c:forEach>
				</ul>
			</div>
		</div>
		<jsp:include page="/WEB-INF/views/includes/navigation.jsp" />
		<jsp:include page="/WEB-INF/views/includes/footer.jsp" />
	</div>
</body>
</html>
