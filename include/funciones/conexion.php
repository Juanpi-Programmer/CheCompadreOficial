<?php 
    $conn = new mysqli('localhost', 'root', '', 'checompadre');

    if($conn->connect_error){
        echo $error -> $conn->connect_error;
    }
?>