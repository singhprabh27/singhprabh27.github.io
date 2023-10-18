/* J query*/
$(document).ready(function () {
    $("#theme1").click(function () {
        $("#body").css("background-color", "#ffffff");
        $(".header,.footer").css("color", "#fc9960");
        $("li").children('a').css("color", "#fc9960");

    });
    $("#theme2").click(function () {
        $("#body").css("background-color", "#00ccff");
        $(".header,.footer").css("color", "#00ccff");
        $("li").children('a').css("color", "#00ccff");
    });
});

$(document).ready(function () {
    $(".footer h3").text("Prabhjot Singh");
})


