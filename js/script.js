$(document).ready(function(){
    $("span").click(function(){
        $(this).siblings("p").toggle();
    });
});