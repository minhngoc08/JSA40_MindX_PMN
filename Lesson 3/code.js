// Phép toán chia lấy dư: %
// Phép chia: /
// Phép nhân *
// Phép cộng: +
// Phép trừ: -
let a = 55;
let b = 5;
let c = 55 % 5;

console.log("Phép toán chia lấy dư 55%5 = " + c);

// "=" Phép gán
// "==" Phép so sánh bằng --> So sánh giá trị
// "===" Phép so sánh nghiêm ngặt --> Vừa so sánh giá trị + kiểu giá trị
// "!=" Phép só sánh khác

let score = 5; 
// Cách 1 để cộng thêm 2 đơn vị:
score = score + 2;
// Cách 2:
score += 2;
console.log(score);

// KIỂU DỮ LIỆU BOOLEAN (TRUE/FALSE)
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);

console.log(a==b);  //So sánh bằng
console.log(a!=b);  //So sánh khác

let d = 5;    //number
let e = '5';  //string
console.log(d == e);  //Phép so sánh bằng
console.log(d === e); //Phép so sánh nghiêm ngặt

//Toán tử Logic
let g = 5 < 6; //true
let h = 6 > 8; //false (true <=> 6<8 )

// Phép AND
console.log(g && h); // ->FALSE (TRUE <=> tất cả đk đều true)

// Phép OR
console.log(g || h); // -> TRUE (FALSE <=> tất cả đk đều false)

// Phép NOT
console.log(!g);

// CONDITIONAL SENTENCE (câu lệnh điều kiện)
let nhietDohomnay = 14;

if (nhietDohomnay < 15){
    console.log("Thời tiết mát mẻ");
}
else {
    if(nhietDohomnay >= 30){
       console.log("Thời tiết rất nóng"); 
    }
    else{
        console.log("Trời bình thường");
    }
}

// Hoặc
if (nhietDohomnay < 15){
    console.log("Thời tiết mát mẻ");
}
else if (nhietDohomnay > 30){
    console.log("Thời tiết rất nóng");
}
else {
    console.log("Thời tiết bình thường")
}

// Hiển thị dạng thông báo (pop-up): thay console.log -> alert


// let scoop = prompt ("Nhập vào số que kem");
let scoop = 0;

if(scoop >= 5){
    console.log("Ăn nhanh lên, kem sắp tan chảy!");
}
else if(scoop == 3){
    console.log("Kem sắp hết!");
}
else if(scoop == 2){
    console.log("Lần một!");
}
else if(scoop == 1){
    console.log("Lần hai!");
}
else if(scoop == 0){
    console.log("Hết rồi!");
}
else{
    console.log("Vẫn còn nhiều kem, hãy đến lấy thêm!");
}

// VÒNG LẶP
// Gồm 3 loại: FOR, WHILE, DO WHILE
for (let i=1; i<=100; i++){
    console.log("Xin chào");
    // console.log(i + "Xin chào");
    // "i++" là "i + 1" hoặc "i += 1"
    if(i % 2 == 0){                 //Hiển thị các chữ số chẵn
        console.log(i);
    }
}


// HOMEWORK
let i = 0;
// Tạo 1 mảng số nguyên, sử dụng vòng lặp duyệt qua mảng
// Tách số chẵn và số lẻ
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log("Số chẵn: " + i);
    }
    else {
        console.log("Số lẻ: " + i);
    }
    
// Số lớn hơn ngưỡng cho trước
    if (i > 5){
        console.log("Số lớn hơn 5");
    } 
}
// Nhập vào số n, in ra tam giác số 
    for (let i = 1; i <= 5; i++){
        let line = '';
        for (let j = 1; j <= i; j++){
            line += j;
        }
        console.log(line);
    }
// Hiển thị chuỗi đối xứng
