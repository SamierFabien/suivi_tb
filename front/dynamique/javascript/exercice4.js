/*
A partir de la saisie du prix unitaire noté PRICE d'un produit et de la quantité commandée QUANTITY,
afficher le prix à payer BILL, en détaillant la remise DISCOUNT et le port PORT, sachant que :

SUM = ( PRICE * QUANTITY )
la remise est de 5% si SUM est compris entre 100 et 200 € et de 10% au-delà
le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
la valeur minimale du port à payer est de 6 €
Testez tous les cas possibles afin de vous assurez que votre script fonctionne.

Ci-dessous, un jeu de tests :

Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €
*/


/**
 * Fonction façade qui lance le programme
 */
function run() {
    let bill = {details: "Détail de la facture :",
        toString: function () {
            console.log(this.details)
            alert(this.details);
        }
    };//objet pour le passage par référence dans les fonctions

    home();

    //Prix unitaire
    let price = getPrice();
    //Quantité du même article
    let quantity = getQuantity();
    //Prix sans remise ni port
    let sum = price * quantity;
    //Prix de la remise
    let discount = getDiscount(bill, sum);
    //Prix avec remise
    let discountPrice = twoAfterDot(sum - discount);
    //Prix du port
    let port = getPort(bill, discountPrice);
    //Prix total remise et port compris
    let totalPrice = getBill(bill, price, quantity, discount, port);
    
    //Affichage de la facture détaillée
    bill.toString();
}

/**
 * Fonction qui lance le message d'accueil
 */
function home() {
    alert("Programme de facturation.\nA partir du prix de l'article et du nombre d'article, il calcule la remise et les frais de port.");
}

/**
 * Calcule le prix total avec remise et port
 * Ajoute des détails sur le calcul du prix à la facture
 * @param {Object} bill facture
 * @param {Number} price Prix de l'article
 * @param {Number} quantity Quantité voulue de l'article donné
 * @param {Number} discount Remise sur le prix
 * @param {Number} port Port pour envoi colis
 * @returns Le prix total 
 */
function getBill(bill, price, quantity, discount, port) {
    b = twoAfterDot(price * quantity - discount + port);
    console.log("b = " + b);

    bill.details += "\nPrix total = " + price + "€ x " + quantity + " - " + discount + "€ + " + port + "€\nPrix total = " + b + "€";
    return b;
}

/**
 * Calcule le port à l'aide du prix
 * @param {Object} bill Facture
 * @param {Number} discountPrice Remise
 * @returns Le port
 */
function getPort(bill, discountPrice) {
    if (discountPrice <= 500) {
        //calcul port 2%
        d = twoAfterDot(discountPrice / 100 * 2);
        if (d > 6) {
            console.log("d = " + d + " type = " + typeof(d));
            bill.details += "\nPort : 2%. (" + d + "€).";
            return d;
        } else {
            //port < 6
            bill.details += "\nPort = 6€.";
            return 6;
        }
    } else {
        //pas de port
        bill.details += "\nPort = 0€."
        return 0;
    }
}

/**
 * Calcule la remise à l'aide du prix
 * @param {Object} bill Facture
 * @param {Number} sum prix article * quantité voulue
 * @returns Remise
 */
function getDiscount(bill, sum) {
    if (sum <= 100) {
        //pas de remise
        //bill.details += "\nTotal de 100€ et moins : pas de remise. Remise = 0€.";
        bill.details += "\nRemise = 0€.";//remise 10% (-60 €) soit 540,00
        
        return 0;
    } else if (sum > 100 && sum <= 200) {
        //remise 5%
        d = twoAfterDot(sum / 100 * 5).toFixed(2);
        bill.details += "\nRemise de 5%. (" + d + "€).";
        return d;
    } else {
        //remise 10%
        d = twoAfterDot(sum / 100 * 10);
        bill.details += "\nRemise de 10% (" + d + "€).";
        return d; 
    }
}

/**
 * Se charge de demander le prix de l'article, traite les données érronées
 * @returns Prix arrondi au deux chiffres après la virgule
 */
function getPrice() {
    while (true) {
        price = prompt("Quel est le prix de l'article ?");
        if (!isNaN(price) && isFinite(price) && price >= 0 && price.length > 0) {
            return twoAfterDot(price);
        } else {
            alert("'" + price + "' n'est pas un prix correct.");
        }
    }
}

/**
 * Se charge de demander la quantité  d'articles, traite les données érronées
 * @returns Quantité désirée
 */
function getQuantity() {
    while (true) {
        quantity = prompt("Quel est la quantité désirée");
        if (!isNaN(quantity) && isFinite(quantity) && quantity >= 0 && quantity.length > 0) {
            return parseInt(quantity);
        } else {
            alert("'" + quantity + "' n'est pas une quantité correcte.");
        }
    }
}

/**
 * Fonction qui renvoie un nombre arrondi à deux chiffres aprè la virgule
 * @param {Number} nb Un nombre
 * @returns Le nombre arrondi à deux chiffres aprè la virgule
 */
function twoAfterDot(nb) {
    return Math.round(nb * 100) / 100;
}