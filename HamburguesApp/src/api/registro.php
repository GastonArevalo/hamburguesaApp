<?php

    include "conexion.php";
    $result = 0;
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $pass = $_POST['pass'];
    $adress = $_POST['adress'];

    $query = "SELECT * FROM users WHERE email = '$email'";

    $result = mysqli_query($conn,$query);

    // print_r($result);

    if(mysqli_num_rows($result) == 1){
        echo json_encode(['status' => false]);
      }
      elseif(mysqli_num_rows($result) == 0){
          $query = "INSERT INTO users (user,pass,adress,phone,lastname,email) VALUES ('$name','$pass','$adress','$phone','$lastname','$email')";
          $result = mysqli_query($conn,$query);
          echo json_encode(['status' => true]);
      }
    





?>