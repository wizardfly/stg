<?php
	session_start();

    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);

    $data = include "access.php";

    if (($_GET["email"] == $data[0]) and ($_GET["pass"] == $data[1])) {

        $obj->config = include "config.php";
        $obj->message = "Realizado com sucesso!";
        $obj->alert = null;
        $obj->status = true;

		$_SESSION["config"] = true;
        //$_SESSION["config"] = $obj;

    } else {
    	$obj->message = "Dados inválidos!";
        $obj->alert = null;
        $obj->status = false;
    }

    echo json_encode($obj);
?>