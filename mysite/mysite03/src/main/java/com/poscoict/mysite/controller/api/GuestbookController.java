package com.poscoict.mysite.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.poscoict.mysite.dto.JsonResult;
import com.poscoict.mysite.service.GuestbookService;
import com.poscoict.mysite.vo.GuestbookVo;

@RestController("/guestbookApiController")
@RequestMapping("/api/guestbook")
public class GuestbookController {
	//	getMapping	
	//	Put, react..
	//	service autowired
	@Autowired
	private GuestbookService guestbookService;
	
	
	@GetMapping("/list")
	public JsonResult list(
			@RequestParam(value="startno",required=true,defaultValue = "0") Long startno) {
		List<GuestbookVo> list= null;
		if(startno==-1) {
			list = guestbookService.getMessageList();
		}else {
			list = guestbookService.getMessageList(startno);
		}
		System.out.println(list.toString());
		return JsonResult.success(list);
	}
	
	
	
	@DeleteMapping("/delete/{no}")
	public JsonResult delete(
			@PathVariable("no") Long no
			,@RequestParam(value="password", required = true, defaultValue = "")String password) {
		boolean result = guestbookService.deleteMessage(no, password);
		Long data = 0L;
		
		if(result) {
			data = no;
		}else {
			data=-1L;
		}
		return JsonResult.success(data);
	}
	
	@PostMapping("/add")
	public JsonResult add(GuestbookVo vo) {
		guestbookService.addMessage(vo);
		return JsonResult.success(vo);
	}
	
}
