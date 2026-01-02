// Room Booking
const roomGrid = document.getElementById('roomGrid');

const rooms = [
    { name: "Grand Piano Studio", types: ["All", "Piano", "Studio"], capacity: 5, maxHours: 3 },
    { name: "Upright Piano Practice Room", types: ["All", "Piano", "Room"], capacity: 4, maxHours: 2 },
    { name: "Violin Studio", types: ["All", "Violin", "Studio"], capacity: 6, maxHours: 3 },
    { name: "String Ensemble Hall", types: ["All", "Ensemble", "Hall"], capacity: 12, maxHours: 4 },
    { name: "Percussion Studio", types: ["All", "Percussion", "Studio"], capacity: 5, maxHours: 3 },
    { name: "Band Rehearsal Hall", types: ["All", "Band", "Hall"], capacity: 15, maxHours: 4 },
    { name: "Classical Guitar Room", types: ["All", "Guitar", "Room"], capacity: 4, maxHours: 3 },
    { name: "Acoustic Guitar Studio", types: ["All", "Guitar", "Studio"], capacity: 6, maxHours: 3 },
    { name: "Electirc Guitar Lab", types: ["All", "Guitar", "Lab"], capacity: 5, maxHours: 3 },
    { name: "Songwriting Room", types: ["All", "Ensemble", "Room"], capacity: 3, maxHours: 2 },
    { name: "Gu Zheng Studio", types: ["All", "Studio"], capacity: 4, maxHours: 2 },
    { name: "Traditional Ensemble Hall", types: ["All", "Ensemble", "Hall"], capacity: 12, maxHours: 4 },
    { name: "Xylophone Studio", types: ["All", "Percussion", "Studio"], capacity: 5, maxHours: 3 },
    { name: "Percussion Ensemble Hall", types: ["All", "Percussion", "Hall"], capacity: 10, maxHours: 4 }
];

rooms.forEach(r => r.available = true);

rooms.find(r => r.name === "Percussion Studio").available = false;
rooms.find(r => r.name === "Songwriting Room").available = false;
rooms.find(r => r.name === "Upright Piano Practice Room").available = false;
rooms.find(r => r.name === "Traditional Ensemble Hall").available = false;

function renderRooms(filterType = "all") {
    roomGrid.innerHTML = '';
    rooms.forEach(r => {
        if (filterType !== "all" && !r.types.includes(filterType)) {
            return;
        }

        const card = document.createElement('div');
        card.classList.add('room-card');
        card.innerHTML = `
            <h3>${r.name}</h3>
            <p>Capacity: ${r.capacity}</p>
            <p>Max Hours: ${r.maxHours}</p>
            <p class="status">Status: ${r.available ? "Available" : "Booked"}</p>
            <button ${r.available ? '' : 'disabled'}>Book</button>
        `
        roomGrid.appendChild(card);

        card.querySelector('button')?.addEventListener('click', () => openBookingModal(r));
    });
}

renderRooms();

// Filter
const roomTypeSelect = document.getElementById('roomType');
roomTypeSelect.addEventListener('change', function () {
    renderRooms(this.value);
});

// Booking Form
const modal = document.getElementById("bookingModal");
const bookingForm = document.getElementById("bookingForm");
const roomNameInput = document.getElementById("roomName");
const studentID = document.getElementById("studentID");
const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");
const numPeople = document.getElementById("numPeople");
const closeButton = document.querySelector(".close-button");

let selectedRoom = null;

function openBookingModal(room) {
    selectedRoom = room;
    roomNameInput.value = room.name;
    modal.style.display = "flex";
}

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedRoom) return;

    selectedRoom.available = false;

    const summary = `
        Room: ${roomNameInput.value}
        Student ID: ${studentID.value}
        Date: ${bookingDate.value}
        Time: ${bookingTime.value}
        People: ${numPeople.value}
    `;

    alert("🎉Booking Confirmed!🎉 \n" + summary);

    modal.style.display = "none";
    bookingForm.reset();

    renderRooms(roomTypeSelect.value);
});
