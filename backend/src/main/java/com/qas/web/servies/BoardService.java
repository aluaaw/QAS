package com.qas.web.servies;

import com.qas.web.domains.Board;

import java.util.List;

public interface BoardService {
    public void write(Board request);
    public List<Board> getAllList();
    public Board findOne(int postIdx);
    public void update(int postIdx);
    public void delete(int postIdx);
}