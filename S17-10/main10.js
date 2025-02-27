let number = +prompt();
let sqrt = Math.sqrt(number);
if (sqrt == Math.floor(sqrt)) {
    alert("Vậy số chính phương là: " + number);
} else {
    alert(" Vậy số chính phương không phải là:" + number);
}