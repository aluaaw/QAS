package com.qas.web.mappers;

import com.qas.web.domains.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    public void save(User user);
    public String findUserByUserId(String userId);
    public void update(int userIdx);
    public void deleteAll(int userIdx);
}