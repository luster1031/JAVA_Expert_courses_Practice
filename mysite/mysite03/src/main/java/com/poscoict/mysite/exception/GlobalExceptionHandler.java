
package com.poscoict.mysite.exception;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.poscoict.mysite.dto.JsonResult;


/*
 * 모든 에러가 여기로 AOP기술
 * 
 * */
@ControllerAdvice
public class GlobalExceptionHandler {
	private static final Log LOGGER = LogFactory.getLog(GlobalExceptionHandler.class);
	
	@ExceptionHandler(Exception.class)
	public void ExceptionHandler(
			HttpServletRequest request
			, HttpServletResponse response
			/*Model model,*/ 
			, Exception e) throws Exception{
		
		
		
		//	1. 로깅
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors)); 
		LOGGER.error(errors.toString());
		
		//	2. 요청 구분
		//	요청 구분하지 않으면 Unexpected token < in JSON : jsp로 보내서 파싱 에러남
		//	JSON 요청인 경우 : request header의 accept에 application/json
		//	HTML 요청인 경우 : request header의 accept에 text/html
		
		
		String accept = request.getHeader("accept");
		
		if(accept.matches(".*application/json.*")){
			//	3. JSON 요청 (ajax는 json으로 에러내야함) 
			//	message converter를 못 함
			//	직접 응답하기 때문에, 에러페이즈를 다 	"\messgae\": 	막 이렇게 못 함
			
			JsonResult result = JsonResult.fail(errors.toString());	//	에러내용을 메세지에, 통신으로
			String jsonString = new ObjectMapper().writeValueAsString(result);
			
			response.setContentType("application/json; charset=UTF-8");
			OutputStream os = response.getOutputStream();	//	byte단위로 쓰는 것
															//	string : ch가 모여있는거 (배열) -> 하나 당 3byte로 바꾸는 거
			// encoding해야함 (charter를 byte로)
			os.write(jsonString.getBytes("utf-8"));	// utf-8로 encoding 해라
			os.close();
			
		}else {
			//	4. 사과 페이지 (HTML 응답, 정상 종료)
			//  errors가 가지고 있는 버퍼 안에 에러 내용 적혀 있음
			System.out.println(errors.toString());
			
			request.setAttribute("exception", errors.toString());	//	화면에 뿌리기
			request
				.getRequestDispatcher("/WEB-INF/views/error/exception.jsp")
				.forward(request, response);
			
		}		
	}
}
