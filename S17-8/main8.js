document.addEventListener("DOMContentLoaded", function () {
    const date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
    const date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

    if (!date1 || !date2) {
        alert("Vui lòng nhập đầy đủ hai ngày hợp lệ.");
        return;
    }

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    if (isNaN(d1) || isNaN(d2)) {
        alert("Ngày nhập không hợp lệ. Hãy nhập đúng định dạng YYYY-MM-DD.");
        return;
    }

    const daysDifference = Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
    alert(`Độ lệch là ${daysDifference} ngày`);
});
