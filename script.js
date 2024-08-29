function updateTime() {
    const now = new Date();
    document.getElementById('time').textContent = now.toLocaleTimeString('fr-FR');
}

function updateMessage() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    let meal;
    let bientot = "";

    if (hour >= 6 && hour < 11) {
        meal = "petit déjeuner";
        if (hour == 5 && minute >= 30) bientot = "Bientôt ";
    } else if (hour >= 11 && hour < 14) {
        meal = "déjeuner";
        if (hour == 10 && minute >= 30) bientot = "Bientôt ";
    } else if (hour >= 14 && hour < 18) {
        meal = "goûter";
        if (hour == 13 && minute >= 30) bientot = "Bientôt ";
    } else {
        meal = "dîner";
        if ((hour == 18 && minute >= 30) || (hour >= 19 && hour < 20)) bientot = "Bientôt ";
    }

    document.getElementById('message').innerHTML = `${bientot}Normalement, c'est l'heure du <strong>${meal}</strong>, mais chacun sa nourriture`;
    document.getElementById('conclusion').innerHTML = 'Oui, c\'est l\'heure de mougou!';
}

function toggleComicBubble() {
    const bubble = document.querySelector('.content__comic-bubble');
    if (bubble) {
        bubble.style.display = bubble.style.display === 'none' ? 'block' : 'none';
        if (bubble.style.display === 'block') {
            bubble.style.animation = 'fadeIn 0.5s forwards';
        }
    }
}

updateTime();
setInterval(updateTime, 1000);
updateMessage();
setInterval(updateMessage, 60000); // Update message every minute
setInterval(toggleComicBubble, 5000); // Toggle comic bubble every 5 seconds
