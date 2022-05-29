<?php
    $conn = include "connect.php";

    $sql = "SELECT name, email, title, subtitle, window, nav, color, background FROM config";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        return $result->fetch_assoc();

    } else {
        return false;
    }

    $conn->close();
?>