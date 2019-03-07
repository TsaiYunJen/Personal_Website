$(function () {
    var windowH = document.body.clientHeight;
    $("section").css("height",windowH);

    $("input[type=button]").click(function () {
        alert("Success !");
    });
});