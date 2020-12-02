package com.qas.web.serviceImpls;

import com.qas.web.domains.Board;
import com.qas.web.mappers.BoardMapper;
import com.qas.web.servies.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
        return boardMapper.findOne(postIdx);
    }

    @Override
    public void update(int postIdx) {
        boardMapper.update(postIdx);
    }

    @Override
    public void delete(int postIdx) {
        boardMapper.deleteAll(postIdx);
    }
}
