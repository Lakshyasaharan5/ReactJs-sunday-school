package com.sundayschool.handlers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.json.JSONObject;

import com.sundayschool.dao.StudentDAO;
import com.sundayschool.dao.TeacherDAO;
import com.sundayschool.databaseutility.ConnectionUtility;

public class StudentHandler {

	public StudentHandler() {
		super();
	}
	
	public StudentDAO parseJsonData(String newStudentJsonString) {
		
		JSONObject newStudentJson = new JSONObject(newStudentJsonString);
		StudentDAO studentDao = new StudentDAO();
		if(newStudentJson.has("id_student")) {
			studentDao.setId_student(newStudentJson.getInt("id_student"));
		}
		studentDao.setUniqueID(newStudentJson.getString("uniqueID"));
		studentDao.setStudent_name(newStudentJson.getString("student_name"));
		studentDao.setDetails(newStudentJson.getString("details"));
		studentDao.setChurch_class(newStudentJson.getString("church_class"));
		return studentDao;
		
	}

	public boolean storeNewStudent(String newStudentJson) throws SQLException {
		StudentDAO studentDao = new StudentDAO();
		studentDao = parseJsonData(newStudentJson);
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
				String query = "INSERT INTO student (uniqueID, student_name, church_class ,details, enabled) VALUES (?, ?, ?, ?, ?)";
				ps = con.prepareStatement(query);
				ps.setString(1, studentDao.getUniqueID());
				ps.setString(2, studentDao.getStudent_name());
				ps.setString(3, studentDao.getChurch_class());
				ps.setString(4, studentDao.getDetails());
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
