let KEY_SPACE = false; // 32
let KEY_UP = false; // 38
let KEY_DOWN = false; // 40

let canvas;
let ctx;
let backgroundImage = new Image();

let rocket = {
  x: 50,
  y: 200,
  width: 100,
  height: 50,
  src: "assets/rocket.png",
};
let ufo = [];

// Keylistener
document.onkeydown = function (e) {
  if (e.keyCode == 32) KEY_SPACE = true; // leertaste gedrückt

  if (e.keyCode == 38) KEY_UP = true; // pfeiltaste hoch gedrückt

  if (e.keyCode == 40) KEY_DOWN = true; // pfeiltaste runter gedrückt
};

document.onkeyup = function (e) {
  if (e.keyCode == 32) KEY_SPACE = false; // leertaste losgelassen

  if (e.keyCode == 38) KEY_UP = false; // pfeiltaste hoch losgelassen

  if (e.keyCode == 40) KEY_DOWN = false; // pfeiltaste runter losgelassen
};

function startGame() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  loadImages();
  setInterval(update, 1000 / 25); // starte update
  setInterval(createUfos, 5000);
  draw(); // starte draw
}

function createUfos() {
  let ufo = {
    x: 500,
    y: 200,
    width: 100,
    height: 40,
    src: "assets/ufo.png",
    image: new Image(),
  };
  ufo.image.src = ufo.src; // lade bild
  ufos.push(ufo);
}

function update() {
  if (KEY_UP) rocket.y -= 5; // bewege rakete nach oben

  if (KEY_DOWN) rocket.y += 5; // bewege rakete nach oben
}

function loadImages() {
  backgroundImage.src = "assets/space-background.jpg";
  rocket.image = new Image();
  rocket.image.src = rocket.src;
}

// Draw-method
function draw() {
  ctx.drawImage(backgroundImage, 0, 0); // Hintergrund zeichnen
  ctx.drawImage(rocket.image, rocket.x, rocket.y, rocket.width, rocket.height); // Rakete zeichnen

  ufos.forEach(function (ufo) {
    ctx.drawImage(ufo.image, ufo.x, ufo.y, ufo.width, ufo.height);
  }); // Ufos zeichnen
  requestAnimationFrame(draw); // draw wird 60 mal pro sekunde aufgerufen
}
