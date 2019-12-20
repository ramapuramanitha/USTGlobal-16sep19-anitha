package com.ustglobal.librarypro.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name = "Book_Issue_Details")
public class BookIssue {

	@Id
	@Column
	private int bid;
	
	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getbName() {
		return bName;
	}

	public void setbName(String bName) {
		this.bName = bName;
	}

	@Column
	private String bName;
	
	@Column(name="IssueDate")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date issueDate;
	
	@Column(name="ReturnDate")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date returnDate;
	
	@Column(name="Fine")
	private int fine;

	

	public Date getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}

	public Date getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}

	public int getFine() {
		return fine;
	}

	public void setFine(int fine) {
		this.fine = fine;
	}
	
	
}

