package com.ustglobal.thread.properties;

public class MyThread extends Thread{
	
	public static void main(String[] args) {
		
		System.out.println("main started");
		
		String tname=Thread.currentThread().getName();
		System.out.println("Current thread"+tname);
		
		MyThread t1=new MyThread();
		String mname=t1.getName();
		System.out.println("MyThread name "+mname);
		
		Thread.currentThread().setName("Balu");
		
		t1.setName("ani");
		System.out.println("myThread name "+t1.getName());
		
		
		System.out.println(10/0);
		
		System.out.println("main ended");
	}

}
