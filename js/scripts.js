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
  const vocabulary = 'aeiouAEIOU';
  for (i = 0; i < word.length; i++) {
    const letter = word.charAt(i);
    if (vocabulary.includes(letter)) {
      dataStrings.firstFloor.vowels.push(letter);
    } else {
      dataStrings.secondFloor.consonants.push(letter);
    }
    dataStrings.fourthFloor.asciiCode.push(word.charCodeAt(word.indexOf(letter)));
  }
};

letters('Si no estudias acabarás como Enrique');

console.log(dataStrings.firstFloor.vowels);
console.log(dataStrings.secondFloor.consonants);
console.log(dataStrings.fourthFloor.asciiCode);

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
