console.log("nav-bar.js loaded");

function barExpand() {
    $()
}


//initial text size
$(".nav-text").css("font-size", "" + window.innerHeight/38 + "px");

//initial bar height
$(".select-bar").css("height", "" + window.innerHeight/258.5 + "px");

//hover text color change
let navItemList = $(".nav-item");

navItemList.hover(function() {
    $(this).children(".nav-text").css("color", "#e74c3c");//red text when hovered

    $(this).children(".select-bar").animate({ //animate selection bar
        width: "100px"
    }, "slow");

}, function() {
    $(this).children(".nav-text").css("color", "#848484"); //grey text when not hovered

    $(this).children(".select-bar").animate({
        width: "4px"
        }, "slow");//select bar returns when not hovered
});

//text and navbar scales with window
console.log(window.innerHeight);

window.onresize = function() {
    $(".nav-text").css({
        "font-size": "" + window.innerHeight/38 + "px", 
        "top": "25%"
    });

    $(".nav-item").css({
        "transform-origin": "center center"
    });

    
    $(".select-bar").css("height", "" + window.innerHeight/258.5 + "px");
};




