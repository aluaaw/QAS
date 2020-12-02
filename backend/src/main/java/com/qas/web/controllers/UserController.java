package com.qas.web.controllers;

import com.qas.web.domains.User;
import com.qas.web.servies.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RequestMapping("/user")
@RestController
public class UserController {
    final UserService userService;

    @PostMapping("/join")
    public void join(@RequestBody User request) {
        userService.join(request);
    }

    @PostMapping("/login")
    public User login(@RequestBody User request) {
        return userService.login(request);
    }

    @GetMapping("/{userId}")
    public String idCheck(@PathVariable String id) {
        return userService.idCheck(id);
    }

    @PutMapping("/{userIdx}")
    public void update(@PathVariable int userIdx) {
        userService.update(userIdx);
    }

    @DeleteMapping("/{userIdx}")
    public void delete(@PathVariable int userIdx) {
        userService.delete(userIdx);
    }
}
