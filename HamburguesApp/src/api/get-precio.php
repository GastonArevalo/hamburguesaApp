<?php  
    include "conexion.php";

        $query = "SELECT price FROM price WHERE size = 0";
        $result = mysqli_query($conn,$query);
        $sprice = mysqli_fetch_assoc($result);

        $query = "SELECT price FROM price WHERE size = 1";
        $result = mysqli_query($conn,$query);
        $mprice = mysqli_fetch_assoc($result);

        $query = "SELECT price FROM price WHERE size = 2";
        $result = mysqli_query($conn,$query);
        $lprice = mysqli_fetch_assoc($result);

        $query = "SELECT price FROM price WHERE size = 3";
        $result = mysqli_query($conn,$query);
        $xlprice = mysqli_fetch_assoc($result);

        

        $precio = array();
        
        
        array_push($precio, $sprice);
        array_push($precio, $mprice);
        array_push($precio, $lprice);
        array_push($precio, $xlprice);
        
        // echo json_encode($precio);
        echo json_encode(['S' => $sprice, 'M' => $mprice, 'L' => $lprice, 'XL' => $xlprice]);




                            
                                

    


?>