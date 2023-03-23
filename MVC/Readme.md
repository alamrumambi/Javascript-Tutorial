# MVC (Model-View-Controller) 

MVC (Model-View-Controller) adalah sebuah konsep desain perangkat lunak yang bertujuan untuk memisahkan logika aplikasi menjadi tiga bagian yaitu Model, View, dan Controller. Dalam pengembangan web dengan JavaScript, konsep MVC dapat membantu mengorganisir kode Anda dan membuatnya lebih mudah dipahami dan diubah di kemudian hari. Berikut penjelasan singkat tentang ketiga komponen MVC di JavaScript:

## Model
Model mewakili data dan logika bisnis aplikasi. Ini bisa berupa struktur data yang disimpan dalam variabel, atau bisa juga berupa objek yang kompleks dengan berbagai method untuk mengambil, memperbarui, atau menghapus data. Model biasanya tidak berinteraksi dengan DOM (Document Object Model) atau tampilan pengguna, dan hanya menyediakan data kepada controller.

## View
View mewakili bagaimana data ditampilkan kepada pengguna. Ini bisa berupa HTML, CSS, atau template JavaScript. View berinteraksi dengan model untuk menampilkan data kepada pengguna, tetapi tidak boleh berinteraksi langsung dengan model.

## Controller
Controller mengatur interaksi antara model dan view. Controller menerima input dari pengguna melalui view, dan menggunakannya untuk memperbarui model. Setelah model diperbarui, controller memperbarui view untuk mencerminkan perubahan tersebut.

<hr>
<br>
Dalam pengembangan web dengan JavaScript, Anda dapat mengimplementasikan konsep MVC dengan menggunakan kerangka kerja (framework) seperti AngularJS, React, atau Backbone.js. Framework ini akan membantu Anda memisahkan kode JavaScript Anda menjadi tiga bagian MVC yang jelas dan mudah dimengerti, sehingga Anda dapat membuat aplikasi yang lebih besar dan kompleks dengan lebih mudah dan efisien.

<br>
<hr>

## Contoh Kode

Berikut adalah contoh implementasi konsep MVC di JavaScript

- Model
```js
class DataModel {
  static getAllData() {
    // static method untuk mengambil semua data dari model
    return DataModel.data;
  }
  
  static addData(data) {
    // static method untuk menambahkan data ke model
    DataModel.data.push(data);
  }
  
  static removeData(data) {
    // static method untuk menghapus data dari model
    const index = DataModel.data.indexOf(data);
    if (index !== -1) {
      DataModel.data.splice(index, 1);
    }
  }
}

module.exports = DataModel;
```

- View
```js
class DataView {
  static showData(data) {
    // static method untuk menampilkan keseluruhan data
    console.table(data);
  }

  static showMessage(msg) {
    // static method untuk menampilkan pesan apakah data berhasil ditambahkan atau tidak
    console.log(`=============\n${msg}\n=============`);
  }
}

module.exports = DataView;
```

- Controller
```js
const DataModel = require('./DataModel');
const DataView = require('./DataView');

class DataController {
  static getAllData() {
    let data = DataModel.getAllData();
    DataView.showData(data);
  }
  
  static handleAddData(data) {
    // static method untuk menangani aksi tambah data
    let message = DataModel.addData(data);
    DataView.showMessage(message);
  }
  
  static handleRemoveData(data) {
    // static method untuk menangani aksi hapus data
    let message = DataModel.removeData(data);
    DataView.showMessage(message);
  }
}

module.exports = DataController;

```
Contoh penggunaan:
```js
const DataController = require('./DataController');

// membaca semua data
DataController.getAllData();

// menambahkan data baru
DataController.handleAddData('Data 1');
DataController.handleAddData('Data 2');

// menghapus data
DataController.handleRemoveData('Data 1');
```
Dalam contoh di atas, kita masih menggunakan tiga kelas yang masing-masing mewakili komponen Model, View, dan Controller. Namun, pada kelas Model kita menggunakan static method untuk mengelola data, dan menggunakan require untuk mengimpor kelas Model dan View pada kelas Controller. Hal ini memungkinkan kita untuk menggunakan kelas Model dan View di berbagai file JavaScript yang berbeda tanpa harus membuat instance baru setiap kali kita ingin menggunakannya.

Selain itu, penggunaan static method juga memungkinkan kita untuk mengakses method pada kelas Model tanpa harus membuat instance baru dari kelas tersebut. Sehingga, kita dapat memanggil method langsung pada kelas Model tanpa harus membuat objek baru terlebih dahulu.