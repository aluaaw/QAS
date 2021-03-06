create table user (
user_idx int auto_increment not null,
user_id varchar(40) not null,
user_password varchar(40) not null,
user_email varchar(40) not null,
insert_date datetime not null,
update_date datetime not null,
constraint user_pk primary key (user_idx)
)

select *
from user
;
drop table user
;

create table board (
user_idx int not null,
post_idx int auto_increment not null,
post_title varchar(100) not null,
post_content text not null,
img_file varchar(300),
insert_date datetime not null,
update_date datetime not null,
tag_content varchar(100) not null,
post_like bit not null,
post_like_count int not null,
comment_count int not null,
constraint board_pk primary key (post_idx),
constraint board_fk foreign key (user_idx) references user(user_idx)
)

select *
from board
;
drop table board
;

create table comment (
post_idx int not null,
comment_idx int auto_increment not null,
comment_content varchar(100) not null,
comment_like bit not null,
comment_like_count int not null,
insert_date datetime not null,
update_date datetime not null,
user_id varchar(40) not null,
constraint comment_pk primary key (comment_idx),
constraint comment_fk foreign key (post_idx) references board(post_idx)
)

select *
from comment
;
drop table comment
;