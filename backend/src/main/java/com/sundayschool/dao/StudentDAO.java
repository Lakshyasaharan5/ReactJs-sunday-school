package com.sundayschool.dao;

public class StudentDAO {
	
	private int id_student = 0;
	private String uniqueID = "";
	private String student_name = "";
	private String church_class = "";
	private String details = "";
	
	public StudentDAO() {
		
	}

	public int getId_student() {
		return id_student;
	}

	public void setId_student(int id_student) {
		this.id_student = id_student;
	}

	public String getUniqueID() {
		return uniqueID;
	}

	public void setUniqueID(String uniqueID) {
		this.uniqueID = uniqueID;
	}

	public String getChurch_class() {
		return church_class;
	}

	public void setChurch_class(String church_class) {
		this.church_class = church_class;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getStudent_name() {
		return student_name;
	}

	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}
	
	

}
