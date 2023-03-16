<?php


function Clean($value,$pattern=null,$length=0) {
    if(isset($string)){
        $string = trim($string); //удаление пробелов в начале и конце
        $string = stripslashes($string); //удаление экранированных символов
        $string = strip_tags($string); //удаление html и php тегов
        $string = htmlspecialchars($string); //преобразование специальных символов в HTML-сущности
        $value =preg_replace('/[^a-zа-яё0-9-.,!@#$%^&*()№?+~_=;:}{«»\n\t\s]/ui', '', $value);//Список допустимых символов
        if($length){
            $string_length=iconv_strlen($string, "UTF-8");
            if($string_length>$length){
                $string= iconv_substr($string, 0, $length, "UTF-8").$end;
            }  
            
            $string=CutString($string,$length,false);//отрезать строку
        }
    }
    return $value;
}

function ConnectToServer(){
    $connect = mysqli_connect("localhost", "root", "", "TestDb_Nemtsev");

    if (!$connect){
        echo "Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error();
        exit;
    }
    mysqli_set_charset($connect, "utf8");

    return $connect;
}

function Alert($text){
    $OUTPUT="<meta charset='UTF-8' />\n";
    $OUTPUT.="<script>alert('$text');</script>";
    return $OUTPUT;
}

