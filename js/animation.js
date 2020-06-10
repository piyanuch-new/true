// //* intelligen *//
$(function(){
                        
    var winh = $(window).height(),
        item = (7.5*winh),
        gif = $(".psp");

    $('#smarttransportation').each(function(){
        $(window).on('scroll',function(event ){
                var  winTop = $(window).scrollTop();
            if (winTop > item) {
                gif.append('<img src="img/reroute.gif">');
                $( this ).off( event );
            };
        });
    });
    $( window ).scroll(function() {
        var winTop = $(window).scrollTop(),
            vh = winTop/winh,
            bullet = $(".bullet"),
            menu = $(".menu");
        if(vh > 1) {
            bullet.removeClass("active");
            menu.removeClass("active");
            $(".b1").addClass("active");
            $(".menu-1").addClass("active");
        }
        if(vh > 3){
            bullet.removeClass("active");
            $(".b2").addClass("active");
        }
        if(vh > 8){
            bullet.removeClass("active");
            $(".b3").addClass("active");
        }
        if(vh > 10.49){
            bullet.removeClass("active");
            menu.removeClass("active");
            $(".b4").addClass("active");
            $(".menu-2").addClass("active");
        }
        if(vh > 15.49){
            bullet.removeClass("active");
            menu.removeClass("active");
            $(".b5").addClass("active");
            $(".menu-3").addClass("active");
        }
        if(vh > 22.28){
            bullet.removeClass("active");
            menu.removeClass("active");
            $(".b6").addClass("active");
            $(".menu-4").addClass("active");
        }
        if(vh > 23.7){
            bullet.removeClass("active");
            menu.removeClass("active");
            $(".menu-5").addClass("active");
            $(".b7").addClass("active");
        }
        if(vh > 28){
            bullet.removeClass("active");
            menu.removeClass("active");
            $(".b8").addClass("active");
            $(".menu-6").addClass("active");
        }
    });
});

//* light *//    
$(function(){
    var lightfade = $('.fade-light');
    $(".power").click(function(){  
        $(this).toggleClass("power-on");
    });
    $("#light").click(function(){  
        $(".dt-light").toggle();
        $(".light-on").toggle();
        lightfade.toggle();
    });
    $(".blue").click(function(){
        lightfade.css('background', '#6cd9fd')
    });
    $(".green").click(function(){
        lightfade.css('background', '#b2df47')
    });
    $(".orange").click(function(){
        lightfade.css('background', '#edb11f')
    });
    $(".red").click(function(){
        lightfade.css('background', '#fa4c51')
    });
    $(".white").click(function(){
        lightfade.css('background', '#fff')
    });

});


//* cutain *//
$("document").ready(function(){ 
    var  incurtain = $(".inner-curtain");
    $(".btn-open").click(function(){
        incurtain.animate({ width: "100%" }, 3000, "linear");
    });
    $(".btn-close").click(function(){
        incurtain.animate({ width: "5%" }, 3000, "linear");
    });
    $(".btn-pause").click(function(){
        incurtain.stop();
    });
});

//* air *//
$("document").ready(function(){ 
    var air = $(".bg-air"),
        valair = $(".txt-vol"),
        txtair = $(".txt-air"),
        fan = $(".fan-air"),
        swing = $(".swing-air");
    $("#air").click(function(){
        $("#air-con").toggle();
        $(".box-air").toggle();
        $(".show-air").toggle();
    });
        var i =25;
    $(".air-plus" ).click(function() {
        fan.hide();
        swing.hide();
        txtair.fadeIn();
        air.css('opacity', '-=0.2');
        i++;
        txtair.text(i);
    });
    $(".air-del" ).click(function() {
        fan.hide();
        swing.hide(); 
        txtair.fadeIn();
        air.css('opacity', '+=0.2');
        i--;
        txtair.text(i);
    });
    $(".btn-fan" ).click(function() {
        swing.hide();
        txtair.hide();
        fan.fadeIn();
    });
    $(".btn-swing" ).click(function() {
        fan.hide();
        txtair.hide();
        swing.fadeIn();
    });
     
});

/* cctv */
$("document").ready(function(){
    var cctvbox = $(".cctv-box");
    $("#play-cctv").click(function(){
        cctvbox.toggle();
    });
})



//* TV *//
$("document").ready(function(){ 
    var tv = $(".show-tv"),
        vol = $(".box-vol"),
        valvol = $(".volume"),
        tvcon = $("#tv-con"),
        viscon = $(".vis-con"),
        maxcon = $(".max-con"),
        look = $(".look"),
        pop = $(".popup"),
        count = 1;
    $("#tv").click(function(){
        maxcon.hide();
        viscon.hide();
        tvcon.toggle()
        $("#max-play").removeClass("power-on");
        $("#vis-play").removeClass("power-on");
        tv.hide();
        tv.css('background-image', ' url("img/tv-1.png")');;
        tv.toggle();
    });
    $(".ch-plus" ).click(function() {
        vol.fadeOut();
        if (count <=2) {
            var plus = count+1;
            tv.css('background-image', ' url("img/tv-'+plus+'.png")');
            count++;
        };
        if (count == 3) {
            return false;
        };
    });
    $(".ch-del" ).click(function() {
        vol.fadeOut();
        if (count >=2) {
            count--;
            tv.css('background-image', ' url("img/tv-'+count+'.png")');
        };
        if (count < 2) {
            return false;
        };
        vol.fadeOut();
    });
    $(".btn-sound" ).click(function() {
        vol.fadeIn(500);
        valvol.toggleClass("mute");
    });
    $(".vol-plus" ).click(function() {
        vol.fadeIn(500);
        valvol.removeClass("mute");
        valvol.animate({ width: "+=5%" }, "slow");
        vol.delay(800).fadeOut(500);
    });
    $(".vol-del" ).click(function() {
        vol.fadeIn(500);
        valvol.removeClass("mute");
        valvol.animate({ width: "-=5%" }, "slow");
        vol.delay(800).fadeOut(500);
    });


    $("#vis-play").click(function(){
        maxcon.hide();
        tvcon.hide();
        viscon.toggle();
        $("#max-play").removeClass("power-on");
        $("#tv").removeClass("power-on");
        tv.hide();
        tv.css('background-image', ' url("img/vis-1.png")');
        tv.toggle();

    });
    $("#vis-plus" ).click(function() {
        if (count <=2) {
            var plus = count+1;
            count++;
            tv.css('background-image', ' url("img/vis-'+plus+'.png")');
        };
    });
    $("#vis-del" ).click(function() {
        if (count >=2) {
            count--;
            tv.css('background-image', ' url("img/vis-'+count+'.png")');
        };
    });
    $("#max-play").click(function(){
        tvcon.hide();
        viscon.hide();
        $("#tv").removeClass("power-on");
        $("#vis-play").removeClass("power-on");
        tv.hide();
        tv.css('background-image', ' url("img/game01.gif")');
        tv.addClass("max1");
        tv.toggle();
        look.toggle();
        maxcon.toggle();
    });
    $("#max-plus" ).click(function() {
        if (count <=4) {
            var plus = count+1;
            tv.css('background-image', ' url("img/game0'+plus+'.gif")');
            count++;
        };
    });
    $("#max-del" ).click(function() {
        if (count >=2) {
            count--;
            tv.css('background-image', ' url("img/game0'+count+'.gif")');
        };
    });
    look.click(function(){
       tv.css('background-image', ' url("img/game_view5.gif")');
    });
    $(".link-max").click(function(){
        pop.fadeOut();
        $(".togglemax").fadeIn();
    });
    $(".link-vis").click(function(){
        pop.fadeOut();
        $(".togglevis").fadeIn();
    });
    $(".link-mo").click(function(){
        pop.fadeOut();
        $(".togglemo").fadeIn();
    });
    $(".link-auto").click(function(){
        pop.fadeOut();
        $(".toggleauto").fadeIn();
    });
    $(".link-voice").click(function(){
        pop.fadeOut();
        $(".togglevoice").fadeIn();
    });
    $(".b-close").click(function(){
        pop.fadeOut();
    });

});

 // $("#vis-play").click(function(){
 //        maxcon.hide();
 //        tvcon.hide();
 //        viscon.toggle();
 //        $("#max-play").removeClass("power-on");
 //        $("#tv").removeClass("power-on");
 //        tv.hide();
 //        tv.css('background-image', ' url("img/truevision-1.gif")');
 //        tv.toggle();

 //    });
 //    $("#vis-plus" ).click(function() {
 //        if (count <=2) {
 //            var plus = count+1;
 //            count++;
 //            tv.css('background-image', ' url("img/truevision-'+plus+'.gif")');
 //        };
 //    });
 //    $("#vis-del" ).click(function() {
 //        if (count >=2) {
 //            count--;
 //            tv.css('background-image', ' url("img/truevision-'+count+'.gif")');
 //        };
 //    });