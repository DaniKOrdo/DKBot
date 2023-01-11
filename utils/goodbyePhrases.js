module.exports = { goodbyePhrases }

function goodbyePhrases() {
    return goodbyePhrasesObject[Math.floor(Math.random() * goodbyePhrasesObject.length)] + " " + randomEmoji();
}

function randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

const emojis = ["😢", "😭", "💔", "😿", "😥", "😔", "😞", "😓", "😩", "😫", "😤", "😡", "😠", "😖", "😣", "😢", "😭", "💔", "🥀"]

const goodbyePhrasesObject = [
    "Siempre es más difícil que te dejen atrás que ser el que se va",
    "Cada noche, después del adiós, mi corazón se congela…",
    "Y al partir serán estas mis últimas palabras: Me voy, dejo mi amor detrás",
    "El dolor de la separación no es nada comparado con la alegría de reunirse de nuevo",
    "Las manos que dicen adiós son pájaros que van muriendo lentamente",
    "Las despedidas siempre duelen, aun cuando haga tiempo que se ansíen",
    "Entre las flores te fuiste. Entre las flores me quedo",
    "Solo lo que se pierde es adquirido para siempre",
    "No hay beso que no sea principio de despedida, incluso el de llegada",
    "Es tan corto el amor y tan largo el olvido",
    "Te digo adiós para toda la vida, pero toda la vida seguiré pensando en ti",
    "El adiós siempre es doloroso. Prefiero un ¡hasta pronto!",
    "No se acaba el amor solo con decir adiós, hay que tener presente que el estar ausente no anula el recuerdo, no compra el olvido, ni nos borra del mapa",
    "¿Quieres que conservemos una dulce memoria de este amor?... pues amémonos hoy mucho, y mañana ¡digámonos adiós!",
    "Solo en la agonía de despedirnos somos capaces de comprender la profundidad de nuestro amor",
    "Te digo adiós para toda la vida, aunque toda la vida siga pensando en ti",
    "Un millón de palabras no pueden hacer que vuelvas. Lo sé, porque lo he intentado. Tampoco un millón de lágrimas. Lo sé, porque he llorado hasta no poder más",
    "Algún día volverás a saber de mí, y me mirarás y caerás en la conclusión de que sin ti… sí soy feliz…",
    "Pueden las millas realmente separarte de los amigos… Si quieres estar con alguien al que quieres, ¿no estás allí ya?",
    "No son los días lo que recordamos, sino los momentos",
    "Tal vez parte de amar, es aprender a dejar ir",
    "Se despidieron y en el adiós ya estaba la bienvenida",
    "¡Adiós! ¡Adiós para siempre, mi buena amiga, dulce y triste recuerdo de mi infancia!",
    "No llores porque terminó, sonríe porque llegó a ocurrir",
    "El mundo es redondo y aquél sitio que parece un final podría ser también un comienzo",
    "No existen las despedidas entre nosotros. Allí donde estés, te llevaré en mi corazón",
    "Solo partimos para reencontrarnos otra vez",
    "No más palabras. Las conocemos todas, todas las palabras que no deben ser dichas. Pero has hecho mi mundo más perfecto",
    "Es hora de decir adiós, pero las despedidas son tristes y prefiero decir hola. Hola a una nueva aventura",
    "Decir adiós no significa nada. Es el tiempo que pasamos juntos lo que importa",
    "La historia nunca dice adiós. Lo que dice siempre es un hasta luego",
    "Los sentimientos del hombre son siempre los más puros y los más brillantes en las bienvenidas y en las despedidas",
    "Nunca digo adiós, porque un adiós significa irse e irse significa olvidar"
];

