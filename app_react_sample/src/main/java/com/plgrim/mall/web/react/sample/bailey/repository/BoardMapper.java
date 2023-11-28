package com.plgrim.mall.web.react.sample.bailey.repository;

import com.plgrim.mall.web.react.sample.bailey.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface BoardMapper {

    List<BoardDto> findBoards(HashMap<String, Object> paramMap);

    Integer boardsCount(HashMap<String, Object> paramMap);

    BoardDto findBoard(Integer idx);
}
