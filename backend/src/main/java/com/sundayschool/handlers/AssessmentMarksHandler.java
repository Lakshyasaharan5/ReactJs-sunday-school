package com.sundayschool.handlers;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.*;

import com.sundayschool.databaseutility.*;
import com.sundayschool.dao.AssessmentMarksDAO;
import com.sundayschool.dao.StudentDAO;


public class AssessmentMarksHandler {

	public AssessmentMarksHandler() {
		
	}
	
	public AssessmentMarksDAO parseJsonData(String assessmentMarksDataJsonString) throws JSONException{
		JSONObject assessmentMarksJson = new JSONObject(assessmentMarksDataJsonString);
		
		AssessmentMarksDAO assessmentMarksDao = new AssessmentMarksDAO();
		if(assessmentMarksJson.has("id_assessmentMarks")) {
			assessmentMarksDao.setId_assessmentMarks(assessmentMarksJson.getInt("id_assessmentMarks"));
		}
		assessmentMarksDao.setChurch_class(assessmentMarksJson.getString("church_class"));
		assessmentMarksDao.setDate(assessmentMarksJson.getString("date"));
		assessmentMarksDao.setStudent_name(assessmentMarksJson.getString("student_name"));
		assessmentMarksDao.setAttendance(assessmentMarksJson.getInt("attendance"));
		assessmentMarksDao.setSongs_4(assessmentMarksJson.getInt("songs_4"));
		assessmentMarksDao.setWorship_message(assessmentMarksJson.getInt("worship_message"));
		assessmentMarksDao.setTable_message(assessmentMarksJson.getInt("table_message"));
		assessmentMarksDao.setBehaviour(assessmentMarksJson.getInt("behaviour"));
		assessmentMarksDao.setMemory_verses(assessmentMarksJson.getInt("memory_verses"));
		assessmentMarksDao.setTotal(assessmentMarksJson.getInt("total"));
		assessmentMarksDao.setRemarks(assessmentMarksJson.getString("remarks"));
		
		return assessmentMarksDao;
	}
	
	public boolean storeNewAssessmentMarksData(AssessmentMarksDAO assessmentMarksDao) throws Exception {
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		boolean status = false;
		PreparedStatement ps;
		
		try {
				String query = "INSERT INTO assessmentMarks (church_class, date, student_name, attendance, songs_4, worship_message, table_message, behaviour, memory_verses, total, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
				ps = con.prepareStatement(query);
				ps.setString(1, assessmentMarksDao.getChurch_class());
				ps.setString(2, assessmentMarksDao.getDate());
				ps.setString(3, assessmentMarksDao.getStudent_name());
				ps.setInt(4, assessmentMarksDao.getAttendance());
				ps.setInt(5, assessmentMarksDao.getSongs_4());
				ps.setInt(6, assessmentMarksDao.getWorship_message());
				ps.setInt(7, assessmentMarksDao.getTable_message());
				ps.setInt(8, assessmentMarksDao.getBehaviour());
				ps.setInt(9, assessmentMarksDao.getMemory_verses());
				ps.setInt(10, assessmentMarksDao.getTotal());
				ps.setString(11, assessmentMarksDao.getRemarks());
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

	public String getStudentsListByTeacherUsername(String teacherUsername) throws SQLException {
		
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		PreparedStatement ps;
		ArrayList<StudentDAO> studentDaoList = new ArrayList<StudentDAO>();
		String JsonResponse = "";
		
		try {
				String query = "SELECT * FROM students WHERE church_class = " + getChurchClassByTeacherUsernameFromUsers(teacherUsername) + " AND enabled = true;";
				ps = con.prepareStatement(query);
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
					StudentDAO studentDao = new StudentDAO();
					studentDao.setId_student(rs.getInt("id_student"));
					studentDao.setUniqueID(rs.getString("uniqueID"));
					studentDao.setStudent_name(rs.getString("student_name"));
					studentDao.setChurch_class(rs.getString("church_class"));
					studentDao.setDetails(rs.getString("details"));
					studentDaoList.add(studentDao);
				}
			
		}catch (Exception e) {
			e.printStackTrace();			
			return null;
		}
		try {
			JsonResponse = createJsonResponse(studentDaoList);
			
		}catch (Exception e) {
			e.printStackTrace();			
			return null;
		}
		finally {
			con.close();
		}
		return JsonResponse;
	}
	
	private String createJsonResponse(ArrayList<StudentDAO> studentDaoList) {
		
		JSONObject responseJson = new JSONObject();
		JSONArray studentsArray = new JSONArray();
		
		for(int i=0; i<studentDaoList.size(); i++) {
			JSONObject tempObj = new JSONObject();
			tempObj.put("uniqueID", studentDaoList.get(i).getUniqueID());
			tempObj.put("student_name", studentDaoList.get(i).getStudent_name());
			tempObj.put("church_class", studentDaoList.get(i).getChurch_class());			
			studentsArray.put(tempObj);
		}
		
		responseJson.put("Students", studentsArray);
		return responseJson.toString();
	}

	public String getChurchClassByTeacherUsernameFromUsers(String teacherUsername) throws SQLException {
		
		ConnectionUtility.loadDriver();
		Connection con = ConnectionUtility.getConnection();
		PreparedStatement ps;
		String churchClass = "";
		
		try {
				String query = "SELECT (church_class) FROM users WHERE username="+teacherUsername+";";
				ps = con.prepareStatement(query);
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
					churchClass = rs.getString("church_class");
				}
			
		}catch (Exception e) {
			e.printStackTrace();			
			return null;
		}
		finally {
			con.close();
		}
		
		return churchClass;
	}
}
