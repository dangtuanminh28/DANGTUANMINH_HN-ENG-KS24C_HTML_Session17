let stringName = prompt("Nhập tên của bạn:");
let stringAge = prompt("Nhập tuổi của bạn:");
const person = [stringName];
const age = [stringAge];
document.getElementById("name").innerHTML = `Tên: ${person[0]}`;
document.getElementById("age").innerHTML = `Tuổi: ${age[0]}`;
