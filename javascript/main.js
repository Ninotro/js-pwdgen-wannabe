// variabili
let userNome,userCognome,userColore,userPassword;
// chiedo il nome

userNome = prompt("Inserisci il tuo nome")

// chiedo il cognome

userCognome = prompt("inserisci il tuo cognome")

// chiedo il colore

userColore = prompt ("inserisci il tuo colore preferito")

// creo la password

userPassword = userNome+userCognome+userColore+21

// rifornisco la password

document.getElementById("password").innerHTML = userPassword