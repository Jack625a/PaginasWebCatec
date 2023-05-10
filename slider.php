<?php
//Conexion con la base de datos
$mysqli= new mysqli("localhost","root","","paginasweb");
//Obtener los datos para el Slider
$query="SELECT * FROM sliders";
$result=$mysqli->query($query);
//Crear nuestro bucle para mostrar los sliders
while($row=$result->fetch_assoc()){
    ?>
    <div class="slider">
        <img src="<?php echo $row['image']; ?>" class="slider-img" >
        <div class="slider-titulo">
            <h2 class="slider-title">
                <?php echo $row['name']; ?>
            </h2>
            <p class="slider-text">
                <?php echo $row['descritption']; ?>
            </p>
        </div>
    </div> <?php
    }
?>
<link rel="stylesheet" href="estilosPHP.css">
<script src="slider.js"></script>