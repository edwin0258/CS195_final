var colors = ["#5BC0EB","#FDE74C","#9BC53D","#E55934","#FA7921"  , "#FFBF00","#E83F6F","#2274A5","#32936F","#BBBBBB"];
var mobile;
$(document).ready(function(){
    // Only use first 5 colors for resources section.
    var color = colors[Math.floor(Math.random()*5)];
    $("header h1").hide();
    $("header h1").fadeIn("slow");
    
    //Fixing navbar from vanishing after resized from mobile.
    setInterval(editNavbar,50);
    function editNavbar(){
        var width = $(window).width();
        if(width > 565){
            mobile = false;
            $(".top_nav").show();
        }
        //Fixing menu being open on resize from desktop to mobile view.
        if(width < 565 && mobile == false){
            mobile = true;
            $(".nav_button").html("&#9776; Menu");
            $(".top_nav").hide();
        }
    }
    
    $(".nav_button").on("click", function(){
        /*Check if top nav is visible,
        if so change inner html of nav_button to close.*/
        if($(".top_nav").is(':visible')){
            $(".nav_button").html("&#9776; Menu");
        }
        else{
            $(".nav_button").html("X Close");
            
        }
        $(".top_nav").toggle(300);
    })
    
    // pretty colors.
    $(".language a").each(function(){
        var color = colors[Math.floor(Math.random()*colors.length)];
        $(this).css({"border-top-color": color});
        $(this).on("mouseover", function(){
            $(this).css({backgroundColor: color});
        })
        $(this).on("mouseleave", function(){
            $(this).css({"background-color": "white"});
        })
    })
    //for language resources section.
    $(".links").css({background: color});
})