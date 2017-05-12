function Task(taskDescription, difficulty, isUrgent, reward){
  this.taskDescription = taskDescription;
  this.difficulty = difficulty;
  this.isUrgent = isUrgent;
  this.reward = reward;
  this.isComplete = false;
}

module.exports = Task;