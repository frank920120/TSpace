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
    ]

    for(let i = 0 ; i<itemArray.length;i++){
        let itemDiv=$(`<div class="item-box" id="glass0${i+1}"></div>`)
        let glasstext=$('<div>').addClass("glass-text");
        let glassheader = $(`<h3 class="glass-name">${itemArray[i].name}</h3>`).appendTo(glasstext);
        let glasscolor = $(`<p class="glass-color">${itemArray[i].color}</p>`).appendTo(glasstext);
        let image =$(`<img src="${itemArray[i].img}" alt="${itemArray[i].alt}">`);
        let itembutton =$('<div>').addClass("item-button-group");
        let infobtn = $(`<span class="item-info-btn" title="More information"></span>`);
        let far = $(`<i class="far fa-file-alt"></i>`).appendTo(infobtn);
        let addcartbtn=$(`<span class="item-addcart-btn" title="Add to cart"></span>`);
        let fas = $(`<i class="fas fa-cart-plus"></i>`).appendTo(addcartbtn);
        let cover =$('<div>').addClass('cover');
        infobtn.appendTo(itembutton);
        addcartbtn.appendTo(itembutton);
        glasstext.appendTo(itemDiv);
        image.appendTo(itemDiv);
        itembutton.appendTo(itemDiv);
        cover.appendTo(itemDiv);
        itemDiv.appendTo($('.glasses-show'));
    }









});