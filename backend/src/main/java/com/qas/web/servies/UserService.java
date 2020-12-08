package com.qas.web.servies;

import com.qas.web.domains.User;

import java.util.List;

public interface UserService {
    public boolean join(User request);
    public boolean login(User request);
    public boolean idCheck(String id);
    public List<User> getAllList(String id);
    public void update(int userIdx);
    public void delete(int userIdx);
}