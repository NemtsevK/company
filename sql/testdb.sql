CREATE
DATABASE TestDb DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci

CREATE TABLE TestDb.Company_list
(
    company_id   int(11) NOT NULL AUTO_INCREMENT,
    company_name varchar(100) NULL,
    phone        varchar(30) NULL,
    email        varchar(100) NULL,
    description  varchar(200) NULL,
    PRIMARY KEY (company_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO Company_list (company_name, phone, email, description)
VALUES ('ispring', '123456', 'ispring@mail.com', 'hqtuhqwtuhjkflaf'),
       ('Microsoft', '098-765', 'main@microsoft.com', 'gakyhawuiyanvbclk21 '),
       ('Google', '456-124-152', 'mail@google.com', 'aolwrfyuqahfcbnc'),
       ('1', '23', 't@t.ru', 'fadfasfasfasf'),
       ('asfasfasfasf', '3562626', 'mail@gmail.ru', 'asggasasgsgd'),
       ('124124', '51252', '52152@mail.ru', '125512'),
       ('12124', '124124', '124124@m.r', '4124'),
       ('asgasgasg', 'asgasg', 'mai@mail.ru', 'agsasgg'),
       ('sdgsdg', 'sdgsdg', 'mail@m.r', 'gaddgdg');
