// object
type user = {
    name: string,
    nim: string,
    age: number 
};

let student:user = {
    name: "Satria",
    nim: "001",
    age: 20
};

// Union (tipe data lebih dari satu)
type product={
    name: string,
    count: string|number
};

let toko:product={
    name:"Gundam",
    count:1
};

let toko2:product={
    name:"Nendo",
    count:"satu"
};

console.log(toko);
console.log(toko2);