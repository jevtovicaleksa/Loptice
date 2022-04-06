// Prikupljanje skora igraca sa Api-ja i popunjavanje tabele.

let tabelaIgraca = document.getElementById('vrednostIgraca');

const skorIgraca = function() {
    axios.get('http://localhost/js-vezbanje/skor.php')
    .then(response => {
        let sviIgraci = response.data;
        
        let dugmeObrisi;
        sviIgraci.forEach(igrac => {
<<<<<<< HEAD
            if(igrac.lozinka === 'admin'){
                dugmeObrisi = `<button type="button" class="obrisiIgraca btn btn-danger">Obrisi skor</button>`;
            }else{
                dugmeObrisi = '';
            }
=======
>>>>>>> 33e1f7977d931783a7190543c3893dcc7503b6a1
            tabelaIgraca.innerHTML += `<tr> <td>${igrac.id}</td>
                                            <td>${igrac.ime}</td>
                                            <td>${igrac.prezime}</td>
                                            <td>${igrac.figura}</td>
                                            <td>${igrac.vreme}</td>
                                            <td style="display: flex; justify-content: space-between; align-items: center">${igrac.lozinka}${dugmeObrisi}</td>
                                        </tr>`
        });
    })
}

skorIgraca();

<<<<<<< HEAD

document.body.addEventListener('click', function(e){ 
     if(e.target.classList.contains('obrisiIgraca')){       
         alert("Da li ste sigurni da zelite da obrisete igrace");
        //  console.log('radi');
             axios.post('http://localhost/js-vezbanje/obrisiIgraca.php')
             .then(response => {
                 console.log(response);
                 location.reload();
             })
             .catch(error => {console.error(error)});
     }
})


/* dodaj dugme OBRISI SKOR

na klik pozivas novi poziv ka endpointu DELETE zahtev

u php dodas novu proveru na dnu da li je delete zahtev i ako jeste
onda proveravas da li je stigla LOZINKA (novo polje u zahtevu sa fronta kao sto je ime i li prezime)

ako je lozinak == 'admin' onda nastavi ako nije odna vrati pogresna lozinka i prikazi korinsiku tu poruku renderuj mu
ako je sve ok onda neka obrise sve iz tabele igrac

*/
=======
// Slanje lozinke na API
document.body.addEventListener('click', function(e){
    if(e.target.classList.contains('obrisiSkor')){
        let lozinka = document.getElementById('lozinka').value;
        axios.post('http://localhost/js-vezbanje/obrisiIgraca.php', {
                Lozinka : lozinka
            })
            .then(response => {
                // console.log(response.data.message);
                Swal.fire(response.data.message);
                // alert(response.data.message);
                // location.reload();
            })
            .catch(error => {console.error(error)});
    }
})


// F-ja za brisanje input polja lozinke 

const brisanjePoljaLozinke = function(){
    document.getElementById('lozinka').value = '';
}
>>>>>>> 33e1f7977d931783a7190543c3893dcc7503b6a1
