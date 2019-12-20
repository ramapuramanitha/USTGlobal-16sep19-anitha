package com.ustglobal.stackmanagementsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.stackmanagementsystem.dao.ProductDAO;
import com.ustglobal.stackmanagementsystem.dto.ProductBean;



@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDAO dao;

	@Override
	public boolean addProduct(ProductBean product) {
		return dao.addProduct(product);
	}

	@Override
	public boolean updateProduct(ProductBean product) {
		return dao.updateProduct(product);
	}

	@Override
	public boolean searchProductByCompany(String company) {
		return dao.searchProductByCompany(company);

	}

	@Override
	public boolean searchProductByName(String name) {
		return dao.searchProductByName(name);

	}

	@Override
	public boolean searchProductByCatagory(String category) {
		return dao.searchProductByCategory(category);

	}

	@Override
	public List<ProductBean> getAllProduct() {
		return dao.getAllProduct();
	}
}
