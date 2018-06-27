<?php
require_once('configure.php');
$con = mysqli_connect(HOST,USERNAME,PASSWORD,DATABASE);
if(!$con){
    die("Connection failed: " . mysqli_error($con));
}
?>