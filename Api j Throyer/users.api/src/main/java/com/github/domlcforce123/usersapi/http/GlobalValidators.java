package com.github.domlcforce123.usersapi.http;

import org.aspectj.weaver.ast.Var;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestControllerAdvice
public class GlobalValidators {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Collection<Map<String, String>> errors(MethodArgumentNotValidException exception) {
        return exception.getAllErrors().stream()
                .map(objectError -> {
                    var error = (FieldError) objectError;
                    return Map.of(
                            "field", error.getField(),
                            "error", Optional.ofNullable(error.getDefaultMessage()).orElse("")
                    );
                }).toList();
    }
}
