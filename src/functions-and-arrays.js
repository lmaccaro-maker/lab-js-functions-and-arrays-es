// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwoNumbers(5, 10)); // Devuelve: 10



// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) return null; // Manejar el caso del array vacío

  let longestWord = words[0]; // Comienza con la primera palabra como la más larga inicialmente

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]; // Actualiza si encontramos una palabra más larga
    }
  }

  return longestWord;
}

console.log(findLongestWord(words)); // Devuelve: "crocodile"


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

  let total = 0; // Inicializa la variable para acumular la suma de los números

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; // Sumar el valor de cada elemento al total
  }

  return total; // Devuelve la suma total de los números
}

console.log(sumNumbers(numbers)); // Devuelve: 87



// Iteration #3.1 Bonus:


function sum(arr) {
  let total = 0; // Inicializa la variable para acumular la suma

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i]; // Suma directamente los números
    } else if (typeof arr[i] === 'string') {
      total += arr[i].length; // Suma la longitud de las strings
    } else if (typeof arr[i] === 'boolean') {
      total += arr[i] ? 1 : 0; // Suma 1 si es true, 0 si es false
    } else {
      throw new Error("Unsupported data type in array"); // Maneja tipos de datos no soportados
    }
  }

  return total; // Devuelve la suma total
}

const arr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
console.log(sum(arr)); // Devuelve: 57



// Iteration #4: Calculate the average  

// Función para calcular la suma de un array de números
function sumNumbers(numbers) {
  let total = 0; // Inicializa la variable para acumular la suma de los números

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; // Sumar el valor de cada elemento al total
  }

  return total; // Devuelve la suma total de los números
}

// Función para calcular la media de un array de números
function averageNumbers(numbers) {
  if (numbers.length === 0) return null; // Manejo de array vacío

  let total = sumNumbers(numbers); // Utiliza sumNumbers para obtener la suma
  return total / numbers.length;   // Devuelve la media
}

console.log(averageNumbers(numbers)); // Devuelve: 8.7



// Level 1: Array of numbers  (MIRA ESTE EJEMPLO, NO PUEDO CAMBIAR CONST PONIENDO ESTOS NUMEEROS const numbers = [2, 6, 9, 10, 7, 4, 1, 9];)

const numbersAvg = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function averageNumbers(numbers) {
  if (numbers.length === 0) return null; // Manejo del caso en que el array esté vacío

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; // Sumar cada elemento del array al total
  }

  return total / numbers.length; // Calcular y devolver la media
}


console.log(averageNumbers(numbers)); Devuelve: 8.7


// Level 2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (words.length === 0) return null; // Manejo del caso donde el array está vacío

  let totalLength = 0;

  for (let i = 0; i < words.length; i++) {
    totalLength += words[i].length; // Sumar la longitud de cada palabra al total
  }

  return totalLength / words.length; // Calcular y devolver la longitud media
}


console.log(averageWordLength(wordsArr)); // Imprime: 5.3


// Bonus - Iteration #4.1


function avg(arr) {
  if (arr.length === 0) return null; // Manejo del caso donde el array está vacío

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === 'number') {
      total += element; // Sumar número directamente
    } else if (typeof element === 'string') {
      total += element.length; // Sumar la longitud de la cadena
    } else if (typeof element === 'boolean') {
      total += element ? 1 : 0; // Sumar 1 si es true y 0 si es false
    } else {
      throw new Error("Unsupported data type in array"); // Manejo de tipos no soportados
    }
  }

  return total / arr.length; // Devuelve la media
}

// Ejemplo de uso
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
console.log(avg(mixedArr)); // Debería devolver: 5.7




// Iteration #5: Unique arrays  ERROR-> (MIRA ESTE EJEMPLO, NO PUEDO CAMBIAR CONST SI CONST WORDS ERA ARRIBA-> const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];



const wordsUnique =
  [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];



function uniquifyArray(words) {
  if (words.length === 0) return null; // Manejo del caso de un array vacío

  const uniqueWords = [];

  for (let i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
      uniqueWords.push(words[i]); // Añade la palabra solo si no está ya en uniqueWords
    }
  }

  return uniqueWords;
}


console.log(uniquifyArray(words)); // Imprime: ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']




// Iteration #6: Find elements   preguntar, hecho con wordsArray=['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const wordsArray = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function doesWordExist(wordsArray, wordToFind) {
  if (wordsArray.length === 0) return false; // Manejo del caso de un array vacío

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToFind) {
      return true; // Devuelve true si se encuentra la palabra
    }
  }

  return false; // Devuelve false si no se encuentra la palabra
}

console.log(doesWordExist(words, 'aviator')); // Devuelve: true
console.log(doesWordExist(words, 'unicorn')); // Devuelve: false


// Iteration #7: Count repetition

const wordsCount = [
  ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']
];

function howManyTimes(wordsArray, wordToCount) {
  if (wordsArray.length === 0) return 0; 

  let count = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToCount) {
      count++; // 
    }
  }
  
  return count;
}

console.log(howManyTimes(wordsCount, 'orchard')); // Prints: 0


