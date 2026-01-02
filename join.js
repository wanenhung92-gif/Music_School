document.getElementById("joinForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: this.name.value.trim(),
        age: this.age.value.trim(),
        email: this.email.value.trim(),
        phone: this.phone.value.trim(),
        programme: this.programme.value,
        instrument: this.instrument.value
    };

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        alert("PLease enter a valid email address.");
        return;
    }

    if (!/^\d{8,13}$/.test(data.phone.replace(/\s+/g, ''))) {
        alert("Please enter a valid contact number.");
        return;
    }

    alert(
        `Thank you, ${data.name}! 🎉\n\n` +
        `Programme: ${data.programme}\n` +
        `Instrument: ${data.instrument}\n\n` +
        `Our admissions team will contact you shortly.`
    );

    this.reset();
});