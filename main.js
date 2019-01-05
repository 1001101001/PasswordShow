
var pwd = document.getElementById('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click', togglePass);
///A function to show the password when you click on the eye Ican
function togglePass(){
  eye.classList.toggle('active');
  (pwd.type == 'password') ? pwd.type = 'text' : pwd.type = 'password';
}
//Time

  
