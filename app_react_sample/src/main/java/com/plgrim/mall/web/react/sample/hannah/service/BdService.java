package com.plgrim.mall.web.react.sample.hannah.service;


import com.plgrim.mall.web.react.sample.hannah.dto.BoardSaveDto;
import com.plgrim.mall.web.react.sample.hannah.repository.BdMapper;
import com.plgrim.mall.web.react.sample.hannah.util.Header;
import com.plgrim.mall.web.react.sample.hannah.util.Pagination;
import com.plgrim.mall.web.react.sample.hannah.repository.*;
import com.plgrim.mall.web.react.sample.hannah.util.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BdService {
    private final BdMapper boardMapper;


    public Header<List<BdDto>> getBoardList(int page, int size, Search search) {
        HashMap<String, Object> paramMap = new HashMap<>();

        if (page <= 1) {    //페이지가 1 이하로 입력되면 0으로 고정,
            paramMap.put("page", 0);
        } else {            //페이지가 2 이상
            paramMap.put("page", (page - 1) * size);
        }
        paramMap.put("size", size);

        List<BdDto> boardList = boardMapper.getBoardList(paramMap);
        Pagination pagination = new Pagination(
                boardMapper.getBoardTotalCount(paramMap),
                page,
                size,
                10
        );

        return Header.OK(boardList, pagination);
    }

    public Header<BdDto> getBoardOne(Long idx) {
        return Header.OK(boardMapper.getBoardOne(idx));
    }

    public Header<BdDto> insertBoard(BoardSaveDto boardSaveDto) {
        BdDto bdDto = boardSaveDto.bdDto();
        if (boardMapper.insertBoard(bdDto) > 0) {
            return Header.OK(bdDto);
        } else {
            return Header.ERROR("ERROR");
        }
    }

    public Header<BdDto> updateBoard(BoardSaveDto boardSaveDto) {
        BdDto entity = boardSaveDto.bdDto();
        if (boardMapper.updateBoard(entity) > 0) {
            return Header.OK(entity);
        } else {
            return Header.ERROR("ERROR");
        }
    }

    public Header<String> deleteBoard(Long idx) {
        if (boardMapper.deleteBoard(idx) > 0) {
            return Header.OK();
        } else {
            return Header.ERROR("ERROR");
        }
    }
}
