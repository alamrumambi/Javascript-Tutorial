const TaskModel = require("../models/taskModel");
const TaskView = require("../views/taskView");

class TaskController {
  static addTask(name) {
    TaskModel.addTask(name, (err, data) => {
      if (err) {
        TaskView.showError("Failed to add task.");
      } else {
        TaskView.showMessage("Task added successfully.");
      }
    });
  }

  static deleteTask(id) {
    TaskModel.deleteTask(id, (err, data) => {
      if (err) {
        TaskView.showError("Failed to delete task.");
      } else {
        TaskView.showMessage("Task deleted successfully.");
      }
    });
  }

  static updateTask(id, name, status) {
    TaskModel.updateTask(id, name, status, (err, data) => {
      if (err) {
        TaskView.showError("Failed to update task.");
      } else {
        TaskView.showMessage("Task updated successfully.");
      }
    });
  }

  static getTask(id) {
    TaskModel.getTask(id, (err, data) => {
      if (err) {
        TaskView.showError("Failed to get task.");
      } else {
        TaskView.showData([data]);
      }
    });
  }

  static getTasks() {
    TaskModel.getTasks((err, data) => {
      if (err) {
        TaskView.showError("Failed to get tasks.");
      } else {
        TaskView.showData(data);
      }
    });
  }
}

module.exports = TaskController;
