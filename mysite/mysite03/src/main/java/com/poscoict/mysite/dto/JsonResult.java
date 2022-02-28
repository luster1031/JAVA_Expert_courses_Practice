package com.poscoict.mysite.dto;

public class JsonResult {
	private String result;		/*	"success" or "fail"		*/
	private Object data;		/*	if success, set		*/
	private String message;		/*	if fail, set	*/
	private JsonResult() {
	}
	private JsonResult(String result, Object data) {
		this.result = result;
		this.data = data;
	}
	private JsonResult(String result, String message) {
		this.result = result;
		this.message = message;
	}
	
	//	api 응답 통일
	//	성공이라고 생각하면
	public static JsonResult success(Object data) {
		System.out.println(data);
		return new JsonResult("success", data);
	}
	
	public static JsonResult fail(String message) {
		return new JsonResult("fail", message);
	}
	
	
	public String getResult() {
		return result;
	}
	
	public Object getData() {
		return data;
	}
	
	public String getMessage() {
		return message;
	}
	
}
