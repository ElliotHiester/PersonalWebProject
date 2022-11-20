console.log("nav-bar.js loaded");


//hover text color change
let navItemList = $(".nav-item");

navItemList.hover(function() {
    $(this).children().css("color", "#e74c3c");//red text when hovered
}, function() {
    $(this).children().css("color", "#848484"); //grey text when not hovered
});

//text scales with window
console.log(window.innerHeight);

window.onresize = function() {
    $(".nav-text").css("text-size", "400px");
};




