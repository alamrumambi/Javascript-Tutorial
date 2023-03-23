const fs = require("fs");
const Task = require("./task");

class TaskModel {
  static getTasks() {
    // proses untuk membaca daftar to-do item dari file.json
    try {
        let data = JSON.parse(fs.readFileSync('./tasks.json', 'utf-8'));
        let tasks = data.tasks.map((e) => {
            return new Task(e.id, e.name, e.status);
        })
        return tasks;
    } catch(err) {
        throw err;
    }
  }

  static saveTasks(file) {
    // proses untuk menyimpan perubahan to-do item ke file tasks.json
    try {
        let data = { tasks: file };
        fs.writeFileSync('./tasks.json', JSON.stringify(data, null, 2));
    } catch(err) {
        throw err;
    }
  }

  static addTask(task) {
    // proses untuk menambahkan data baru ke to-do item
    try {
        let data = this.getTasks();
        let id = data[data.length - 1].id + 1;
        data.push({ id, name: task, status: 'Incomplete' });
        this.saveTasks(data);
        return 'Data sukses ditambahkan!'
    } catch(err) {
        throw err;
    }
  }

  static deleteTask(id) {
    // proses untuk menghapus sebuah data dari to-do item
    try {
        let data = this.getTasks();
        let index = data.findIndex((e) => {
            return e.id === id;
        })
        if (index === -1) throw 'Id Not Found!';
        data.splice(index, 1);
        this.saveTasks(data);
        return 'Data sukses dihapus!'
    } catch(err) {
        throw err;
    }
  }

  static updateTask(id, name, status) {
    // proses untuk mengubah salah satu data baru dari to-do item
    try {
        let data = this.getTasks();
        let index = data.findIndex((e) => {
            return e.id === id;
        })
        if (index === -1) throw 'Id Not Found!';
        data[index] = { id, name, status };
        this.saveTasks(data);
        return 'Data sukses diupdate!'
    } catch(err) {
        throw err;
    }
  }

  static getTask(id) {
    // proses untuk menampilkan salah satu data dari to-do item berdasarkan id
    try {
        let data = this.getTasks();
        data = data.filter((e) => {
            return e.id === id;
        })
        if (!data.length) throw 'Id Not Found!';
        return data;
    } catch(err) {
        throw err;
    }
  }
}

module.exports = TaskModel;