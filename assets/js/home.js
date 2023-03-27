var message = document.getElementById("message");
var index = Number(localStorage.getItem("indexArr"));
var data = JSON.parse(localStorage.getItem("parsonalData"));
message.innerHTML = `Welcome ${data[index].name}`;
