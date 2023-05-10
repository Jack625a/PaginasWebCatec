<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP BASICO</title>
    <link rel="stylesheet" href="estilosPHP.css">
</head>
<body>
<h1>Componentes Dinamicos</h1>
<div class="cardViews">
<?php
    //Conexion a la base de datos
    $mysqli=new mysqli("localhost","root","","paginasweb");
    if ($mysqli->connect_errno){
        echo "Error al conectar con la base de datos: ".$mysqli->connect_error;
    }
    //Consulta para obtener los datos
    $query="SELECT * FROM productos";
    $result=$mysqli->query($query);
    //Ciclo Repetitivo para los componentes dinamicos
    while($row=$result->fetch_assoc()){
?>
    <div class="card">
    <img src="<?php echo $row['image']; ?>" class="card-img">
    <div class="card-body">
        <h5 class="card-title">
        <?php 
            echo $row['name'];
        ?>
        </h5>
        <p class="card-text">
        <?php 
            echo $row['description'];
        ?>
        </p>
        <p class="card-text">
        <?php 
            echo $row['price'];
        ?>
        </p>
    </div>
    </div> 
<?php } ?>
</div>
</body>
</html>