package com.qas.web.servies;

import com.qas.web.domains.User;

public interface UserService {
    public void join(User request);
    public boolean login(User request);
    public boolean idCheck(String id);
    public void update(int userIdx);
    public void delete(int userIdx);
}