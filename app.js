// mengambil elemen html document.querySelector() dan document.getElementById().
let judul = document.getElementById("judul");
// console.log(judul);
let paragraf =document.querySelector("#paragraf");

// Mengubah konten elemen menggunakan inner html dan textContent.
function ubahWarna() {
    judul.style.color = "red";
    paragraf.innerHTML = "Warna teks telah diubah!";
}
// ubahWarna();

// Menambahkan dan menghapus elemen.
function tambahParagraf() {
    let newParagraf = document.createElement("p");
    console.log(tambahParagraf);
    newParagraf.textContent = "ini adalah paragraf baru!";
    newParagraf.classList.add("highlight"); // menambahkan kelas css

    document.body.appendChild(newParagraf);
}
// tambahParagraf();

function hapusParagraf() {
    let paragrafTerakhir = document.querySelector("p:last-child");
    if (paragrafTerakhir) {
        paragrafTerakhir.remove();
    }
}
