package com.qas.web.domains;

import lombok.Data;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Data
@Component @Lazy
public class User {
    protected Integer userIdx;
    protected String id;
    protected String password;
    protected Timestamp createDate;
    protected Timestamp updateDate;
}