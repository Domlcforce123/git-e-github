package com.github.domlcforce123.usersapi.models;

import com.github.domlcforce123.usersapi.dtos.CreateUserInfo;
import com.github.domlcforce123.usersapi.dtos.UserInfo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.GenerationType.IDENTITY;

@Entity(name = "user")
@Table(name = "user")
@Setter
@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String password;

    @Column(name = "cpf_documento")
    private String document;

    @Column(name = "data_nascimento")
    private LocalDateTime birthday;

    public User(CreateUserInfo info) {
        //o createruser é a classe , e o info é a variavel (pode ser qualquer nome) para poder chamar depois
        this.name = info.getName();
        this.email = info.getEmail();
        this.password = info.getPassword();
        this.document = info.getDocument();
        this.birthday = info.getBirthday();
    }

    public UserInfo toInfo() {
        return new UserInfo(this.id, this.name);

    }
}
