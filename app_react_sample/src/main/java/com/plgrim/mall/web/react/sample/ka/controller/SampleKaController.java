package com.plgrim.mall.web.react.sample.ka.controller;

import com.plgrim.mall.web.react.sample.ka.dao.SampleCount;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class SampleKaController{
    @PostMapping(value = "/ka")
    public ResponseEntity<?> ka( Model model) {



        model.addAttribute("1","first");
        model.addAttribute("2","second");
        model.addAttribute("3","third");
        model.addAttribute("4","fourth");
        model.addAttribute("5","fifth");

        return new ResponseEntity<>(model, HttpStatus.OK);
    }

    @PostMapping(value = "/kar")
    public ResponseEntity<?> kar(@RequestBody SampleCount sampleCount, Model model) {

        //model.addAttribute("sampleCount",sampleCount);

        return new ResponseEntity<>(sampleCount, HttpStatus.OK);
    }

    @PostMapping(value = "/kal")
    public Model kal( @RequestBody SampleCount sampleCount, Model model) {


        model.addAttribute("sampleCount","sampleCount");

        model.addAttribute("1","first");
        model.addAttribute("2","second");
        model.addAttribute("3","third");
        model.addAttribute("4","fourth");
        model.addAttribute("5","fifth");

        return model;

    }


}
