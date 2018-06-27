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
    <link rel="stylesheet" href="styles/contactstyles.css">
    <link rel="stylesheet" href="styles/styles.css">
    <link href="https://fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>T-Space | Contact</title>
</head>
<body>
    <header class="main-nav contact-nav">
    
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
        echo 'Welcome,'.$loginSession;
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

<main class="contact-container">

            <div class="title">
                <h1>FIND T-SPACE</h1>
            </div>

            <div class="map" id="tMap"></div>
            <div class="contact-info">
                <div class="address-box">
                    <h3><i class="fas fa-address-book"></i>ADDRESS</h3>
                    <p>555 Seymour Street</p>
                    <p>
                    Vancouver, British Columbia
                    </p>
                    <p>
                    V6B 3H6 , Canada
                    </p>
                </div>
                <div class="phone-box">
                    <h3><i class="fas fa-phone"></i>PHONE</h3>
                    <p>Telephone: 604-434-5734</p>
                    <p>Toll-free (Can/US): 1-866-434-1610</p>
                </div>
                <div class="email-box">
                    <h3><i class="fas fa-envelope"></i>EMAIL US</h3>
                    <form class="mail-form" action="#0" method="post" name="mail-form">
                           
                                    <div class="input input--haruki">
                                            <input class="input__field input__field--haruki" type="text" id="Name" />
                                            <label class="input__label input__label--haruki" for="Name">
                                                <div class="input__label-content input__label-content--haruki">Name</div>
                                            </label>
                                    </div>
                           
                          
                                    <div class="input input--haruki">
                                            <input class="input__field input__field--haruki" type="email" id="Email" />
                                            <label class="input__label input__label--haruki" for="Email">
                                                <div class="input__label-content input__label-content--haruki">Email</div>
                                            </label>
                                        </div>
                           
                            
                                    <div class="input input--haruki">
                                            <input class="input__field input__field--haruki" type="text" id="Phone" />
                                            <label class="input__label input__label--haruki" for="Phone">
                                                <div class="input__label-content input__label-content--haruki">Phone Number</div>
                                            </label>
                                        </div>
                                    
                                        <div class="textarea-container">
                                                <label for="email-content" class="textarea-title" title="Click to Open Textarea">Content</label>
                                                <textarea name="email-content" class="email-content" id="email-content">
            
                                                </textarea>
                                        </div>

                                        <div class="radio-group">
                                                <label>Do you mind telling us about your gender?</label>
                                                <input type="radio" name="gender" id="gender-male" value="male" />
                                                <label for="gender-male"><i class="fas fa-mars"></i>Male</label>
                                                <input type="radio" name="gender" id="gender-female" value="female" />
                                                <label for="gender-female"><i class="fas fa-venus"></i>Female</label>
                                                <input type="radio" name="gender" id="gender-unknown" value="unknown" checked="checked" />
                                                <label for="gender-unknown"><i class="fas fa-lock"></i>Secret</label>
                                        </div>
                                        <div class="select-group">
                                                <label>Do you mind telling us about your age?</label>
                                                <select class="select-age" id="age" name="age" >
                                                <option value="Prefer Not to Answer" selected>Prefer Not to Answer</option>
                                                <option value="Under 18">Under 18</option>
                                                <option value="18-24">18-24</option>
                                                <option value="25-34">25-34</option>
                                                <option value="35-44">35-44</option>
                                                <option value="45 or Above">45 or Above</option>
                                                </select>
                                        </div>
                                        <div class="checkbox-container">
                                                <label>Which way would you like to receive our feedback?</label>
                                                <input type="checkbox" id="feedback-way-01" name="feedback-way[]" value="email" checked />
                                                <label for="feedback-way-01">Email</label>
                                                <input type="checkbox" id="feedback-way-02" name="feedback-way[]" value="phone"/> 
                                                <label for="feedback-way-02">Phone</label>
                                        </div>
                                   
                                   
                         
                            <span>
                                <button type="submit" class="send-btn" >SEND</button>
                            </span>
                    </form>
                </div>
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
                    <li class="login"><a href="#0">LOG IN</a></li>
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
        <script type="text/javascript" src="js/base.js" ></script>
        <script type="text/javascript" src="js/login.js" ></script>
        <script src="formscripts/jquery.validate.min.js"></script>
        <script src="formscripts/login-vaildations.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcpwa__zCe9O5tNjbciRKqETdYO1ngx1Q"></script>
        <script src="js/classes.js"></script>
        <script type="text/javascript" src="js/contact.js" ></script>
        <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
        </body>
        </html>