let amount = +prompt("Mời nhập số tiền muốn gửi:");
let month = +prompt("Mời nhập số tháng muốn gửi:");
let rate = month * (4.3 / 12);
let rateAmount = Math.round(amount * (rate / 100));
rateAmount = rateAmount.toLocaleString();
alert(`Số tiền lãi sau ${month} tháng là: ${rateAmount} VND`);