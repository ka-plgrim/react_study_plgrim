package com.plgrim.mall.web.react.sample.bailey.dto;

import com.plgrim.mall.web.react.sample.bailey.util.Pagination;
import lombok.*;

import java.util.Date;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
    private Integer idx;

    private String title;

    private String contents;

    private String createdBy;

    private Date createdAt;

    @Override
    public String toString() {
        return "BoardDto{" +
                "idx=" + idx +
                ", title='" + title + '\'' +
                ", contents='" + contents + '\'' +
                ", createdBy='" + createdBy + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
