<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: X-Requested-With");

    session_start();

    // if ($_SESSION["config"] == true) {
        $conn = include "connect.php";

        // if ($_GET["id"]) {
        //     $sql = "SELECT * FROM " . $_GET["search"] . " WHERE " . $_GET["row"] . " = " . $_GET["id"];

        // } else if ($_GET["getAttr"]) {
        //     $sql = "SELECT * FROM " . $_GET["search"];

        // } else {
        //     $sql = "SELECT * FROM " . $_GET["search"] . " WHERE " . $_GET["row"] . " LIKE '%" . $_GET["nameSearch"] . "%'";
        // }

        $sEmail = mysql_escape_string('wizrdfly@gmail.com');
        $sPass = mysql_escape_string('p.]tVyZ@$Jk7$yF');

        $sql = "SELECT `id`, `name`, `email`, `pass`, `config`, `items` FROM `stg-users` WHERE `email` = '" . $sEmail . "' AND `pass` = '" . $sPass . "'";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $returnData = array();

            while ($row = $result->fetch_assoc()) {
                array_push($returnData, $row);
            };

            $obj->message = "wQUOTE Pesquisa realizada com sucesso! - " . $result->num_rows . " Registro(s)";
            $obj->result = $returnData;
            $obj->search = $_GET["name"];
            $obj->query = $sql;
            $obj->alert = null;
            $obj->status = true;

        } else {
            //$obj->message = "Ocorreu um erro na pesquisa!";
            $obj->message = "wQUOTE Pesquisa realizada com sucesso! - " . $result->num_rows . " Registro(s)";
            $obj->result = '';
            $obj->search = $_GET["name"];
            $obj->query = $sql;
            $obj->alert = $conn->error;
            $obj->status = true;
        }

        $conn->close();

        echo json_encode($obj);
    // }
?>