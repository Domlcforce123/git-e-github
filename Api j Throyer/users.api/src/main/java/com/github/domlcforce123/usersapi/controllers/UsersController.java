package com.github.domlcforce123.usersapi.controllers;

import com.github.domlcforce123.usersapi.dtos.CreateUserInfo;
import com.github.domlcforce123.usersapi.dtos.UserInfo;
import com.github.domlcforce123.usersapi.models.User;
import com.github.domlcforce123.usersapi.services.CreateUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//@Controller é pra html
//@RestController é pra api
@RestController
@RequestMapping("/api/user")
public class UsersController {
    @Autowired
    private CreateUserService createUserService;
    @PostMapping
    public UserInfo create(@RequestBody @Validated CreateUserInfo info) {
        // @request e @validate são as validações, o createruser é a classe , e o info é a variavel (pode ser qualquer nome)

        var user = createUserService.create(info);
        return user.toInfo();
    }
}
