$(document).ready(function() {
//menu
    $('.menu').click(function(){

        $('.nav-right').slideToggle();
    
    });
    $(window).resize(function(){
      if(window.innerWidth > 768) {
          $('.nav-right').removeAttr("style");
          $('.menu span').removeClass('menu-top-click');
          $('.menu span').removeClass('menu-middle-click');
          $('.menu span').removeClass('menu-bottom-click');
      }
  });
    var Menu = {
      
        el: {
          ham: $('.menu'),
          menuTop: $('.menu-top'),
          menuMiddle: $('.menu-middle'),
          menuBottom: $('.menu-bottom')
        },
        
        init: function() {
          Menu.bindUIactions();
        },
        
        bindUIactions: function() {
          Menu.el.ham
              .on(
                'click',
              function(event) {
              Menu.activateMenu(event);
              event.preventDefault();
            }
          );
        },
        
        activateMenu: function() {
          Menu.el.menuTop.toggleClass('menu-top-click');
          Menu.el.menuMiddle.toggleClass('menu-middle-click');
          Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
        }
      };
      
      Menu.init();
    
    });



