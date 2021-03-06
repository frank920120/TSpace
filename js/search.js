


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
    $('#search-input-glasses').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('.glasses-search-btn').click();//Trigger search button click event
        }
    });
$('.glasses-search-btn').click(function(){
    $('.glasses-show').html('');
let GlassesSearchVal=$('#search-input-glasses').val().toLowerCase();
let counter=0;
for(let i = 0 ; i<glassesArray.length;i++){
   if(glassesArray[i].name.toLowerCase().indexOf(GlassesSearchVal)==-1&&glassesArray[i].color.toLowerCase().indexOf(GlassesSearchVal)==-1){
        counter++;
    }
   if(glassesArray[i].name.toLowerCase().indexOf(GlassesSearchVal)!=-1||glassesArray[i].color.toLowerCase().indexOf(GlassesSearchVal)!=-1){
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
        if(counter==glassesArray.length){

            let warning = $(`<div class="warning"><h1 class="warninginfo">0 results for ${GlassesSearchVal} </h1></div>`);
            let searchtip=$(`<div class="searchtip"></div>`);
            let tipslist=$(`
            <h3>Search Tips</h3>
            <ul>
                        <li>Make sure words are spelled correctly</li>
                        <li>Try using different keywords</li>
                        <li>Remove filters to broaden your search</li>
            </ul>`);
            
            warning.appendTo($('.glasses-show'));
            tipslist.appendTo(searchtip);
            searchtip.appendTo($('.glasses-show'));
        }
}
$('.item-box').hover(function(){
    $(this).find('.cover').slideDown('slow');
    $(this).find('.item-button-group').fadeIn('slow');

},function(){
    $(this).find('.cover').fadeOut('fast');
    $(this).find('.item-button-group').fadeOut('fast');
});
});
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
$('#search-input-watches').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('.watches-search-btn').click();//Trigger search button click event
    }
});
$('.watches-search-btn').click(function(){
    $('.watch-show').html('');
let watchesSearchVal=$('#search-input-watches').val().toLowerCase();
let counter=0;
for(let i = 0 ; i<watchesArray.length;i++){
    if(watchesArray[i].name.toLowerCase().indexOf(watchesSearchVal)==-1&&watchesArray[i].color.toLowerCase().indexOf(watchesSearchVal)==-1){
        counter++;
    }
if(watchesArray[i].name.toLowerCase().indexOf(watchesSearchVal)!=-1||watchesArray[i].color.toLowerCase().indexOf(watchesSearchVal)!=-1){
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
if(counter==watchesArray.length){

    let warning = $(`<div class="warning"><h1 class="warninginfo">0 results for ${watchesSearchVal} </h1></div>`);
    let searchtip=$(`<div class="searchtip"></div>`);
    let tipslist=$(`
    <h3>Search Tips</h3>
    <ul>
                <li>Make sure words are spelled correctly</li>
                <li>Try using different keywords</li>
                <li>Remove filters to broaden your search</li>
    </ul>`);
    
    warning.appendTo($('.watch-show'));
    tipslist.appendTo(searchtip);
    searchtip.appendTo($('.watch-show'));
}
}
$('.item-box').hover(function(){
    $(this).find('.cover').slideDown('slow');
    $(this).find('.item-button-group').fadeIn('slow');

},function(){
    $(this).find('.cover').fadeOut('fast');
    $(this).find('.item-button-group').fadeOut('fast');
});
});

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

// headphone items

let headphoneArray=[
    {
        name:"Beats Studio3 Wireless",
        color:"Rose Gold",
        img:"images/shopimg/headphones/rosegold_V2.jpg",
        alt:"Beats Studio3 Wireless"
    },
    {
        name:"Beats Studio3 Wireless",
        color:"Sliver",
        img:"images/shopimg/headphones/silver_V2.jpg",
        alt:"Beats Studio3 Wireless"
    },
    {
        name:"Beats Studio3 Wireless",
        color:"White",
        img:"images/shopimg/headphones/white_V2.jpg",
        alt:"Beats Studio3 Wireless"
    },
    {
        name:"Beats Studio3 Wireless",
        color:"Jet Black",
        img:"images/shopimg/headphones/jetblack_V2.jpg",
        alt:"Beats Studio3 Wireless"
    },
    {
        name:"Beats Studio3 Wireless",
        color:"Gold",
        img:"images/shopimg/headphones/gold_V2.jpg",
        alt:"Beats Studio3 Wireless"
    },
    {
        name:"Beats EP",
        color:"Blue",
        img:"images/shopimg/headphones/ML9D2-large-thrqtrrght.jpg",
        alt:"Beats EP"
    },
    {
        name:"Beats EP",
        color:"Red",
        img:"images/shopimg/headphones/ML9D2-large-thrqtrrghtRed.jpg",
        alt:"Beats EP"
    },
    {
        name:"Powerbeats3 Wireless",
        color:"Black",
        img:"images/shopimg/headphones/black-2_2016-11-04_A_V2.jpg",
        alt:"Powerbeats3 Wireless"
    }
]
$('#search-input-headphone').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('.headphone-search-btn').click();//Trigger search button click event
    }
});
$('.headphone-search-btn').click(function(){
    $('.headphone-show').html('');
let headphoneSearchVal=$('#search-input-headphone').val().toLowerCase();
let counter=0;
for(let i = 0 ; i<headphoneArray.length;i++){
    if(headphoneArray[i].name.toLowerCase().indexOf(headphoneSearchVal)==-1&&headphoneArray[i].color.toLowerCase().indexOf(headphoneSearchVal)==-1){
        counter++;
    }
if(headphoneArray[i].name.toLowerCase().indexOf(headphoneSearchVal)!=-1||headphoneArray[i].color.toLowerCase().indexOf(headphoneSearchVal)!=-1){
  
    let itemDiv=$(`<div class="item-box" id="headphone0${i+1}"></div>`)
    let headphonetext=$(`<div class="headphone-text"></div>`);
    let headphoneheader = $(`<h3 class="headphone-name">${headphoneArray[i].name}</h3>`).appendTo(headphonetext);
    let headphonecolor = $(`<p class="headphone-color">${headphoneArray[i].color}</p>`).appendTo(headphonetext);
    let image =$(`<img src="${headphoneArray[i].img}" alt="${headphoneArray[i].alt}">`);
    let itembutton =$(`<div class="item-button-group"></div>`);
    let infobtn = $(`<span class="item-info-btn" title="More information"></span>`);
    let far = $(`<i class="far fa-file-alt"></i>`).appendTo(infobtn);
    let addcartbtn=$(`<span class="item-addcart-btn" title="Add to cart"></span>`);
    let fas = $(`<i class="fas fa-cart-plus"></i>`).appendTo(addcartbtn);
    let cover =$(`<div class="cover"></div>`);
    infobtn.appendTo(itembutton);
    addcartbtn.appendTo(itembutton);
    headphonetext.appendTo(itemDiv);
    image.appendTo(itemDiv);
    itembutton.appendTo(itemDiv);
    cover.appendTo(itemDiv);
    itemDiv.appendTo($('.headphone-show'));
}
if(counter==headphoneArray.length){

    let warning = $(`<div class="warning"><h1 class="warninginfo">0 results for ${headphoneSearchVal} </h1></div>`);
    let searchtip=$(`<div class="searchtip"></div>`);
    let tipslist=$(`
    <h3>Search Tips</h3>
    <ul>
                <li>Make sure words are spelled correctly</li>
                <li>Try using different keywords</li>
                <li>Remove filters to broaden your search</li>
    </ul>`);
    
    warning.appendTo($('.headphone-show'));
    tipslist.appendTo(searchtip);
    searchtip.appendTo($('.headphone-show'));
}
}
$('.item-box').hover(function(){
    $(this).find('.cover').slideDown('slow');
    $(this).find('.item-button-group').fadeIn('slow');

},function(){
    $(this).find('.cover').fadeOut('fast');
    $(this).find('.item-button-group').fadeOut('fast');
});
});

for(let i = 0 ; i<headphoneArray.length;i++){
    let itemDiv=$(`<div class="item-box" id="headphone0${i+1}"></div>`)
    let headphonetext=$(`<div class="headphone-text"></div>`);
    let headphoneheader = $(`<h3 class="headphone-name">${headphoneArray[i].name}</h3>`).appendTo(headphonetext);
    let headphonecolor = $(`<p class="headphone-color">${headphoneArray[i].color}</p>`).appendTo(headphonetext);
    let image =$(`<img src="${headphoneArray[i].img}" alt="${headphoneArray[i].alt}">`);
    let itembutton =$(`<div class="item-button-group"></div>`);
    let infobtn = $(`<span class="item-info-btn" title="More information"></span>`);
    let far = $(`<i class="far fa-file-alt"></i>`).appendTo(infobtn);
    let addcartbtn=$(`<span class="item-addcart-btn" title="Add to cart"></span>`);
    let fas = $(`<i class="fas fa-cart-plus"></i>`).appendTo(addcartbtn);
    let cover =$(`<div class="cover"></div>`);
    infobtn.appendTo(itembutton);
    addcartbtn.appendTo(itembutton);
    headphonetext.appendTo(itemDiv);
    image.appendTo(itemDiv);
    itembutton.appendTo(itemDiv);
    cover.appendTo(itemDiv);
    itemDiv.appendTo($('.headphone-show'));
}





    $('.item-box').hover(function(){
        $(this).find('.cover').slideDown('slow');
        $(this).find('.item-button-group').fadeIn('slow');
    
    },function(){
        $(this).find('.cover').fadeOut('fast');
        $(this).find('.item-button-group').fadeOut('fast');
    });


});