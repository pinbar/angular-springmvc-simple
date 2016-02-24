package com.pinbar.bean;

import org.springframework.stereotype.Component;

@Component
public class Player {

	private int id;
	private String firstName;
	private String lastName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setName(String name) {
		String[] strArr = name.split(" ");
		this.firstName = strArr[0];
		this.lastName = strArr[1];
	}

}
