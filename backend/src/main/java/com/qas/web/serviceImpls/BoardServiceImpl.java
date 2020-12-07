package com.qas.web.serviceImpls;

import com.qas.web.domains.Board;
import com.qas.web.mappers.BoardMapper;
import com.qas.web.servies.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService {
    final BoardMapper boardMapper;

    @Override
    public void write(Board request) {
        boardMapper.save(request);
    }

    @Override
    public List<Board> getAllList() {
        return boardMapper.findAll();
    }

    @Override
    public Board findOne(int postIdx) {
        int view = boardMapper.plusCount(postIdx);
        Board board = new Board();
        board.setView(view);
        return boardMapper.findOne(postIdx);
    }

    @Override
    public void update(int postIdx, Board request) {
        String title = request.getTitle();
        String content = request.getContent();
        boardMapper.update(postIdx, title, content);
    }

    @Override
    public void delete(int postIdx) {
        boardMapper.deleteAll(postIdx);
    }

    @Override
    public List<String> search(String searchValue) {
        String[] searchList = boardMapper.findTitle(searchValue);
        System.out.println(Arrays.toString(searchList));
        List<String> resultSearchList = new ArrayList<>();
        for (int i = 0; i < searchList.length; i++) {
            if(searchList[i].contains(searchValue)) {
                resultSearchList.add(searchList[i]);
            }
        }
        return resultSearchList;
    }
}
