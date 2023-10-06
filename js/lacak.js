const BASE_URL = "https://be-jayapura-22-production.up.railway.app/"

function handleClick(event){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("showNavbar");
    navbar.classList.toggle("hideNavbar");
}

function lacak(event){
    const inputNama = document.querySelector("#nama");
    const inputNamaBarang = document.querySelector("#namaBarang");
    const inputnomorHP = document.querySelector("#nomorHP");
    const inputDestination = document.querySelector("#destination");
    const inputweight = document.querySelector("weight");
    
    const valueNama = inputNama.value;
    const valueNamaBarang = inputNamaBarang.value;
    const valueNomorHP = inputnomorHP.value;
    const valueDestination = inputDestination.value;
    const valueWeight = inputweight.value

    fetch(`${BASE_URL}/input-data-tracking`,{
      method: "POST",
      body: JSON.stringify ({
        nama: valueNama,
        nomorBarang: valueNamaBarang,
        nomorHp: valueNomorHP,
        destination: valueDestination,
        weight: valueWeight,
      }), 

    })
    .then((Response) => Response.json())
    .then((Response) => {
      window.alert(
        `Berhasil menyimpan data, nomor tracking anda ${response.nomorTracking}`
        );
      inputNama.value = "";
      inputNamaBarang.value = "";
      inputnomorHP.value = "";
      inputDestination.value = "";
      inputweight.value = "";
    })
    .catch.error (error => {
        console.error(error);

    });
}

function tracking(event) {
    const inputTrackinNumber = document.querySelector("#tracking-number")
    const value = inputTrackinNumber.value
    fetch('$BASE_URL)/cek-shipping/${value}')
        .then((Response) => Response.json())
        .then((Response) => {
          inputTrackinNumber.value; "";
          const info = document.querySelector (".info");
          info.innerHTML = `
            <ul>
                <li>nama: ${Response.data.nama}</li>
                <li>nama Barang: ${Response.data.namaBarang}</li>
                <li>nomor Hp: ${Response.data.nomorHp}</li>
                <li>destination: ${Response.data.destination}</li>
                <li>weight: ${Response.data.weight}</li>
            </ul>
          `;
          
    })
    .catch.error (error => {
        console.error(error);
    });

}

function handleClick(event){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("showNavbar");
    navbar.classList.toggle("hideNavbar");
}
