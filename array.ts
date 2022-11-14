// tipe data array string
let numero: number[] =[177,13];
// or
let character: Array<string> = ["Gintoki", "Katsura","Kenpachi"];

// Ubah isian dalam array atau tuple
character[1]="Kagura";

// tambah isian data
character.push("Madao", "Sadaharu");

// Hapus isian data
delete character[4];

console.log(character[1]);
console.log(character[3]);
console.log(character[5]);
console.log(character);
// note indeks dimulai dari 0

// Tipe data tuple
let product:[string, number] = ["Manga", 1];

product[0]="Web";

console.log(product[0]);


