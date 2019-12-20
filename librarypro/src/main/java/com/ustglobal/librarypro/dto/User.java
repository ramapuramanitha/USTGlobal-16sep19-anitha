package com.ustglobal.librarypro.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Users_details")
public class User {
	@Id
	@Column(name = "userId")
	@GeneratedValue
	private int id;
	
	@Column(name = "UserName")
	private String name;
	
	@Column(name = "Email")
	private String  email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name="Role")
	private String role;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

}
