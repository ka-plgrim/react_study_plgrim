package com.plgrim.mall.web.react.sample.bailey.service;

import com.plgrim.mall.web.react.sample.bailey.dto.BoardDto;
import com.plgrim.mall.web.react.sample.bailey.dto.BoardResult;
import com.plgrim.mall.web.react.sample.bailey.repository.BoardMapper;
import com.plgrim.mall.web.react.sample.bailey.util.Pagination;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;

    public BoardResult getBoardList(int page, int size) {
        HashMap<String, Object> paramMap = new HashMap<>();

        if (page <= 1) {    //페이지가 1 이하로 입력되면 0으로 고정,
            paramMap.put("page", 0);
        } else {            //페이지가 2 이상
            paramMap.put("page", (page - 1) * size);
        }
        paramMap.put("size", size);

        List<BoardDto> boardList = boardMapper.findBoards(paramMap);
        Pagination pagination = new Pagination(
                boardMapper.boardsCount(paramMap),
                page,
                size,
                10
        );

        return BoardResult.builder()
                .boardDto(boardList)
                .pagination(pagination)
                .build();
    }
}
