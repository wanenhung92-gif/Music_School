// Instrument Booking
const instrumentGrid = document.getElementById('instrumentGrid');

const instruments = [
    { name: "Grand Piano", type: "Piano", brand: "Yamaha", productCode: "P1001" },
    { name: "Upright Piano", type: "Piano", brand: "Steinway", productCode: "P1002" },
    { name: "Violin", type: "Violin", brand: "Bentley", productCode: "V2001" },
    { name: "Violin", type: "Violin", brand: "Yamaha", productCode: "V2002" },
    { name: "Classical Guitar", type: "Guitar", brand: "Cordoba", productCode: "G3001" },
    { name: "Electric Guitar", type: "Guitar", brand: "Fender", productCode: "G3002" },
    { name: "Acoustic Guitar", type: "Guitar", brand: "Martin", productCode: "G3003" },
    { name: "Xylophone", type: "Xylophone", brand: "Admas", productCode: "X4001" },
    { name: "Drum Set", type: "Drum", brand: "Pearl", productCode: "D5001" },
    { name: "Snare Drum", type: "Drum", brand: "Yamaha", productCode: "D5002" },
    { name: "Gu Zheng", type: "Guzheng", brand: "Dunhuang", productCode: "G6001" },
    { name: "Gu Zheng", type: "Guzheng", brand: "Zhuque", productCode: "G6002" }
];

instruments.forEach(i => i.available = true);

instruments.find(i => i.name === "Grand Piano").available = false;
instruments.find(i => i.name === "Electric Guitar").available = false;
instruments.find(i => i.name === "Xylophone").available = false;
instruments.find(i => i.productCode === "G6001").available = false;

function renderInstruments(filterType = "all") {
    instrumentGrid.innerHTML = '';
    instruments.forEach(i => {
        if (filterType !== "all" && i.type !== filterType) {
            return;
        }

        const card = document.createElement('div');
        card.classList.add('instrument-card');
        card.innerHTML = `
            <h3>${i.name}</h3>
            <p>Brand: ${i.brand}</p>
            <p>Product Code: ${i.productCode}</p>
            <p class="status">Status: ${i.available ? "Available" : "Booked"}</p>
            <button ${i.available ? '' : 'disabled'}>Book</button>
        `
        instrumentGrid.appendChild(card);

        card.querySelector('button')?.addEventListener('click', () => openBookingModal(i));
    });
}

renderInstruments();

// Filter
const instrumentTypeSelect = document.getElementById('instrumentType');
instrumentTypeSelect.addEventListener('change', function () {
    renderInstruments(this.value);
});

// Booking Form
const modal = document.getElementById("bookingModal");
const bookingForm = document.getElementById("bookingForm");
const instrumentNameInput = document.getElementById("instrumentName");
const studentID = document.getElementById("studentID");
const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");
const closeButton = document.querySelector(".close-button");

let selectedInstrument = null;

function openBookingModal(instrument) {
    selectedInstrument = instrument;
    instrumentNameInput.value = instrument.name;
    modal.style.display = "flex";
}

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedInstrument) return;

    selectedInstrument.available = false;

    const summary = `
        Instrument: ${instrumentNameInput.value}
        Student ID: ${studentID.value}
        Date: ${bookingDate.value}
        Time: ${bookingTime.value}
    `;

    alert("🎉Booking Confirmed!🎉 \n" + summary);

    modal.style.display = "none";
    bookingForm.reset();

    renderInstruments(instrumentTypeSelect.value);
});
