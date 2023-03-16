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

-- --------------------------------------------------------

--
-- Структура таблицы `company_list`
--

CREATE TABLE `company_list` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `company_list`
--

INSERT INTO `company_list` (`company_id`, `company_name`, `phone`, `email`, `description`) VALUES
(1, 'ispring', '123456', 'ispring@mail.com', 'hqtuhqwtuhjkflaf'),
(2, 'Microsoft', '098-765', 'main@microsoft.com', 'gakyhawuiyanvbclk21 '),
(3, 'Google', '456-124-152', 'mail@google.com', 'aolwrfyuqahfcbnc'),
(4, '1', '23', 't@t.ru', 'fadfasfasfasf'),
(5, 'asfasfasfasf', '3562626', 'mail@gmail.ru', 'asggasasgsgd'),
(6, '124124', '51252', '52152@mail.ru', '125512'),
(7, '12124', '124124', '124124@m.r', '4124'),
(8, 'asgasgasg', 'asgasg', 'mai@mail.ru', 'agsasgg'),
(9, 'sdgsdg', 'sdgsdg', 'mail@m.r', 'gaddgdg'),
(10, 'sdgsdg', 'sdgsdg', 'mail@m.r', 'gaddgdg'),
(11, 'asgasg', 'agsgas', 'mail@m.r', 'asgasgasg'),
(12, 'asggas', 'agasg', 'mail@m.r', 'asggasasgag'),
(13, 'agsag', 'asgasg', 'mail@m.r', 'yqyww');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `company_list`
--
ALTER TABLE `company_list`
  ADD PRIMARY KEY (`company_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `company_list`
--
ALTER TABLE `company_list`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
