///////////// CÚ PHÁP KHAI BÁO ARRAY : Mảng - khai báo mảng
// index : chỉ số đếm bắt đầu từ 0
let arr = ['Lam','Ngoc','Nam','Bach','Phuong','Viet Anh'];   //string
  // index: 0 1 2 3 4 5
let numbers = [0,1,5,3,4];    //number 
let mixedArr = [1,2,3,'Hello', true, false, null, undefined];      //true = 1; false = 0

// vd về undefined: 
// let Lam
// console.log("Lam");

// TRUY VẤN DỮ LIỆU
// Gọi ra số phần tử số 1
console.log(arr[1]);

// Gọi ra tất cả các phần tử
for (let i = 0; i < arr.length ;i++){
    console.log (arr[i]);
}

// THÊM PHẦN TỬ
arr.push('Hung');
console.log(arr[6]);

// THAY THẾ PHẦN TỬ
// tên mảng.splice(vị trí số cần thay, cần thay thế bnh số kể từ số đã chọn, số thay thế)
numbers.splice(2,1,2);
console.log(numbers);

// XÓA PHẦN TỬ
arr.splice(0,1, );
console.log(arr);

///////// 0337582547
///////////// OBJECT
let person = {
    name: "Minh Ngoc Pham",   //--> Một trường thông tin
    // key: value (property)
    age: 18,
    job: "student",
}

console.log (person.name);
/*hoặc*/ console.log (person['age']);

for (let key in person){
    console.log(key);
}

// Thêm 1 trường thông tin
person['gender'] = 'female';
/*hoặc*/ person.gender = 'female';
console.log(person);

// Kiểm tra đủ các key ở các trường thông tin chưa
if ("name" in person){
    console.log("This name has been selected");
}

// Xóa 1 trường thông tin
delete person.age;
console.log(person);

//////////////// DOM


// HOMEWORK
let work = ['user1', 'user2'];
let user1 = {
    id: 123,
    title: 'Food',
    task: 'Finished',
}
let user2 = {
    id: 234,
    title: 'None',
    task: 'None'
}

