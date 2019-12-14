var inquirer = require("inquirer")
const pass= ""
var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Employee_DB"
});
mainQuestion()
/*connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //mainQuestion();
});*/


function mainQuestion(){
  var question1 = [{
    type: 'list',
    name: 'name',
    message: "What's would you like to do?",
    choices: ["View all the employees","View all the employees by departments",
    "View all the employees by Manager","Add Employee", "remove Employees","Update Employee role","Update Employee Manager"],
  }]
  //check if user selects viewing all the employees
    inquirer.prompt(question1).then(answers => {
      
        if(answers.name=='View all the employees'){
            console.log('Here is all the employees');
            
          viewAll()
          }


// check if users selected view employees through department
          if(answers.name=="View all the employees by departments"){
            console.log('Here is all the employees by departments');
           
           ViewByDepartments()
          }

  
// check if users selected view employees through managers
          if(answers.name=='View all the employees by Manager'){
            console.log('Here is all the employees by Manger');
           
           // removeEmployees()
          }


//check  if it users adds employees
          if(answers.name=='Add Employee'){
            console.log('added emplyoees');
           // removeEmployees()
          }
//remove the employee
          if(answers.name=='remove Employees'){
            console.log('removed the Employees');
            selectDelete()
           // removeEmployees()
          }

  //check udatded the employee
          if(answers.name=='Update Employee role'){
            console.log('you choose update employee role');
            
           // removeEmployees()
          }
      
  //check udatded the employee manager
            if(answers.name=='Update Employee Manager'){
                console.log('you choose update employee Manager');
                
               // removeEmployees()
              }

 
  })



  function viewAll() {
    connection.query("select*from Employees", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.log(res);
      mainQuestion()
      connection.end();
    });
  }


  function ViewByDepartments() {

    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO Employees (first_name, last_name) VALUES ('billy', 'hayabusa')"
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });

 /*console.log(res);
      connection.end();*/
   
  }}


function selectDelete(){
//first get all the employee ids
//then put it into 
  
let EmployeeDetail= connection.query("select first_name from Employees", function(err, res) {
    if (err) {throw err;}
    return res;
  })
if(EmployeeDetail) {
  var question2 = [{
    type: 'list',
    name: 'name',
    message: "which employee would you like to remove?",
    choices: EmployeeDetail
  }]
  inquirer.prompt(question2).then(answers => {
    if(answers){
    console.log("working?")}
       }) 
}



}


/*
  function DeletePerson(){
    con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
  }
  */