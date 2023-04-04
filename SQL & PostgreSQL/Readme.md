# SQL & PostgreSQL

`SQL`, atau *Structured Query* Language, adalah bahasa pemrograman khusus yang digunakan untuk mengelola database. `SQL` digunakan untuk melakukan operasi seperti memasukkan, mengambil, memperbarui, dan menghapus data dari database. Salah satu sistem manajemen basis data (DBMS) yang paling populer yang menggunakan SQL adalah `PostgreSQL`.

`PostgreSQL` adalah DBMS open-source relasional yang kuat dan dapat digunakan untuk mengelola data yang sangat besar. `PostgreSQL` menyediakan berbagai fitur yang kuat, seperti dukungan untuk transaksi, penguncian, tampilan, dan indeks.

Beberapa contoh perintah `SQL` yang umum digunakan dalam `PostgreSQL` adalah:

- `SELECT`: perintah untuk memilih data dari satu atau lebih tabel
- `INSERT`: perintah untuk memasukkan data ke dalam tabel
- `UPDATE`: perintah untuk memperbarui data yang ada dalam tabel
- `DELETE`: perintah untuk menghapus data dari tabel
- `CREATE`: perintah untuk membuat tabel baru dalam database
- `ALTER`: perintah untuk mengubah struktur tabel yang ada
- `DROP`: perintah untuk menghapus tabel dari database

Untuk menggunakan `PostgreSQL`, Anda harus menginstal perangkat lunak `PostgreSQL` pada komputer Anda dan mengaksesnya melalui klien `PostgreSQL`, seperti `psql` atau `pgAdmin`.

Setelah terhubung ke server `PostgreSQL`, Anda dapat membuat, mengedit, dan mengelola database Anda dengan menggunakan perintah `SQL`. Anda juga dapat menggunakan fitur-fitur `PostgreSQL` yang lebih canggih seperti transaksi dan indeks untuk meningkatkan kinerja dan keamanan database Anda.

## Mengapa memilih PostgreSQL dibandingkan DBMS yang lain ?

Alasan mengapa belajar `PostgreSQL` adalah karena PostgreSQL menawarkan beberapa keunggulan dan fitur yang tidak dimiliki oleh DBMS lainnya, di antaranya:

1. **Konsistensi Data**: PostgreSQL menjamin integritas data yang tinggi melalui penggunaan fitur-fitur seperti foreign key, constraint, dan trigger. Hal ini membuat data dalam PostgreSQL lebih konsisten dan aman.

1. **Scalability**: PostgreSQL dikembangkan dengan skala besar dan pemrosesan data kompleks dalam pikiran. PostgreSQL dapat menangani jumlah data yang sangat besar dan memungkinkan pengguna untuk menambahkan fitur-fitur baru untuk memenuhi kebutuhan bisnis mereka.

1. **Open-Source**: PostgreSQL merupakan database open-source yang dapat diakses oleh siapa saja dan memiliki komunitas pengguna dan pengembang yang aktif. Hal ini membuat pengguna dapat dengan mudah menemukan sumber daya dan dukungan di internet.

1. **Kompatibilitas**: PostgreSQL kompatibel dengan berbagai macam bahasa pemrograman dan memiliki dukungan yang baik untuk integrasi dengan platform lain.

1. **Keamanan**: PostgreSQL memiliki fitur keamanan yang kuat seperti enkripsi, autentikasi, dan manajemen akses. Hal ini membuatnya lebih aman dan cocok digunakan pada aplikasi yang mengandung data sensitif.


Meskipun DBMS lain juga memiliki fitur-fitur yang baik, `PostgreSQL` menawarkan lebih banyak keunggulan dan fleksibilitas. Jadi, jika Anda membutuhkan database yang scalable, konsisten, dan aman untuk aplikasi Anda, maka `PostgreSQL` mungkin merupakan pilihan yang lebih baik.

## Cara Install

Berikut adalah cara untuk menginstal PostgreSQL pada sistem operasi Windows:

1. Kunjungi situs resmi PostgreSQL di https://www.postgresql.org/ dan unduh versi terbaru dari PostgreSQL yang sesuai dengan sistem operasi Anda.

1. Setelah unduhan selesai, buka file installer dan ikuti langkah-langkah yang muncul di layar. Pastikan Anda memilih opsi "Instalasi stack binari" dan pilih direktori tempat Anda ingin menginstal PostgreSQL.

1. Selama proses instalasi, Anda akan diminta untuk memasukkan password untuk pengguna postgres. Ingatlah password ini, karena Anda akan membutuhkannya nanti.

1. Setelah proses instalasi selesai, PostgreSQL akan secara otomatis diinstal sebagai layanan Windows dan akan dijalankan secara default pada port 5432.

1. Anda dapat mengakses PostgreSQL melalui beberapa aplikasi klien, seperti psql, pgAdmin, atau sejumlah aplikasi lainnya.

Untuk menginstal PostgreSQL pada sistem operasi lainnya, seperti Linux atau macOS, langkah-langkahnya mungkin sedikit berbeda. Namun, Anda dapat mengunjungi dokumentasi PostgreSQL untuk panduan yang lebih terperinci.

## Mengoperasikan PostgreSQL

Ada dua cara untuk mengoperasikan PostgreSQL: menggunakan `psql` atau `pgAdmin`.

1. Mengakses PostgreSQL menggunakan psql
psql adalah aplikasi konsol yang memungkinkan Anda untuk terhubung ke server PostgreSQL dan melakukan perintah SQL. Berikut adalah cara untuk mengakses PostgreSQL menggunakan psql:

    - Buka terminal atau command prompt di komputer Anda.

    - Ketik perintah berikut untuk terhubung ke server PostgreSQL:
    ```js
    psql -U username -d database -h hostname -p port
    ```
    Gantilah username dengan nama pengguna Anda, database dengan nama database yang ingin Anda akses, hostname dengan alamat host PostgreSQL Anda, dan port dengan nomor port PostgreSQL (5432 adalah nilai default).

    - Setelah terhubung, Anda dapat memasukkan perintah SQL seperti SELECT, INSERT, UPDATE, DELETE, dan lain-lain.

1. Mengakses PostgreSQL menggunakan pgAdmin

    pgAdmin adalah aplikasi grafis yang memungkinkan Anda untuk mengelola server PostgreSQL dengan mudah. Berikut adalah cara untuk mengakses PostgreSQL menggunakan pgAdmin:

    - Buka pgAdmin di komputer Anda.
    - Klik kanan pada "Servers" dan pilih opsi "Create" untuk membuat server baru.
    - Isi form dengan informasi server Anda, seperti nama server, host, port, username, dan password.
    - Setelah server terdaftar di pgAdmin, klik dua kali pada server untuk terhubung.
    - Sekarang Anda dapat mengelola database dan tabel dengan mudah menggunakan tampilan grafis pgAdmin.
    - Dengan menggunakan psql dan pgAdmin, Anda dapat dengan mudah terhubung ke server PostgreSQL dan mengelola database Anda.

## Beberapa Perintah/ Query SQL

Berikut adalah beberapa perintah SQL yang umum digunakan untuk membuat, mengedit, dan mengelola database di PostgreSQL:

1. Membuat Database

    Untuk membuat database baru, Anda dapat menggunakan perintah berikut:
    ```sql
    CREATE DATABASE database_name;
    ```
    Misalnya, jika Anda ingin membuat database bernama "mydatabase", perintahnya akan menjadi:
    ```sql
    CREATE DATABASE mydatabase;
    ```
1. Menghapus Database

    Untuk menghapus database, gunakan perintah berikut:
    ```sql
    DROP DATABASE database_name;
    ```
    Misalnya, jika Anda ingin menghapus database bernama "mydatabase", perintahnya akan menjadi:

    ```sql
    DROP DATABASE mydatabase;
    ```
1. Membuat Tabel
    
    Untuk membuat tabel baru dalam database, Anda dapat menggunakan perintah berikut:

    ```sql
    CREATE TABLE table_name (
    column1 datatype1 constraints,
    column2 datatype2 constraints,
    ...
    );
    ```
    Misalnya, jika Anda ingin membuat tabel "users" dengan kolom "id", "name", dan "email", perintahnya akan menjadi:

    ```sql
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
    );
    ```
1. Menambahkan Data ke Tabel
    
    Untuk menambahkan data baru ke tabel, Anda dapat menggunakan perintah berikut:

    ```sql
    INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
    ```
    Misalnya, jika Anda ingin menambahkan data baru ke tabel "users", perintahnya akan menjadi:

    ```sql
    INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
    ```
1. Mengubah Data dalam Tabel
    
    Untuk mengubah data yang sudah ada dalam tabel, Anda dapat menggunakan perintah berikut:

    ```sql
    UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
    ```
    Misalnya, jika Anda ingin mengubah email "John Doe" menjadi "johndoe@example.com" dalam tabel "users", perintahnya akan menjadi:

    ```sql
    UPDATE users SET email = 'johndoe@example.com' WHERE name = 'John Doe';
    ```
1. Menghapus Data dari Tabel
    
    Untuk menghapus data dari tabel, gunakan perintah berikut:

    ```sql
    DELETE FROM table_name WHERE condition;
    ```
    Misalnya, jika Anda ingin menghapus data pengguna dengan nama "John Doe" dari tabel "users", perintahnya akan menjadi:

    ```sql
    DELETE FROM users WHERE name = 'John Doe';
    ```
1. Menampilkan Data dari Tabel
    Untuk menampilkan data dari tabel, gunakan perintah berikut:

    ```sql
    SELECT column1, column2, ... FROM table_name WHERE condition;
    ```
    Misalnya, jika Anda ingin menampilkan semua data dari tabel "users", perintahnya akan menjadi:

    ```sql
    SELECT * FROM users;
    ```

Dengan menggunakan perintah-perintah SQL ini, Anda dapat membuat, mengedit, dan mengelola database Anda dengan mudah dalam PostgreSQL.

## RELASI TABLE

Relasi tabel adalah konsep penting dalam database yang mengacu pada keterkaitan antara tabel dalam database. Relasi tabel digunakan untuk mengatur data dalam bentuk struktur yang terorganisir sehingga dapat diakses dan dikelola dengan mudah. Relasi tabel dapat diimplementasikan di PostgreSQL dengan menggunakan kunci asing (*foreign keys*).

Kunci asing (*foreign keys*) adalah konsep yang digunakan untuk membuat hubungan antara dua tabel dalam database. Kunci asing adalah kolom atau kelompok kolom dalam tabel yang mengacu pada kunci utama (*primary key*) di tabel lain. Dalam PostgreSQL, kunci asing dapat didefinisikan dengan sintaks berikut:

```sql
ALTER TABLE table_name 
ADD CONSTRAINT constraint_name 
FOREIGN KEY (column1, column2, ...) 
REFERENCES referenced_table (referenced_column1, referenced_column2, ...);
```
Di mana:

`table_name` adalah nama tabel yang akan diberi kunci asing.
`constraint_name` adalah nama kunci asing yang akan dibuat.
`column1`, `column2`, ... adalah kolom dalam tabel yang akan dijadikan kunci asing.
`referenced_table` adalah nama tabel yang diacu oleh kunci asing.
`referenced_column1`, `referenced_column2`, ... adalah kolom dalam tabel referensi yang diacu oleh kunci asing.

Contoh implementasi relasi tabel di PostgreSQL:

Misalnya Anda memiliki dua tabel, "`users`" dan "`orders`". Tabel "`users`" memiliki kolom "`id`", "`name`", dan "`email`", sedangkan tabel "`orders`" memiliki kolom "`id`", "`user_id`", dan "`product`". Kunci utama (*`primary key`*) di tabel "`users`" adalah kolom "`id`", sedangkan kunci utama di tabel "orders" adalah kolom "`id`". Untuk membuat relasi antara dua tabel ini, Anda dapat menggunakan kunci asing dengan mengacu pada kolom "`user_id`" di tabel "orders" ke kunci utama (primary key) di tabel "`users`".

Berikut adalah contoh sintaks SQL untuk membuat relasi antara tabel "`users`" dan "`orders`":

```sql
ALTER TABLE orders
ADD CONSTRAINT orders_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES users (id);
```
Setelah relasi dibuat, Anda dapat menggunakan perintah `JOIN` untuk menggabungkan data dari dua tabel dalam satu hasil query. Contohnya:

```sql
SELECT users.name, orders.product
FROM users
JOIN orders ON users.id = orders.user_id;
```
Perintah SQL di atas akan menggabungkan data dari tabel "`users`" dan "`orders`" berdasarkan nilai kolom "`id`" di tabel "`users`" dan kolom "`user_id`" di tabel "`orders`", dan akan menampilkan nama pengguna dan produk yang dipesan.

Dengan menggunakan kunci asing, Anda dapat dengan mudah membuat relasi tabel di PostgreSQL dan mengatur data dalam struktur yang terorganisir dan mudah diakses.

## Contoh Kasus

Berikut adalah contoh implementasi PostgreSQL database untuk Ecommerce yang memiliki tabel `Products` dan `Categories` yang saling berelasi, dimana 1 Category dapat memiliki banyak Products:

```sql
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
```

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    category_id INTEGER NOT NULL REFERENCES categories(id)
);
```
Tabel "`categories`" memiliki kolom "`id`" dan "`name`". Kolom "`id`" adalah kunci utama (*`primary key`*) tabel, sedangkan kolom "`name`" digunakan untuk menyimpan nama kategori.

Tabel "`products`" memiliki kolom "`id`", "`name`", "`price`", dan "category_`id`". Kolom "`id`" adalah kunci utama (primary key) tabel, sedangkan kolom "`name`" digunakan untuk menyimpan nama produk, "`price`" digunakan untuk menyimpan harga produk, dan "`category_id`" digunakan untuk menghubungkan tabel "`products`" dengan tabel "`categories`" menggunakan kunci asing (*`foreign key`*).

Untuk memasukkan data ke dalam tabel "`categories`", Anda dapat menggunakan perintah `INSERT` seperti ini:

```sql
INSERT INTO categories (name) VALUES
    ('Electronics'),
    ('Books'),
    ('Clothing');
```
Untuk memasukkan data ke dalam tabel "`products`", Anda dapat menggunakan perintah `INSERT` seperti ini:

```sql
INSERT INTO products (name, price, category_id) VALUES
    ('iPhone 12', 1299.99, 1),
    ('Macbook Pro', 1999.99, 1),
    ('The Hitchhiker''s Guide to the Galaxy', 14.99, 2),
    ('To Kill a Mockingbird', 9.99, 2),
    ('Men''s T-Shirt', 19.99, 3),
    ('Women''s Dress', 49.99, 3),
    ('Women''s Shoes', 39.99, 3);
```
Perintah SQL di atas akan memasukkan beberapa data produk ke dalam tabel "`products`". Perhatikan bahwa kolom "`category_id`" diisi dengan nilai yang mengacu pada kunci utama (*`primary key`*) di tabel "`categories`".

Untuk menampilkan data produk beserta kategori yang terkait, Anda dapat menggunakan perintah `JOIN` seperti ini:

```sql
SELECT products.name, categories.name
FROM products
JOIN categories ON products.category_id = categories.id;
```
Perintah SQL di atas akan menggabungkan data dari tabel "`products`" dan "`categories`" berdasarkan nilai kolom "`category_id`" di tabel "`products`" dan kolom "`id`" di tabel "`categories`", dan akan menampilkan nama produk dan nama kategori yang terkait.

Dengan menggunakan kunci asing dan `JOIN`, Anda dapat dengan mudah membuat relasi tabel di PostgreSQL dan mengatur data dalam struktur yang terorganisir dan mudah diakses.