$(document).ready(function () {
    //adding event listeners
    $("#addColorBtn").click(addColor);
    $("#showColorBtn").click(showColor);

});
addColor = function () {
    console.log($("#ColorInput").val());
    $.ajax({
        type: "POST",
        url: "https://itc-colors.appspot.com/add_color",
        // dataType: "json",
        data: {
            color: $("#ColorInput").val(),
        },
        success: function () {
            console.log("work");

        },
        error: function (response) {
            console.log(response);
            console.log("nope");

        },
    });
};

showColor = function () {
    $.ajax({
        type: "GET",
        url: "https://itc-colors.appspot.com/colors",
        // dataType: "json",
        success: function (response) {
            for (let index = 0; index < response.length - 1; index++) {
                $("#Msgbox").append(response);
            }
        },
        error: function (response) {
            console.log(response);
            console.log("nope");
            $("#MsgBox").text("error");
        },
    });
}
