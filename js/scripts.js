/* /* # Ejercicios

## Objetos */

//1- Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};
console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años, mis hobbies son ${user.hobbies}, tengo un ${user.pets[0].type} que se llama ${user.pets[0].name} y tambien tengo un ${user.pets[1].type} que se llama ${user.pets[1].name}, vivo en la calle ${user.address.street} en la ciudad ${user.address.city}, estado de ${user.address.state}, mi codigo postal es ${user.address.postalCode} y en el pais que resido ${user.address.country}. Mi número de teléfono es ${user.phone}, mi correo electronico ${user.email}, trabajo de ${user.occupation}, tengo un titulo de ${user.education}`
);

//2- Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const dataNumbers = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [] // número + 2
    },
    thirdFloor: {
      numbersDouble: [] // número * 2
    }
  },
  fourthFloor: {
    numbersDividedBy2: [] // número / 2
  },
  fifthFloor: {
    onlyEven: [], // Números pares
    onlyOdd: [] //   Números impares
  }
};
for (let i = 0; i < dataNumbers.numbers.length; i++) {
  dataNumbers.firstFloor.secondFloor.numbersPlus2.push(dataNumbers.numbers[i] + 2);
  dataNumbers.firstFloor.thirdFloor.numbersDouble.push(dataNumbers.numbers[i] * 2);
  dataNumbers.fourthFloor.numbersDividedBy2.push(dataNumbers.numbers[i] / 2);
  if (dataNumbers.numbers[i] % 2 === 0) {
    dataNumbers.fifthFloor.onlyEven.push(dataNumbers.numbers[i]);
  } else {
    dataNumbers.fifthFloor.onlyOdd.push(dataNumbers.numbers[i]);
  }
}

console.log(dataNumbers.firstFloor.secondFloor.numbersPlus2);
console.log(dataNumbers.firstFloor.thirdFloor.numbersDouble);
console.log(dataNumbers.fourthFloor.numbersDividedBy2);
console.log(dataNumbers.fifthFloor.onlyEven);
console.log(dataNumbers.fifthFloor.onlyOdd);

//3 - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

const dataStrings = {
  firstFloor: {
    vowels: [] // Vocales
  },
  secondFloor: {
    consonants: [] // Consonantes
  },

  fourthFloor: {
    asciiCode: [] // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [] // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};
// split viene bien para el 5 fifthfloor


const letters = word => {
  const vowels = 'aeiouAEIOUáéíóú';
  const consonants1 = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ"

  for (i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    if (vowels.includes(letter)) {
      dataStrings.firstFloor.vowels.push(letter);
    } else if (consonants1.includes(letter)) {
      dataStrings.secondFloor.consonants.push(letter); 
    }
    dataStrings.fourthFloor.asciiCode.push(word.charCodeAt(word.indexOf(letter)));
  }

  let array = word.split(' ');
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      dataStrings.fifthFloor.wordsInUppercase.push(array[i].toUpperCase());
      dataStrings.fifthFloor.wordsInLowercase.push(array[i].toLowerCase());
    }
  }
  let consonants2 = 'abcdfeghijklmnñopqrstuvwxyz';
  let random = Math.floor(Math.random() * consonants2.length);
  let newPhrase = ""

   dataStrings.sixthFloor.secretCode = newPhrase
    /*.replaceAll(/a/g, '1')
    .replaceAll(/e/g, '2')
    .replaceAll(/i/g, '3')
    .replaceAll(/o/g, '4')
    .replaceAll(/u/g, '5')
    .replaceAll(/A/g, '1')
    .replaceAll(/E/g, '2')
    .replaceAll(/I/g, '3')
    .replaceAll(/O/g, '4')
    .replaceAll(/U/g, '5')
    .replaceAll(/á/g, '1')
    .replaceAll(/é/g, '2')
    .replaceAll(/í/g, '3')
    .replaceAll(/ó/g, '4')
    .replaceAll(/ú/g, '5')
    .replaceAll(/b/g, 'z')
    .replaceAll(/c/g, 'b')
    .replaceAll(/d/g, 'c')
    .replaceAll(/f/g, 'd')
    .replaceAll(/g/g, 'f')
    .replaceAll(/h/g, 'g')
    .replaceAll(/j/g, 'h')
    .replaceAll(/k/g, 'j')
    .replaceAll(/l/g, 'k')
    .replaceAll(/m/g, 'l')
    .replaceAll(/n/g, 'm')
    .replaceAll(/ñ/g, 'n')
    .replaceAll(/p/g, 'ñ')
    .replaceAll(/q/g, 'p')
    .replaceAll(/r/g, 'q')
    .replaceAll(/s/g, 'r')
    .replaceAll(/t/g, 's')
    .replaceAll(/v/g, 't')
    .replaceAll(/w/g, 'v')
    .replaceAll(/x/g, 'w')
    .replaceAll(/y/g, 'x')
    .replaceAll(/z/g, 'y')
    .replaceAll(/B/g, 'Z')
    .replaceAll(/C/g, 'B')
    .replaceAll(/D/g, 'C')
    .replaceAll(/F/g, 'D')
    .replaceAll(/G/g, 'F')
    .replaceAll(/H/g, 'G')
    .replaceAll(/J/g, 'H')
    .replaceAll(/K/g, 'J')
    .replaceAll(/L/g, 'K')
    .replaceAll(/M/g, 'L')
    .replaceAll(/N/g, 'M')
    .replaceAll(/Ñ/g, 'N')
    .replaceAll(/P/g, 'Ñ')
    .replaceAll(/Q/g, 'P')
    .replaceAll(/R/g, 'Q')
    .replaceAll(/S/g, 'R')
    .replaceAll(/T/g, 'S')
    .replaceAll(/V/g, 'T')
    .replaceAll(/W/g, 'V')
    .replaceAll(/X/g, 'W')
    .replaceAll(/Y/g, 'X')
    .replaceAll(/Z/g, 'Y')
    .replaceAll(/ /g, word.charAt(random)); */
};

letters('Estamos viendo objetos');

console.log(dataStrings.firstFloor.vowels);
console.log(dataStrings.secondFloor.consonants);
console.log(dataStrings.fourthFloor.asciiCode);
console.log(dataStrings.fifthFloor.wordsInUppercase);
console.log(dataStrings.fifthFloor.wordsInLowercase);
console.log(dataStrings.sixthFloor.secretCode);

/* const user = {
  name: 'Anubis',
  age: 7,
  isActive: true,
  friends: ['nala', 'niblbler']
};

console.log(user); */

/* const userCard = {
  name: 'Anubis',
  email: 'anubis@gmail.com',
  isActive: true,
  friends: ['macarena', 'xavier']
};

console.log(userCard); */ // con "." accedes al dato   ejem: (userCard.name.charAt(0))

/* const userCard = {
  name: 'Anubis',
  email: 'anubis@gmail.com',
  isActive: true,
  friends: ['macarena', 'xavier']
};

for (const friend of userCard.friends) {
  console.log(friend);
} */

/* const userCard = {
  name: 'Anubis',
  email: 'anubis@gmail.com',
  isActive: true,
  friends: ['macarena', 'xavier'],
  address: {
    street: {
      number: 123
    }
  }
};

console.log(userCard.address.street.number); */

/* const newPhrase = phrase.toLowerCase().replaceAll('a',1).replaceAll('á',1).replaceAll('e',1).replaceAll('é',1).replaceAll('i',1).replaceAll('í',1).replaceAll('o',1).replaceAll('ó',1).replaceAll('u',1); */

// - CREA UNA FUNCIÓN QUE RECIBA UNA PALABRA
// - HAZ QUE LA FUNCIÓN SUSTITUYA CADA UNA POR SU VOCAL ANTERIOR EN EL ABECEDARIO
// - HAZ QUE CADA CONSONANTE SE SUSTITUYA POR LA LETRA EN 2 POSICIONES SIGUIENTES
// - HAZ QUE RECIBA UNA FRASE EN EL LUGAR DE UNA PALABRA, SUSTITUYE CADA ESPACIO POR UN NÚMERO ENTRE 0 Y 10
// - SI ALGUNA VOCAL ACENTUADA, SE SUSTITUIRÁ POR *
// - SI ALGUNA CONSONANTE ES UNA Ñ SE SUSTITUIRA POR UN $


  const receiverWord = phrase => {
  const vocabulary = 'aeiouáéíóúAEIOU';
  const vocabulary2 = 'abcdefghijklmnñopqrstuvwxyz';
  let stringVoid = '';

  for (i = 0; i < phrase.length; i++) {
    if (vocabulary.includes(phrase[i])) {
      //vocal
      if (phrase[i] === 'a') {
        stringVoid += 'z';
      } else {
        stringVoid += vocabulary2.charAt(vocabulary2.indexOf(phrase[i]) - 1);
      }
    }  // si no es vocal
    else if (phrase[i] === 'y') {
        stringVoid += 'a';
    } 
    else if (phrase[i] === 'z') {
        stringVoid += 'b';
    }
    else if (phrase[i] === ' ') {
        stringVoid += Math.floor(Math.random() * 11);
    }        
    else {
        stringVoid += vocabulary2.charAt(vocabulary2.indexOf(phrase[i]) + 2);
    }
    if (phrase[i] === "á" || phrase[i] === "é" || phrase[i] === "í" || phrase[i] === "ó" || phrase[i] === "ú"){
        stringVoid += "*"
    }
    if (phrase[i] === "ñ"){
        stringVoid += "$"
    }
    if (phrase[i] === ","){
      stringVoid += Math.floor(Math.random() * 11);
    }       
  }

  console.log(stringVoid);
};

receiverWord('Al leer el pequeño cuento, entendí cómo influye en nuestra cultura');

/* const receiverWord = phrase => {
  const vocabulary = 'aeiouáéíóúAEIOU';
  const vocabulary2 = 'abcdefghijklmnñopqrstuvwxyz';
  let stringVoid = '';

  for (i = 0; i < phrase.length; i++) {
    if (vocabulary.includes(phrase[i])) {
      //vocal
      if (phrase[i] === 'a') {
        stringVoid += 'z';
      } else {
        stringVoid += vocabulary2.charAt(vocabulary2.indexOf(phrase[i]) - 1);
      }
    } else {
      // si no es vocal
      if (phrase[i] === 'y') {
        stringVoid += 'a';
      } else if (phrase[i] === 'z') {
        stringVoid += 'b';
      } else {
        stringVoid += vocabulary2.charAt(vocabulary2.indexOf(phrase[i]) + 2);
      }
    }
    if (phrase[i] === ' ') {
      stringVoid += Math.floor(Math.random() * 10);
    }
    if (phrase[i] === "á"){
      stringVoid += "*"
    }else if (phrase[i] === "é" || phrase[i] === "í" || phrase[i] === "ó" || phrase[i] === "ú"){
      stringVoid += "*"
    }
      if (phrase[i] === "ñ"){
      stringVoid += "$"
    }
  }

  console.log(stringVoid);
};

receiverWord('Al leer el pequeño cuento, entendí cómo influye en nuestra cultura'); */



//const vowels = 'aeiouáéíóúAEIOU';
/* const getStringInfo = phrase => {
  const consonants = 'bcdfghjklmnñpqrstvwxyz';
  let newPhrase = '';

  for (const letter of phrase.toLowerCase()) {
    if (consonants.includes(letter)) {
      const index = consonants.indexOf(letter);
      if (index === 0) {
        newPhrase = newPhrase + 'z';
      } else {
      }
    } else {
      newPhrase = newPhrase + letter;
    }
  }

  newPhrase = phrase.toLowerCase().replaceAll('a', 1);
  newPhrase = newPhrase.toLowerCase().replaceAll('á', 1);
  newPhrase = newPhrase.toLowerCase().replaceAll('e', 2);
  newPhrase = newPhrase.toLowerCase().replaceAll('é', 2);
  newPhrase = newPhrase.toLowerCase().replaceAll('i', 3);
  newPhrase = newPhrase.toLowerCase().replaceAll('í', 3);
  newPhrase = newPhrase.toLowerCase().replaceAll('o', 4);
  newPhrase = newPhrase.toLowerCase().replaceAll('ó', 4);
  newPhrase = newPhrase.toLowerCase().replaceAll('u', 5);
  newPhrase = newPhrase.toLowerCase().replaceAll('ú', 5);

  console.log(newPhrase);
};

letters('Estamos viendo objetos');

console.log(dataStrings.sixthFloor.secretCode); */