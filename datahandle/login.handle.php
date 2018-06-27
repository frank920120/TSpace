<?php
session_start();
   require_once('connect.php'); 
    $username=mysqli_real_escape_string($con,$_POST['username']);
    $password=mysqli_real_escape_string($con,$_POST['password']);
    $error = "incorrect username and password";
$loginUser="SELECT * FROM signup WHERE username = '$username' AND password='$password'";
$userQuery = mysqli_query($con,$loginUser);
$userRow = mysqli_num_rows($userQuery);
if($userQuery){
    if($userRow==1){
         $_SESSION['username']=$username;
    }
    else{
       echo "incorrect username and password";
    }
}


?>