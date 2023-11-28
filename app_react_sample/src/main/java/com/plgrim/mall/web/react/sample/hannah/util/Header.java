package com.plgrim.mall.web.react.sample.hannah.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Header<T> {

    /**Response 공통부*/

    private String resultCode; //api 응답 코드
    private String description; //api 부가 설명
    private T data; //json body
    private Pagination pagination; // pagination

    /**
     * 정상적인 통신
     * @param <T>
     * @return
     */
    public static <T> Header<T> OK() {
        return (Header<T>) Header.builder()
                .resultCode("OK")
                .description("OK")
                .build();
    }


    /**
     * 데이터를 받는 OK
     * @param <T>
     * @param data
     * @return
     */
    public static <T> Header<T> OK(T data) {
        return (Header<T>) Header.builder()
                .resultCode("OK")
                .description("OK")
                .data(data)
                .build();
    }

    public static <T> Header<T> OK(T data, Pagination pagination) {
        return (Header<T>) Header.builder()
                .resultCode("OK")
                .description("OK")
                .data(data)
                .pagination(pagination)
                .build();
    }

    /**
     * 설명을 가지고 있고 데이터가 없는 에러
     * @param <T>
     * @param description
     * @return
     */
    public static <T> Header<T> ERROR(String description) {
        return (Header<T>) Header.builder()
                .resultCode("ERROR")
                .description(description)
                .build();
    }
}
