package com.jokeapi.jokeDemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.jokeapi.jokeDemo.domain.jokeResponse;
import com.jokeapi.jokeDemo.service.joke.JokeService;

@RestController
public class jokeController {

    @Autowired
    private JokeService jokeService;

    @GetMapping("/random_joke")
    public jokeResponse getJokeSec(){
        return jokeService.getCurrentJoke();
    }

    @GetMapping("/types")
    public String getJokeTypesList(){
        return jokeService.getTypesList();
    }

    @GetMapping("/type/{jokeType}")
    public String getJokeTypePath(@PathVariable String jokeType) {
        return jokeService.getJokeType(jokeType);
    }

    // EXTRA
    @GetMapping("/types/{idNum}")
    public jokeResponse getById(@PathVariable Long idNum){
        return jokeService.getJokeID(idNum);
    }

    @GetMapping("/jokes/{idRandNum}")
    public String getRandomJokeByNum(@PathVariable Long idRandNum){
        return jokeService.getRandomJokes(idRandNum);
    }

}
