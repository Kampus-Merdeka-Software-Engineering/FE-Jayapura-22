const BASE_URL = "https://be-jayapura-22-production.up.railway.app"

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
    const inputweight = document.querySelector("#weight");
    
    const valueNama = inputNama.value;
    const valueNamaBarang = inputNamaBarang.value;
    const valueNomorHP = inputnomorHP.value;
    const valueDestination = inputDestination.value;
    const valueWeight = inputweight.value;

    const form = document.getElementById("shipping-rate-form");
    if (!form.checkValidity()) {
        event.preventDefault();
        alert("Please fill in all required fields !!");
        return false;
    }

    fetch(`${BASE_URL}/input-data-tracking`,{
      method: "POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify ({
        nama: valueNama,
        namaBarang: valueNamaBarang,
        nomorHP: valueNomorHP,
        destination: valueDestination,
        weight: valueWeight,
      }), 

    })
    .then((Response) => Response.json())
    .then((response) => {
      window.alert(
        `Berhasil menyimpan data, nomor tracking anda ${response.trackingNumber}`
        );
      inputNama.value = "";
      inputNamaBarang.value = "";
      inputnomorHP.value = "";
      inputDestination.value = "";
      inputweight.value = "";
    })
    .catch(error => {
        console.error(error);

    });
}

function Tracking(event) {
    const inputTrackinNumber = document.querySelector("#tracking-number")
    const value = inputTrackinNumber.value
    fetch(`${BASE_URL}/tracking-shipping/${value}`)
        .then((Response) => Response.json())
        .then((Response) => {
          inputTrackinNumber.value; "";
          const info = document.querySelector (".info");
          info.innerHTML = `
            <ul>
                
                <li>Nama : ${Response.data.nama}</li>
                <li>Nama Barang : ${Response.data.namaBarang}</li>
                <li>Nomor Hp : ${Response.data.nomorHP}</li>
                <li>Destination : ${Response.data.destination}</li>
                <li>Weight : ${Response.data.weight} Kg</li>
            </ul>
          `;
          
    })
    .catch(error => {
        console.error(error);
    });

}

