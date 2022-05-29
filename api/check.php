<?php
	session_start();

	// if (isset($_SESSION['config'])) {
	// 	foreach($_SESSION['config'] as $key => $value ){
	// 	    echo $key."\t=>\t".$value."\n";
	// 	}
	// }

    if ($_SESSION["config"] == true) {
		// $obj->config->username = "Douglas Caetano";
		// $obj->config->email = "dougyoukai@hotmail.com";
		// $obj->config->background = "#ff0052";
		$obj->message = "Usuário conectado!";
	    $obj->alert = null;
		$obj->status = true;

    	echo json_encode($obj);
    }
?>