<?php
    session_start();

    if ($_SESSION["config"] == true) {
        $conn = include "connect.php";

        //$sql = "INSERT INTO client(id, name, cpf, rg, street, number, district, city, state, phone, email, status) VALUES (NULL, '" . $_GET["name"] . "', '" . $_GET['cpf'] . "', '" . $_GET['rg'] . "', '" . $_GET['street'] . "', '" . $_GET['number'] . "', '" . $_GET['district'] . "', '" . $_GET['city'] . "', '" . $_GET['state'] . "', '" . $_GET['phone'] . "', '" . $_GET['email'] . "', '" . $_GET['status'] ."');";

        if ($_GET["update"] === 'config') {
            $sql = "UPDATE config SET name = '" . $_GET['name'] . "', window = '" . $_GET['boxActive'] . "', title = '" . $_GET['title'] . "', subtitle = '" . $_GET['subtitle'] . "', nav = '" . $_GET['nav'] . "' WHERE id = 1";
        }


/*
id
email
password
color
background
*/


        if ($conn->query($sql) === TRUE) {
            //$obj->message = "Dados atualizados com sucesso! - ID:" . $conn->insert_id;
            //$obj->insertId = $conn->insert_id;
            $obj->message = "Dados atualizados com sucesso!";
            $obj->query = $sql;
            $obj->alert = null;
            $obj->status = true;

        } else {
            $obj->message = "Erro ao atualizar dados!";
            $obj->query = $sql;
            $obj->alert = $conn->error;
            $obj->status = false;
        }

        $conn->close();

        echo json_encode($obj);
    } else {
        echo "NOT HAVE CONFIG";
    }
?>