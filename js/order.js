// Ambil referensi ke elemen-elemen formulir
const jenisPengirimanSelect = document.getElementById('jenis-pengiriman');
const beratPaketInput = document.getElementById('berat-paket');
const tujuanSelect = document.getElementById('tujuan');
const totalBiayaElement = document.getElementById('total-biaya');

// Tambahkan event listener untuk menghitung total biaya saat ada perubahan pada jenis pengiriman, berat paket, atau tujuan
jenisPengirimanSelect.addEventListener('change', hitungTotalBiaya);
beratPaketInput.addEventListener('input', hitungTotalBiaya);
tujuanSelect.addEventListener('change', hitungTotalBiaya);

// Fungsi untuk menghitung total biaya
function hitungTotalBiaya() {
    const jenisPengiriman = jenisPengirimanSelect.value;
    const beratPaket = parseFloat(beratPaketInput.value);
    const tujuan = tujuanSelect.value;
    let biaya = 0;

    // Hitung biaya berdasarkan jenis pengiriman
    if (jenisPengiriman === 'reguler') {
        biaya = beratPaket * 12000; // Contoh: Biaya per kg untuk reguler adalah 10
    } else if (jenisPengiriman === 'express') {
        biaya = beratPaket * 25000; // Contoh: Biaya per kg untuk express adalah 20
    } else if (jenisPengiriman === 'same-day') {
        biaya = beratPaket * 40000; // Contoh: Biaya per kg untuk same day adalah 30
    }

    // Hitung biaya tambahan berdasarkan tujuan
    if (tujuan === 'jakarta') {
        biaya += 7000; // Contoh: Biaya tambahan untuk pengiriman ke Jakarta adalah 10
    } else if (tujuan === 'bogor') {
        biaya += 12000; // Contoh: Biaya tambahan untuk pengiriman ke Bogor adalah 20
    } else if (tujuan === 'depok') {
        biaya += 8000; // Contoh: Biaya tambahan untuk pengiriman ke Depok adalah 15
    } else if (tujuan === 'tangerang') {
        biaya += 1000; // Contoh: Biaya tambahan untuk pengiriman ke Tangerang adalah 25
    } else if (tujuan === 'bekasi') {
        biaya += 9000; // Contoh: Biaya tambahan untuk pengiriman ke Bekasi adalah 18
    }

    // Tampilkan total biaya
    totalBiayaElement.textContent = `Total Biaya: Rp ${biaya.toFixed(2)}`;
}

// Panggil fungsi hitungTotalBiaya saat halaman dimuat untuk menginisialisasi total biaya
hitungTotalBiaya();
