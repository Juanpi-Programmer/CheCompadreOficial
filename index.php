<?php 
    //Incluyendo el Header
    include_once 'include/templates/header.php';

?>

<!--Integrantes-->
<?php
    try {
        require_once('include/funciones/conexion.php');

        //Seleccion de la tabla integrantes
        $sql = " SELECT * FROM `integrantes` ";

        $resultados = $conn->query($sql);

    } catch (Exception $e) {
        echo $e->getMenssage();
    }

?>
<div class="cuerpo musicos">
   <div class="list-music">
        <?php while($inte = $resultados->fetch_assoc()):?>

            <div class="cheMusix">
                <img src="img/<?php echo $inte['url_imagen'];?>.jpg" alt="<?php echo $inte['url_imagen'];?>">
                <h3><?php echo utf8_encode($inte['nombre_musico']) . " " . utf8_encode($inte['apellido_musico']);?></h3>
            </div>

        <?php endwhile;?>
    
    </div>
    <div class="title">
        <h2>INTEGRANTES</h2>
    </div>
    
</div>

<?php
     //cerrando conexion
    $conn->close();
?>
<?php
    //Incluyendo los templates
    include_once 'include/templates/bio.php';
    include_once 'include/templates/music.php';
    include_once 'include/templates/picture.php';
    include_once 'include/templates/videos.php';
    include_once 'include/templates/contact.php';
    include_once 'include/templates/footer.php';