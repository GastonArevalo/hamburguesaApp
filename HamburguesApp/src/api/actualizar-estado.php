<?php

    include "conexion.php";

    $id = $_POST['id'];
    $ids = $_POST['ids'];
    $value = $_POST['value'];


    if($id == '4'){

    $query = "UPDATE pedidos SET estado = '$value' WHERE id = '$ids'";
    $result = mysqli_query($conn,$query);

        

    // $pedido = array();
    //      while($row = mysqli_fetch_assoc($result)){
    //          array_push($pedido, $row);
    //          }

         echo json_encode(['status' => true]);







    }else{
        echo "Credencial Administrador Requerida";

    }


?>