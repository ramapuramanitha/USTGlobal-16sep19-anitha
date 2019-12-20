package com.ustglobal.stackmanagementsystem.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order_info")
public class ProductOrderBean {
	@Id
	@Column
	private int id;
	@Column
	private double totalprice;
	@Column
	private double totalpricewithgst;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(double totalprice) {
		this.totalprice = totalprice;
	}
	public double getTotalpricewithgst() {
		return totalpricewithgst;
	}
	public void setTotalpricewithgst(double totalpricewithgst) {
		this.totalpricewithgst = totalpricewithgst;
	}

}
