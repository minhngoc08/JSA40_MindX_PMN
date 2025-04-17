document.addEventListener("DOMContentLoaded", function () {
    const btnSignUp = document.getElementById("btnSignUp");
    const btnSignIn = document.getElementById("btnSignIn");
    const btnAccount = document.getElementById("btnAccount");
    const btnLogOut = document.getElementById("btnLogOut");
  
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const registerFailed = localStorage.getItem("registerFailed") === "true";
  
    if (isLoggedIn) {
      // Đã đăng nhập => chỉ hiển thị "Tài khoản" và "Đăng xuất"
      btnSignUp.style.display = "none";
      btnSignIn.style.display = "none";
      btnAccount.style.display = "inline-block";
      btnLogOut.style.display = "inline-block";
    } else {
      btnAccount.style.display = "none";
      btnLogOut.style.display = "none";
  
      // Nếu đăng ký thất bại, mới hiển thị nút đăng nhập
      if (registerFailed) {
        btnSignIn.style.display = "inline-block";
      } else {
        btnSignUp.style.display = "inline-block";
      }
    }
  
    // Giả lập đăng ký thành công
    btnSignUp.addEventListener("click", function () {
        // Chỉ chuyển hướng sang trang đăng ký, không cần xử lý gì ở đây nữa
        window.location.href = "signup.html";
    });
    
  
    // Giả lập đăng nhập
    btnSignIn.addEventListener("click", function () {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.removeItem("registerFailed");
      window.location.reload();
    });
  
    btnLogOut.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("registerFailed");
      window.location.reload();
    });
  });
  