<?php
    include "conexion.php";

    session_start();
    $id = $_SESSION['user']['id'];

    $total = 0;
    $hamburguesas = json_decode($_POST['hamburguesa'], true);

    foreach($hamburguesas as $hamburguesa){
        $price = $hamburguesa['price']['price'];
        $total = $total + $price;
    }

    
    if($id != ""){
        $query = "INSERT INTO pedidos (client_id, burgers_count, total) VALUES ( $id,'$_POST[cantidad]', $total)";
        mysqli_query($conn,$query);
        
        $id_pedido = mysqli_insert_id($conn);
        foreach ($hamburguesas as $hamburguesa) {
            $size = $hamburguesa['size'];
            $price = $hamburguesa['price']['price'];
            $bacon = $hamburguesa['bacon'];
            $tomate = $hamburguesa['tomate'];
            $lechuga = $hamburguesa['lechuga'];
            $caramelizada = $hamburguesa['caramelizada'];
            $morada = $hamburguesa['morada'];
            $chile = $hamburguesa['chile'];
            $champ = $hamburguesa['champ'];
            $salsa = $hamburguesa['salsa'];
            $pan = $hamburguesa['pan'];
            $query = "INSERT INTO detail (id_pedido,size,bacon,tomate,lechuga,cebollac,cebollam,chile,champ,salsa,pan,price) VALUES ($id_pedido,'$size', '$bacon', '$tomate', '$lechuga', '$caramelizada', '$morada', '$chile', '$champ', '$salsa', '$pan', '$price')";
            mysqli_query($conn, $query);
        
        }
    }
    
    // echo json_encode(true);
    // echo json_encode(['status' => true, 'total' => $total]);



?>