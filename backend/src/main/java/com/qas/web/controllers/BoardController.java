package com.qas.web.controllers;

import com.qas.web.domains.Board;
import com.qas.web.servies.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RequestMapping("/board")
@RestController
public class BoardController {
    final Board board;
    final BoardService boardService;

    @PostMapping
    public void write(@RequestBody Board request) {
        boardService.write(request);
        }

    @GetMapping
    public List<Board> getAllList() {
        return boardService.getAllList();
    }

    @GetMapping("/{postIdx}")
    public Board getBoard(@PathVariable int postIdx) {
        return boardService.findOne(postIdx);
    }

    @PutMapping("/{postIdx}")
    public void update(@PathVariable int postIdx, @RequestBody Board request) {
        boardService.update(postIdx, request);
    }

    @DeleteMapping("/{postIdx}")
    public void delete(@PathVariable int postIdx) {
        boardService.delete(postIdx);
    }

    @GetMapping("/search")
    public List<Board> search(@RequestParam String searchValue) {
        return boardService.search(searchValue);
    }
}