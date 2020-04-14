<?php
    include "conexion.php";

    session_start();
    $id = $_SESSION['user']['id'];

    $query = "SELECT * FROM pedidos WHERE client_id = $id";

    $result = mysqli_query($conn,$query);

    $pedidos = array();
    while($row = mysqli_fetch_assoc($result)){
    array_push($pedidos, $row);
    }
    // print_r($pedidos);
    // echo json_encode($pedidos);
    // echo json_encode(['status' => true, 'username' => $row['burgers_count'], 'id' => $row['id']]);
     echo json_encode($pedidos);
    
?>