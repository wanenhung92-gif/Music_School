// Students' Info
const students = [
    {
        id: "37542923",
        name: "Wan En",
        age: 18,
        gender: "Image/student/female.png",
        photo: "Image/student/wanen.png",
        programme: "Advanced",
        instrument: "Piano",
        joinDate: "2022/01/30",
        attendance: "92",
        overall: "88",
        assignment: "91",
        test: "86",
        strengths: [
            { label: "Expressive Performance", level: "perfect" },
            { label: "Rhythmic Stability", level: "middle" },
            { label: "Techinical Articulation", level: "perfect" }
        ],
        archievement: "Completed ABRSM Grade 5 with Distinction.",
        next: "Prepare for Grade 6 sight-reading & scales.",
        tutor: "Beethoven",
        comment: "Excellent discipline and expressive tone. Continue developing dynamic control."
    },

    {
        id: "38292917",
        name: "Jack",
        age: 21,
        gender: "Image/student/male.png",
        photo: "Image/student/jack.png",
        programme: "Foundation",
        instrument: "Guitar",
        joinDate: "2024/09/05",
        attendance: "85",
        overall: "79",
        assignment: "82",
        test: "76",
        strengths: [
            { label: "Groove Control", level: "middle" },
            { label: "Chord Transition Accuracy", level: "middle" },
            { label: "Fingerstyle Articulation", level: "middle" }
        ],
        archievement: "Solid rhythm foundation achieved.",
        next: "Improve barre-chord transitions.",
        tutor: "Taylor Swift",
        comment: "Good progress. Needs stronger finger independence."
    },

    {
        id: "37542929",
        name: "Emily Tan",
        age: 16,
        gender: "Image/student/female.png",
        photo: "Image/student/emily.png",
        programme: "Foundation",
        instrument: "Violin",
        joinDate: "2021/08/12",
        attendance: "94",
        overall: "85",
        assignment: "87",
        test: "83",
        strengths: [
            { label: "Intonation", level: "perfect" },
            { label: "Bow Control", level: "perfect" },
            { label: "Musical Expression", level: "middle" }
        ],
        archievement: "Completed ABRSM Grade 4 with Merit.",
        next: "Work on shifting techniques and vibrato.",
        tutor: "Beethoven",
        comment: "Precise intonation and needs more confidence in dynamics."
    },

    {
        id: "38524930",
        name: "Ryan Lee",
        age: 15,
        gender: "Image/student/male.png",
        photo: "Image/student/ryan.png",
        programme: "Foundation",
        instrument: "Xylophone",
        joinDate: "2023/02/18",
        attendance: "91",
        overall: "80",
        assignment: "82",
        test: "78",
        strengths: [
            { label: "Rhythmic Accuracy", level: "perfect" },
            { label: "Hand Coordination", level: "middle" },
            { label: "Tone Quality", level: "middle" }
        ],
        archievement: "Performed in Royal Academy of Music.",
        next: "Prepare for ABRSM Grade 1 Xylophone exam.",
        tutor: "Boris Karloff",
        comment: "Good rhythm. Just focus on hand independence and dynamics."
    },

    {
        id: "37542931",
        name: "Mei Ling",
        age: 17,
        gender: "Image/student/female.png",
        photo: "Image/student/meiling.jpg",
        programme: "Advanced",
        instrument: "Gu Zheng",
        joinDate: "2020/06/05",
        attendance: "96",
        overall: "89",
        assignment: "90",
        test: "88",
        strengths: [
            { label: "Finger Technique", level: "perfect" },
            { label: "Expression", level: "perfect" },
            { label: "Rhythmic Accuracy", level: "perfect" }
        ],
        archievement: "Won State-Level Gu Zheng COmpetition.",
        next: "Focus on advanced pieces and expression.",
        tutor: "Wang Zhong Shan",
        comment: "Highly expressive and work on sight reading for new repertoire."
    },

    {
        id: "38325429",
        name: "Hafiz Amir",
        age: 18,
        gender: "Image/student/male.png",
        photo: "Image/student/hafiz.jpg",
        programme: "Advanced",
        instrument: "Drums",
        joinDate: "2019/11/12",
        attendance: "93",
        overall: "87",
        assignment: "85",
        test: "90",
        strengths: [
            { label: "Rhythmic Accuracy", level: "perfect" },
            { label: "Coordination", level: "perfect" },
            { label: "Dynamic Control", level: "middle" }
        ],
        archievement: "Performed in National Music Festival.",
        next: "Focus on polyrhythms and advanced improvisation.",
        tutor: "Buddy Rich",
        comment: "Having strong timing. Improve creative expression in solos."
    },
];

//DOM
const input = document.getElementById("studentIdInput");
const resultDiv = document.getElementById("result");
const avatarBox = document.getElementById("avatarBox")
const studentInfo = document.getElementById("studentInfo");
const strengthProfile = document.getElementById("strengthProfile");
const archieveHighlight = document.getElementById("archieveHighlight");
const nextDevelopment = document.getElementById("nextDevelopment");
const tutorCmt = document.getElementById("tutorCmt");

function runStudentSearch() {
    const id = input.value.trim();
    const s = students.find(st => st.id === id);

    if (!s) {
        alert("Student ID not found");

        resultDiv.style.display = "none";
        return;
    }

    resultDiv.style.display = "block";

    avatarBox.innerHTML = `
        <div class="avatar-profile">
            <img src="${s.photo}">
        </div>

        <div class="avatar-gender">
            <img src="${s.gender}">
        </div>

        <div class="avatar-name">
            <h2>Hi, ${s.name}</h2>
        </div>
    `

    studentInfo.innerHTML = `
        <h3>Student Profile</h3>
        <p><b>Age:</b> ${s.age}</p>
        <p><b>Programme Level: </b>${s.programme}</p>
        <p><b>Primary Instrument: </b>${s.instrument}</p>
        <p><b>Enrollment Date: </b>${s.joinDate}</p>
    `

    strengthProfile.innerHTML = `
        <h3>Strength Profile</h3>
        ${s.strengths.map(st => `
            <p class="strength ${st.level}">
            ${st.label}
            </p>
            `).join("")}
    `;

    archieveHighlight.innerHTML = `
        <h3>Archievement Highlight</h3>
        <p>${s.archievement}</p>

    `

    nextDevelopment.innerHTML = `
        <h3>Next Development Goals</h3>
        <p>${s.next}</p>
    `

    tutorCmt.innerHTML = `
        <h3>Tutor's Comment</h3>
        <p>${s.comment}</p>
        <i> —— ${s.tutor}</i>
    `

    animatedCircle("overallCanvas", "Overall", s.overall, "#8cba00");
    animatedCircle("attendanceCanvas", "Attendance", s.attendance, "#ff6384");
    animatedCircle("assignCanvas", "Assignment", s.assignment, "#5a002b");
    animatedCircle("testCanvas", "Test", s.test, "#ff9f40");
}

document.getElementById("searchBtn").onclick = runStudentSearch;
input.addEventListener("keydown", e => {
    if (e.key === "Enter")
        runStudentSearch();
});

function animatedCircle(canvasId, title, percent, color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    const center = canvas.width / 2;
    const lineWidth = 12
    const r = center - lineWidth - 8;
    let current = 0

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(center, center, r, 0, Math.PI * 2);
        ctx.strokeStyle = "#eee";
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        const end = (current / 100) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(center, center, r, -Math.PI / 2, end - Math.PI / 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.fillStyle = "#444";
        ctx.font = "bold 18px Lora";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(title, center, center - 10);

        ctx.font = "bold 16px Lora";
        ctx.fillText(current + "%", center, center + 18);

        if (current < percent) {
            current++;
            requestAnimationFrame(draw);
        }
    }

    draw();
}