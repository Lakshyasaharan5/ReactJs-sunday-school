package com.sundayschool.controllers;

import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sundayschool.dao.AssessmentMarksDAO;
import com.sundayschool.handlers.AssessmentMarksHandler;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class SundaySchoolController {
	
	@RequestMapping(value = "/")
	public String hey() {
		return "hey";
	}
	
	@RequestMapping(value = "/addAssessment", method = RequestMethod.POST)
	public String addAssessment(@RequestBody String JsonData) {
		
		boolean status = false;
		
		AssessmentMarksHandler assessmentMarksHandler = new AssessmentMarksHandler();
		AssessmentMarksDAO assessmentMarksDao = new AssessmentMarksDAO();
		assessmentMarksDao = assessmentMarksHandler.parseJsonData(JsonData);
		
		try {
			status = assessmentMarksHandler.storeNewAssessmentMarksData(assessmentMarksDao);
		}catch(Exception e) {
			e.printStackTrace();
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}
		
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	

	}
	
	@RequestMapping(value="/getStudentsForAssessment", method=RequestMethod.GET)
	public String sendStudentListForAssessmentMarks(@RequestParam("username") String TeacherUsername) {
		
		AssessmentMarksHandler assessmentMarksHandler = new AssessmentMarksHandler();
		try {
			return assessmentMarksHandler.getStudentsListByTeacherUsername(TeacherUsername);
		} catch (Exception e) {
			e.printStackTrace();
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}
	}
	
	@RequestMapping(value = "/addTeacher", method = RequestMethod.POST)
	public void addTeacher(@RequestBody String JsonData) {
		
		// TODO : Parse json data into teacherDAO object
		// TODO : send this data to handler to store inside mysql database
		
	}

	@RequestMapping(value = "/addStudent", method = RequestMethod.POST)
	public void addStudent(@RequestBody String JsonData) {
		
		// TODO : Parse json data into studentDAO object
		// TODO : send this data to handler to store inside mysql database
		
	}
	
	
	
}
