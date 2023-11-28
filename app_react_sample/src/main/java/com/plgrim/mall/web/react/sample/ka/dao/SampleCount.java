package com.plgrim.mall.web.react.sample.ka.dao;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class SampleCount implements Serializable {


    private static final long serialVersionUID = 1L;


    private String first;
    private String second;
    private String third;

}
