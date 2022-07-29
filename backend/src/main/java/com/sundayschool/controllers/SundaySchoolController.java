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

import com.sundayschool.jwt;
import com.sundayschool.dao.AssessmentMarksDAO;
import com.sundayschool.handlers.AssessmentMarksHandler;
import com.sundayschool.handlers.StudentHandler;
import com.sundayschool.handlers.TeacherHandler;

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
	
	
	
	
	
	
	
	
	
	
	
	
	
//	***************************************************************************************************************************************************
//	CRUD OPERATIONS FROM TEACHER
	
	@RequestMapping(value = "/addTeacher", method = RequestMethod.POST)
	public String addTeacher(@RequestBody String JsonData) throws SQLException {
		
		boolean status = false;
		TeacherHandler teacherHandler = new TeacherHandler();
		status = teacherHandler.storeNewTeacher(JsonData);
		
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	
	
	}
	
	
	@RequestMapping(value = "/viewTeacher", method = RequestMethod.GET)
	public String viewTeacher(@RequestParam("church") String church) throws SQLException {
		
		boolean status = false;
		TeacherHandler teacherHandler = new TeacherHandler();
		return teacherHandler.getListOfTeacher(church);	
	
	}
	
	@RequestMapping(value = "/editTeacher", method = RequestMethod.PUT)
	public String editTeacher(@RequestBody String JsonData) throws SQLException {
		boolean status = false;
		TeacherHandler teacherHandler = new TeacherHandler();
		status = teacherHandler.editTeacher(JsonData);
		
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	
		
	}
	
	@RequestMapping(value = "/deleteTeacher", method = RequestMethod.DELETE)
	public String viewTeachers(@RequestParam("username") String username) throws SQLException {
		
		boolean status = false;
		TeacherHandler teacherHandler = new TeacherHandler();
		status =  teacherHandler.deleteTeacher(username);	
		
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	
	
	} 

	
	
//	***************************************************************************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	***************************************************************************************************************************************************
//	CRUD OPERATIONS FROM STUDENT	
	
	@RequestMapping(value = "/addStudent", method = RequestMethod.POST)
	public String addStudent(@RequestBody String JsonData) throws SQLException {
		
		boolean status = false;
		
		StudentHandler studentHandler = new StudentHandler();
		status = studentHandler.storeNewStudent(JsonData);
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	

	}
	
	@RequestMapping(value = "/viewStudent", method = RequestMethod.GET)
	public String viewStudent(@RequestParam("church") String church, @RequestParam("class") String assigned_class) throws SQLException {
		
		boolean status = false;
		StudentHandler studentHandler = new StudentHandler();
		return studentHandler.getListOfStudent(church, assigned_class);	
	
	}
	
	@RequestMapping(value = "/editStudent", method = RequestMethod.PUT)
	public String editStudent(@RequestBody String JsonData) throws SQLException {
		boolean status = false;
		StudentHandler studentHandler = new StudentHandler();
		status = studentHandler.editStudent(JsonData);
		
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	
		
	}
	
	
	@RequestMapping(value = "/deleteStudent", method = RequestMethod.DELETE)
	public String viewStudent(@RequestParam("uniqueID") String uniqueID) throws SQLException {
		
		boolean status = false;
		StudentHandler studentHandler = new StudentHandler();
		status =  studentHandler.deleteStudent(uniqueID);	
		
		if(status) {
			// SHOW A MESSAGE OF SUCCESS
			return HttpStatus.OK.getReasonPhrase();
			
		}else {
			// ASK TO RETRY
			return HttpStatus.BAD_REQUEST.getReasonPhrase();
		}	
	
	} 
	
//	***************************************************************************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value="/tokens")
	public void tokens() {
		jwt j = new jwt();
		String token = j.createToken();
		j.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hcnV0byIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjU4NTk0NzAwLCJleHAiOjE2NTg2ODExMDB9.48Rzj_6wb0YIgA3Lv7Nh_qUhOSKA0CcMQqH4zfKXDXw");
	}
	
	
}
