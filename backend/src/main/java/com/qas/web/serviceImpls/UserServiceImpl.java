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
    public boolean login(User request) {
        User checkUser = userMapper.findUserById(request);
        if (checkUser == null) {
            return false;
        } else {
            if (request.getId() == null || request.getPassword() == null) {
                return false;
            } else if (request.getId().equals(checkUser.getId())) {
                if (request.getPassword().equals(checkUser.getPassword())) {
                    return true;
                }
            } else {
                return false;
            }
            return false;
        }
    }

    @Override
    public boolean idCheck(String id) {
        String userId = userMapper.findUserByUserId(id);
        if (userId.equals(id)) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public void update(int userIdx) {

    }

    @Override
    public void delete(int userIdx) {

    }
}
