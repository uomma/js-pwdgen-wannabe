'use script';
/* nome */


const firstName = prompt('inserisci il tuo nome');

/* cognome */
const lastName = prompt('inserisci il tuo cognome')

/* colore preferito */
const colourName = prompt('inserisci il tuo colore preferito')

/* nomecognomecolorepreferito89 */

const user = `Ciao, ${firstName} ${lastName} ${colourName}89`;
console.log(user);

document.querySelector('h2').innerHTML = user;