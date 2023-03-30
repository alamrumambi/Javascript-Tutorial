class TaskView {
    static showData(tasks) {
      console.table(tasks);
    }
  
    static showMessage(msg) {
      console.log(msg);
    }
  
    static showError(msg) {
      console.error(msg);
    }
  }
  
  module.exports = TaskView;
  