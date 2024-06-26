document.addEventListener('DOMContentLoaded', function() {
    const games = document.querySelectorAll('.game button');

    games.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Wybrałeś grę: ${this.textContent}`);
        });
    });
});
