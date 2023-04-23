package com.github.domlcforce123.usersapi.dtos;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
@Setter
public class CreateUserInfo {
    @NotNull( message = "O campo nome é obrigatório")
    private String name;

    @Email( message = "Informe um email valido")
    private String email;

    @Size(min = 8, max = 120, message = " A senha deve conter no minimo {min} e no máximo {max}")
    private String password;

    @CPF( message = "Informe um CPF valido")
    private String document;

    @PastOrPresent(message = " Informe uma data de nascimento valida")
    private LocalDateTime birthday;
}
