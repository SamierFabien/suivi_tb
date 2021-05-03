/*
Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.
Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case.
Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.
 var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )
*/


/**
 * Fonction façade qui lance le programme
 */
function run() {
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

    home();
    let name = getName();
    seekAndDestroy(tab, name);
    afficherTab(tab);
    
}

/**
 * Fonction façade qui lance le message d'accueil
 */
function home() {
    alert("Ce programme fonctionne comme ceci :" +
        "\nUn prénom est saisi au clavier." +
        "\nOn le recherche dans une liste prédéfinie." +
        "\nSi le prénom est trouvé, il est supprimé de la liste." +
        "\nSi le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime."
    );
}

/**
 * Demande un prénom à l'utilisateur
 * @returns La saisie de l'utilisateur
 */
function getName() {
    return prompt("Veuillez saisir un prénom :");
}

/**
 * Cherche dans tab si une occurence de name existe.
 * Si oui, on supprime l'occurence et on ajoute une entrée 'blanche'
 * @param {Object} tab Le tableau qui contient la liste de noms
 * @param {String} name Un string
 */
function seekAndDestroy(tab, name) {
    let presence;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == name) {
            //suppression de l'entrée
            tab.splice(i, 1);
            //mettre à blanc dernière entrée
            tab.push(" ");
            presence = true;
            break;//Sortie de boucle, le reste du traitement n'est pas nécessaire (une seule occurence par prénom)
        } else {
            presence = false;
        }
    }
    if (presence === false) {
        //Fonction error : affichage du message d'erreur
        alert("Le prénom que vous avez saisi ne se trouve pas dans le tableau.");
    }
}

/**
 * Affiche le contenu d'un tableau passé en paramètre
 * @param {Object} tab Un tableau
 */
function afficherTab(tab) {
    let chaine = tab[0];
    for (let i = 1; i < tab.length; i++) {
        chaine += " | " + tab[i];
    }
    console.log(chaine);
    alert(chaine);
}