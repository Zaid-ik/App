
function toggleTheme() {
    document.body.classList.toggle("dark");
}

function showMessage() {
    alert("Welcome to TechNova! 🚀");
}

function sendMessage() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name!");
    } else {
        document.getElementById("result").innerText =
            "Thank you, " + name + "! Message received.";
    }
}
