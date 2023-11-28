package com.plgrim.mall.web.react.sample.hannah.controller;

import com.plgrim.mall.web.react.sample.hannah.dto.BoardSaveDto;
import com.plgrim.mall.web.react.sample.hannah.repository.BdDto;
import com.plgrim.mall.web.react.sample.hannah.repository.BdMapper;
import com.plgrim.mall.web.react.sample.hannah.service.BdService;
import com.plgrim.mall.web.react.sample.hannah.util.Header;
import com.plgrim.mall.web.react.sample.hannah.util.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BdController {
    private final BdMapper boardMapper;
    private final BdService boardService;


    //Http Get 방식으로 주소 가장 뒤 /brd로 접근
    @GetMapping("/brd")
    Header<List<BdDto>> getBoardList(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, Search search) {
        return boardService.getBoardList(page, size, search);
    }

    //idx의 데이터 1개를 조회한다.
    @GetMapping("/brd/{idx}")
    Header<BdDto> getBoardOne(@PathVariable Long idx) {
        return boardService.getBoardOne(idx);
    }

    // 데이터 작성
    @PostMapping("/brd/write")
    Header<BdDto> createBoard(@RequestBody BoardSaveDto boardSaveDto) {
        return boardService.insertBoard(boardSaveDto);
    }

    // 데이터 업데이트
    @PatchMapping("/brd/update")
    Header<BdDto> updateBoard(@RequestBody BoardSaveDto boardSaveDto) {
        return boardService.updateBoard(boardSaveDto);
    }

    // 데이터 삭제
    @DeleteMapping("/brd/{idx}")
    Header<String> deleteBoard(@PathVariable Long idx) {
        return boardService.deleteBoard(idx);

    }

}