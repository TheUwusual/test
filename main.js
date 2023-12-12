$(document).ready(() => {
    let socialDiv = $("#social")
    $("#btn1").on({
        click: () => {
            let numElements = $(".fade").length;
            $("#btn1").attr({"disabled": ""}) 
            $(".fade").animate({opacity: 0}, function(){if(--numElements > 0){return;} SetContent();}).animate({opacity: 1}, () => {$("#btn1").removeAttr("disabled")})
        }
    })
    socialDiv.on({
        mouseenter: () => {
            socialDiv.stop(true)
            socialDiv.animate({marginLeft: "0%"})
        },
        mouseleave: () => {
            socialDiv.stop(true)
            socialDiv.animate({marginLeft: "-9.5%"})
        }
    })
})