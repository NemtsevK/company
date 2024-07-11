<?php
/**
 * Подключение к серверу
 * @return mysqli
 */
function connectToServer()
{
    $config = require 'config.php';
    $connect = new mysqli($config['host'], $config['user'], $config['password'], $config['database']);

    if ($connect->connect_error) {
        die('Ошибка соединения с БД: ' . $connect->connect_error);
    }

    return $connect;
}

/**
 * Очистка от запрещённых символов
 * @param string $text
 * @param int $length
 * @return string|null
 */
function clean($text, $length)
{
    if (isset($text)) {
        $text = trim($text); //удаление пробелов в начале и конце
        $text = stripslashes($text); //удаление экранированных символов
        $text = strip_tags($text); //удаление html и php тегов
        $text = htmlspecialchars($text); //преобразование специальных символов в HTML-сущности
        $text = preg_replace('/[^a-zа-яё0-9-.,!@#$%^&*()№?+~_=;:}{«»\n\t\s]/ui', '', $text);

        $string_length = iconv_strlen($text, 'UTF-8');

        return $string_length > $length ? iconv_substr($text, 0, $length, 'UTF-8') : $text;
    }

    return null;
}
