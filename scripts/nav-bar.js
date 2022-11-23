console.log("nav-bar.js loaded");

//vars
let navItemList = $(".nav-item");
let selectBarWidth = "--select-bar-factor";

//initial bar width
document.documentElement.style.setProperty(selectBarWidth, window.innerWidth/35);

//initial text size
$(".nav-text").css("font-size", "" + window.innerHeight/38 + "px");

//initial select bar size
$(".select-bar").css("height", "" + window.innerHeight/400.5 + "px");

//hover text color change
navItemList.hover(function() {
    $(this).children(".nav-text").css("color", "#e74c3c");//red text when hovered
}, function() {
    $(this).children(".nav-text").css("color", "#848484"); //grey text when not hovered
});

//text and navbar scales with window
console.log(window.innerHeight);
console.log(window.innerWidth);

window.onresize = function() {
    //text resize with window
    $(".nav-text").css({
        "font-size": "" + window.innerHeight/38 + "px", 
        "top": "25%"
    });
    
    //select bar height scales with window
    $(".select-bar").css("height", "" + window.innerHeight/400.5 + "px");

    //select bar scales with window width
    document.documentElement.style.setProperty(selectBarWidth, window.innerWidth/35);
};




