// on startup
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('css_toggle').addEventListener('click', toggleButton);
    observerInit();
})


// switch CSS
function toggleButton () {
    const mods = document.querySelector('link[href~="charts.css"]');
    this.checked ? mods.disabled = false : mods.disabled = true;  
}


// dataviz animations
function observerInit () {
    const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
                if (!entry.target.classList.contains('animChart')) {
                    if (entry.intersectionRatio >= 0) {
                        entry.target.classList.add('hideChart');
                    };
                    if (entry.intersectionRatio >= 0.3) {
                        entry.target.classList.add('animChart');
                        entry.target.classList.remove('hideChart');
                    };
                }
            })
    },
    { threshold: [0, 0.3] }
    );

    const elts = document.querySelectorAll('.hideChart');
    elts.forEach(function (elt) {
        observer.observe(elt);
    })
}