package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.CardVo;
import com.example.demo.vo.TaskVo;

@Repository
public class CardRepository {
	@Autowired
	private SqlSession sqlsession;
	
	public List<CardVo> findAll(){
		return sqlsession.selectList("card.findAll");
	}

	public List<TaskVo> findTask(Long cardNo) {
		return sqlsession.selectList("task.findTask", cardNo);
	}


	public boolean insert(TaskVo vo) {
		return sqlsession.insert("task.addTask", vo) == 1;
	}

	public boolean delete(Long no) {
		return sqlsession.delete("task.deleteTask", no) == 1;
	}

	public boolean update(TaskVo vo) {
		return sqlsession.update("task.update", vo) == 1;
	}
}
