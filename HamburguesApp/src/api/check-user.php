<?php
    
    session_start();

    if(isset($_SESSION['user'])){
        echo json_encode(true);
    }else{
        echo json_encode(false);
    }



?>