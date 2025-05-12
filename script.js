const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("click", handleKeyClick));

function handleKeyClick() {
    playKey(this);
}

function playKey(key) {
    const keyAudio = document.getElementById(key.dataset.note);
    keyAudio.currentTime = 0;
    keyAudio.play();

    key.classList.add("active");

    keyAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });
}


document.addEventListener("keydown", function(e) {
    const key = e.key.toLowerCase();
    const pressedKey = Array.from(keys).find(k => k.dataset.key === key);

    if (pressedKey) {
        playKey(pressedKey);
    }
});
