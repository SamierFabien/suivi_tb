/*
Ecrivez une fonction qui affiche une table de multiplication.
Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.
Par exemple, TableMultiplication(7) doit afficher :
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21 ...
*/

/**
 * Fonction façade qui lance le programme
 */
function run() {
    home();
    let multiplier = getNumber();
    showResults(multiplier);
}

/**
 * Fonction qui lance le message d'accueil
 */
function home() {
    alert("Bonjour !" +
        "\nCe programme sert à afficher une table de multiplication."
    );
}

/**
 * Demande un nombre à l'utilisateur et le converti en float si correct
 * Gère les erreurs si donnée érronée
 * @returns la donnée utilisateur valide convertieen float
 */
function getNumber() {
    let userNumber
    while (true) {
        userNumber = prompt("Veuillez saisir un multiplicateur :");
        if (isACorrectNumber(userNumber) === true) {
            return parseFloat(userNumber);
        } else {
            alert("'" + userNumber + "' n'est pas un multiplicateur correct.")
        }
    }
}

/**
 * Vérifie si la donnée de l'utilisateur est un multiplicateur correct.
 * @param {*} data 
 * @returns true si nombre correct, sinon false
 */
function isACorrectNumber(data) {
    if (!isNaN(data) && isFinite(data) && data.length > 0) {
        return true;
    } else {
        return false
    }
}

/**
 * Affiche la table de multiplication du nombre passé en paramètre
 * @param {Number} multiplier un nombre
 */
function showResults(multiplier) {
    let results = "Voici la table de " + multiplier + " :";
    for (let i = 1; i < 11; i++) {
        results += "\n" + i + " x " + multiplier + " = " + (i * multiplier);
    }
    alert(results);
}