$(document).ready(function(){
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
    
    
})