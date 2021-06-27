
function change_Mode() {

  if (document.getElementById("styleing").getAttribute('href') == "css/dark-mode.css") {
    document.getElementById("styleing").setAttribute('href', "css/light-mode.css");
    document.getElementById("change_mode").innerHTML="Dark Mode";
  } else if (document.getElementById("styleing").getAttribute('href') == "css/light-mode.css") {
    document.getElementById("styleing").setAttribute('href', "css/dark-mode.css");
    document.getElementById("change_mode").innerHTML="Light Mode";
  }
}
