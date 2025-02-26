// Obtiene el elemento <canvas> del documento HTML con id "canvas"
let canvas = document.getElementById("canvas");

// Obtiene el contexto 2D del lienzo para poder dibujar sobre él
let ctx = canvas.getContext("2d");

// Establece el color de relleno para las figuras que se dibujan
// En este caso, se establecerá el color verde
ctx.fillStyle = "rgb(98, 98, 211)";

// Dibuja un rectángulo relleno con el color previamente definido (verde)
// Los parámetros son: (x, y, ancho, alto)
// El rectángulo comienza en la posición (10, 10) y tiene un tamaño de 100x100 píxeles
ctx.fillRect(10, 10, 500, 100);
