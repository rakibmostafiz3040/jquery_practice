$(document).ready(function() {
    // Show alert on button click
    // $('.btn').click(function() {
    //     // alert("Hello babu");
    // });

    // // Show alert on hover
    // $('button').on('click', function() {
    //     alert("Hello babu");
    // });

    // Show/hide image
    $('#sb').on('click', function() {
        $('img').show();
    });

    $('#hb').on('click', function() {
        $('img').hide();
    });

    $('#tg').on('click', function() {
        $('img').toggle();
    });

    // fast-slow effects
    $('#fe').on('click', function() {
        $('img').show("fast");
    });
    $('#se').on('click', function() {
        $('img').hide("fast");
    });
    $('#pe').on('click', function() {
        $('img').show("fast");
    });
    $('#ce').on('click', function() {
        $('img').hide("fast");
    });

    // Animate method
    
        $("#btn1").click(function(){
          $("#box").animate({height: "300px"});
        });
        $("#btn2").click(function(){
          $("#box").animate({height: "100px"});
        });
    //  animate2
    $(".btn1").click(function(){
        $("body").animate({
          backgroundPositionX: "+=100px", 
          backgroundPositionY: "+=200px"
        });
      });
      $(".btn2").click(function(){
        $("body").animate({
          backgroundPositionX: "0px", 
          backgroundPositionY: "0px"
        });
      });
      $(".btn1").click(function(){
        $("p").animate({borderWidth: "10px"});
      });
      $(".btn2").click(function(){
        $("p").animate({borderWidth: "1px"});
      });
    //   line height
    $(".btn3").click(function(){
        $(".p1").animate({lineHeight: "+=2em"});
      });
      $(".btn4").click(function(){
        $(".p1").animate({lineHeight: "-=2em"});
      })
    //   bottom

    $(".btn5").click(function(){
        $(".p2").animate({bottom: "+=100px"});
      });
      $(".btn6").click(function(){
        $(".p2").animate({bottom: "0"});
      });
    //   opacity
    $("#btn7").click(function(){
        $("#box3").animate({opacity: "0.2"});
      });
      $("#btn8").click(function(){
        $("#box3").animate({opacity: "1"});
      });

    //   border spaceing 
    $(".btnl").click(function(){
        $("table").animate({borderSpacing: "10px"});
      });
      $(".btnm").click(function(){
        $("table").animate({borderSpacing: "1px"});
      });
      



});