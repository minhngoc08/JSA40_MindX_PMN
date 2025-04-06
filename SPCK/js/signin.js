// signin.js

// Xử lý sự kiện submit form đăng nhập
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Lấy giá trị từ input
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validation cơ bản
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Lấy danh sách users từ Local Storage
    const users = getUsersFromStorage();

    // Kiểm tra thông tin đăng nhập
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Lưu thông tin user hiện tại vào Local Storage
        localStorage.setItem('currentUser', JSON.stringify({
            email: user.email,
            fullname: user.fullname,
            loginTime: new Date().toISOString()
        }));

        alert(`Welcome back, ${user.fullname}!`);
        // Chuyển hướng đến trang chính (có thể thay đổi URL tùy theo cấu trúc dự án)
        window.location.href = 'SPCK/pages/index.html';
    } else {
        alert('Invalid email or password');
    }
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