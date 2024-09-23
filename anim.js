// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "We were good", time: 7 },
  { text: "We were gold", time: 10 },
  { text: "Kinda dream", time: 11 },
  { text: "That can't be sold", time: 12 },
  { text: "We were right", time: 15 },
  { text: "'Till we weren't", time: 17 },
  { text: "Built a home and watched it burn", time: 20 },
  { text: "Mm, I didn't wanna leave you", time: 23 },
  { text: "Ididn't wanna lie", time: 26 },
  { text: "Started to cry,", time: 28 },
  { text: "But then remembered I", time: 29 },
  { text: "I can buy myself flowers", time: 33 },
  { text: "Write my name in the sand", time: 37 },
  { text: "Talk to myself for hours", time: 41 },
  { text: "Say things you don't undetstand", time: 45 },
  { text: "I can take myself dancing", time: 49 },
  { text: "And i can hold my own hand", time: 53 },
  { text: "Yeah, I can love me better than you can", time: 56 },
  { text: "Can love me better,", time: 101 },
  { text: "I can love me better, baby", time: 103 },
  { text: "Can love me better,", time: 105 },
  { text: "I can love me better, baby", time: 107 },
  { text: "Paint my nails cherry-red", time: 109 },
  { text: "Match the roses that  you left", time: 112 },
  { text: "No remorse, no regret", time: 116 },
  { text: "I forgive every word you said", time: 121 },
  { text: "Ooh, I didn't wanna leave you baby", time: 125 },
  { text: "Ididn't wanna fight", time: 127 },
  { text: "Started t cry, butn then remembered I", time: 129 },
  { text: "I can buy ,yself flowers", time: 134 },
  { text: "Write my name in the sand", time: 138 },
  { text: "Talk to myself for hours", time: 142 },
  { text: "Say things y don't understand", time: 146 },
  { text: "I can take myself dancing", time: 150 },
  { text: "And I can hold my own hand", time: 155 },
  { text: "Yeah, I can lo me better than you can", time: 158 },
  { text: "Can love me better, i can love me better, baby", time: 203 },
  { text: "Can love me better, i can love me better, baby", time: 208 },
  { text: "Can love me better, i can love me better, baby", time: 211 },
  { text: "Can love me better, i", time: 215 },
  { text: "I didn't wanna leave you,", time: 218 },
  { text: "I didn't wanna fight", time: 220 },
  { text: "Stardet to cry,", time: 222 },
  { text: "But then remembered I", time: 224 },
  { text: "I can buy myself flowers", time: 227 },
  { text: "Write my name in the sand", time: 230 },
  { text: "Talk to myself for hours", time: 235 },
  { text: "Say things you don't undetstand", time: 239 },
  { text: "I can take myself dancing", time: 243 },
  { text: "And i can hold my own hand", time: 247 },
  { text: "Yeah, I can love me better than", time: 250 },
  { text: "Yeah, I can love me better than you can", time: 254 },
  { text: "Can love me better,", time: 259 },
  { text: "I can love me better, baby", time: 301 },
  { text: "Can love me better,", time: 303 },
  { text: "I can love me better, baby", time: 305 },
  { text: "Can love me better,", time: 306 },
  { text: "I can love me better, baby", time: 307 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);