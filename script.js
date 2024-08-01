alert("Hola Mundo! <3");

let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()

typewriter
  .pauseFor(2500)
  .typeString('Ruth Gallardo')
  .pauseFor(300)
  .deleteAll()
  .typeString('Mercadologa')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()

typewriterFrase
  .pauseFor(2500)
  .typeString('...Encontrarás muchas dificultades por delante... Ese es tu destino. No te desalientes, ¡ni aún en los momentos más difíciles!')
  .pauseFor(300)
  .deleteAll()
  .typeString('Kaepora Gaebora')
  .pauseFor(1000)
  .start();