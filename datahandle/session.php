<?php
require_once('connect.php');
session_start();
if(isset($_SESSION['username'])){
$user_check=$_SESSION['username'];
$userSql = "SELECT username FROM signup WHERE username = '$user_check'";
$queryUser = mysqli_query($con,$userSql);
$row = mysqli_fetch_assoc($queryUser);
$loginSession = $row['username'];
if(!isset($loginSession)){

    mysqli_close($con);

}
}

?>