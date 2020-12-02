package com.qas.web.serviceImpls;

import com.qas.web.domains.User;
import com.qas.web.mappers.UserMapper;
import com.qas.web.servies.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    final UserMapper userMapper;

    @Override
    public void join(User request) {
        userMapper.save(request);
    }

    @Override
    public User login(User request) {
        return null;
    }

    @Override
    public String idCheck(String id) {
        String userId = userMapper.findUserByUserId(id);
        if (userId.equals(id)) {
            return "NO";
        } else {
            return "YES";
        }
    }

    @Override
    public void update(int userIdx) {

    }

    @Override
    public void delete(int userIdx) {

    }
}
