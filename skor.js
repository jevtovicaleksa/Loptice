// Prikupljanje skora igraca sa Api-ja i popunjavanje tabele.
let tabelaIgraca = document.getElementById('vrednostIgraca');

const skorIgraca = function () {
    axios.get('http://localhost/js-vezbanje/skor.php')
        .then(response => {
            let sviIgraci = response.data;

            let dugmeObrisi;
            sviIgraci.forEach(igrac => {
                tabelaIgraca.innerHTML += `<tr> <td>${igrac.id}</td>
                                            <td>${igrac.ime}</td>
                                            <td>${igrac.prezime}</td>
                                            <td>${igrac.figura}</td>
                                            <td>${igrac.vreme}</td>
                                        </tr>`
            });
        })
}

skorIgraca();

// Slanje lozinke na API
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('obrisiSkor')) {
        let lozinka = document.getElementById('lozinka').value;
        axios.post('http://localhost/js-vezbanje/obrisiIgraca.php', {
            Lozinka: lozinka
        })
            .then(response => {
                Swal.fire(response.data.message);
            })
            .catch(error => { console.error(error) });
    }
})



// F-ja za brisanje input polja lozinke 
const brisanjePoljaLozinke = function () {
    document.getElementById('lozinka').value = '';
}