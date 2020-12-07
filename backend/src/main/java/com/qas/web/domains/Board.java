package com.qas.web.domains;

import lombok.*;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Lazy
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Board {
    protected int postIdx, view;
    protected String title, content;
    protected LocalDateTime createDate, updateDate;
}
