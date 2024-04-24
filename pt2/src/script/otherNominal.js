const saldo = 1000000

const inputNominal = document.getElementById('nominal')

const pilihNominal = (inputNominal) => {
    if (saldo % 50000 === 0) {
        confirm(`Anda Mengambil Uang sebesar ${inputNominal} Saldo Anda Tinggal ${saldo - inputNominal}`)
    } else if (inputNominal === '') {
        alert('Masukan nominal')
    } else {
        alert('Masukan kelipatan 50000')
    }
}