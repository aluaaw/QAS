package com.qas.web.servies;

import com.qas.web.domains.User;

public interface UserService {
    public void join(User request);
    public User login(User request);
    public String idCheck(String id);
    public void update(int userIdx);
    public void delete(int userIdx);
}