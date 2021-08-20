$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var floorPath = $(".home-img path"); //отдельный этаж

    //наведение мышки на этаж
    floorPath.on("mouseover", function(){
        currentFloor = $(this).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".counter").text(currentFloor);
    });


    //клик по счётчику вверх
    counterUp.on("click", function() {
        if(currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })

    //клик по счётчику вниз
    counterDown.on("click", function() {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});