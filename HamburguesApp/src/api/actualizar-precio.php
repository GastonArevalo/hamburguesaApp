<?php
    include "conexion.php";

    $S = $_POST['s'];
    $M = $_POST['m'];
    $L = $_POST['l'];
    $XL = $_POST['xl'];
    if($S<1000 && $S>1){
        $query = "UPDATE price SET price = '$S' WHERE size = 0";
        $result = mysqli_query($conn,$query);
    }
    if($M<1000 && $M>1){
        $query = "UPDATE price SET price = '$M' WHERE size = 1";
        $result = mysqli_query($conn,$query);
    }
    if($L<1000 && $L>1){
        $query = "UPDATE price SET price = '$L' WHERE size = 2";
        $result = mysqli_query($conn,$query);
    }
    if($XL<1000 && $XL>1){
        $query = "UPDATE price SET price = '$XL' WHERE size = 3";
        $result = mysqli_query($conn,$query);
    }
    
    
    
    

    echo json_encode(['status' => true]);

?>