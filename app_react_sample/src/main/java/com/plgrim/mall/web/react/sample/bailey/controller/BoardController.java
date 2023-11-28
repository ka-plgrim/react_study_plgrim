package com.plgrim.mall.web.react.sample.bailey.controller;

import com.plgrim.mall.web.react.sample.bailey.dto.BoardDto;
import com.plgrim.mall.web.react.sample.bailey.dto.BoardResult;
import com.plgrim.mall.web.react.sample.bailey.repository.BoardMapper;
import com.plgrim.mall.web.react.sample.bailey.service.BoardService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Log4j2
public class BoardController {

    private final BoardMapper boardMapper;
    private final BoardService boardService;

    @GetMapping(value = "/boards", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BoardResult> getBoards(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        BoardResult boardList = boardService.getBoardList(page, size);
        return ResponseEntity.ok(boardList);
    }

    @GetMapping("/board/{idx}")
    public ResponseEntity<BoardDto> getBoard(@PathVariable Integer idx) {
        BoardDto board = boardMapper.findBoard(idx);
        return ResponseEntity.ok(board);
    }

    @PostMapping(value = "/board/json-object", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> jsonObject(@RequestBody BoardDto board) {
        log.info("boardDto: {}", board.toString());
        return ResponseEntity.ok("board");
    }

    @GetMapping(value = "/board/request-param", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> requestParam(Model model, HttpServletRequest request) {
        log.info("requestParam boardDto: {}", request.getParameter("idx"));
        return ResponseEntity.ok("requestParam");
    }
}
