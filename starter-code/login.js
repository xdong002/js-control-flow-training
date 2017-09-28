console.log("login.js loaded");

var userLogin = {username:"xdong002", password:"0022"};

var result = window.prompt("Enter password for user xdong002.");

while (result !== "0022") {
  result = window.prompt("Enter password for user xdong002 again.")
}
alert("You are in!")
