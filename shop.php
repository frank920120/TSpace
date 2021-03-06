<?php

require_once('datahandle/session.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="js/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="js/slick/slick-theme.css"/>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/shopstyles.css">
    <link rel="stylesheet" href="styles/styles.css">
    <title>T-Space | Shop</title>
</head>
<body>
    <header class="main-nav shop-nav">
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


    <main>
        <section class="shop-banner">
            <img src="images/shopimg/shop-banner.png" alt="watch glass camera">
            <h1>CHOOSE YOUR <span>T</span>-STYLE</h1>
        </section>
        <section class="glasses-container" id="section-glass">
            <div class="glasses-banner">
                <div class="glasses-banner-left">
                    <div class="banner-text">
                            <h2>T-GLASSES</h2>
                            <p class="shop-subtitle">Glasses inspired by men, thoughtfully designed by our in-house team.</p>
                    </div>

                </div>
                <div class="glasses-banner-right">
                    <img src="images/shopimg/women-glasses.jpg" alt="men wear glasses">
                </div>
            </div>
            <section class="shop-search">

                <div class="shop-search-bar">
                    <span class="input input--haruki">
                        <input class="input__field input__field--haruki" type="text" id="search-input-glasses" />
                        <label class="input__label input__label--haruki" for="search-input-glasses">
                            <span class="input__label-content input__label-content--haruki"><i class="fas fa-search"></i>Search Glasses</span>
                        </label>
                    </span>
                    
                </div>
                <div>
                    <a class="glasses-search-btn search-btn" href="#0">SEARCH</a>
                </div>
            </section>
            <div class="glasses-show">
            </div>
        </section>
        <section class="watches-container" id="section-watch">
                <div class="watches-banner">
                    <div class="watches-banner-left">
                        <div class="banner-text">
                                <h2>T-WATCHES</h2>
                                <p class="shop-subtitle">All the things that make us uniquely individual.</p>
                        </div>
    
                    </div>
                    <div class="watches-banner-right">
                        <img src="images/shopimg/men-watch.jpg" alt="men wear glasses">
                    </div>
                </div>
                <section class="shop-search">

                    <div class="shop-search-bar">
                        <span class="input input--haruki">
                            <input class="input__field input__field--haruki" type="text" id="search-input-watches" />
                            <label class="input__label input__label--haruki" for="search-input-watches">
                                <span class="input__label-content input__label-content--haruki"><i class="fas fa-search"></i>Search Watches</span>
                            </label>
                        </span>
                        
                    </div>
                    <div>
                        <a class="watches-search-btn search-btn" href="#0">SEARCH</a>
                    </div>
                </section>
                <div class="watch-show">
                </div>
            </section>
            <section class="headphone-container" id="section-headphone">
                    <div class="headphone-banner">
                        <div class="headphone-banner-left">
                            <div class="banner-text">
                                    <h2>T-HEADPHONES</h2>
                                    <p class="shop-subtitle">A bunch of our frames are now available in some different, seriously fresh colours. If you want it come get it.</p>
                            </div>
        
                        </div>
                        <div class="headphone-banner-right">
                            <img src="images/shopimg/men-headphone.jpg" alt="men wear headphone">
                        </div>
                    </div>
                    <section class="shop-search">

                        <div class="shop-search-bar">
                            <span class="input input--haruki">
                                <input class="input__field input__field--haruki" type="text" id="search-input-headphone" />
                                <label class="input__label input__label--haruki" for="search-input-headphone">
                                    <span class="input__label-content input__label-content--haruki"><i class="fas fa-search"></i>Search Headphone</span>
                                </label>
                            </span>
                            
                        </div>
                        <div>
                            <a class="headphone-search-btn search-btn" href="#0">SEARCH</a>
                        </div>
                    </section>
                    <div class="headphone-show">      
                    </div>
            </section>
    
            <div class="side-btn-group">
              
              
                <a class="side-btn side-menu" href="#section-glass" title="Glasses"><i class="fas fa-glasses"></i></a>
                <a class="side-btn side-menu" href="#section-watch" title="Watches"><i class="far fa-clock"></i></a>
                <a class="side-btn side-menu" href="#section-headphone" title="Headphones"><i class="fas fa-headphones"></i></a>
                <a class="side-btn side-menu" id="hide-btn" href="#0" title="Close Menu"><i class="fas fa-minus"></i></a>
                <a class="side-btn side-btn" id="show-btn" href="#0" title="Open Menu"><i class="fas fa-plus"></i></a>
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
    <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
    <script type="text/javascript" src="js/shop.js" ></script>
    <script type="text/javascript" src="js/search.js"></script>
    <script type="text/javascript" src="js/login.js" ></script>
    <script src="formscripts/jquery.validate.min.js"></script>
        <script src="formscripts/login-vaildations.js"></script>
    <script src="js/classes.js"></script>
    <script src="js/base.js"></script>
    
    </body>
    </html>