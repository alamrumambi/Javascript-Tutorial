Berikut adalah kunci jawaban soal JavaScript yang menerapkan inheritance, polymorphism, dan private property:

```js
// Buatlah sebuah class bernama Person yang memiliki properti name dan age, serta private property gender
class Person {
  #gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.#gender = gender;
  }

  // Buat method getGender yang mengembalikan nilai private property gender
  getGender() {
    return this.#gender;
  }
}

// Buatlah sebuah class bernama Employee yang extends dari Person dan memiliki properti salary
class Employee extends Person {
  constructor(name, age, gender, salary) {
    super(name, age, gender);
    this.salary = salary;
  }

  // Override method getGender pada class Person, sehingga mengembalikan string "Employee Gender: " diikuti dengan nilai private property gender
  getGender() {
    return "Employee Gender: " + super.getGender();
  }

  // Buat method getSalary yang mengembalikan nilai properti salary
  getSalary() {
    return this.salary;
  }
}

// Buatlah sebuah instance dari class Employee dan panggil method getGender dan getSalary
const john = new Employee("John", 25, "Male", 5000);
console.log(john.getGender()); // Output: Employee Gender: Male
console.log(john.getSalary()); // Output: 5000
```

Pada contoh soal di atas, terdapat beberapa karakteristik OOP yang diterapkan, yaitu:

**Encapsulation**: Properti `name`, `age`, `salary`, dan private property `gender` pada class `Person` dan `Employee` di-encapsulate, artinya properti tersebut hanya dapat diakses melalui method yang disediakan pada class tersebut.

**Inheritance**: Class Employee extends dari class `Person`, sehingga memiliki semua properti dan method yang dimiliki oleh class `Person`.

**Polymorphism**: Method `getGender` pada class `Person` dan `Employee` memiliki nama yang sama, tetapi implementasinya berbeda-beda. Method `getGender` pada class `Employee` override method `getGender` pada class `Person` sehingga mengembalikan string "Employee Gender: " diikuti dengan nilai private property gender.

Dengan menerapkan `inheritance` dan `polymorphism`, class `Employee` dapat memanfaatkan semua properti dan method yang dimiliki oleh class `Person`, namun juga dapat menambahkan fitur-fitur tambahan yang khusus hanya untuk class `Employee`, seperti method `getSalary`.