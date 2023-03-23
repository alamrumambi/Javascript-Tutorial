class TaskView {
    static showData(tasks) {
        // untuk menampilkan data dalam bentuk tabel
        console.table(tasks);
    }

    static showMessage(msg) {
        // menampilkan pesan hasil sukses pengolahan data
        console.log(`=======\nSUCCESS\n=======`);
        console.log(msg);
    }

    static showError(msg) {
        // menampilkan pesan error dari proses pengolahan data
        console.log(`=======\nERROR\n=======`);
        console.log(msg);
    }
}

module.exports = TaskView;