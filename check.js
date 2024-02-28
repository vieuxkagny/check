function reverseString(str){
    str = Array.from(str)
    str= str.reverse()
    str = str.join("")
    console.log(str)
   
}
reverseString ("salut tout le monde")
 
function longestword(vito) {
     return vito.length;
      } 
      let strtest = "salut tout le monde";
      console.log("", longestword(strtest));

function titlecase(str) {
    let word= str .split(" "); 
    let Array = [];
  word.forEach(word => {
    
    let firstletter = word.charAt(0).toUpperCase();
    let replacement = word.replace(word.charAt(0), firstletter);
     Array.push(replacement);
  });
  console.log(Array.join(' '));
}   
titlecase("salut tout le monde"); 

function trouverMax(tableau) {
  if (tableau.length === 0) {
      return undefined; 
  }

  let max = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] > max) {
          max = tableau[i];
      }
  }

  return max;
}
function trouverMin(tableau) {
  if (tableau.length === 0) {
      return undefined; e
  }

 
  let min = tableau[0];

 
  for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] < min) {
          min = tableau[i];
      }
  }

  return min;
}

const tableauTest = [3, 1, 7, 2, 9, 5];
console.log("Valeur maximale :", trouverMax(tableauTest));
console.log("Valeur minimale :", trouverMin(tableauTest));

function calculerSomme(tableau) {
  let somme = 0;


  for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
  }

  return somme;
}

const tableau = [3, 1, 7, 2, 9, 5];
console.log("Somme des éléments du tableau :", calculerSomme(tableau));
function filtrerTableau(tableau, condition) {
 
  return tableau.filter(condition);
}


const tableaux = [3, 1, 7, 2, 9, 5];


function estPair(nombre) {
  return nombre % 2 === 0;
}

console.log("Éléments pairs du tableau :", filtrerTableau(tableauTest, estPair));

function superieurAQuatre(nombre) {
  return nombre > 4;
}

console.log("Éléments supérieurs à 4 du tableau :", filtrerTableau(tableauTest, superieurAQuatre));
function calculerFactorielle(nombre) {

  if (nombre < 0) {
      return "Impossible de calculer la factorielle d'un nombre négatif.";
  }

  let resultat = 1;


  for (let i = 2; i <= nombre; i++) {
      resultat *= i;
  }

  return resultat;
}

let nombre = 3;
console.log("Factorielle de", nombre, ":", calculerFactorielle(nombre));

function estPremier(nombre) {

  if (nombre <= 1) {
      return false;
  }


  for (let i = 2; i <= Math.sqrt(nombre); i++) {
      if (nombre % i === 0) {
          return false;
      }
  }


  return true;
}

const nombres = 17;
if (estPremier(nombre)) {
  console.log(nombre + " est un nombre premier.");
} else {
  console.log(nombre + " n'est pas un nombre premier.");
}


function genererFibonacci(n) {
  const fibonacciSequence = [0, 1]; 
  for (let i = 2; i < n; i++) {
      const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; 
  }

  return fibonacciSequence;
}

const nombreDeTermes = 10;
const sequenceFibonacci = genererFibonacci(nombreDeTermes);
console.log("Séquence de Fibonacci jusqu'au", nombreDeTermes + "ème terme :", sequenceFibonacci);



   
    