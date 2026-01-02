const form = document.getElementById("paymentForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const group = document.getElementById("group").value;
    const month = document.getElementById("month").value;
    const remark = document.getElementById("remark").value;
    const method = document.querySelector('input[name="method"]:checked')?.value || "";

    // Summary
    let summary = `🎉 Payment Successful! 🎉\n\n`;
    summary += `---- Payment Summary----\n`;
    summary += `Name: ${name}\n`;
    summary += `Email: ${email}\n`;
    summary += `Phone: ${phone}\n`;
    summary += `Course: ${course}\n`;
    summary += `Group: ${group}\n`;
    summary += `Payment Month: ${month}\n`;
    summary += `Payment Method: ${method}\n`;
    if (remark) {
        summary += `Remark: ${remark}\n`;
    }

    alert(summary);

    form.reset();
});
