<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: X-Requested-With");

    // $servername = "sql205.epizy.com";
    // $username = "epiz_23223984";
    // $password = "eGvHU3L6ux";
    // $dbname = "epiz_23223984_sc";
	$servername = "sql105.epizy.com";
    $username = "epiz_31249297";
    $password = "UuPVz2PllDNuCZK";
    $dbname = "epiz_31249297_w295";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
?>