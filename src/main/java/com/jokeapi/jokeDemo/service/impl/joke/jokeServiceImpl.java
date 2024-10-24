package com.jokeapi.jokeDemo.service.impl.joke;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.jokeapi.jokeDemo.domain.jokeResponse;
import com.jokeapi.jokeDemo.service.joke.JokeService;


@Service
public class jokeServiceImpl implements JokeService {
    @Override
    public jokeResponse getCurrentJoke() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/random_joke", jokeResponse.class);
    }

    @Override
    public String getTypesList() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/types", String.class);
    }

    @Override
    public String getJokeType(String jokeType) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/jokes/" + jokeType + "/random", String.class);
    }

    // EXTRA Grab joke by id --  Use endpoint /jokes/:id
    @Override
    public jokeResponse getJokeID(Long idNum) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/jokes/"+ idNum, jokeResponse.class);
    }

    @Override
    public String getRandomJokes(Long idRandNum) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/jokes/random/"+ idRandNum, String.class);
    }
   
}
