function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);
