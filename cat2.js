$(document).ready(function () {
    $(window).mousemove(function(evt) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        var x = evt.pageX;
        var y = evt.pageY;
        console.log(x +","+ y);
        $("#cross").css("left", x+"px");
        $("#cross").css("top", y+"px");

        var catplace= $("#cat_blue").offset().left + $("#cat_blue").width()/2;
        if (Math.abs(x-catplace)<80){
            $("#cat_blue").css("bottom","0px");
        }else{
            $("#cat_blue").css("bottom","-50px");
        }

        var catplace= $("#cat_yellow").offset().left + $("#cat_yellow").width()/2;
        if (Math.abs(x-catplace)<80){
            $("#cat_yellow").css("bottom","0px");
        }else{
            $("#cat_yellow").css("bottom","-50px");
        }

        var catplace= $("#cat_grey").offset().left + $("#cat_grey").width()/2;
        if (Math.abs(x-catplace)<80){
            $("#cat_grey").css("bottom","0px");
        }else{
            $("#cat_grey").css("bottom","-50px");
        }
    });
});
