// Footer
document.addEventListener("DOMContentLoaded", () => {
    const feedback = document.getElementById("feedback");
    const submitBtn = document.getElementById("submitFeedback");

    submitBtn.addEventListener("click", () => {
        const text = feedback.value.trim();

        if (text === "") {
            alert("Please write some feedback before submitting.");
            return;
        }

        alert("Thank you for your feedback! 💕");

        feedback.value = "";
    });
});