var pendapatanSalesman = [150000, 250000, 400000, 600000];
for (var i = 0; i < pendapatanSalesman.length; i++) {
  var pendapatan = pendapatanSalesman[i];
  var uangJasa = 0;
  var uangKomisi = 0;
  if (pendapatan <= 200000) {
    uangJasa = 10000;
    uangKomisi = pendapatan * 0.1;
  } else if (pendapatan <= 500000) {
    uangJasa = 20000;
    uangKomisi = pendapatan * 0.15;
  } else {
    uangJasa = 30000;
    uangKomisi = pendapatan * 0.2;
  }
  console.log("Pendapatan: Rp. " + pendapatan);
  console.log("Uang Jasa: Rp. " + uangJasa);
  console.log("Uang Komisi: Rp. " + uangKomisi);
  console.log("-------------------------------------");
}
