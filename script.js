$(document).ready(function(){


    $("li").mouseenter(function() {

    $("ul").addClass("active");

    }
);

    $("li").mouseleave(function() {
    $("ul").removeClass("active");
    });


}) ;
