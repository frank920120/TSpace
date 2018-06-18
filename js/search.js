


$( document ).ready(function() {
   // glass items
    let glassesArray=[
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

    for(let i = 0 ; i<glassesArray.length;i++){
        let itemDiv=$(`<div class="item-box" id="glass0${i+1}"></div>`)
        let glasstext=$(`<div class="glass-text"></div>`);
        let glassheader = $(`<h3 class="glass-name">${glassesArray[i].name}</h3>`).appendTo(glasstext);
        let glasscolor = $(`<p class="glass-color">${glassesArray[i].color}</p>`).appendTo(glasstext);
        let image =$(`<img src="${glassesArray[i].img}" alt="${glassesArray[i].alt}">`);
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

//watch items
let watchesArray=[
    {
        name:"MOVADO",
        color:"Black",
        img:"images/shopimg/watches/movado-museum-black-dial-black-leather-strap-men_s-watch-2100002_5.jpg",
        alt:"MOVADO"
    },
    {
        name:"CITIZEN",
        color:"Eco Drive Blue Angels",
        img:"images/shopimg/watches/citizen-eco.jpg",
        alt:"CITIZEN"
    },
    {
        name:"TISSOT",
        color:"Quickster Sliver White",
        img:"images/shopimg/watches/tissot-quickster-silver-white-dial-brown-leather-men_s-watch-t0954103603700_5.jpg",
        alt:"TISSOT"
    },
    {
        name:"SEIKO",
        color:"Prospex Kinetic GMT Black",
        img:"images/shopimg/watches/seiko-prospex-kinetic-black-dial-stainless-steel-men_s-watch.jpg",
        alt:"SEIKO"
    },
    {
        name:"CASIO",
        color:"G-Shock Black",
        img:"images/shopimg/watches/casio-g-shock-black-dial-tan-resin-strap-mens-watch.jpg",
        alt:"CASIO"
    },
    {
        name:"ROLEX",
        color:"Yacht-Master Automatic Black",
        img:"images/shopimg/watches/rolex-yacht-master-automatic-black.jpg",
        alt:"ROLEX"
    },
    {
        name:"MOVADO",
        color:"Bold Chronograph Black",
        img:"images/shopimg/watches/movado-bold-chronograph-black-dial-black.jpg",
        alt:"MOVADO"
    },
    {
        name:"TAG HEUER",
        color:"Carrera Chronograph Automatic",
        img:"images/shopimg/watches/tag-heuer-carrera-chronograph-automatic.jpg",
        alt:"TAG HEUER"
    }
]

for(let i = 0 ; i<watchesArray.length;i++){
    let itemDiv=$(`<div class="item-box" id="watch0${i+1}"></div>`)
    let watchtext=$(`<div class="watch-text"></div>`);
    let watchheader = $(`<h3 class="watch-name">${watchesArray[i].name}</h3>`).appendTo(watchtext);
    let watchcolor = $(`<p class="watch-color">${watchesArray[i].color}</p>`).appendTo(watchtext);
    let image =$(`<img src="${watchesArray[i].img}" alt="${watchesArray[i].alt}">`);
    let itembutton =$(`<div class="item-button-group"></div>`);
    let infobtn = $(`<span class="item-info-btn" title="More information"></span>`);
    let far = $(`<i class="far fa-file-alt"></i>`).appendTo(infobtn);
    let addcartbtn=$(`<span class="item-addcart-btn" title="Add to cart"></span>`);
    let fas = $(`<i class="fas fa-cart-plus"></i>`).appendTo(addcartbtn);
    let cover =$(`<div class="cover"></div>`);
    infobtn.appendTo(itembutton);
    addcartbtn.appendTo(itembutton);
    watchtext.appendTo(itemDiv);
    image.appendTo(itemDiv);
    itembutton.appendTo(itemDiv);
    cover.appendTo(itemDiv);
    itemDiv.appendTo($('.watch-show'));
}







    $('.item-box').hover(function(){
        $(this).find('.cover').slideDown('slow');
        $(this).find('.item-button-group').fadeIn('slow');
    
    },function(){
        $(this).find('.cover').fadeOut('fast');
        $(this).find('.item-button-group').fadeOut('fast');
    });


});