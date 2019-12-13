-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS Employee_DB;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE Employee_DB;

-- Use the DB wizard_schools_db for all the rest of the script
USE Employee_DB;

-- Created the table "schools"
CREATE TABLE Employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  salary INT NULL,
  title varchar(45) NULL,
  department varchar(45) NULL,
  manager varchar(45) NULL,
  
  PRIMARY KEY (id)
);

-- Inserted a set of records into the table
INSERT INTO Employees (first_name, last_name, title, salary, department, manager)
VALUES ("Bob","Billy","Junior Engineer",10000,"Engineering","John Doe");

INSERT INTO Employees (first_name, last_name, title, salary, department, manager)
VALUES ("Gacia","Hotspur","Lawyer",10000,"Legal","John Doe");

INSERT INTO Employees (first_name, last_name,title, salary, department, manager)
VALUES ("William","Adams","Sales Lead",10000,"Sales","kimmy wong");

select*from Employees;
