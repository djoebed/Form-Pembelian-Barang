$(document).ready(function () {
  // Tombol Hitung
  $("#btnHitung").click(function () {
    let nama = $("#namaPelanggan").val().trim();
    let produk = $("#namaProduk").val().trim();
    let harga = $("#hargaProduk").val();
    let jumlah = $("#jumlahPembelian").val();

    $("#error").html("");

    // Validasi
    if (nama === "" || produk === "" || harga === "" || jumlah === "") {
      $("#error").html("Semua input wajib diisi!");
      return;
    }

    harga = parseFloat(harga);
    jumlah = parseInt(jumlah);

    let totalBelanja = harga * jumlah;
    let potongan = 0;

    if (totalBelanja >= 400000) {
      potongan = 50000;
    }

    let totalBayar = totalBelanja - potongan;

    $("#hasilNama").text(nama);
    $("#hasilProduk").text(produk);
    $("#hasilBelanja").text(formatRupiah(totalBelanja));
    $("#hasilPotongan").text(formatRupiah(potongan));
    $("#hasilBayar").text(formatRupiah(totalBayar));

    $("#hasilCard").slideDown();
  });

  // Tombol Reset
  $("#btnReset").click(function () {
    $("#namaPelanggan").val("");
    $("#namaProduk").val("");
    $("#hargaProduk").val("");
    $("#jumlahPembelian").val("");

    $("#error").html("");

    $("#hasilCard").slideUp();

    $("#namaPelanggan").focus();
  });

  // ENTER → pindah field berikutnya
  // ENTER pada field terakhir → hitung
  $("input").keydown(function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      let inputs = $("input");
      let index = inputs.index(this);

      if (index < inputs.length - 1) {
        inputs.eq(index + 1).focus();
      } else {
        $("#btnHitung").click();
      }
    }
  });
});

// Format Rupiah
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}
