package com.plgrim.mall.web.react.sample.daisy.controller;

import com.plgrim.mall.web.react.sample.daisy.dto.GodSample;
import com.plgrim.mall.web.react.sample.daisy.dto.GoodsSampleDTO;
import com.plgrim.mall.web.react.sample.daisy.service.GoodsSelectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Log4j2
public class SampleDaisyController {

    @Autowired
    GoodsSelectService goodsSelectService;

    @GetMapping(value = "/productList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GoodsSampleDTO> getProductList(Model model) {

        GoodsSampleDTO goodsSampleDTO = goodsSelectService.getGoodsList();
        return ResponseEntity.ok(goodsSampleDTO);
    }
}
