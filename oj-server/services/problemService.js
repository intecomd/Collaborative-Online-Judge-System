var problems = [
  {
    id : 1,
    name : "Two sum",
    desc : "Given an array of integers, ...",
    difficulty: "easy"
  },
  {
    id : 2,
    name : "3Sum",
    desc: "Given an array of integers, ...",
    difficulty : "medium"
  },
  {
    id : 3,
    name : "4Sum",
    desc: "Given an array of integers, ...",
    difficulty : "medium"
  },
  {
    id : 4,
    name : "Training Count",
    desc: "Given an array of integers, ...",
    difficulty : "hard"
  },
  {
    id : 5,
    name : "Sliding Window Maximum",
    desc: "Given an array of integers, ...",
    difficulty : "super"
  }
];

var ProblemModel = require("../models/problemModel");

var getProblems = function() {
  return new Promise((resolve, reject) => {
    ProblemModel.find({},function (err, problems) {
      if(err){
        reject(err);
      } else {
        resolve(problems);
      }
    });
  });
}

var getProblem = function(id) {
  return new Promise((resolve, reject) => {
    ProblemModel.findOne ({id:id},function(err, problem) {
      if(err){
        reject(err);
      } else {
        resolve(problem);
      }
    });
  });
}

var addProblem = function(newProblem) {
  return new Promise((resolve, reject) => {
    ProblemModel.findOne ({name:newProblem.name},function(err, problem) {
      if(problem){
        reject("Probelm Already Exist!");
      } else {
        ProblemModel.count({}, function(err, num) {
          newProblem.id = num + 1;
          var mongoProblem = new ProblemModel(newProblem);
          mongoProblem.save();
          resolve(newProblem);
        });
      }
    });
  });
}

module.exports = {
  getProblems : getProblems,
  getProblem : getProblem,
  addProblem : addProblem
}
