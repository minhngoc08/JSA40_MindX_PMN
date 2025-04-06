// signup.js

// Xử lý form đăng ký
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Lấy giá trị từ các input
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validation cơ bản
    if (fullname.length < 2) {
        alert('Full name must be at least 2 characters long');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Kiểm tra xem email đã tồn tại chưa
    const users = getUsersFromStorage();
    if (users.some(user => user.email === email)) {
        alert('This email is already registered');
        return;
    }

    // Tạo object user mới
    const newUser = {
        fullname: fullname,
        email: email,
        password: password, // Trong thực tế, nên hash password trước khi lưu
        createdAt: new Date().toISOString()
    };

    // Lưu user vào Local Storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Please sign in.');
    // Chuyển hướng đến trang đăng nhập
    window.location.href = './signin.html';
});

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm lấy danh sách users từ Local Storage
function getUsersFromStorage() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}