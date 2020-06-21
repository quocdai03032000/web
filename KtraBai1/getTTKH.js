function getUserName() {
    var tenDN = document.getElementById("user-name").value;

    document.getElementById("TDN").style.listStyle = "circle"
    document.getElementById("TDN").innerHTML = "Tên đăng nhập" + tenDN;
}

function getPassWord() {
    var password = document.getElementById("password").value;
    document.getElementById("pass").style.listStyle = "circle"
    document.getElementById("pass").innerHTML = "Mật khẩu: " + password;
}

function checkPassword() {
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("retype-password").value;
    if (password !== repassword) {
        alert("Mật khẩu nhập lại không trùng khớp !!! Vui lòng nhập lại !!!");
    } else {

        getPassWord();
    }
}

function getName() {
    var name = document.getElementById("name").value;
    document.getElementById("name-of-client").style.listStyle = "circle"
    document.getElementById("name-of-client").innerHTML = "Họ tên khách hàng: " + name;
}

function getSex() {
    var sex = document.getElementsByName('sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            document.getElementById("sex").style.listStyle = "circle"
            document.getElementById("sex").innerHTML = "Giới tính: " + sex[i].value;
        }
    }
}

function getEmail() {
    var email = document.getElementById("email").value;
    document.getElementById("email-of-clients").style.listStyle = "circle"
    document.getElementById("email-of-clients").innerHTML = "Email: " + email;
}

function getAddress() {
    var address = document.getElementById("address").value;
    document.getElementById("address-of-clients").style.listStyle = "circle"
    document.getElementById("address-of-clients").innerHTML = "Địa chỉ: " + address;
}

function getPhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    if (isNaN(phoneNumber) == true) {
        alert("Số điện thoại không hợp lệ !!! Vui lòng nhập lại !!")
    } else {
        document.getElementById("phoneNumber-of-clients").style.listStyle = "circle"
        document.getElementById("phoneNumber-of-clients").innerHTML = "Số điện thoại: " + phoneNumber;
    }
}

function getDate() {
    selectDate();
    var a = document.getElementById("dd").value;
    var b = document.getElementById("mm").value;
    var c = document.getElementById("yyyy").value;
    document.getElementById("Date-of-clients").style.listStyle = "circle"
    document.getElementById("Date-of-clients").innerHTML = "Ngày sinh: " + a + "/" + b + "/" + c;
}