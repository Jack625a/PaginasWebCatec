<?php
    $mysqli=new mysqli("localhost","root","","paginasweb");
    if($mysqli->connect_error){
        echo "Fallo en la conexion Verificar...".$mysqli->connect_error
    }
?>