package com.plgrim.mall.web.react.sample.hannah.repository;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BdDto {
    private Long idx; // 번호
    private String title; // 제목
    private String contents; // 내용
    private String createdBy; // 작성자
    private Date createdAt; // 일시

    public BdDto bdDto() {
        return BdDto.builder()
                .idx(idx)
                .title(title)
                .contents(contents)
                .createdBy(createdBy)
                .build();
    }
}
