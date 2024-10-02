package com.jokeapi.jokeDemo.service.joke;

import com.jokeapi.jokeDemo.domain.jokeResponse;

public interface JokeService {
      jokeResponse getCurrentJoke();
      String getTypesList();
      String getJokeType(String jokeType);
      jokeResponse getJokeID(Long idNum);  // EXTRA
}
