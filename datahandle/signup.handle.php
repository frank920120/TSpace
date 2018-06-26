<?php
    require_once('connect.php');
    $username = $_POST['username'];
    $password =$_POST['password'];
    $email = $_POST['email'];

$usernameOverlap="SELECT * FROM signup WHERE username = '$username'";
$overlapQuery=mysqli_query($con,$usernameOverlap);
$usernameRow = mysqli_num_rows($overlapQuery);

if($usernameRow>=1){
    echo '<script>
    window.location.href="../signup.php";
    alert("username already exsited !");
    </script>';
    exit;
}
else{

$dataSql ="INSERT INTO signup(username,password,email)VALUES('$username','$password','$email')";
$dataquery = mysqli_query($con,$dataSql);
if($dataquery){

        echo '<script>
        window.location.href="../signup.php";
        alert("sucess signed up");
        </script>';
        exit;
}else{

        echo mysqli_error($con);


}
}

?>