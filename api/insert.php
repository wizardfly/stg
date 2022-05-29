<?php
    session_start();

    if ($_SESSION["config"] == true) {
        $conn = include "connect.php";

        if ($_GET["insert"] === 'budget') {
            $sql = "INSERT INTO `budget` (`id`, `id_client`, `full_value`, `note`, `status`, `created`, `modifield`) VALUES (NULL, '" . $_GET['id_client'] . "', '" . $_GET['full_value'] . "', '" . $_GET['note'] . "', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

        } else if ($_GET["insert"] === 'client') {
            $sql = "INSERT INTO `client` (`id`, `name`, `last_name`, `email`, `phone_1`, `note`, `status`, `created`, `modifield`) VALUES (NULL, '" . $_GET['name'] . "', '" . $_GET['last_name'] . "', '" . $_GET['email'] . "', '" . $_GET['phone_1'] . "', '" . $_GET['note'] . "', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

        } else if ($_GET["insert"] === 'list') {
            $sql = "INSERT INTO `list` (`id`, `id_product`, `id_budget`, `amount`, `unit_value`, `full_value`, `note`, `status`, `created`, `modifield`) VALUES (NULL, '" . $_GET['id_product'] . "', '" . $_GET['id_budget'] . "', '" . $_GET['amount'] . "', '" . $_GET['unit_value'] . "', '" . $_GET['full_value'] . "', '" . $_GET['note'] . "', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

        } else if ($_GET["insert"] === 'product') {
            $sql = "INSERT INTO `product` (`id`, `name`, `amount`, `cost_value`, `sell_value`, `code`, `note`, `status`, `created`, `modifield`) VALUES (NULL, '" . $_GET['name'] . "', '" . $_GET['amount'] . "', '" . $_GET['cost_value'] . "', '" . $_GET['sell_value'] . "', '" . $_GET['code'] . "', '" . $_GET['note'] . "', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
        }

        if ($conn->query($sql) === TRUE) {
            $obj->message = "Dados inseridos com sucesso! - ID:" . $conn->insert_id;
            $obj->insertId = $conn->insert_id;
            $obj->query = $sql;
            $obj->alert = null;
            $obj->status = true;

        } else {
            $obj->message = "Erro ao inserir dados!";
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