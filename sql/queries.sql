CREATE
DATABASE test_db DEFAULT CHARACTER SET 'utf8' DEFAULT COLLATE 'utf8_general_ci';

CREATE TABLE company_list
(
  company_id   int(11) AUTO_INCREMENT PRIMARY KEY,
  name         VARCHAR(100),
  phone        VARCHAR(30),
  email        VARCHAR(100),
  description  VARCHAR(200)
);

INSERT INTO company_list (name, phone, email, description)
VALUES ('ispring', '123456', 'ispring@mail.com', 'Hello'),
       ('Microsoft', '098-765', 'main@microsoft.com', 'Hello '),
       ('Google', '456-124-152', 'mail@google.com', 'Hello');
