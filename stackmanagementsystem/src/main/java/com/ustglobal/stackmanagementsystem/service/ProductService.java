package com.ustglobal.stackmanagementsystem.service;

import java.util.List;

import com.ustglobal.stackmanagementsystem.dto.ProductBean;




public interface ProductService {
	public boolean addProduct(ProductBean product);
	public boolean updateProduct(ProductBean product);
	public boolean searchProductByCompany(String company);
	public boolean searchProductByName(String name);
	public boolean searchProductByCatagory(String catagory);
	public List<ProductBean> getAllProduct();
}
