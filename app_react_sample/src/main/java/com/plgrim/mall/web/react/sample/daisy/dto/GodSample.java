package com.plgrim.mall.web.react.sample.daisy.dto;

import lombok.*;

@Data
public class GodSample {

    private String godNo;
    private String itmNo;
    private String godNm;
    private int cvrPrc;

    @Override
    public String toString() {
        return "god{" +
                "godNo=" + godNo +
                ", itmNo='" + itmNo + '\'' +
                ", godNm='" + godNm + '\'' +
                ", cvrPrc=" + cvrPrc +
                '}';
    }
}
