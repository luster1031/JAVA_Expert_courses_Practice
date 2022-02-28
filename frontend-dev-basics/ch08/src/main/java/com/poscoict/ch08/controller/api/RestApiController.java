package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscoict.ch08.controller.dao.JsonResult;
import com.poscoict.ch08.controller.vo.UserVo;

@RestController	//	responsebody 안 써 줘도 됨
@RequestMapping("/api/user")
public class RestApiController {

	//	ResponseEntity<Uservo>로 리턴하는게 좋음
	@PostMapping("")
	public Object create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword("");	//	password는 교환 많이 하는게 안 좋음
		
		return JsonResult.success(vo);
	}
	
	@GetMapping("")	//	다 가져와라	- 관리자 프로그램 만들 때 필요
	public Object read() {
		List<UserVo> list = new ArrayList<>();
		
		UserVo vo1 = new UserVo();
		vo1.setNo(1L);
		vo1.setName("둘리");
		list.add(vo1);
		
		UserVo vo2 = new UserVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");
		list.add(vo2);
		return JsonResult.success(list);
	}
	
	@GetMapping("/{no}")	//	다 가져와라	- 관리자 프로그램 만들 때 필요
	public Object read(@PathVariable("no") Long no) {
		System.out.println("no : " + no);
		
		UserVo vo2 = new UserVo();
		vo2.setNo(2L);
		vo2.setName("마이콜");
		
		return JsonResult.success(vo2);
	}
	
	//	@Auth
	//	authuser no 와 uservo의 no 같은지 확인해봐야한다.
	@PutMapping("/{no}")	//	다 가져와라	- 관리자 프로그램 만들 때 필요
	public Object update(@PathVariable("no") Long no,  @RequestBody UserVo vo /*@AuthUser UserVo authUser*/) {
		System.out.println("[PUT no] : " + no);
		System.out.println("[PUT vo] : " + vo.toString());
		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@DeleteMapping("/{no}")
	public Object delete(
			@PathVariable("no") Long no
			, @RequestParam(value="password", required = true, defaultValue = "")String password) {
		
		System.out.println("[delete no] : " + no);
		System.out.println("[delete password] : " + password);
		/*
		 delete는 톰캣이 해줘야하기 때문에
		  server.xml에 delete 설정해줘야한다.
		  <Connector 
		    URIEncoding="UTF-8"
		    parseBodyMethods="POST, PUT, DELETE"
		    connectionTimeout="20000" 
			port="8080" 
			protocol="HTTP/1.1" 
			redirectPort="8443"
			/>
		 */
		return JsonResult.success(no);
	}
}
