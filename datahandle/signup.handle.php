<?php
    require_once('connect.php');
 
    $username = $_POST['Signusername'];
    $password =$_POST['Signpassword'];
    $email = $_POST['Signemail'];
   
$usernameOverlap="SELECT * FROM signup WHERE username = '$username'";
$overlapQuery=mysqli_query($con,$usernameOverlap);
$usernameRow = mysqli_num_rows($overlapQuery);

if($usernameRow>=1){
    echo  'unsuccess';
    exit;
}
else{

$dataSql ="INSERT INTO signup(username,password,email)VALUES('$username','$password','$email')";
$dataquery = mysqli_query($con,$dataSql);
if($dataquery){
        echo 'success';
        exit;
}else{
        echo mysqli_error($con);
}

    }

?>