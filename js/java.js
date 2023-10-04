var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function handleClick(event){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("showNavbar");
    navbar.classList.toggle("hideNavbar");
}
 // Mendapatkan elemen input dan tombol pencarian
 var searchInput = document.getElementById("search-input");
 var searchButton = document.getElementById("search-button");

 // Mendengarkan klik tombol pencarian
 searchButton.addEventListener("click", function() {
     // Mendapatkan nilai pencarian dari input
     var searchTerm = searchInput.value;

     // Menentukan halaman yang akan diarahkan berdasarkan query pencarian
     var targetPage = determineTargetPage(searchTerm);

     // Redirect ke halaman yang sesuai
     if (targetPage) {
         window.location.href = targetPage;
     } else {
         // Tampilkan pesan error jika halaman tidak ditemukan
         alert("Halaman tidak ditemukan untuk pencarian ini");
     }
 });
