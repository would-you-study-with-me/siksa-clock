package com.would_you_study_with_me.account;

import jakarta.persistence.Entity;

import java.util.UUID;

@Entity
class Account {

    private UUID id;
    private String email;
    private Integer mobile;
    private String password;
    private String name;
    private String nickname;
    private String address;
    private String refreshToken;
    private String changePasswordLink;
    private String createdAt;
    private String c
}
