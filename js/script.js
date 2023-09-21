// Fungsi untuk menghitung tarif pengiriman
function calculateShippingRate() {
    const destinationSelect = document.getElementById('destination');
    const selectedDestination = destinationSelect.value;
    const weightInput = document.getElementById('weight');
    const weight = parseFloat(weightInput.value);

    // Validasi input weight harus berupa angka positif
    if (isNaN(weight) || weight <= 0) {
        alert('Masukkan berat yang valid (angka positif).');
        return;
    }

    let shippingRate = 0;

    // Lakukan perhitungan tarif pengiriman berdasarkan destinasi
    switch (selectedDestination) {
        case 'Jakarta':
            shippingRate = weight * 7000;
            break;
        case 'Bogor':
            shippingRate = weight * 12000;
            break;
        case 'Depok':
            shippingRate = weight * 8000;
            break;
        case 'Tangerang':
            shippingRate = weight * 10000;
            break;
        case 'Bekasi':
            shippingRate = weight * 9000;
            break;
        // Tambahkan lebih banyak kasus sesuai dengan destinasi lainnya
        default:
            alert('Pilih destinasi yang valid.');
            return;
    }

    // Tampilkan hasil perhitungan dalam bentuk rupiah
    const formattedRate = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(shippingRate);

    // Tampilkan hasil perhitungan di konten popup
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `Tarif pengiriman untuk ${weight} kg ke ${selectedDestination}: ${formattedRate}`;

    // Tampilkan popup
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex';
}

// Tangani pengiriman form Cek Tarif
document.getElementById('popup-shipping-rate').addEventListener('click', function () {
    calculateShippingRate();
});


// Tangani pengiriman form Lacak
document.getElementById('popup-tracking').addEventListener('click', function () {
    const trackingNumber = document.getElementById('tracking-number').value;

    // Lakukan pengiriman permintaan pelacakan dan tampilkan hasilnya di konten popup
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = `Status pengiriman untuk nomor pelacakan ${trackingNumber}: <em>Sedang dalam perjalanan</em>`;

    // Tampilkan popup
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex';
});
