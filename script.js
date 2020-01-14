$(document).ready(function () {
    $(".title1").click(function () {
        $(".voc").slideToggle(400);
    });
    $(".title2").click(function () {
        $(".hoc").slideToggle(400);
    });
    $(".title3").click(function () {
        $(".roc").slideToggle(400);
    });
    $("#height").keyup(function() {
        $("#hv1").html($("#height").val());
    });
    $("#radius").keyup(function () {
        $("#rv1").html($("#radius").val());
    });
    $("#radius1").keyup(function () {
        $("#rv2").html($("#radius1").val());
    });
    $("#volume").keyup(function () {
        $("#vv1").html($("#volume").val());
    });
    $("#volume1").keyup(function () {
        $("#vv2").html($("#volume1").val());
    });
    $("#height1").keyup(function () {
        $("#hv2").html($("#height1").val());
    });
});

var fn1 = function () {
    var radius = document.getElementById("radius");
    var a = radius.value;
    var height = document.getElementById("height");
    var b = height.value;
    var sum = Math.round(Math.PI * (a * a) * b * 100) / 100;
    document.getElementById("result").innerHTML = sum;
};

var fn2 = function () {
    var volume = document.getElementById("volume");
    var a = volume.value;
    var radius = document.getElementById("radius1");
    var b = radius.value;
    var sum = Math.round(a / (Math.PI * (b * b)) * 100) / 100;
    document.getElementById("result1").innerHTML = sum;
};

var fn3 = function () {
    var volume = document.getElementById("volume1");
    var a = volume.value;
    var height = document.getElementById("height1");
    var b = height.value;
    var sum = Math.sqrt((a / (Math.PI * b)) * 100 / 100);
    var total = Math.round(sum * 100) / 100;
    document.getElementById("result2").innerHTML = total;
};
