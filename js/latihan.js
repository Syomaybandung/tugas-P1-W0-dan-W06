// Latihan JavaScript Dasar - Minggu 6
// Kalkulator nilai rapor si Console

// 1. Pesan pertama ke Console 
console.log("Hallo, saya Rana");
console.log("Ini latihan JavaScript pertamaku.");

//2. Data siswa
// const dipakai untuk nilai yang tidak akan diganti, sedangkan let untuk nilai yang mungkin berubah.
const nama = "Ananditya Zahra";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;
console.log(`Nama: ${nama}, kelas ${kelas}`)
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`)

// Fungsi menerima tiga nilai; operator + menjumlahkan dan / membagi hasilnya dengan 3.
function hitungRataRata(tugas, uts, uas) {
    return (tugas + uts + uas) / 3;
}

// Kondisi diperiksa dari atas. Nilai yang mencapai batas pertama langsung mendapat predikat.
function predikat(nilai) {
    if (nilai >= 90) return "A";
    if (nilai >= 80) return "B";
    if (nilai >= 70) return "C";
    return "D";
}

// Menggabungkan hasil beberapa fungsi. >= membandingkan nilai dengan batas minimum,
// sedangkan && berarti kedua syarat harus benar agar siswa mendapat sertifikat.
function rapor(namaSiswa, tugas, uts, uas) {
    const rataRataSiswa = hitungRataRata(tugas, uts, uas);
    const lulusSiswa = rataRataSiswa >= kkm;
    const sertifikatSiswa = lulusSiswa && kehadiran >= 80;

    return `${namaSiswa}: rata-rata ${rataRataSiswa.toFixed(2)}, predikat ${predikat(rataRataSiswa)}, lulus KKM ${lulusSiswa}, dapat sertifikat ${sertifikatSiswa}`;
}

// 3. Hasil nilai Andi
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

// Menampilkan hasil perhitungan ke Console.
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

//Predikat dengan if, else if, dan else
// Hanya satu cabang yang dijalankan: program memilih rentang nilai yang cocok.
let predikatNilai;

if (rataRata >= 90) {
    predikatNilai = "A";
} else if (rataRata >= 80) {
    predikatNilai = "B";
} else if (rataRata >= 70) {
    predikatNilai = "C";
} else {
    predikatNilai = "D";
}

console.log(`Predikat: ${predikatNilai}`);

//Pesan kelulusan 


// 4. Hasil nilai Rana
// Menguji lagi perhitungan yang sama dan menampilkan pesan sesuai status kelulusan.
const rataRataRana = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulusRana = rataRataRana >= kkm;
const dapatSertifikatRana = lulusRana && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRataRana}`);
console.log(`Predikat: ${predikat(rataRataRana)}`);
console.log(`Lulus KKM: ${lulusRana}`);
console.log(`Dapat sertifikat: ${dapatSertifikatRana}`);

// Pesan kelulusan
if (lulusRana) {
    console.log("Selamat, kamu lulus KKM!");
} else {
    console.log("Tetap semangat, ikut remedial ya.");
}

// 5. Menguji batas predikat, termasuk nilai tepat di batas dan satu poin di bawahnya.
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D

// 6. Rapor beberapa siswa
// Memanggil fungsi rapor untuk melihat bagaimana hasilnya berbeda pada data tiap siswa.
console.log(rapor("Rana", 85, 78, 89));
console.log(rapor("Wiliam", 92, 88, 96));
console.log(rapor("Terra", 70, 65, 72));
