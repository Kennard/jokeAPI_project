package com.jokeapi.jokeDemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping(value = {"/", "/joketype"})
    public String index(){
        return "index";
    }
}
