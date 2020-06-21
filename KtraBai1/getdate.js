function getnDay(n) {
    var day = "";
    for (var i = 1; i <= 9; i++) {
        day = day + '<option value="' + i + '">0' + i + '</option>';
    }
    for (var i = 10; i <= n; i++) {
        day = day + '<option value="' + i + '">' + i + '</option>';
    }
    document.getElementById("dd").innerHTML = day;
    return 0;
}
var a = "";
for (var i = 1900; i <= 2020; i++) {
    a = a + '<option value="' + i + '">' + i + '</option>'
}
document.getElementById("yyyy").innerHTML = a;
a = "";
for (var i = 1; i <= 9; i++) {
    a = a + '<option value="' + i + '">0' + i + '</option>';
}
for (var i = 10; i <= 12; i++) {
    a = a + '<option value="' + i + '">' + i + '</option>';
}
document.getElementById("mm").innerHTML = a;

function selectDate() {
    var mm = document.getElementById("mm").value
    var yyyy = document.getElementById("yyyy").value
    if (yyyy % 4 == 0 && mm == 2) {
        getnDay(29);
    } else
    if (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) {
        getnDay(31);
    } else
    if (mm == 2) {
        getnDay(28);
    } else {
        getnDay(30);
    }
}
selectDate()