<?php
    require_once('connect.php');
 
    $username = mysqli_real_escape_string($con,$_POST['Signusername']);
    $password =mysqli_real_escape_string($con,$_POST['Signpassword']);
    $email = mysqli_real_escape_string($con,$_POST['Signemail']);
   
$usernameOverlap="SELECT * FROM signup WHERE username = '$username'";
$overlapQuery=mysqli_query($con,$usernameOverlap);
$usernameRow = mysqli_num_rows($overlapQuery);
$emailOverlap="SELECT * FROM signup WHERE email = '$email'";
$overlapEQuery=mysqli_query($con,$emailOverlap);
$emailRow = mysqli_num_rows($overlapEQuery);
if($usernameRow>=1){
    echo  'same username';
    exit;
}else if($emailRow>=1){

    echo  'same email';
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