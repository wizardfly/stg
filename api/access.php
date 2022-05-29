<?php
    $conn = include "connect.php";

    $sql = "SELECT * FROM config";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $user = array($row["email"], $row["password"]);
        }

    } else {
        return false;
    }

    return $user;

    $conn->close();
?>