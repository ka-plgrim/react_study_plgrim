package com.plgrim.mall.web.react.sample.hannah.dto;

import com.plgrim.mall.web.react.sample.hannah.repository.BdDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardSaveDto {
    private Long idx; // 번호
    private String title; // 제목
    private String contents; // 내용
    private String createdBy; // 작성자

    /**Builder pattern
     *
     * */
    public BdDto bdDto() {
        return BdDto.builder()
                .idx(idx)
                .title(title)
                .contents(contents)
                .createdBy(createdBy)
                .build();
    }
}
