
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
    <title>T-Space | About</title>
</head>
<body>
    <header class="main-nav about-nav">
        
    <div class="nav-left">
        <a href="index.php"><img class="nav-logo" src="images/Tspacelogo/Tspace_logo_white.png" alt="logo"></a>
        <a href="index.php" class="nav-title"><h1><span>T</span>-SPACE</h1></a>
    </div>
        <nav>
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
        echo   $loginSession;
        echo   '</a></li>';

        }
           ?>
        </ul>
        
    </nav>
    </header>
    <div class="menu">
            <span class="menu-global menu-top"></span>
            <span class="menu-global menu-middle"></span>
            <span class="menu-global menu-bottom"></span>
          </div>
<main class="about-contact">
    <div class="about-section">
        <h1 class="about-header">ABOUT T-SPACE</h1>
        <img src="images/aboutimg/about-img02.jpg" alt="">
        <h1 class="about-title">OUR AIM IS TO PROVIDE HIGHLY QUALITATIVE, FASHIONABLE PRODUCTS THAT ARE BUILT TO LAST.</h1>
    <article>
        <p>T-space surfaces the best new products, every day. It's a place for product-loving enthusiasts to share and geek out about the latest headphone, watches, glasses, and tech creations.</p>
        <p>Our headphones are designed with Supreme Sound® and premium materials. Pick up a pair of noise isolating over-ear headphones for uninterrupted music sessions, or find a pair of on-ear headphones built for durable, long lasting comfort and style.</p>
        <p>We believe that buying glasses should be easy and fun. It should leave you happy and good-looking, with money in your pocket.</p>
        <p>Also,buying watches in T-space ,you enjoy the benefit of a quick, stress-free process working with a team that is responsive, honest and transparent. We are constantly gathering sales and listing data to stay up-to-date on the market to give you the most accurate price for your watch</p>
    </article>
        <img src="images/aboutimg/about-img01.jpg" alt="">
        <img src="images/aboutimg/about-img03.jpg" alt="">
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