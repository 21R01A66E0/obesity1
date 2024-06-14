// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('toggleTheme');
    toggleThemeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
