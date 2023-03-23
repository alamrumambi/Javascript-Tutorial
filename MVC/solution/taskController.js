const TaskModel = require("./taskModel");
const TaskView = require("./taskView");

class TaskController {
  static addTask(name) {
    // menambahkan 1 data baru ke to-do item dan menampilkan respon pesan berhasil/gagal menambahkan data
    try {
      let response = TaskModel.addTask(name);
      TaskView.showMessage(response);
    } catch(err) {
      TaskView.showError(err);
    }
  }

  static deleteTask(id) {
    // menghapus 1 data dari to-do item dan menampilkan respon pesan berhasil/gagal menghapus data
    try {
      let response = TaskModel.deleteTask(id);
      TaskView.showMessage(response);
    } catch(err) {
      TaskView.showError(err);
    }
  }

  static updateTask(id, name, status) {
    // mengubah 1 data dari to-do item dan menampilkan respon pesan berhasil/gagal mengubah data
    try {
      let response = TaskModel.updateTask(id, name, status);
      TaskView.showMessage(response);
    } catch(err) {
      TaskView.showError(err);
    }
  }

  static getTask(id) {
    // mengambil salah 1 data to-do item berdasarkan id dan menampilkan datanya
    try {
      let response = TaskModel.getTask(id);
      TaskView.showData(response);
    } catch(err) {
      TaskView.showError(err);
    }
  }

  static getTasks() {
    // mengambil semua data to-do item dan menampilkan datanya
    try {
      let response = TaskModel.getTasks();
      TaskView.showData(response);
    } catch(err) {
      TaskView.showError(err);
    }
  }
}

module.exports = TaskController;