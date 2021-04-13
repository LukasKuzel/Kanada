$(function(){
    $("#uvod h2").on("click", function(){
        $("#uvod h3").toggle(3000)
        $("#uvod p").hide(2000)
    });
    $("#uvod h3").on("click", function(){
        $("#uvod p").show(2000)
    });
    $("#nazev h2").on("click", function(){
        $("#nazev p").toggle(2000)
    });
    $("#historie h2").on("click", function(){
        $("#historie h3").toggle(3000)
        $("#historie p").hide(2000)
        $("#historie img").hide(2000)
    });
    $("#historie h3").on("click", function(){
        $("#historie p").show(2000)
        $("#historie img").show(2000)
    });
    $("#vseobecneinformace h2").on("click", function(){
        $("#vseobecneinformace h4").toggle(3000)
        $("#vseobecneinformace p").hide(2000)
        $("#vseobecneinformace img").hide(2000)
    });
    $("#vseobecneinformace h4").on("click", function(){
        $("#vseobecneinformace p").show(2000)
        $("#vseobecneinformace img").show(2000)
    });
    $("#vlajka").on("click", function(){
        $("#maindiv").toggle(3000)
        $("footer").toggle(3000)
    });

});