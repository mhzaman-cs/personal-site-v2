function change_Mode() {

  if (document.getElementById("styleing").getAttribute('href') == "css/dark-mode.css") {
    document.getElementById("styleing").setAttribute('href', "css/light-mode.css");
    document.getElementById("faviconio").setAttribute('href', "images/favicon_light.ico");
    document.getElementById("change_mode").innerHTML = "Dark Mode";
  } else if (document.getElementById("styleing").getAttribute('href') == "css/light-mode.css") {
    document.getElementById("styleing").setAttribute('href', "css/dark-mode.css");
    document.getElementById("faviconio").setAttribute('href', "images/favicon_dark.ico");
    document.getElementById("change_mode").innerHTML = "Light Mode";
  }
}

const url = "https://api.github.com/users/MuhammadZ985";

fetch(url)
  .then(function(response) {
      let data = response.json();
      return data;
  })
  .then(function(data) {
    document.getElementById("Username").innerHTML = "Profile Username: " + data.login;
    document.getElementById("repo").innerHTML = "Number of Public Repositories: " + data.public_repos;
    document.getElementById("following").innerHTML = "Following: " + data.following;
    document.getElementById("followers").innerHTML = "Followers: " + data.followers;
  })
