<?php 
    include "conexion.php";

    $id = $_POST['id'];
    

    $query = "SELECT * FROM pedidos WHERE (client_id = '$id') AND (estado != 3)";
    $result = mysqli_query($conn,$query);

    $pedido = array();
    while($row = mysqli_fetch_assoc($result)){
    array_push($pedido, $row);
    }
    echo json_encode($pedido);
    




?>