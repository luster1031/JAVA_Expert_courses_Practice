package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("restApiTestController")
public class RestApiController {
	
	//	api를 호출하는 브라우저를 랜딩?
	@RequestMapping("/test/rest")
	public String test() {
		return "rest-test";
	}
}
