package com.ustglobal.stackmanagementsystem.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.stackmanagementsystem.dto.ProductBean;
import com.ustglobal.stackmanagementsystem.service.ProductService;

@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
@RestController
public class ProductController {
	@Autowired
	private ProductService service;

	@PostMapping(path="/add",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE	)
	public boolean addProduct(@RequestBody ProductBean bean) {
		return service.addProduct(bean);
	}//end of addProduct

	@PutMapping(path="/update",
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public boolean modifyEmployee(ProductBean bean) {
		return service.updateProduct(bean);
	}//end of updateProduct

	@GetMapping(path="/search/{name}", 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public boolean searchProduct(@PathVariable("name")String name) {
		return service.searchProductByName(name);
	}//end of search product name

	@GetMapping(path="/search/{company}", 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public boolean searchProduct1(@PathVariable("company")String company) {
		return service.searchProductByCompany(company);
	}//end of search product company

	@GetMapping(path="/search/{category}", 
			produces=MediaType.APPLICATION_JSON_VALUE)
	public boolean searchProduct2(@PathVariable("category")String category) {
		return service.searchProductByCatagory(category);
	}//end of search product category

	@GetMapping(path="get-all",
			produces=MediaType.APPLICATION_JSON_VALUE)
	public List<ProductBean>getAllEmployee(){
		return service.getAllProduct();
	}//end of get All products
}
