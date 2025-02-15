function showLove() {
    document.getElementById("message").classList.remove("hidden");
}

// Fungsi untuk memindahkan tombol "No"
function moveNo() {
    let noBtn = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
