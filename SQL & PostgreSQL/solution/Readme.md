# SOLUSI LATIHAN SQL

Buatlah query SQL dari kasus-kasus di bawah ini. Untuk penamaan database bebas dan setelah table dibuat, lakukan `INSERT` data terlebih dahulu agar query lain yang dibuat dapat diuji coba

1. Diberikan table "`departments`" dengan kolom-kolom "`id`" dan "`name`". dan Diberikan tabel "`employees`" dengan kolom-kolom "`id`" (integer), "`name`" (varchar), "`salary`" (integer), dan "`department_id`" (integer). Buatlah query untuk menampilkan daftar nama karyawan beserta gaji yang mereka terima di departemen "`Sales`" (dengan menggunakan `JOIN` antara tabel "`employees`" dan "`departments`").

    Kunci Jawaban:

    ```sql
    SELECT employees.name, employees.salary
    FROM employees
    JOIN departments ON employees.department_id = departments.id
    WHERE departments.name = 'Sales';
    ```
    **Penjelasan**: Query di atas menggabungkan dua tabel yaitu "`employees`" dan "`departments`" menggunakan `JOIN`. Query ini memilih kolom "`name`" dan "`salary`" dari tabel "`employees`" dan hanya memilih baris yang memenuhi kondisi `WHERE "departments.name = 'Sales'"`.

1. Diberikan tabel "`orders`" dengan kolom-kolom "`id`" (integer), "`order_date`" (date), "`customer_name`" (varchar), "`total_amount`" (integer), dan "`customer_id`" (integer), serta tabel "`customers`" dengan kolom-kolom "`id`" (integer) dan "`name`" (varchar). Buatlah query untuk menampilkan daftar nama pelanggan beserta total nilai order yang mereka lakukan dalam periode waktu tertentu (dengan menggunakan `JOIN` antara tabel "`orders`" dan "`customers`" dan menghitung nilai total dengan fungsi agregat).

    Kunci Jawaban:

    ```sql
    SELECT customers.name, SUM(orders.total_amount) AS total_order
    FROM orders
    JOIN customers ON orders.customer_id = customers.id
    WHERE orders.order_date BETWEEN '2022-01-01' AND '2022-12-31'
    GROUP BY customers.id;
    ```
    **Penjelasan**: Query di atas menggabungkan dua tabel yaitu "`orders`" dan "`customers`" menggunakan `JOIN` dan menghitung nilai total order dengan fungsi agregat `SUM`. Query ini memilih kolom "`name`" dari tabel "`customers`" dan menggunakan fungsi SUM pada kolom "`total_amount`" dari tabel "`orders`". Query juga memasukkan kondisi `WHERE "orders.order_date BETWEEN '2022-01-01' AND '2022-12-31'"` untuk membatasi rentang waktu pada nilai kolom "`order_date`" pada tabel "`orders`". Terakhir, query mengelompokkan data berdasarkan kolom "`id`" dari tabel "`customers`".

1. Diberikan tabel "`products`" dengan kolom-kolom "`id`" (integer), "`name`" (varchar), dan "`price`" (integer). Buatlah query untuk menampilkan nama produk yang paling mahal dan nama produk yang paling murah beserta harga masing-masing.

    Kunci Jawaban:

    ```sql
    SELECT MAX(name) AS most_expensive_product, MIN(name) AS cheapest_product,
        MAX(price) AS highest_price, MIN(price) AS lowest_price
    FROM products;
    ```
    **Penjelasan**: Query di atas mengambil nilai maksimum dan minimum dari kolom "`name`" dan "`price`" dari tabel "`products`". Query ini menggunakan fungsi agregat `MAX` dan `MIN` untuk mendapatkan nilai maksimum dan minimum dari kolom "`name`" dan "`price`".

1. Diberikan tabel "`students`" dengan kolom-kolom "`id`" (integer), "`name`" (varchar), dan "`age`" (integer). Buatlah query untuk menampilkan jumlah mahasiswa dengan usia lebih dari 20 tahun.

    Kunci Jawaban:

    ```sql
    SELECT students.name, classes.name AS class_name
    FROM students
    JOIN classes ON students.class_id = classes.id
    WHERE students.age > (SELECT AVG(age) FROM students);
    ```
    **Penjelasan**: Query di atas menggabungkan dua tabel yaitu "`students`" dan "`classes`" menggunakan `JOIN`. Query ini memilih kolom "`name`" dari tabel "`students`" dan kolom "`name`" dari tabel "`classes`". Query juga memasukkan kondisi `WHERE "students.age > (SELECT AVG(age) FROM students)"` untuk memilih hanya siswa yang berusia di atas rata-rata usia siswa pada tabel "`students`".

1. Diberikan tabel "`transactions`" dengan kolom-kolom "`id`" (integer), "`transaction_date`" (date), "`amount`" (integer), dan "`customer_id`" (integer). Buatlah query untuk menampilkan rata-rata nilai transaksi yang dilakukan oleh setiap pelanggan.

    Kunci Jawaban:

    ```sql
    SELECT products.name, SUM(sales.amount) AS total_sales
    FROM sales
    JOIN products ON sales.product_id = products.id
    WHERE sale_date BETWEEN '2023-03-01' AND '2023-03-31'
    GROUP BY products.id
    ORDER BY total_sales DESC
    LIMIT 1;
    ```
    **Penjelasan**: Query di atas menggabungkan dua tabel yaitu "`sales`" dan "`products`" menggunakan `JOIN` dan menghitung nilai total penjualan dengan fungsi agregat `SUM`. Query ini memilih kolom "`name`" dari tabel "`products`" dan menggunakan fungsi `SUM` pada kolom "`amount`" dari tabel "`sales`". Query juga memasukkan kondisi `WHERE "sale_date BETWEEN '2023-03-01' AND '2023-03-31'"` untuk membatasi rentang waktu pada nilai kolom "`sale_date`" pada tabel "`sales`". Terakhir, query mengelompokkan data berdasarkan kolom "`id`" dari tabel "`products`", mengurutkan hasil berdasarkan nilai `total_sales` secara menurun, dan membatasi hasil hanya pada baris pertama menggunakan fungsi `LIMIT 1`.

Semoga penjelasan di atas dapat membantu Anda memahami implementasi query PostgreSQL.