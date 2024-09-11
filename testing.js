// Ambil elemen modal dengan ID "id01"
var modal = document.getElementById("id01");

// Ketika pengguna mengklik di mana saja di luar modal, tutup modal
window.onclick = function (event) {
  // Jika target dari klik adalah elemen modal (klik di luar konten modal)
  if (event.target == modal) {
    // Sembunyikan modal dengan mengubah properti display menjadi "none"
    modal.style.display = "none";
  }
};
