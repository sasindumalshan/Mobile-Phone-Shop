$("#regBtn").click(function () {
    var request = $.ajax({
        url: "http://127.0.0.1:8000/user/save",
        type: "POST",
        data: {
            user : "sasindu",
            address : "galle",
            contact : "0770659786",
            mail : "sasindu@gmail.com"
        }
    });

    request.done(function(msg) {
       console.log(msg)
    });

    request.fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
    });
})