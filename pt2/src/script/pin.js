const cekpin = () => {
  const pin = document.getElementById("pin");
  const myPin = "141105";
  if (pin.value === "") {
    alert("Silahkan Masukan Pin Anda");
  } else {
    pin.value === myPin ? (window.location.href = "pilihNominal.html") : alert("Pin Yang Anda Masukan salah");
  }
};
