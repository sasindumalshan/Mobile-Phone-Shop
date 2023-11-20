/*$( ".nav-category-item" ).hover(
    () => { //hover
        console.log(this.children)
        // $("this div div:nth-child(2)").css("width", "200px");
        this.children().children().lastChild.css("width", "200px");


    },
    () => { //out
        $(".lbl-tag").css("width", "0px");
    }
);*/
// nav-category
$(document).ready(function () {
    function setUi() {
       $("#view-cart").css({'display': 'none', 'visibility': 'hidden'});
       $("#main2").css({'display': 'none', 'visibility': 'hidden'});
    }

    setUi();
})

$(".nav-category:nth-child(1) div:nth-child(1)").hover(
    () => { //hover
        $(".nav-category:nth-child(1) div:nth-child(1) div:nth-child(1)").css("width", "200px");
        // $("this div div:nth-child(2)").css("width", "200px");


    },
    () => { //out
        $(".lbl-tag").css("width", "0px");
    }
);
$(".nav-category:nth-child(1) div:nth-child(2)").hover(
    () => { //hover
        $(".nav-category:nth-child(1) div:nth-child(2) div:nth-child(1)").css("width", "200px");
        // $("this div div:nth-child(2)").css("width", "200px");


    },
    () => { //out
        $(".lbl-tag").css("width", "0px");
    }
);
$(".nav-category:nth-child(1) div:nth-child(3)").hover(
    () => { //hover
        $(".nav-category:nth-child(1) div:nth-child(3) div:nth-child(1)").css("width", "200px");
        // $("this div div:nth-child(2)").css("width", "200px");


    },
    () => { //out
        $(".nav-category:nth-child(1) div:nth-child(3) div:nth-child(1)").css("width", "0px");
    }
);

$("#cart-icon").click(function () {
    $("#view-cart").css({'display': 'block', 'visibility': 'visible'});
});
$("#check-out-side").click(function () {
    $("#main1").css({'display': 'none', 'visibility': 'hidden'});
    $("#view-cart").css({'display': 'none', 'visibility': 'hidden'});
    $("#main2").css({'display': 'block', 'visibility': 'visible'});

});
$("#continue").click(function () {
    $("#main2").css({'display': 'none', 'visibility': 'hidden'});
    $("#main1").css({'display': 'block', 'visibility': 'visible'});
});
