# JSON (JavaScript Object Notation)

JSON (JavaScript Object Notation) adalah sebuah format data yang digunakan untuk pertukaran data antar aplikasi. JSON bersifat ringan, mudah dibaca, dan mudah dipahami oleh mesin serta manusia.

Format JSON menggunakan struktur key-value pairs yang mirip dengan objek dalam JavaScript. Setiap data disimpan dalam format key-value pairs yang terdiri dari key (kunci) dan value (nilai). Key harus berupa string, sedangkan value bisa berupa tipe data apapun seperti string, number, boolean, array, atau objek.

Contoh format JSON:

```js
{
  "nama": "John Doe",
  "umur": 25,
  "alamat": {
    "jalan": "Jl. Sudirman",
    "kota": "Jakarta"
  },
  "hobi": [
    "membaca",
    "berenang"
  ]
}
```

Di JavaScript, kita dapat membaca dan menulis data dalam format JSON dengan menggunakan dua metode, yaitu `JSON.parse()` dan `JSON.stringify()`.

### 1. JSON.parse()

Metode `JSON.parse()` digunakan untuk mengubah format data JSON menjadi objek JavaScript. Metode ini menerima parameter berupa string yang berisi data dalam format JSON, dan mengembalikan objek JavaScript yang sesuai dengan data tersebut.

Contoh penggunaan metode `JSON.parse()`:
```js
const dataJson = '{ "nama": "John Doe", "umur": 25 }';
const dataObjek = JSON.parse(dataJson);

console.log(dataObjek.nama); // Output: "John Doe"
console.log(dataObjek.umur); // Output: 25
```

### 2. JSON.stringify()
Metode `JSON.stringify()` digunakan untuk mengubah objek JavaScript menjadi format data JSON. Metode ini menerima parameter berupa objek JavaScript yang ingin diubah, dan mengembalikan string yang sesuai dengan data tersebut dalam format JSON.

Contoh penggunaan metode `JSON.stringify()`:
```js
const dataObjek = {
  nama: "John Doe",
  umur: 25
};

const dataJson = JSON.stringify(dataObjek);

console.log(dataJson); // Output: '{ "nama": "John Doe", "umur": 25 }'
```

Dengan menggunakan metode JSON.parse() dan JSON.stringify(), kita dapat dengan mudah membaca dan menulis data dalam format JSON di JavaScript.

<br>
<hr>

## FS (File System)

Untuk membaca file JSON yang terpisah dari file JavaScript, kita bisa menggunakan fitur bawaan Node.js yaitu `fs` (file system) module.

`fs` adalah singkatan dari "file system" dan merupakan salah satu modul bawaan dari Node.js. Modul `fs` digunakan untuk mengakses dan memanipulasi file dan direktori pada sistem file yang digunakan oleh Node.js.

Modul `fs` menyediakan berbagai fungsi yang dapat digunakan untuk membaca, menulis, memperbarui, dan menghapus file dan direktori, serta mengatur akses dan hak akses untuk file dan direktori. Beberapa contoh fungsi yang disediakan oleh modul `fs` antara lain:

- `fs.readFile(path, options, callback)`: membaca isi file pada path tertentu dengan opsi konfigurasi tertentu, dan mengeksekusi fungsi callback dengan argumen error dan data ketika operasi selesai.
- `fs.readFileSync(path, options)`: membaca isi file pada path tertentu dengan opsi konfigurasi tertentu menggunakan alur *synchronous*.
- `fs.writeFile(file, data, options, callback)`: menulis data pada file yang ditentukan dengan opsi konfigurasi tertentu, dan mengeksekusi fungsi callback dengan argumen error ketika operasi selesai.
- `fs.writeFileSync(file, data, options)`: menulis data pada file yang ditentukan dengan opsi konfigurasi tertentu menggunakan alur *synchronous*.
- `fs.mkdir(path, options, callback)`: membuat direktori baru pada path tertentu dengan opsi konfigurasi tertentu, dan mengeksekusi fungsi callback dengan argumen error ketika operasi selesai.
- `fs.readdir(path, options, callback`): membaca direktori pada path tertentu dengan opsi konfigurasi tertentu, dan mengeksekusi fungsi callback dengan argumen error dan files ketika operasi selesai.

Dalam menggunakan modul `fs`, perlu diingat bahwa sebagian besar fungsi yang disediakan bersifat asynchronous, sehingga menggunakan callback sangat dianjurkan untuk menangani hasil operasi. Selain itu, beberapa fungsi juga memiliki opsi konfigurasi tertentu yang dapat digunakan untuk mengatur perilaku operasi sesuai kebutuhan.

Berikut ini adalah contoh cara read dan write file JSON menggunakan `fs.readFileSync` dan `fs.writeFileSync`:
```js
const fs = require('fs');

// Membaca file JSON dengan fs.readFileSync
const data = fs.readFileSync('data.json');
const obj = JSON.parse(data);

console.log(obj);

// Menambahkan data pada objek yang telah dibaca
obj.data.push('contoh data baru');

// Menulis kembali file JSON dengan fs.writeFileSync
fs.writeFileSync('data.json', JSON.stringify(obj));
```

Pada contoh di atas, kita membaca file JSON dengan menggunakan `fs.readFileSync` dan kemudian mem-parse data JSON yang telah dibaca menjadi sebuah objek JavaScript. Kemudian kita menambahkan data baru pada objek tersebut. Setelah itu, kita menulis kembali file JSON dengan menggunakan `fs.writeFileSync`.

Perlu diperhatikan bahwa `fs.readFileSync` dan `fs.writeFileSync` bersifat *synchronous*, sehingga penggunaannya dapat memblokir eksekusi program pada bagian tersebut sampai operasi selesai dilakukan. Jika kita ingin menghindari blokir eksekusi program, kita dapat menggunakan fungsi yang bersifat *asynchronous* seperti `fs.readFile` dan `fs.writeFile`.