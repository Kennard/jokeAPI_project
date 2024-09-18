package com.jokeapi.jokeDemo.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class jokeResponse {
    private int id;
    private String type;
    private String setup;
    private String punchline;
}
