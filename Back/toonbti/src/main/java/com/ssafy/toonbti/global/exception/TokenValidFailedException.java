package com.ssafy.toonbti.global.exception;

public class TokenValidFailedException extends RuntimeException {
	private static final long serialVersionUID = 2238030302650813811L;
	
	public TokenValidFailedException(String msg) {
		super(msg);
	}
}