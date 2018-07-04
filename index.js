// function to keep track of tate of each property of tasks, changing functions into methods and using this to refer to the object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// create vars, pass in newTask fnct with title and description.
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// call tasks, update the complete status and call again.
task1.logState();
task1.markCompleted();
task1.logState();
