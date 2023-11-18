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

$( ".nav-category:nth-child(1) div:nth-child(1)" ).hover(
    () => { //hover
        $( ".nav-category:nth-child(1) div:nth-child(1) div:nth-child(1)" ).css("width", "200px");
        // $("this div div:nth-child(2)").css("width", "200px");



    },
    () => { //out
        $(".lbl-tag").css("width", "0px");
    }
);
$( ".nav-category:nth-child(1) div:nth-child(2)" ).hover(
    () => { //hover
        $( ".nav-category:nth-child(1) div:nth-child(2) div:nth-child(1)" ).css("width", "200px");
        // $("this div div:nth-child(2)").css("width", "200px");



    },
    () => { //out
        $(".lbl-tag").css("width", "0px");
    }
);
$( ".nav-category:nth-child(1) div:nth-child(3)" ).hover(
    () => { //hover
        $( ".nav-category:nth-child(1) div:nth-child(3) div:nth-child(1)" ).css("width", "200px");
        // $("this div div:nth-child(2)").css("width", "200px");



    },
    () => { //out
        $(".nav-category:nth-child(1) div:nth-child(3) div:nth-child(1)").css("width", "0px");
    }
);
