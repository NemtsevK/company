<?php
require_once('utils.php');

$is_valid = isset($_POST['company_name']) && $_POST['phone'] && $_POST['email'] && $_POST['description'];

if ($is_valid === false) {
    exit;
}

$connect = connectToServer();
$company_name = clean($_POST['company_name'], 100);
$phone = clean($_POST['phone'], 30);
$email = clean($_POST['email'], 100);
$description = Clean($_POST['description'], 200);

$query_insert = "INSERT INTO company_list (name, phone, email, description)
    VALUES ('$company_name','$phone','$email','$description')";

$result = mysqli_query($connect, $query_insert);

header('Content-Type: application/json');
echo json_encode($result);

$connect->close();
