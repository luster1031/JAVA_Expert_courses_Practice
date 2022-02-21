package com.poscoict.hanblog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping({"","/main"})
	public String main() {
		System.out.println("들어감");
		return "main/index";
	}
}
