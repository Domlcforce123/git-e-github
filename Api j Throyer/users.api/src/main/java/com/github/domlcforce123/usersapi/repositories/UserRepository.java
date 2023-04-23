package com.github.domlcforce123.usersapi.repositories;

import com.github.domlcforce123.usersapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> { }
