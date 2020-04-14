<?php
    include "conexion.php";

    $id = $_POST['id'];

    if($id == '4'){

        $query = "SELECT * FROM pedidos WHERE (estado != 3)";
        $result = mysqli_query($conn,$query);

        

        $pedido = array();
            while($row = mysqli_fetch_assoc($result)){
                array_push($pedido, $row);
                }
            echo json_encode($pedido);















    }else{
        echo "Credencial Administrador Requerida";
    }





?>
