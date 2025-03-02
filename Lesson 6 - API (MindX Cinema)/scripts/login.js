const btn_submit = document.getElementById('btn_submit');
btn_submit.onclick = function (){
    const email = document.getElementById('email').value;
    console.log(email);
    const password = document.getElementById('password').value;
    console.log(password);
    
    let listAccount = localStorage.getItem("accounts");
    listAccount = listAccount ? JSON.parse(listAccount) : []; 

    let isEmailExisted = false; // Kiểm tra email đã tồn tại chưa
    let isCorrectPassword = false; // Kiểm tra mật khẩu đúng chưa

    for (const account of listAccount){
        if (account.email === email){
            isEmailExisted = true; // Tức đã có email này rồi
            if (account.password === password){
                isCorrectPassword = true; // Mật khẩu đúng
            } 
            else{
                isCorrectPassword = false; // Mật khẩu sai
            }
            break; // Không cần kiểm tra thêm nữa nếu email đã tồn tại (ở trong if)
        }
    }

    if (isEmailExisted == false){
        alert("Tài khoản không tồn tại");
    } else if (isCorrectPassword == false){
        alert("Mật khẩu không đúng");
        window.location.href("Lesson 6 - API (MindX Cinema)\index.html") // Chuyển đến trang chính nếu mật khẩu sai
    }
}