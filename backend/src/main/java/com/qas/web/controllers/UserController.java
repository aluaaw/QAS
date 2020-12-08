package com.qas.web.controllers;

import com.qas.web.domains.User;
import com.qas.web.servies.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RequestMapping("/user")
@RestController
public class UserController {
    final UserService userService;

    @PostMapping("/join")
    public boolean join(@RequestBody User request) {
        return userService.join(request);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User request) {
        return userService.login(request);
    }

    @GetMapping("/{id}")
    public boolean idCheck(@PathVariable String id) {
        return userService.idCheck(id);
    }

    @GetMapping("/list/{id}")
    public List<User> getAllList(@PathVariable String id) {
        return userService.getAllList(id);
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
