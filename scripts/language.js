var colors = ["#5BC0EB","#FDE74C","#9BC53D","#E55934","#FA7921"  , "#FFBF00","#E83F6F","#2274A5","#32936F","#BBBBBB"];
var link_colors = ["#5BC0EB","#FDE74C","#9BC53D","#E55934","#FA7921"]

$(document).ready(function(){
    var color = link_colors[Math.floor(Math.random()*link_colors.length)];
    var width = 0;
    $("header h1").hide();
    $("header h1").fadeIn("slow");
    setInterval(editNavbar,100);
    function editNavbar(){
        var width = $(window).width();
        if(width >= 580){
            $(".top_nav").show();
        }
    }
    $(".nav_button").on("click", function(){
        $(".top_nav").toggle(300);
        
    })
    $(".language").each(function(){
        var color = colors[Math.floor(Math.random()*colors.length)];
        $(this).css({"border-top-color": color});
        $(this).on("mouseover", function(){
            $(this).css({backgroundColor: color});
        })
        $(this).on("mouseleave", function(){
            $(this).css({"background-color": "white"});
        })
    })
    $(".links").css({background: color});
})