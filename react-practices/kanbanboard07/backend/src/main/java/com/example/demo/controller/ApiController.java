package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.vo.TaskVo;


@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private CardRepository cardRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> read() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	@GetMapping("/task")
	public ResponseEntity<JsonResult> read(@RequestParam(value="cardNo", required=true, defaultValue="") Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findTask(cardNo)));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo) {
		System.out.println(vo);
		cardRepository.insert(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
}
