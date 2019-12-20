package com.ustglobal.stackmanagementsystem.dao;

import java.util.List;

import com.ustglobal.stackmanagementsystem.dto.ProductBean;




public interface ProductDAO {
	public boolean addProduct(ProductBean product);
	public boolean updateProduct(ProductBean product);
	public boolean searchProductByCompany(String company);
	public boolean searchProductByName(String name);
	public boolean searchProductByCategory(String category);
	public List<ProductBean> getAllProduct();
}

