<?php
require_once('php/Extensions.php');

$connect = ConnectToServer();
$TABLE = null;

if(isset($_GET['email'])){
    $email = Clean($_GET['email']);

    $query_select = "SELECT company_id
        ,company_name
        ,phone
        ,email
        ,description 
        FROM Company_list
        WHERE email LIKE '$email'";
    
    $answer = mysqli_query($connect,$query_select);
    
    $num_rows = mysqli_num_rows($answer);
    if($num_rows){
        $count = 1;
        while($row = mysqli_fetch_assoc($answer)){
            
            $company_id = $row['company_id'];
            $company_name = $row['company_name'];
            $phone = $row['phone'];
            $email = $row['email'];
            $description = $row['description'];
        
            $TABLE.="<tr>";
            $TABLE.="<td>$count</td>";
            $TABLE.="<td>$company_name</td>";
            $TABLE.="<td>$phone</td>";
            $TABLE.="<td>$email</td>";
            $TABLE.="<td>$description</td>";
            $TABLE.="</tr>";
            $count++;
        }
    } 
    else {
        echo Alert("Данные отсутствуют!");
        header("Refresh: 0; url='index.html#become-partner'");
        exit;
    }

} else {
    echo Alert("Данные отсутствуют!");
    header("Refresh: 0; url='index.html#become-partner'");
    exit;
}

?>
<table>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>iSpring</title>
    <link type="image/x-icon" rel="shortcut icon" href="img/favicon.ico">
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"> -->
    <link rel="stylesheet" href="css/table.css">
</head>
<body>
    <main>
        <table class="table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Company name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <?=$TABLE; ?>
            </tbody>
        </table>
    </main>

</body>
    
</html>

<?php

mysqli_close($connect);