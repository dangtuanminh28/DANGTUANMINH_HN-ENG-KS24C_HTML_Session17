let a = parseFloat(prompt("Mời nhập số a"))
let b = parseFloat(prompt("Mời nhập số b"))
let c = parseFloat(prompt("Mời nhập số c"))
let delta = b * b - 4 * a * c
if (delta > 0) {
    let x1 = ((-b) + Math.sqrt(delta)) / (2 * a)
    let x2 = ((-b) - Math.sqrt(delta)) / (2 * a)
    alert(x1)
    alert(x2)
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert(x)
} else {
    alert("Phương trình vô nghiệm");
}