let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const form = id("register");
const btnLogin = id("btnRegister");
const phone = id("floatingPhone");
const password = id("floatingPassword");
const repassword = id("floatingRePassword");

const errorMsg = classes("error");

const regPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const validate = (e) => {
    e.preventDefault();

    // validate phone
    if (phone.value === "") {
        handleError(phone, 0, "Số điện thoại không được để trống", "red");
    } else if (!regPhone.test(phone.value)) {
        handleError(phone, 0, "Số điện thoại sai định dạng", "red");
    } else {
        handleError(phone, 0, "", "green");
    }

    // validate password
    if (password.value === "") {
        handleError(password, 1, "Mật khẩu không được để trống", "red");
    } else if (!regPassword.test(password.value)) {
        handleError(password, 1, "Mật khẩu sai định dạng", "red");
    } else {
        handleError(password, 0, "", "green");
    }

    // validate re-password
    if (repassword.value === "") {
        handleError(
            repassword,
            2,
            "Mật khẩu nhập lại không được để trống",
            "red"
        );
    } else if (password.value !== repassword.value) {
        handleError(repassword, 2, "Mật khẩu nhập lại không đúng", "red");
    } else {
        handleError(password, 0, "", "green");
    }
};

let handleError = (id, serial, message, color) => {
    errorMsg[serial].innerHTML = message;
    id.style.border = `1px solid ${color}`;
};

btnLogin.addEventListener("click", validate);

phone.addEventListener("focus", () => {
    handleError(phone, 0, "", "");
});

password.addEventListener("focus", () => {
    handleError(password, 1, "", "");
});

repassword.addEventListener("focus", () => {
    handleError(repassword, 2, "", "");
});
