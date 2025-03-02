// Khai báo biến để lưu btn-submit
const btn_submit = document.getElementById('btn_submit');

// Test nút *ON CLICK EVENT*
btn_submit.onclick = function (){
// Khi bấm "Submit-btn" -> lấy thông tin ra kiểm tra
    const username = document.getElementById('username').value;
        console.log(username);
    const email = document.getElementById('email').value;
        console.log(email);
    const password = document.getElementById('password').value;
        console.log(password);

// Một dạng JASON
    let account = {
        username: username,
        email: email,
        password: password,
    }

    let listAccount = localStorage.getItem("accounts");
    listAccount = listAccount ? JSON.parse(listAccount) : []; 
    //kiểm tra xem listAccount có rỗng không, không thì trả lại thông tin của listAccount
    // var = điều kiện ? điều kiện đúng : điều kiện sai

    listAccount.push(account);
    localStorage.setItem("accounts", JSON.stringify(listAccount));
    console.log(listAccount);
    alert("Đăng ký thành công!"); // Hiện thông báo khi đăng ký thành công
}

// localStorage.set/getItem(key = 'account', value = 'username, password, email')
    // set: đặt tài khoản
    // get: lấy tài khoản
    // localStorage.setItem(2, "Account");

