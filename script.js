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