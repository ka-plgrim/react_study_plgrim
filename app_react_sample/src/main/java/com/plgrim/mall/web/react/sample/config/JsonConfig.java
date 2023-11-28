package com.plgrim.mall.web.react.sample.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@Slf4j
public class JsonConfig {

    public JsonConfig() {
        log.info("created JsonConfig instance.");
    }

    @Bean("jacksonObjectMapperFactoryBean")
    public JacksonObjectMapperFactoryBean jacksonObjectMapperFactoryBean() {
        return new JacksonObjectMapperFactoryBean();
    }


}
