package com.plgrim.mall.web.react.sample.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainMallController {
    @RequestMapping("/main")
    public String main(){
        return "Hello World";
    }

}
