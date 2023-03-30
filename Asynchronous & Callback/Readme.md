# Asynchronous & Callback

Synchronous dan Asynchronous adalah cara berbeda untuk mengeksekusi tugas atau kode di JavaScript.

### Synchronous:
Pada kode `synchronous`, proses eksekusi program akan menunggu kode saat ini selesai dieksekusi sebelum melanjutkan ke baris kode berikutnya. Dalam pengertian ini, program akan menunggu tugas yang sedang dijalankan selesai sebelum melanjutkan ke tugas berikutnya. Kode ini biasanya mudah dibaca dan diimplementasikan, tetapi dapat menyebabkan program menjadi lambat ketika menangani tugas yang memerlukan waktu lama.

Contoh implementasi synchronous:

```js
console.log("Mulai");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Selesai");
```

Outputnya akan:

```js
Mulai
0
1
2
3
4
Selesai
```

### Asynchronous:
Pada kode `asynchronous`, proses eksekusi program tidak menunggu tugas saat ini selesai dieksekusi sebelum melanjutkan ke baris kode berikutnya. Sebaliknya, program akan melanjutkan eksekusi tanpa menunggu tugas yang sedang berjalan selesai. Kode `asynchronous` biasanya digunakan ketika program memerlukan waktu yang lama untuk mengeksekusi tugas tertentu, seperti memuat data dari server. Dalam pengertian ini, program akan melanjutkan eksekusi kode selanjutnya tanpa menunggu tugas yang sedang berjalan selesai.

Contoh implementasi asynchronous:

```js
console.log("Mulai");
setTimeout(() => {
    console.log("Setelah 2 detik");
}, 2000);
console.log("Selesai");
```

Outputnya akan:

```js
Mulai
Selesai
Setelah 2 detik
```

**Penjelasan**: Kita menggunakan fungsi `setTimeout` untuk menunda eksekusi kode dalam 2 detik. Meskipun tugas ini membutuhkan waktu selama 2 detik, program tetap melanjutkan eksekusi kode dan mencetak **"Selesai"** terlebih dahulu. Setelah 2 detik, tugas setTimeout selesai dan mencetak **"Setelah 2 detik"**.

`Async` pada JavaScript didukung oleh beberapa fitur dan API seperti:

### Callback Function
Callback function adalah fungsi yang dijalankan setelah operasi async selesai dilakukan. Callback function dapat digunakan untuk menangani hasil dari operasi async tersebut. Callback function dijalankan setelah operasi async selesai dilakukan, tanpa harus menunggu operasi tersebut selesai.

### Promises
Promises adalah sebuah objek yang merepresentasikan sebuah nilai yang belum tersedia, namun akan tersedia di waktu yang akan datang. Promises dapat digunakan untuk menangani hasil dari operasi async yang sudah selesai dilakukan. Promises memiliki tiga status, yaitu "pending", "fulfilled", dan "rejected".

### Async/await
Async/await adalah sebuah sintaks baru yang memungkinkan kode JavaScript yang asynronous untuk ditulis secara lebih mudah dibaca dan dimengerti. Async/await dibangun di atas Promises dan menggunakan keyword "async" dan "await" untuk mengindikasikan kode yang asynronous.

<hr>

## Callback

Asynchronous (asyn) dan Callback pada JavaScript sering kali terkait karena keduanya digunakan untuk menangani operasi yang membutuhkan waktu yang lama untuk menyelesaikan prosesnya, seperti membaca atau menulis data pada basis data, mengambil data dari jaringan, atau mengeksekusi tugas yang kompleks.

Callback adalah sebuah fungsi yang diberikan sebagai parameter pada fungsi lainnya dan dipanggil kembali ketika fungsi tersebut telah selesai dijalankan. Callback sering kali digunakan dalam operasi asynchronus untuk menangani hasil operasi yang sudah selesai.

Ketika sebuah operasi asynchronus dilakukan, JavaScript tidak akan menunggu operasi tersebut selesai sebelum melanjutkan proses berikutnya. Sebagai gantinya, JavaScript akan menjalankan operasi lain yang ada dalam kode. Ketika operasi asynchronus selesai, maka akan memanggil fungsi callback yang diberikan sebagai parameter untuk menangani hasil dari operasi tersebut.

Sebagai contoh, dalam operasi asynchronus seperti mengambil data dari API, ketika kode menjalankan operasi untuk mengambil data tersebut, JavaScript tidak akan menunggu data tersebut diambil dan akan melanjutkan ke kode berikutnya. Setelah data berhasil diambil, maka akan memanggil fungsi callback yang diberikan sebagai parameter untuk menangani data tersebut dan menampilkan hasilnya pada halaman web.

Jadi, callback sering kali digunakan dalam operasi asynchronus untuk menangani hasil operasi yang sudah selesai, dan membantu JavaScript untuk menjalankan operasi lain dalam kode sambil menunggu operasi asynchronus selesai.

Berikut adalah beberapa contoh implementasi callback pada JavaScript:

1. Menggunakan callback pada fungsi setTimeout()

```js
function doSomething(callback) {
  setTimeout(() => {
    console.log("Hello, World!");
    callback();
  }, 1000);
}

function doAnotherThing() {
  console.log("I'm done!");
}

doSomething(doAnotherThing);
```

Pada contoh di atas, kita menggunakan fungsi setTimeout() untuk menunda eksekusi operasi selama 1 detik. Setelah operasi selesai, kita memanggil callback yang diberikan sebagai parameter untuk mengeksekusi fungsi doAnotherThing().

2. Menggunakan callback pada fungsi fetch()
```js
function getData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}

function displayData(data) {
  console.log(data);
}

getData("https://jsonplaceholder.typicode.com/todos/1", displayData);
```

Pada contoh di atas, kita menggunakan fungsi fetch() untuk mengambil data dari API. Setelah data berhasil diambil, kita memanggil callback yang diberikan sebagai parameter untuk mengeksekusi fungsi displayData() dan menampilkan data pada console.

3. Menggunakan callback pada event listener
```js
const button = document.querySelector("button");

function handleClick(event) {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
```

Pada contoh di atas, kita menggunakan event listener untuk menangani event click pada sebuah button. Ketika button tersebut diklik, JavaScript akan memanggil callback yang diberikan sebagai parameter untuk mengeksekusi fungsi handleClick() dan menampilkan pesan pada console.

<hr>

## CONTOH IMPLEMENTASI

berikut adalah contoh implementasi aplikasi MVC dengan menggunakan Node.js yang membaca dan menulis data ke file JSON menggunakan metode fs.readFile dan fs.writeFile, dan semua operasi dihandle menggunakan callback. Dalam contoh ini, kita akan membuat aplikasi sederhana untuk membuat, membaca, memperbarui, dan menghapus data pengguna pada file JSON.

Struktur file:

```
├── controllers
│   ├── userController.js
├── models
│   ├── userModel.js
├── views
│   ├── userView.js
├── app.js
```

Berikut adalah kode untuk masing-masing file:

**models/userModel.js**
```js
const fs = require('fs');

class UserModel {
  static fileName = './data/users.json';

  // Static method untuk membaca data pengguna dari file JSON
  static readData(callback) {
    fs.readFile(this.fileName, 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, JSON.parse(data));
    });
  }

  // Static method untuk menulis data pengguna ke file JSON
  static writeData(data, callback) {
    fs.writeFile(this.fileName, JSON.stringify(data), (err) => {
      if (err) {
        callback(err);
        return;
      }

      callback(null);
    });
  }
}

module.exports = UserModel;
```

**views/userView.js**
```js
class UserView {
  // Static method untuk menampilkan semua pengguna
  static index(users) {
    console.log('Daftar Pengguna:');
    users.forEach((user) => {
      console.log(`- ${user.name} (${user.email})`);
    });
  }

  // Static method untuk menampilkan detail pengguna
  static show(user) {
    console.log('Detail Pengguna:');
    console.log(`- Nama: ${user.name}`);
    console.log(`- Email: ${user.email}`);
    console.log(`- Telepon: ${user.phone}`);
  }

  // Static method untuk menampilkan pesan kesalahan ketika pengguna tidak ditemukan
  static showNotFound(id) {
    console.log(`Pengguna dengan ID ${id} tidak ditemukan.`);
  }

  // Static method untuk menampilkan pesan kesalahan ketika terjadi kesalahan saat membaca/menulis file JSON
  static showError(err) {
    console.error(`Terjadi kesalahan: ${err.message}`);
  }
}

module.exports = UserView;
```

**controllers/userController.js**
```js
const UserModel = require('../models/userModel');
const UserView = require('../views/userView');

class UserController {
  // Method untuk menampilkan semua pengguna
  static index() {
    UserModel.readData((err, data) => {
      if (err) {
        UserView.showError(err);
        return;
      }

      UserView.index(data);
    });
  }

  // Method untuk menampilkan detail pengguna berdasarkan ID
  static show(id) {
    UserModel.readData((err, data) => {
      if (err) {
        UserView.showError(err);
        return;
      }

      const user = data.find((u) => u.id === id);
      if (!user) {
        UserView.showNotFound(id);
      } else {
        UserView.show(user);
      }
    });
  }
}

module.exports = UserController;
```

**app.js**
```js
const UserController = require('./controllers/userController');

// Menampilkan semua pengguna
UserController.index();

// Menampilkan detail pengguna dengan ID 2
UserController.show(2);
```

