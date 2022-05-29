<?php
    session_start();
    session_unset();
    session_destroy();

    $obj->message = "Usuário desconectado!";
    $obj->status = true;

    echo json_encode($obj);
?>