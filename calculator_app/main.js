function appandOperation(operation) {
  // funktion, name = appandOperation, parameter = operation
  document.getElementById("resultArea").innerHTML += operation; // wir greifen auf das element resultArea zu, += fügt es an anstatt es zu ersetzen, .innerHTML = der Inhalt des Elements der HTML Seite
}

function calculateResult() {
  let container = document.getElementById("resultArea");
  // ich weise der variablen container das element mit der id resultArea zu
  //container.innerHTML = "Hallo"; // ich ändere den inhalt des elements mit der id resultArea zu "Hallo", sobald ich das = drücke wird also Hallo reingeschreiben
  let result = eval(container.innerHTML); // die informationen die wir aus dem container holen (also was in der resultArea steht) werden evaluiert, also berechnet
  container.innerHTML = result; // wir schreiben das ergebnis in den container
}

//function deleteLast() {
//let container = document.getElementById("resultArea");

//container.innerHTML = ""; // wir löschen den inhalt des containers

//.innerHTML darf hier nicht in der Variable stehen sondern muss hier unten mit dran stehen damit jetzt der Inhalt gelöscht wird
// ansonsnten würde nur die Variable gelöscht werden
//}

//oder

function deleteLast() {
  let container = document.getElementById("resultArea");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3); // weil das * insgesamt 3 Zeichen sind, leerzeichen, * und leerzeichen
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1); // wir löschen nur den letzten buchstaben des containers
  }
}
