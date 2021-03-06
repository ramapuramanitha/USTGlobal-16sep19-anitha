package com.ustglobal.jpawithhibernate;

import javax.persistence.EntityManager;

import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernate.dto.Product;

public class InsertDemo {

	public static void main(String[] args) {
		Product product= new Product();
		product.setPid(100);
		product.setPname("Pen");
		product.setQuantity(10);
		
		EntityTransaction entityTransaction = null;
		EntityManager entityManager=null;
try {
		EntityManagerFactory entitymanagerFactory=Persistence.createEntityManagerFactory("TestPersistence");
		 entityManager= entitymanagerFactory.createEntityManager();
	 entityTransaction=entityManager.getTransaction();
		entityTransaction.begin();
		entityManager.persist(product);
		System.out.println("Record Saved");
		entityTransaction.commit();
	}catch(Exception e) {
		e.printStackTrace();
		entityTransaction.rollback();
	}
		entityManager.close();

	}//end of main method

}//end of InsertDemo
