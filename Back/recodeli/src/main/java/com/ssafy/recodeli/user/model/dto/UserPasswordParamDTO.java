package com.ssafy.recodeli.user.model.dto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UserPasswordParamDTO {
	private String password;
	private String newPassword;
}
