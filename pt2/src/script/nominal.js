const nominal = {
    seRatus: 100000,
    duaRatus: 200000,
    tigaRatus: 300000,
    limaRatus: 500000,
    satuJuta: 1000000,
    satuJutaLimaRatus: 1500000,
}

const saldo = 1000000

const pilihNominal = (nominal) => {
    if (saldo < nominal) {
        console.log(saldo - nominal)
        alert('Saldo Anda Tidak Cukup !')
    } else if (saldo >= nominal) {
        confirm(`Anda Mengambil Uang sebesar ${nominal} Saldo Anda Tinggal ${saldo - nominal}`)
        console.log(saldo)
    } 
}

const transaksiLain = () => {
    confirm("Fitur tidak tersedia, Apakah anda ingin membatalkan ?")
}