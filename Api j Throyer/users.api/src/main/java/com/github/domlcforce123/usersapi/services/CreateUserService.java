package com.github.domlcforce123.usersapi.services;

import com.github.domlcforce123.usersapi.dtos.CreateUserInfo;
import com.github.domlcforce123.usersapi.models.User;
import com.github.domlcforce123.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateUserService {
    @Autowired
    private UserRepository repository;
    public User create(CreateUserInfo info) {
        var user =  new User(info);
        var created = repository.save(user);
        return created;
        //return repository.save(new User(info)); é a mesma coisa só que mais clean
    }
}
