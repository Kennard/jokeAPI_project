package com.jokeapi.jokeDemo.service.joke;

import com.jokeapi.jokeDemo.domain.jokeResponse;

public interface JokeService {
      jokeResponse getCurrentJoke();
      jokeResponse getTypesList();
      jokeResponse getJokeType(String jokeType);
      jokeResponse getJokeID(Long idNum);  // EXTRA
}
