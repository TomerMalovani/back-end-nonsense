$(document).ready(function () {
    //adding event listeners
    justDoIt();

});
justDoIt = function () {
    $.ajax({
        type: "GET",
        url: "http://itc-colors.appspot.com/get_images",
        dataType: "json",
        success: function (responsemsg) {
            for (let index = 0; index < responsemsg.length - 1; index++) {
                $("#imgtank").append(`<img src=${responsemsg[index]}>`);
            }
        },
        error: function (msg) {
            console.log("error");
        },
    });
};
