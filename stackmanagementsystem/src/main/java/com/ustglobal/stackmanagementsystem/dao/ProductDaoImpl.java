package com.ustglobal.stackmanagementsystem.dao;

import java.util.List;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;


import com.ustglobal.stackmanagementsystem.dto.ProductBean;



@Repository
public class ProductDaoImpl implements ProductDAO {

	@PersistenceUnit
	private EntityManagerFactory factory;
	@Override
	public boolean addProduct(ProductBean product) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(product);
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean updateProduct(ProductBean product) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			ProductBean p = manager.find(ProductBean.class, product.getId());
			p.setCatogory(product.getCatogory());
			p.setName(product.getName());
			p.setQuantity(product.getQuantity());
			p.setPrice(product.getPrice());
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}




	@Override
	public List<ProductBean> getAllProduct() {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from Product";
		TypedQuery<ProductBean> typedQuery = manager.createQuery(jpql, ProductBean.class);
		return typedQuery.getResultList();
	}

	@Override
	public boolean searchProductByCompany(String company) {	
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			ProductBean product = manager.find(ProductBean.class, company);
			manager.remove(product);
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}




	@Override
	public boolean searchProductByName(String name) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			ProductBean product = manager.find(ProductBean.class, name);
			manager.remove(product);
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean searchProductByCategory(String category) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			ProductBean product = manager.find(ProductBean.class, category);
			manager.remove(product);
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}
}




