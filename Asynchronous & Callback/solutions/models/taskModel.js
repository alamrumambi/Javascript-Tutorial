const fs = require("fs");

class TaskModel {
  static getTasks(cb) {
    fs.readFile("./tasks.json", "utf8", (err, data) => {
      if (err) {
        return cb(err, null);
      }
      try {
        const {tasks} = JSON.parse(data);
        cb(null, tasks);
      } catch (err) {
        cb(err, null);
      }
    });
  }

  static saveTasks(tasks, cb) {
    fs.writeFile("./tasks.json", JSON.stringify({tasks}, null, 4), (err) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    });
  }

  static addTask(task, cb) {
    TaskModel.getTasks((err, tasks) => {
      if (err) {
        return cb(err);
      }
      const newTask = { id: tasks[tasks.length - 1].id + 1, name: task, status: "Incomplete" };
      tasks.push(newTask);
      TaskModel.saveTasks(tasks, (err) => {
        if (err) {
          return cb(err);
        }
        cb(null);
      });
    });
  }

  static deleteTask(id, cb) {
    TaskModel.getTasks((err, tasks) => {
      if (err) {
        return cb(err);
      }
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) {
        return cb(new Error("Task not found"));
      }
      tasks.splice(taskIndex, 1);
      TaskModel.saveTasks(tasks, (err) => {
        if (err) {
          return cb(err);
        }
        cb(null);
      });
    });
  }

  static updateTask(id, name, status, cb) {
    TaskModel.getTasks((err, tasks) => {
      if (err) {
        return cb(err);
      }
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) {
        return cb(new Error("Task not found"));
      }
      tasks[taskIndex].name = name;
      tasks[taskIndex].status = status;
      TaskModel.saveTasks(tasks, (err) => {
        if (err) {
          return cb(err);
        }
        cb(null);
      });
    });
  }

  static getTask(id, cb) {
    TaskModel.getTasks((err, tasks) => {
      if (err) {
        return cb(err, null);
      }
      const filter = tasks.filter((task) => task.id === id);
      if (!filter.length) {
        return cb(new Error("Task not found"), null);
      }
      cb(null, filter);
    });
  }
}

module.exports = TaskModel;
