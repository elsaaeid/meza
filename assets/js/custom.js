// chat content
let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

menuToggle.onclick = function(){
  menu.classList.toggle('activing')
  menuToggle.classList.toggle('activing')
}
const list = document.querySelectorAll("li");
function activeLink() {
  list.forEach((item) =>
  item.classList.remove('activing'));
  this.classList.add('activing')
}
 list.forEach((item) =>
  item.addEventListener('click',activeLink));



// Gmail content

// var sendBtn = document.getElementById("sendBtn");
// sendBtn.addEventListener('click',function(e){
//    e.preventDefault();
//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var subject = document.getElementById("subject").value;
//    var fullMessage = document.getElementById("fullMessage").value;
//    var body = 'name: ' +name + '</br> email: ' + email + '</br> subject' + subject + '</br> fullMessage' + fullMessage;

//    Email.send({
//     Host : "smtp.gmail.com",
//     Username : name,
//     Password : "jdpcxzjonvslmtfo",
//     To : 'www.saidsadaoy@gmail.com',
//     From : email,
//     Subject : subject,
//     Body : body
// }).then(
//   message => alert(fullMessage)
// );
// })




// Search
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
