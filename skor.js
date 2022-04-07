// Prikupljanje skora igraca sa Api-ja i popunjavanje tabele.

let tabelaIgraca = document.getElementById('vrednostIgraca');

const skorIgraca = function () {
    axios.get('http://localhost/js-vezbanje/skor.php')
        .then(response => {
            let sviIgraci = response.data;

            let dugmeObrisi;
            sviIgraci.forEach(igrac => {

                if (igrac.lozinka === 'admin') {
                    dugmeObrisi = `<button type="button" class="obrisiIgraca btn btn-danger">Obrisi skor</button>`;
                } else {
                    dugmeObrisi = '';
                }

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
                // console.log(response.data.message);
                Swal.fire(response.data.message);
                // alert(response.data.message);
                // location.reload();
            })
            .catch(error => { console.error(error) });
    }


    // F-ja za brisanje input polja lozinke 

    const brisanjePoljaLozinke = function () {
        document.getElementById('lozinka').value = '';
    }
