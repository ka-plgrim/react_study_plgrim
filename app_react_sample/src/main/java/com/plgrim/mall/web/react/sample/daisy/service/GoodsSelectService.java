package com.plgrim.mall.web.react.sample.daisy.service;

import com.plgrim.mall.web.react.sample.bailey.dto.BoardDto;
import com.plgrim.mall.web.react.sample.bailey.dto.BoardResult;
import com.plgrim.mall.web.react.sample.bailey.repository.BoardMapper;
import com.plgrim.mall.web.react.sample.bailey.util.Pagination;
import com.plgrim.mall.web.react.sample.daisy.dto.GodSample;
import com.plgrim.mall.web.react.sample.daisy.dto.GoodsSampleDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GoodsSelectService {
    
    //상품 샘플 정보 하드코딩
    public GoodsSampleDTO getGoodsList() {

        GoodsSampleDTO goodsSampleDTO = new GoodsSampleDTO();
        List<GodSample> godSampleList = new ArrayList<>();

        GodSample godSample1 = new GodSample();
        godSample1.setGodNo("G001");
        godSample1.setItmNo("I001");
        godSample1.setGodNm("상품 G001 단품 I001");
        godSample1.setCvrPrc(100);
        godSampleList.add(godSample1);

        GodSample godSample2 = new GodSample();
        godSample2.setGodNo("G002");
        godSample2.setItmNo("I002");
        godSample2.setGodNm("상품 G002 단품 I002");
        godSample2.setCvrPrc(200);
        godSampleList.add(godSample2);

        GodSample godSample3 = new GodSample();
        godSample3.setGodNo("G003");
        godSample3.setItmNo("I003");
        godSample3.setGodNm("상품 G003 단품 I003");
        godSample3.setCvrPrc(300);
        godSampleList.add(godSample3);

        GodSample godSample4 = new GodSample();
        godSample4.setGodNo("G004");
        godSample4.setItmNo("I004");
        godSample4.setGodNm("상품 G004 단품 I004");
        godSample4.setCvrPrc(400);
        godSampleList.add(godSample4);

        GodSample godSample5 = new GodSample();
        godSample5.setGodNo("G005");
        godSample5.setItmNo("I005");
        godSample5.setGodNm("상품 G005 단품 I005");
        godSample5.setCvrPrc(500);
        godSampleList.add(godSample5);

        goodsSampleDTO.setGodSampleList(godSampleList);

        return goodsSampleDTO;
    }
}
