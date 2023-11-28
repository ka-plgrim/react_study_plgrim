package com.plgrim.mall.web.react.sample.hannah.repository;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface BdMapper {

    List<BdDto> getBoardList(HashMap<String, Object> paramMap); // 리스트 조회

    int getBoardTotalCount(HashMap<String, Object> paramMap); // 총 갯수(pagination 관련)

    BdDto getBoardOne(Long idx); // 상세 조회

    int insertBoard(BdDto entity); // 글쓰기

    int updateBoard(BdDto entity); // 수정하기

    int deleteBoard(Long idx); // 삭제하기
}
