package com.qas.web.servies;

import com.qas.web.domains.Board;

import java.util.List;

public interface BoardService {
    public void write(Board request);
    public List<Board> getAllList(String searchValue);
    public Board findOne(int postIdx);
    public void update(int postIdx, Board request);
    public void delete(int postIdx);
}