let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let rows = 20;
let cols = 20;
let snake = [
  // mehrer jasons in einem array,
  { x: 19, y: 3 },
];
let food; // food position mit einer jason struktur
let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;
let direction = "LEFT";
let foodCollected = false;

placeFood();

setInterval(gameloop, 200); // ruft die gameloop funktion alle 500 ms auf

document.addEventListener("keydown", keyDown); // wenn eine taste gedrückt wird, wird die keyDown funktion aufgerufen

draw(); // ruft die draw funktion auf

function draw() {
  // zeichnet das canvas
  ctx.fillStyle = "black"; // damit sage ich erstmal das ich einen schwarzen stift ausgewählt habe
  //ctx.fillRect(10, 10, 20, 20); // damit sage ich das ich ein schwarzes rechteck zeichnen möchte, an der position 10 (x), 10 (y) und mit einer größe von 20(höhe)x20(breite)
  ctx.fillRect(0, 0, canvas.width, canvas.height); // an psition 0,0 und mit der größe der canvas variablen wenn ich also im html die größe des canvas ändere, ändert sich auch die größe des rechtecks

  // zeichnet die snake
  ctx.fillStyle = "white"; // jetzt sage ich das ich einen weißen stift ausgewählt habe

  snake.forEach((part) => add(part.x, part.y)); // das ist eine verkürzte schreibweise von einer schleife, die für jeden teil der snake die add funktion aufruft

  // zeichnet den food
  ctx.fillStyle = "lightcoral";
  add(food.x, food.y); // ruft die add funktion auf und übergibt die position des foods

  requestAnimationFrame(draw);
}

function testGameOver() {
  let firstPart = snake[0];
  let otherParts = snake.slice(1); // kopiert alle elemente von snake ab der 2. position
  let duplicatePart = otherParts.find(
    (part) => part.x == firstPart.x && part.y == firstPart.y
  ); // sucht in den kopierten elementen nach einem element, das die gleiche x und y position hat wie das erste element der snake
  //schlange läuft gegen die wand
  if (
    snake[0].x < 0 ||
    snake[0].x > cols - 1 ||
    snake[0].y < 0 ||
    snake[0].y > rows - 1 ||
    duplicatePart
  ) {
    placeFood();
    snake = [{ x: 19, y: 3 }];
    direction = "LEFT";
  }
}

function placeFood() {
  let randomX = Math.floor(Math.random() * cols);
  let randomY = Math.floor(Math.random() * rows);

  food = { x: randomX, y: randomY }; // x ist nun randomX und y ist nun randomY
}

function add(x, y) {
  // weil 30 - 1 immer gleich ist und die anderen beiden variablen sich ändern, kann ich das in eine funktion packen
  ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}

function shiftSnake() {
  for (let i = snake.length - 1; i > 0; i--) {
    // wenn ich snake.length - 1 nehme, dann fange ich beim letzten element an und gehe bis zum 2. element
    const part = snake[i];
    const lastPart = snake[i - 1];
    part.x = lastPart.x; // die x position des aktuellen elements wird auf die x position des vorherigen elements gesetzt
    part.y = lastPart.y; // die y position des aktuellen elements wird auf die y position des vorherigen elements gesetzt
  }
}

function gameloop() {
  testGameOver();
  if (foodCollected) {
    snake = [{ x: snake[0].x, y: snake[0].y }, ...snake]; // x hat von snake an der 0. position die x position und y hat die y position,
    // ...snake bedeutet das ich alle elemente von snake in das neue array kopiere
  }

  foodCollected = false;
  shiftSnake();

  if (direction == "LEFT") {
    // wenn die direction left ist
    snake[0].x--; // dann ziehe 1 von der x position des ersten elements der snake ab
  }
  if (direction == "RIGHT") {
    snake[0].x++;
  }
  if (direction == "UP") {
    snake[0].y--;
  }
  if (direction == "DOWN") {
    snake[0].y++;
  }
  if (snake[0].x == food.x && snake[0].y == food.y) {
    // wenn die x und y position des ersten elements der snake gleich der x und y position des foods ist
    foodCollected = true; //
    placeFood(); // platziere ein neues food
  }
}

function keyDown(e) {
  if (e.keyCode == 38) {
    direction = "UP";
  } else if (e.keyCode == 40) {
    direction = "DOWN";
  } else if (e.keyCode == 37) {
    direction = "LEFT";
  } else if (e.keyCode == 39) {
    direction = "RIGHT";
  }
}
