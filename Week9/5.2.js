const produk = {
    nama: "Mouse",
    harga: 200000,
    stok: 10,
    infoProduk() {
        return `Name: ${produk.nama}, Price: ${produk.harga}, Stock: ${produk.stok}`;
    },
};

console.log(produk.infoProduk());