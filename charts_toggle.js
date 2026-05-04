// on startup
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('css_toggle').addEventListener('click', toggleButton);
})


// switch CSS
function toggleButton () {
    const mods = document.querySelector('link[href~="charts.css"]');
    this.checked ? mods.disabled = false : mods.disabled = true;  
}