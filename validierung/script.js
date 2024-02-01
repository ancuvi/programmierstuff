const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  //e = event
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name ist erforderlich");
  }
  if (password.value.length <= 6) {
    messages.push("Passwort muss länger als 6 Zeichen sein");
  }
  if (password.value.length >= 20) {
    messages.push("Passwort darf nicht länger als 20 Zeichen sein");
  }
  if (password.value === "password") {
    messages.push("Passwort darf nicht 'password' sein");
  }
  if (messages.length > 0) {
    e.preventDefault(); //verhindert das absenden des Formulars
    errorElement.innerText = messages.join(", ");
  }
});
