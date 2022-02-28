package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.dto.XmlResult;
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
	@RequestMapping("/xml")
	public Object xml() {	//	xml객체를 리턴
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");

		//messgaeconverter 입장에서는 다 객체
		//두 개를 구분할 줄 알아야한다.
		
		return XmlResult.success(vo);
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
	
	@ResponseBody
	@RequestMapping(value="/post01",method=RequestMethod.POST)
	public Object post01(GuestbookVo vo) {		//	Json 방식이 아닌 form 방식으로 온다. 
		//service -> repository: DB insert 성공한 후,
		
		System.out.println(vo.toString());
		vo.setNo(1L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	//	Json(string)으로 온다.
	@ResponseBody
	@RequestMapping(value="/post02",method=RequestMethod.POST)
	public Object post02(@RequestBody GuestbookVo vo) {		//	messageconverter가 파싱해줌
		//service -> repository: DB insert 성공한 후,
		
		System.out.println(vo.toString());
		vo.setNo(1L);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
}
