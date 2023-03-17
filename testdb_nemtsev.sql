-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 17 2023 г., 00:42
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testdb_nemtsev`
--

CREATE DATABASE TestDb_Nemtsev DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci


-- --------------------------------------------------------

--
-- Структура таблицы `company_list`
--

CREATE TABLE TestDb_Nemtsev.Company_list (
  company_id int(11) NOT NULL AUTO_INCREMENT,
  company_name varchar(100) NULL,
  phone varchar(30) NULL,
  email varchar(100) NULL,
  description varchar(200) NULL,
  PRIMARY KEY (company_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы Company_list
--

INSERT INTO Company_list (company_name, phone, email, description) VALUES
('ispring', '123456', 'ispring@mail.com', 'hqtuhqwtuhjkflaf'),
('Microsoft', '098-765', 'main@microsoft.com', 'gakyhawuiyanvbclk21 '),
('Google', '456-124-152', 'mail@google.com', 'aolwrfyuqahfcbnc'),
('1', '23', 't@t.ru', 'fadfasfasfasf'),
('asfasfasfasf', '3562626', 'mail@gmail.ru', 'asggasasgsgd'),
('124124', '51252', '52152@mail.ru', '125512'),
('12124', '124124', '124124@m.r', '4124'),
('asgasgasg', 'asgasg', 'mai@mail.ru', 'agsasgg'),
('sdgsdg', 'sdgsdg', 'mail@m.r', 'gaddgdg');



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
