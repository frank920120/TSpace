$(document).ready(function() {

// slideshow
    $('.home-slideshow').slick(
        {
            dots: true,
            infinite: true,
            speed:500,
            fade: true,
            cssEase: 'linear',
            autoplay:true,
            prevArrow: null,
            nextArrow: null
        }
      
      );
// counter

let soldCounter = 203800;
    let lastCounterNumberArray = ["2","0","3","8","0","0"]; 
    setInterval(function(){
        const ranNum = (Math.floor(Math.random()*7)+2);
        soldCounter +=ranNum;
        const conuterStringArray = soldCounter.toString().split("");
        let counterNumberText = "";
        for(let i=0;i<conuterStringArray.length;i++)
        {
            // if(i==conuterStringArray.length-1)
            if(conuterStringArray[i]!=lastCounterNumberArray[i])
            {
                counterNumberText += `<span class="counter-digit-box "><b class="digit-jump">${conuterStringArray[i]}</b></span>`;
            }
            else{
                counterNumberText += `<span class="counter-digit-box"><b>${conuterStringArray[i]}</b></span>`;
            }
            
        }
        lastCounterNumberArray = conuterStringArray;
        $('#counter-box').html(counterNumberText);

    },4000);


// date

var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

$('.date').html(datetime);


});



