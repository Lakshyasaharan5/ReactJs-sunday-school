package com.sundayschool.handlers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.json.JSONObject;

import com.sundayschool.dao.AssessmentMarksDAO;
import com.sundayschool.dao.TeacherDAO;
import com.sundayschool.databaseutility.ConnectionUtility;

public class TeacherHandler {

	public TeacherHandler() {
		super();
	}
	
	public TeacherDAO parseJsonData(String newTeacherJsonString) {
		
		JSONObject newTeacherJson = new JSONObject(newTeacherJsonString);
		TeacherDAO teacherDao = new TeacherDAO();
		if(newTeacherJson.has("id_teacher")) {
			teacherDao.setId_teacher(newTeacherJson.getInt("id_teacher"));
		}
		teacherDao.setUsername(newTeacherJson.getString("username"));
		teacherDao.setTeacher_name(newTeacherJson.getString("teacher_name"));
		teacherDao.setMobile(newTeacherJson.getString("mobile"));
		teacherDao.setChurch_class(newTeacherJson.getString("church_class"));
		return teacherDao;
		
	}

	public boolean storeNewTeacher(String newTeacherJson) throws SQLException {
		TeacherDAO teacherDao = new TeacherDAO();
		teacherDao = parseJsonData(newTeacherJson);
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
				String query = "INSERT INTO teacher (username, teacher_name, church_class ,mobile, enabled) VALUES (?, ?, ?, ?, ?)";
				ps = con.prepareStatement(query);
				ps.setString(1, teacherDao.getUsername());
				ps.setString(2, teacherDao.getTeacher_name());
				ps.setString(3, teacherDao.getChurch_class());
				ps.setString(4, teacherDao.getMobile());
				ps.setInt(5, 1);
				status = !ps.execute();
			
		}catch (Exception e) {
			e.printStackTrace();			
			return false;
		}
		finally {
			con.close();
		}
		return status;		
	}
}
