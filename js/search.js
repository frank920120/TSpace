/* <div class="item-box" id="glass01">
<div class="glass-text">
    <h3 class="glass-name">Morris</h3>
    <p class="glass-color">Hunter Green</p>
</div>
<img src="images/shopimg/glasses/Morris-Hunter-green-Front.jpg" alt="Morris">
<div class="item-button-group">
    <span class="item-info-btn" title="More information"><i class="far fa-file-alt"></i></span>
    <span class="item-addcart-btn" title="Add to cart"><i class="fas fa-cart-plus"></i></span>
</div>
<div class="cover"></div>
</div> */


$( document ).ready(function() {
   
    let itemArray=[
        {
            name:"Morris",
            color:"Hunter Green",
            img:"images/shopimg/glasses/Morris-Hunter-green-Front.jpg",
            alt:"Morris"
        },
        {
            name:"Quentin",
            color:"Flamenco",
            img:"images/shopimg/glasses/Quentin-Flamengo-Front.jpg",
            alt:"Quentin"
        },
        {
            name:"Grace",
            color:"Marigold",
            img:"images/shopimg/glasses/Grace-Marigold-Front.jpg",
            alt:"Grace"
        },
        {
            name:"Paul",
            color:"Goledn Brown",
            img:"images/shopimg/glasses/Paul-Golden-brown-Front.jpg",
            alt:"Paul"
        },
        {
            name:"Pierce",
            color:"Champagne",
            img:"images/shopimg/glasses//PIERCE-CHAMPAGNE-FRONT.jpg",
            alt:"Pierce"
        },
        {
            name:"Wright",
            color:"Satin Silver",
            img:"images/shopimg/glasses/WRIGHT-SATIN-SILVER-FRONT.jpg",
            alt:"Wright"
        },
        {
            name:"Ross",
            color:"Golden Brown",
            img:"images/shopimg/glasses/ROSS-GOLDEN-BROWN-FRONT.jpg",
            alt:"Ross"
        },
        {
            name:"Max Metal Temple",
            color:"Lilac",
            img:"images/shopimg/glasses/Max-metal-temple-Lilac-Front.jpg",
            alt:"Max Metal Temple"
        }
    ]

    for(let i = 0 ; i<itemArray.length;i++){
        let itemDiv=$(`<div class="item-box" id="glass0${i+1}"></div>`)
        let glasstext=$(`<div class="glass-text"></div>`);
        let glassheader = $(`<h3 class="glass-name">${itemArray[i].name}</h3>`).appendTo(glasstext);
        let glasscolor = $(`<p class="glass-color">${itemArray[i].color}</p>`).appendTo(glasstext);
        let image =$(`<img src="${itemArray[i].img}" alt="${itemArray[i].alt}">`);
        let itembutton =$(`<div class="item-button-group"></div>`);
        let infobtn = $(`<span class="item-info-btn" title="More information"></span>`);
        let far = $(`<i class="far fa-file-alt"></i>`).appendTo(infobtn);
        let addcartbtn=$(`<span class="item-addcart-btn" title="Add to cart"></span>`);
        let fas = $(`<i class="fas fa-cart-plus"></i>`).appendTo(addcartbtn);
        let cover =$(`<div class="cover"></div>`);
        infobtn.appendTo(itembutton);
        addcartbtn.appendTo(itembutton);
        glasstext.appendTo(itemDiv);
        image.appendTo(itemDiv);
        itembutton.appendTo(itemDiv);
        cover.appendTo(itemDiv);
        itemDiv.appendTo($('.glasses-show'));
    }






    $('.item-box').hover(function(){
        $(this).find('.cover').slideDown('slow');
        $(this).find('.item-button-group').fadeIn('slow');
    
    },function(){
        $(this).find('.cover').fadeOut('fast');
        $(this).find('.item-button-group').fadeOut('fast');
    });


});