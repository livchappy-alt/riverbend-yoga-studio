const yogaMoments = [
    {
        time: "short",
        goal: "relax",
        className: "Restorative Yoga",
        description: "A gentle class focused on relaxation, breathing, and slowing down."
    },
    {
        time: "short",
        goal: "energy",
        className: "Gentle Yoga",
        description: "A comfortable way to move your body and feel refreshed."
    },
    {
        time: "long",
        goal: "energy",
        className: "Vinyasa Yoga",
        description: "A flowing class that combines movement and breathing to build energy."
    },
    {
        time: "long",
        goal: "relax",
        className: "Restorative Yoga",
        description: "A slower practice designed to help you relax and reset."
    }
];function recommendClass() {
    const timeChoice = document.getElementById("time-choice").value;
    const goalChoice = document.getElementById("goal-choice").value;
    const recommendation = document.getElementById("recommendation");

    if (timeChoice === "" || goalChoice === "") {
        recommendation.textContent = "Please choose both options to find a class.";
        return;
    }

    const match = yogaMoments.find(function(moment) {
        return moment.time === timeChoice && moment.goal === goalChoice;
    });

    if (match) {
        recommendation.innerHTML =
            "<h3>" + match.className + "</h3>" +
            "<p>" + match.description + "</p>";
    }
}document.getElementById("recommend-button").addEventListener("click", recommendClass);
function savePreferences() {
    const timeChoice = document.getElementById("time-choice").value;
    const goalChoice = document.getElementById("goal-choice").value;

    localStorage.setItem("yogaTime", timeChoice);
    localStorage.setItem("yogaGoal", goalChoice);
}

function loadPreferences() {
    const savedTime = localStorage.getItem("yogaTime");
    const savedGoal = localStorage.getItem("yogaGoal");

    if (savedTime) {
        document.getElementById("time-choice").value = savedTime;
    }

    if (savedGoal) {
        document.getElementById("goal-choice").value = savedGoal;
    }
}document.getElementById("recommend-button").addEventListener("click", function() {
    savePreferences();
});

loadPreferences();
function validateForm(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    nameError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    if (name.length < 2) {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
}const form = document.querySelector("form");

form.addEventListener("submit", validateForm);