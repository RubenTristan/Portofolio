// Untuk memunculkan elemen
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Jarak dari bawah layar sebelum animasi dimulai

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Hapus baris ini jika Anda tidak ingin animasi terulang saat scroll ke atas
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

reveal();
