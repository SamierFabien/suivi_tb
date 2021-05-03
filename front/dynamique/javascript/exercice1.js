/*
Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans,
les personnes d'âge strictement supérieur à 40 ans
et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).
Le programme doit demander les âges successifs.
Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.
Donnez le programme Javascript correspondant qui affiche les résultats.
*/


/**
 * Fonction façade qui appelle toutes les fonctions.
 * Le tableau des âges saisis y est déclaré.
 */
function run() {
    let table = [];//tableau pour éventuellement faciliter l'évolution du code
    home();
    fill(table);
    showResults(table);
}

/**
 * Affiche le message d'accueil
 */
function home() {
    alert("Bonjour !" +
        "\nCe programme sert à dénombrer les personnes selon trois tranches d'âge :" +
        "\nmoins de 20 ans, de 20 à 40 ans, plus de 40 ans." +
        "\nPour ce faire, on vous demande de saisir un par un l'âge des différentes personnes à trier." +
        "\nL'étape de saisie s'arrêtera lors de l'ajout d'un centenaire." +
        "\nSuite à cela, le résultat sera l'affichage du nombre de personnes par tranche d'âge."
    );
}

/**
 * Vérification données utilisateur et remplissage du tableau par les données valides.
 * @param {Object} tab Un tableau
 */
function fill(tab) {
    while (true) {
        let age = getAge(tab);
        if (isACorrectAge(age) === true) {
            age = parseInt(age);
            if (age < 100) {
                tab.push(age);
            } else if (age >= 100) {
                tab.push(age);
                break;
            } else {
                break;
            }
        } else {
            alert("'" + age + "'" + " n'est pas un âge valide.");
        }
    }
    
}

/**
 * Demande l'âge de la Niéme personne.
 * @param {Array} tab 
 * @returns true si âge valide sinon false
 */
function getAge(tab) {
    return prompt("Veuillez saisir l'âge de la personne numéro " + (tab.length + 1));
}

/**
 * Vérifie si la donnée est un âge correct.
 * @param {*} data 
 * @returns true si âge correct, sinon false
 */
function isACorrectAge(data) {
    if (!isNaN(data) && isFinite(data) && data >= 0 && data.length > 0) {//data >= 0 parequ'il peut y avoir des bébés.  
        return true;
    } else {
        return false
    }
}

/**
 * Affiche les résultats
 * @param {Array} tab 
 */
function showResults(tab) {
    let teenAgers = 0;
    let twentyForty = 0;
    let upToForty = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < 20) {
            teenAgers++;
        } else if (tab[i] <= 40) {
            twentyForty++;
        } else {
            upToForty++;
        }
    }
    alert("Parmi la liste des âges que vous avez saisi, il y a" +
        "\n" + teenAgers + " personnes de moins de vingt ans," +
        "\n" + twentyForty + " personnes dont l'âge est compris entre vingt et quarante ans," +
        "\n" + upToForty + " personnes de plus de quarante ans."
    );
}

//run();
