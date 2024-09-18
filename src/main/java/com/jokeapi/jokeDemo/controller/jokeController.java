package com.jokeapi.jokeDemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.jokeapi.jokeDemo.domain.jokeResponse;
import com.jokeapi.jokeDemo.service.joke.JokeService;

@RestController
public class jokeController {

@Autowired JokeService jokeService;

    @GetMapping("/random_joke")
    public jokeResponse getJokeSec(){
        return jokeService.getCurrentJoke();
    }

    @GetMapping("/types")
    public jokeResponse getJokeTypesList(){
        return jokeService. getTypesList();
    }

    @GetMapping("/type/{jokeType}")
    public jokeResponse getJokeTypePath(@PathVariable String jokeType) {
        return jokeService.getJokeType(jokeType);
    }

    // EXTRA
    @GetMapping("/types/{idNum}")
    public jokeResponse getById(@PathVariable String idNum){
        return jokeService.getJokeID(idNum);
    }

}
