$(document).ready(function () {
    setTimeout(
        function () {
            $(".cc1").css("opacity", "1");
            $(".cc2").css("opacity", "1");
        }, 1000);
    setTimeout(
        function () {
            $(".cc4").css("transition", "all 0s").css("transform", "rotate(90deg)");
            $(".cc5").css("transition", "all 0s").css("transform", "rotate(-90deg)");
            $(".ltr").css("opacity", "1");
        }, 2000);
    setTimeout(
        function () {
            $(".ltr").css("opacity", "1");
        }, 1200);
});
