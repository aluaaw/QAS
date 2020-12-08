package com.qas.web.mappers;

import com.qas.web.domains.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    public void save(User user);
    public User findUserById(User user); //로그인
    public String findById(String id);
    public List<User> findAll(String id);
    public void update(int userIdx);
    public void deleteAll(int userIdx);
}