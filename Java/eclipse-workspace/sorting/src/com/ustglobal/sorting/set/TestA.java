package com.ustglobal.sorting.set;

import java.util.HashSet;
import java.util.Iterator;

public class TestA {
	public static void main(String[] args) {
		HashSet hs = new HashSet();
		hs.add(12);
		hs.add(45);
		hs.add("deepa");
		hs.add(85.47);
		hs.add(12);
		hs.add(null);
		hs.add(null);
		
		
		System.out.println("==============Using For Each Loop====================");
		for(Object o:hs) {
			System.out.println(o);
		}
		System.out.println("================Using Iterator================");
		Iterator it=hs.iterator();
		while(it.hasNext()) {
			Object s=it.next();
			System.out.println(s);

		}
	}
}