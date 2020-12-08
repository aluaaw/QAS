package com.qas.web.mappers;

import com.qas.web.domains.Board;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardMapper {
    public void save(Board board);
    public List<Board> findAll();
    public Board findOne(int postIdx);
    public int plusCount(int postIdx);
    public void update(int postIdx, String title, String content);
    public void deleteAll(int postIdx);
    public List<Board> findTitle(String searchValue);
}