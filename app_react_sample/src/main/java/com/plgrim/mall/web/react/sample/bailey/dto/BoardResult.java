package com.plgrim.mall.web.react.sample.bailey.dto;

import com.plgrim.mall.web.react.sample.bailey.util.Pagination;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class BoardResult {
    private List<BoardDto> boardDto;

    private Pagination pagination;
}
