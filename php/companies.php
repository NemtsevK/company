<?php
require_once('utils.php');

$connect = connectToServer();

$query_companies = "SELECT company_id AS id
    ,name
    ,phone
    ,email
    ,description
    FROM company_list";

$result_companies = $connect->query($query_companies);

$companies = [];

if ($result_companies->num_rows > 0) {
    while ($row = $result_companies->fetch_assoc()) {
        $companies[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($companies);

$connect->close();
