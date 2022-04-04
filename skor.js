// Prikupljanje skora igraca sa Api-ja i popunjavanje tabele.

let tabelaIgraca = document.getElementById('vrednostIgraca');

const skorIgraca = function() {
    axios.get('http://localhost/js-vezbanje/skor.php')
    .then(response => {
        let sviIgraci = response.data;
        
        let dugmeObrisi;
        sviIgraci.forEach(igrac => {
            if(igrac.lozinka === 'admin'){
                dugmeObrisi = `<button type="button" class="obrisiIgraca btn btn-danger">Obrisi</button>`;
            }else{
                dugmeObrisi = '';
            }
            tabelaIgraca.innerHTML += `<tr> 
                                            <td>${igrac.ime}</td>
                                            <td>${igrac.prezime}</td>
                                            <td>${igrac.figura}</td>
                                            <td>${igrac.vreme}</td>
                                            <td>${igrac.lozinka}  ${dugmeObrisi}</td>
                                        </tr>`
        });
    })
}

skorIgraca();


let obrisi = document.getElementById("obirsiIgraca");


/* dodaj dugme OBRISI SKOR

na klik pozivas novi poziv ka endpointu DELETE zahtev

u php dodas novu proveru na dnu da li je delete zahtev i ako jeste
onda proveravasd da li je stigal LOZINKA (novo polje u zahtevu sa fronta kao sto je ime i li prezime)

ako je lozinak == 'admin' onda nastavi ako nije odna vrati pogresna lozinka i prikazi korinsiku tu poruku renderuj mu
ako je sve ok onda neka obrise sve iz tabele igrac


*/