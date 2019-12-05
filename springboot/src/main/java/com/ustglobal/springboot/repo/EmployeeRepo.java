package com.ustglobal.springboot.repo;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.ustglobal.springboot.dto.EmployeeBean;



public interface EmployeeRepo 
              extends JpaRepositoryImplementation<EmployeeBean, Integer>{
	@Transactional
	@Modifying
	@Query("update EmployeeBean set name=:name,password=:password,doj=:doj,gender=:gender where id=:id")
	public void update(String name, String password, Date doj, String gender, int id);
	public EmployeeBean findByName(String name);
	
	public void deleteByName(String name);
}
