package com.in28minutes.rest.webservices.resfulwebservices.helloworld;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

public class HelloWorldBean {

	private String message;
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public HelloWorldBean(String message) {
		 this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
