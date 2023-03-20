# Dasar Pemrograman Berorientasi Objek (OOP) di JavaScript

## 1. DEFINISI

<hr>

### 1.1 Apa itu OOP ?
OOP adalah paradigma pemrograman yang berfokus pada objek. Dalam OOP, program dibangun dengan membuat objek, yang terdiri dari properti (*property*) dan metode (*methods*). *property* objek adalah variabel yang menyimpan data, sedangkan *methods* objek adalah fungsi yang melakukan tindakan pada objek. OOP memungkinkan programmer untuk mengelompokkan *property* dan *methods* yang terkait dalam objek, sehingga lebih mudah untuk mengelola dan memanipulasi data.

### 1.2 Apa itu kelas?
Kelas (*class*) adalah blueprint atau cetak biru untuk membuat objek. Ini berisi definisi untuk properti dan metode yang akan dimiliki oleh objek dari kelas tersebut. Dalam JavaScript, *class* didefinisikan menggunakan sintaks khusus yang diperkenalkan pada ECMAScript 2015 (juga dikenal sebagai ES6).

### 1.3 Apa itu objek?
Objek adalah instance dari kelas. Setelah kelas didefinisikan, Anda dapat membuat banyak objek dari kelas tersebut. Objek memiliki properti dan metode yang didefinisikan oleh kelas yang digunakan sebagai blueprint.

<br>
<hr>

## 2. OOP DI JAVASCRIPT

<hr>

### 2.1 Bagaimana cara membuat kelas di JavaScript?
Dalam JavaScript, kelas didefinisikan menggunakan sintaks khusus. Berikut adalah contoh kelas sederhana:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```
Pada contoh di atas, `Person` adalah nama kelas yang baru saja didefinisikan. Kelas ini memiliki dua properti (`name` dan `age`) dan satu metode `sayHello()`.

### 2.2 Bagaimana cara membuat objek dari kelas di JavaScript?
Untuk membuat objek dari kelas yang telah didefinisikan, gunakan kata kunci *`new`* diikuti dengan nama kelas dan argumen yang diperlukan oleh konstruktor kelas. Berikut adalah contoh membuat objek dari kelas Person yang telah didefinisikan sebelumnya:

```js
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);

person1.sayHello(); // Output: Hello, my name is John and I'm 30 years old.
person2.sayHello(); // Output: Hello, my name is Jane and I'm 25 years old.
```
Pada contoh di atas, `person1` dan `person2` adalah dua objek yang dibuat dari kelas `Person`. Setiap objek memiliki properti `name` dan `age` yang berbeda, tetapi keduanya memiliki metode `sayHello()` yang sama.

<br>
<hr>

## 3. KARAKTERISTIK OOP

<hr>

### 3.1 Enkapsulasi
Enkapsulasi adalah konsep dalam OOP di mana properti dan metode yang terkait dengan objek disatukan dalam objek itu sendiri, sehingga dapat dikelola dengan mudah. Pada JavaScript, enkapsulasi dapat diterapkan dengan cara menggunakan properti dan metode privat, yang ditandai dengan simbol "#" pada awal nama properti atau metode. Properti dan metode privat hanya dapat diakses secara langsung oleh kelas itu sendiri, dan tidak dapat diakses oleh kelas lain atau dari luar kelas.

Dalam JavaScript, enkapsulasi juga dapat diterapkan dengan menggunakan metode getter dan setter. Getter dan setter adalah metode khusus yang dapat digunakan untuk membaca (get) atau menulis (set) nilai suatu properti. Ketika kita menggunakan getter dan setter, kita dapat menentukan batasan atau aturan tertentu saat pengguna mencoba mengakses atau mengubah nilai properti.

Berikut contoh penggunaan enkapsulasi di JavaScript dengan menggunakan properti dan metode privat serta getter dan setter:

```js
class Person {
  #name; // properti privat
  #birthYear; // properti privat
  
  constructor(name, birthYear) {
    this.#name = name;
    this.#birthYear = birthYear;
  }
  
  #calculateAge() { // metode privat
    let birthYear = this.#birthYear;
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  
  get name() { // getter
    return this.#name;
  }
  
  set name(newName) { // setter
    if (newName && newName.length > 1) {
      this.#name = newName;
    } else {
      console.log('Nama harus terdiri dari minimal 2 karakter')
    }
  }
  
  getAge() { // metode publik
    return this.#calculateAge();
  }
}

let person1 = new Person('John', 1993);
console.log(person1.name); // Output: John
person1.name = 'J'; // Output: Nama harus terdiri dari minimal 2 karakter
person1.name = 'Jane';
console.log(person1.name); // Output: Jane
console.log(person1.birthYear); // Output: undefined (karena merupakan properti privat)
console.log(person1.getAge()); // Output: 30 (tergantung tahun saat ini)
```
Dalam contoh di atas, kita membuat kelas `Person` dengan properti privat `#name`, `#birthYear`, metode privat `#calculateAge()`, dan metode getter/setter untuk properti name. Selain itu, kita juga menambahkan metode publik `getAge()` yang akan mengembalikan umur dari objek `Person`. Metode `getAge()` memanggil metode privat `#calculateAge()` untuk menghitung umur. Karena `#calculateAge()` merupakan metode privat, maka metode tersebut hanya dapat diakses oleh kelas Person dan tidak dapat diakses dari luar kelas, begitu juga dengan properti privat `#birthYear`. Dengan cara ini, kita telah berhasil menerapkan enkapsulasi pada kelas `Person`.

### 3.2 Pewarisan
Inheritance (pewarisan) adalah salah satu konsep OOP yang memungkinkan kita membuat sebuah kelas baru yang memperoleh sifat dan perilaku dari kelas lain yang sudah ada. Pada JavaScript, inheritance dapat dicapai dengan menggunakan keyword `extends` dan `super`.

Contoh implementasi inheritance di JavaScript dengan menggunakan private property:

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  #calculateAge() {
    // implementasi untuk menghitung usia
  }

  getAge() {
    return this.#calculateAge();
  }
}

class Employee extends Person {
  #position;

  constructor(name, position) {
    super(name);
    this.#position = position;
  }

  get position() {
    return this.#position;
  }

  set position(newPosition) {
    this.#position = newPosition;
  }

  getSalary() {
    let salary = this.#calculateSalary();
    return salary;
  }

  #calculateSalary() {
    // implementasi untuk menghitung gaji
  }
}

let employee1 = new Employee('John', 'Manager');
console.log(employee1.name); // Output: John
console.log(employee1.position); // Output: Manager
employee1.name = 'Jane';
employee1.position = 'Supervisor';
console.log(employee1.name); // Output: Jane
console.log(employee1.position); // Output: Supervisor
console.log(employee1.getAge()); // Output: usia (tergantung implementasi)
console.log(employee1.getSalary()); // Output: gaji (tergantung implementasi)
```
Dalam contoh di atas, kelas `Person` merupakan kelas utama, sedangkan kelas `Employee` adalah kelas turunan. Kedua kelas tersebut memiliki properti private `#name`. Di kelas `Person`, kita menambahkan `getter` dan `setter` untuk properti `name`, dan metode private `#calculateAge()` untuk menghitung usia. Di kelas `Employee`, kita menambahkan properti private `#position`, dan metode private `#calculateSalary()` untuk menghitung gaji. Di kelas `Employee`, kita juga mengoverride metode `getAge()` yang ada di kelas `Person`, dan menambahkan metode `getSalary()`.

Dalam metode `getSalary()`, kita menggunakan metode private `#calculateSalary()` dari kelas `Employee` untuk menghitung gaji, namun karena metode tersebut bersifat private, kita tidak dapat mengaksesnya langsung dari luar kelas. Namun, kita masih dapat mengakses metode tersebut dari dalam kelas turunan dengan menggunakan super.

Dalam contoh tersebut, kita membuat sebuah objek `employee1` yang merupakan instance dari kelas `Employee`. Kita dapat mengakses properti dan metode dari kelas `Employee` dan juga properti dan metode yang diwarisi dari kelas `Person`. Kita juga dapat mengubah nilai properti `name` dan `position` menggunakan `setter` yang telah ditentukan.

### 3.3 Polimorfisme
Polimorfisme adalah salah satu karakteristik OOP yang memungkinkan sebuah objek untuk memiliki banyak bentuk. Dalam konteks JavaScript, polimorfisme dapat dicapai melalui penggunaan method overriding dan method overloading.

Method overriding adalah teknik dimana kelas turunan dapat menimpa method dari kelas induk. Artinya, sebuah method dengan nama yang sama dapat memiliki implementasi yang berbeda dalam kelas turunan. Berikut adalah contoh sederhana untuk mengimplementasikan method overriding di JavaScript:

```js
class Shape {
  draw() {
    console.log('Menggambar bentuk...');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Menggambar lingkaran...');
  }
}

class Square extends Shape {
  draw() {
    console.log('Menggambar persegi...');
  }
}

let shapes = [new Circle(), new Square(), new Shape()];

shapes.forEach((shape) => {
  shape.draw();
});
```
Pada contoh di atas, kita membuat tiga kelas yaitu `Shape`, `Circle`, dan `Square`. Kita juga membuat sebuah array shapes yang berisi instance dari ketiga kelas tersebut.

Ketika kita memanggil method `draw()` pada setiap instance di dalam array `shapes`, kita dapat melihat bahwa method yang dipanggil sesuai dengan jenis bentuknya. Hal ini terjadi karena method `draw()` telah dioverride pada kelas turunan, sehingga implementasi method pada kelas turunan yang dipanggil ketika method tersebut dipanggil pada instance dari kelas turunan.

Method overloading, di sisi lain, adalah teknik dimana sebuah kelas memiliki beberapa method dengan nama yang sama, namun dengan jumlah atau jenis parameter yang berbeda. Sayangnya, JavaScript tidak secara eksplisit mendukung teknik method overloading, namun kita dapat mencapainya dengan menggunakan argumen default atau menggunakan kondisi untuk memeriksa jenis atau jumlah parameter. Berikut adalah contoh sederhana untuk mengimplementasikan method overloading di JavaScript:

```js
class Calculator {
  add(a, b, c = 0) {
    return a + b + c;
  }
  
  add(a, b) {
    return a + b;
  }
}

let calculator = new Calculator();

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.add(2, 3, 4)); // Output: 9
```
Pada contoh di atas, kita membuat kelas `Calculator` dengan dua method `add()`. Method pertama menerima tiga parameter dengan parameter ketiga memiliki nilai default 0, sementara method kedua hanya menerima dua parameter. Dalam hal ini, method kedua akan menimpa method pertama karena method kedua didefinisikan setelah method pertama. Ketika kita memanggil method `add()` pada instance dari kelas `Calculator`, method yang dipanggil akan sesuai dengan jumlah parameter yang diberikan.

<br>
<hr>

## 4. OOP LANJUTAN

<hr>

Selain konsep inheritance, enkapsulasi, dan polimorfisme, ada beberapa hal lagi yang perlu dipelajari untuk memahami konsep OOP di JavaScript lebih jauh, antara lain:

1. `Abstraksi`: Abstraksi adalah konsep dalam OOP yang memungkinkan kita untuk mengisolasi sebagian besar detail implementasi dari kelas atau objek sehingga pengguna hanya perlu berinteraksi dengan fitur yang terlihat dari luar. Dalam JavaScript, kita dapat menggunakan konsep abstraksi dengan menggunakan metode, getter, dan setter.

2. `Interface`: Interface adalah konsep dalam OOP yang memungkinkan kita untuk mendefinisikan kontrak antara objek dengan objek lain atau dengan pengguna. Dalam JavaScript, interface dapat diimplementasikan dengan menggunakan kelas abstrak atau kontrak.

3. `Mixin`: Mixin adalah cara untuk menambahkan metode dan properti dari satu objek ke objek lain. Dalam JavaScript, mixin dapat dicapai dengan menggunakan fungsi bantuan atau dengan menggunakan prototipe.

4. `Pola Desain`: Pola Desain adalah solusi umum untuk masalah yang sering dihadapi dalam pengembangan perangkat lunak. Ada banyak pola desain yang dapat diterapkan dalam OOP JavaScript, seperti Pola Modul, Pola Singleton, Pola Façade, dan banyak lagi.


5. `Agregasi dan Komposisi`: Agregasi dan Komposisi adalah dua cara untuk menggabungkan beberapa objek ke dalam satu objek yang lebih besar. Agregasi adalah hubungan antara dua objek di mana satu objek adalah bagian dari objek lain, tetapi dapat berdiri sendiri. Sedangkan Komposisi adalah hubungan antara dua objek di mana satu objek adalah bagian dari objek lain dan tidak dapat berdiri sendiri tanpa objek yang lain. Dalam JavaScript, konsep ini dapat diimplementasikan dengan menggunakan objek bersarang atau penggunaan konstruktor dan properti objek.

6. `Factory`: Factory adalah pola desain yang memungkinkan kita untuk membuat objek dengan cara yang terorganisir dan konsisten. Factory memisahkan proses pembuatan objek dari kelas utama dan mengembalikan objek yang dibuat ke pengguna. Dalam JavaScript, factory dapat diimplementasikan dengan menggunakan fungsi bantuan atau metode statis.

7. `Static Method`: Static Method adalah metode yang terkait dengan kelas itu sendiri, bukan dengan instansi kelas. Metode statis dapat digunakan untuk melakukan operasi yang tidak tergantung pada instansi kelas, seperti operasi matematika atau memformat tanggal. Dalam JavaScript, metode statis dapat diimplementasikan dengan menambahkan metode ke kelas menggunakan kata kunci "static".

8. `dan lain-lain`

Dengan memahami konsep-konsep ini, Anda akan dapat mengembangkan aplikasi JavaScript yang lebih kompleks dan mudah di-maintain.

<br>
<hr>

## REFRENSI

<hr>

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

- https://medium.com/codeacademia/belajar-fundamental-opp-dengan-javascript-c1b721677ce9

