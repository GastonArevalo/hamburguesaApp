<?php
  include "conexion.php";

  $user = $_POST['user'];
  $pass = $_POST['pass'];


  $query = "SELECT * from users WHERE user = '$user' AND pass = '$pass' ";
  $result = mysqli_query($conn,$query);

  if(mysqli_num_rows($result) == 1){
    session_start();
    // unlink($_SESSION['user']);

    $row = mysqli_fetch_assoc($result);
    $_SESSION['user'] = $row;
    echo json_encode(['status' => true, 'username' => $row['user'], 'id' => $row['id']]);
  }
  else{
      echo json_encode(['status' => false]);
  }






  // $user = json_decode($_POST['user']);
  // $pass = json_decode($_POST['pass']);

    
    
    

  

?>