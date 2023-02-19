// this is your main.js script
//Ejercicio 1
/*1*/ let challenge = "30 Days Of JavaScript";
/*2*/ console.log(challenge);
/*3*/ console.log(challenge.length);
/*4*/ console.log(challenge.toUpperCase());
/*5*/ console.log(challenge.toLowerCase());
/*6*/ console.log(challenge.substring(3, 7));
/*7*/ console.log(challenge.substring(3, 21));
/*8*/ console.log(challenge.includes("Script"));
/*9*/ console.log(challenge.split(","));
/*10*/ console.log(challenge.split(" "));
/*11*/ let enterprise =
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(enterprise.split(" "));
/*12*/ console.log(challenge.replace("JavaScript", "Python"));
/*13*/ console.log(challenge.charAt(15));
/*14*/ console.log(challenge.charCodeAt("j"));
/*15*/ console.log(challenge.indexOf("a"));
/*16*/ console.log(challenge.lastIndexOf("a"));
/*17*/ console.log(challenge.indexOf("because"));
/*18*/ console.log(challenge.lastIndexOf("because"));
/*19*/ console.log(challenge.search("because"));
/*20*/ console.log(challenge.trim());
/*21*/ console.log(challenge.startsWith(3));
/*22*/ console.log(challenge.endsWith("t"));
/*23*/ console.log(challenge.match(/a/g));
/*24*/ let first = "30 Days Of";
let second = " JavaScript";
console.log(first.concat(second));
/*25*/ console.log(challenge.repeat(2));

//Ejercicio 2
/*1*/ console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
/*2*/ console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
/*3*/ console.log("10" === "10");
/*4*/ console.log(parseFloat("10"));
/*5*/ let p = "python";
let j = "jargon";
console.log(p.includes("on") && j.includes("on"));
/*6*/ let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("jargon"));
/*7*/ console.log(Math.floor(Math.random() * 101));
/*8*/ console.log(Math.floor(Math.random() * 51) + 50);
/*9*/ console.log(Math.floor(Math.random() * 256));
/*10*/ let word = "JavaScript";
let index = Math.floor(Math.random() * word.length);
console.log(word[index]);
/*11*/ let patron = [];
  for (let i = 1; i <= 5; i++) {
    let fila = [];
    for (let j = 1; j <= 5; j++) {
      let valor;
      if (j === 1) {
        valor = i;
      } else if (j === 2) {
        valor = 1;
      } else if (j === 3) {
        valor = i ** 1;
      } else if (j === 4) {
        valor = i ** 2;
      } else if (j === 5) {
        valor = i ** 3;
      }
      fila.push(valor);
    }
    patron.push(fila);
  }
  for (let i = 0; i < patron.length; i++) {
    console.log(patron[i].join(' '));
  }
/*12*/
