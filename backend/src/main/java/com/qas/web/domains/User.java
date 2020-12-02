package com.qas.web.domains;

import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Lazy
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Component
public class User {
    protected int userIdx;
    protected String id, password, name;
    protected LocalDateTime createDate, updateDate;
}