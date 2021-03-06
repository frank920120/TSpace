<?php

require_once('datahandle/session.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="js/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="js/slick/slick-theme.css"/>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>T-Space | Home</title>
</head>
<body>
    <header class="main-nav">
        
    <div class="nav-left">
        <a href="index.php"><img class="nav-logo" src="images/Tspacelogo/Tspace_logo_white.png" alt="logo"></a>
        <a href="index.php" class="nav-title"><h1><span>T</span>-SPACE</h1></a>
    </div>
        <ul class="nav-right">
           <li><a href="index.php">Home</a></li>
           <li><a href="shop.php">Shop</a></li>
           <li><a href="about.php">About</a></li>
           <li><a href="contact.php">Contact</a></li>
           <?php
        if(!(isset($_SESSION['username']))){
          echo '<li class="login"><a href="#0">Login In</a></li>';
        }
        else{
        echo  '<li class="welcome"><a href="datahandle/logout.php">';  
        echo $loginSession;
        echo   '</a></li>';
        }
           ?>
        </ul>
    </header>
    <div class="menu">
            <span class="menu-global menu-top"></span>
            <span class="menu-global menu-middle"></span>
            <span class="menu-global menu-bottom"></span>
          </div>
<div class="home-banner">
<div class="bannerwarp">
    <div class="home-slideshow">
        <img src="images/banner02.jpg" alt="banner02">
        <img src="images/banner03.jpg" alt="banner03">
        <img src="images/banner01.jpg" alt="banner01">
        <img src="images/banner04.jpg" alt="banner04">
        <img src="images/banner05.jpg" alt="banner04">

     </div>
<div class="textover"> 
    <div class="textover-content">
        <h1>DEFINING TRENDING</h1>
        <h3>NEW PRODUCTS NOW AVAILABLE</h3>
        <a href="shop.html">SHOP NOW</a>
    </div> 
</div>
</div>
</div>
<main class="main-container">
    <div class="home-services">
        <h1 class="service-title">ALWAYS ON <span class="Tspan">T</span>-BENEFITS</h1>
        <div class="service-content service-content01">
            <img src="images/free.png" alt="" class="service-img01">
            <h1>FREE SHIPPING</h1>
            <p>Free shipping no matter where you live in the world. Available with purchases of $50 or more.</p>
        </div>
        <div class="service-content service-content02">
                <img src="images/rocket-ship.png" alt="" class="service-img02">
                <h1>FAST DELIVERY</h1>
                <p>Your order will be delivered to your doorstep in less than one weeks.</p>
            
            </div>
            <div class="service-content service-content03">
                    <img src="images/icon.png" alt="" class="service-img03">
                    <h1>FREE RETURNS</h1>
                    <p>If you’re not satisfied with your purchase, return or exchange it free of charge within 30 days of purchase</p>
                </div>

    </div>
    <div class="explore-container">
        <h1>EXPLORE <span class="Tspan">T</span>-SPACE</h1>
    <div class="explore explore01">
            <img src="images/explore01.jpg" alt="">
    <div class="cover"></div>
    </div>
    <div class="explore explore02">
            <img src="images/explore02.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore03">
            <img src="images/explore03.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore04">
            <img src="images/explore04.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore05">
            <img src="images/explore05.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore06">
            <img src="images/explore06.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore07">
            <img src="images/explore07.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore08">
            <img src="images/explore08.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore09">
            <img src="images/explore09.jpg" alt="">
            <div class="cover"></div>
    </div>
    <div class="explore explore10">
            <div class="explore-text01">
                    <h1>200,000</h1>
                    <h1>LIKES</h1>
                </div>
                <div class="cover"></div>
    </div>
    <div class="explore explore11">
            <div class="explore-text02">
                    <img src="images/Tspacelogo/Tspace_logo_black.png" alt="">
                </div>
                <div class="cover"></div>
    </div>


    </div>
    <div class="home-products">
        <div class="products-header">
        <h1>CHOOSE YOUR <span class="Tspan">T</span>-STYLE</h1>
        <h2>We only provide 3 kinds of products.</h2>  
        </div>
        <div class="products products-img02">
            <div class="img-div">
                <img src="images/products-img01.jpg" alt="">
                <div class="products-cover">
                        <a class="product-link" href="shop.html">GLASSES</a>
                        <a class="products-button" href="shop.html">SHOP NOW</a>
                </div>
            </div>
                <!-- <a class="product-link" href="shop.html">GLASSES</a> -->
            </div>
        <div class="products products-img01">
                <div class="img-div">
            <img src="images/products-img02.jpg" alt="">
            <div class="products-cover">
                    <a class="product-link" href="shop.html">WATCHES</a>
                    <a  class="products-button" href="shop.html">SHOP NOW</a>
            </div>
            </div>

        </div>
            <div class="products products-img03">
                    <div class="img-div">
                    <img src="images/products-img03.jpg" alt="">
                    <div class="products-cover">
                            <a class="product-link" href="shop.html">HEADPHONE</a>
                            <a class="products-button" href="shop.html">SHOP NOW</a>
                    </div>
                    </div>

                </div>
    </div>
    <div class="sold-counter-container">
            <h1 class="counter-header"><span class="Tspan">T</span>-MEMBER AROUND THE WORLD</h1>
            <h3 class="counter-title">Product Sold Worldwide</h3>
            <h3 class="date"></h3>
            <!-- <h1 class="plusone">+<span>1</span></h1> -->
            <div class="counter-box" id="counter-box">
                <span class="counter-digit-box"><b>2</b></span><span class="counter-digit-box"><b>0</b></span><span class="counter-digit-box"><b>3</b></span><span class="counter-digit-box"><b>8</b></span><span class="counter-digit-box"><b>0</b></span><span class="counter-digit-box"><b>0</b></span><span>+<b class="plusone">1</b></span>
                
            </div>
            <p>May be you can be the <span>one</span>?</p>
            <a class="product-link login" href="#0">JOIN T-SPACE</a>
        </div>
</main>
<footer>
    <div class="footer-header">
    <span class="left-line"></span>
    <img src="images/Tspacelogo/Tspace_logo_white.png" alt="">
    <h1>T-SPACE</h1>
    <span class="right-line"></span>
</div>
    <div class="bottom-nav">
        <ul>
            <li><a href="index.php">HOME</a></li>
            <li><a href="shop.php">SHOP</a></li>
            <li><a href="about.php">ABOUT</a></li>
            <li><a href="contact.php">CONTACT</a></li>
            <?php
        if(!(isset($_SESSION['username']))){
          echo '<li class="login"><a href="#0">LOGIN IN</a></li>';
        }
        else{
        echo  '<li class="logout"><a href="datahandle/logout.php">LOG OUT</a></li>';  
    
        }
           ?>
        </ul>
    </div>
    <div class="copyright-logo">
       <h3>@ 2018 T-Space.  All rights reserved.</h3>
       <div class="logo">
          <a href="#0"> <img src="images/Tspacelogo/twitter.svg" alt=""></a>
          <a href="#0"><img src="images/Tspacelogo/youtube.svg" alt=""></a>
            <a href="#0"><img src="images/Tspacelogo/facebook.svg" alt=""></a>
                <a href="#0"> <img src="images/Tspacelogo/instagram.svg" alt=""></a>
       </div>
    </div>
</footer>
<div class="login-page">
    <div class="login-cover">

        <div class="login-form">
        <form action="datahandle/login.handle.php" method="POST" id="login">
             <span class="login-error"></span>
                <h1>Log in with your account</h1>
                <label for="username">Username</label>
                <input type="text"  id="username" name="username" placeholder="Enter your username">
                <div class="forgotpw">
                <label for="password">Password</label><a href="#0">Forgot?</a>
                 </div>
                <input type="password" id="password" name="password" placeholder="Enter your password">
                    <div class="checkbox">
                        <div class="rememberpw">
                            <input type="checkbox" name="rememberpw" value="rememberpw" id="rememberpw"><label for="rememberpw">Remember Password</label>  
                        </div>
                        
                    </div>
                <input type="submit" class="submit" value="Log in">
            </form>
            <div class="signup">
            <h3>Don't have an account?</h3>
            <a href="signup.php">Create</a>
            </div>
            <a class="close-login" href="#0">X</a>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="js/slick/slick.min.js"></script>
<script type="text/javascript" src="js/home.js" ></script>
<script type="text/javascript" src="js/base.js" ></script>
<script type="text/javascript" src="js/login.js" ></script>
<script src="formscripts/jquery.validate.min.js"></script>
 <script src="formscripts/login-vaildations.js"></script>
<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
</body>
</html>