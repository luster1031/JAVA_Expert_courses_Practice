package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dao.JsonResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text data";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습<h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping(value="/json",method=RequestMethod.GET)
	public Object json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		//	이렇게 보내면 api 응답이 통일 되어있지 않는다. 
		//JsonResult jsonResult = new JsonResult();
		//jsonResult.setResult("ok");
		
		//	api 응답 통일
		return JsonResult.success(vo);
		//return JsonResult.fail("Exception....");
	}
}
