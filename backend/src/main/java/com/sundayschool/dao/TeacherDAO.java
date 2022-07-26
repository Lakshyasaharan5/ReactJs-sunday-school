package com.sundayschool.dao;

public class TeacherDAO {
	
	public int id_teacher = 0;
	public String username = "";
	public String teacher_name = "";
	public String church_class = "";
	public String mobile = "";
	
	public TeacherDAO() {
		super();
	}

	public int getId_teacher() {
		return id_teacher;
	}

	public void setId_teacher(int id_teacher) {
		this.id_teacher = id_teacher;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTeacher_name() {
		return teacher_name;
	}

	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	public String getChurch_class() {
		return church_class;
	}

	public void setChurch_class(String church_class) {
		this.church_class = church_class;
	}


}
