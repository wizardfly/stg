<?php
    session_start();

    if ($_SESSION["config"] == true) {
        $conn = include "connect.php";

        $sql = "DELETE FROM " . $_GET["search"] . " WHERE " . $_GET["row"] . " = " . $_GET["id"];

        if ($conn->query($sql) === TRUE) {
            $obj->message = "Dados deletados com sucesso!";
            //$obj->insertId = $conn->insert_id;
            $obj->query = $sql;
            $obj->alert = null;
            $obj->status = true;

        } else {
            $obj->message = "Erro ao deletar dados!";
            $obj->query = $sql;
            $obj->alert = $conn->error;
            $obj->status = false;
        }

        $conn->close();

        echo json_encode($obj);
    }
?>