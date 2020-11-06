$(document).ready(function(){


    $("li").mouseenter(function() {

        console.log("mouseenter");

        //$("ul").addClass("active");

        // this : l'elemento che ha scatenato  l'evento
        // children : trovare i figli diretti dell'elemento

        $(this).find('ul').addClass('active');
    });

    $("li").mouseleave(function() {

        console.log("mouseleave");



        // this : l'elemento che ha scatenato  l'evento
        // children : trovare i figli diretti dell'elemento

        $(this).find('ul').removeClass('active');
    });


}) ;
