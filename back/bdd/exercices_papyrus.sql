/*1Quelles sont les commandes du fournisseur 09120?*/
select numcom
from entcom
where numfou = '9120';


/*2 Afficher le code des fournisseurs pour lesquels des commandes ont été passées.*/
select distinct numfou
from entcom;

/*3 Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés.*/
select count(numcom), count(distinct numfou)
from entcom;

/*4 Editer les produits ayant un stock inférieur ou égal au stock d'alerte et dont la quantité annuelle inférieure à 1000 (informations à fournir : n° produit, libelléproduit, stock, stockactuel d'alerte, quantitéannuelle)*/
/*n° produit, libelléproduit, stock, stockactuel d'alerte, quantitéannuelle*/
select codart, libart, stkphy, stkale, qteann
from produit
where stkphy <= stkale;

/*5 Quels sont les fournisseurs situés dans les départements 75 78 92 77 ? L’affichage (département, nom fournisseur) sera effectué par département décroissant, puis par ordre alphabétique*/
SELECT nomfou
from fournis
where posfou like '75%' 
or posfou like '78%' 
or posfou like '92%' 
or posfou like '77%';

/*6 Quelles sont les commandes passées au mois de mars et avril?*/
select numcom
from ligcom
where derliv
between '2007-03-00' and '2007-05-00';
/*NE FONCTIONNE PAS*/

/*7 Quelles sont les commandes du jour qui ont des observations particulières ?(Affichage numéro de commande, date de commande)*/
select numcom, obscom
from entcom
where datcom = '2018-04-23 15:59:51'
and obscom != '';

/*8 Lister le total de chaque commande par total décroissant (Affichage numéro de commande et total)*/
select numcom, sum(priuni * qteliv) as total
from ligcom
group by numcom
order by total desc;

/*9 Lister les commandes dont le total est supérieur à 10000€; on exclura dans le calcul du total les articles commandés en quantité supérieure ou égale à 1000.(Affichage numéro de commande et total)*/
SELECT numcom, priuni*qtecde AS total
FROM ligcom
WHERE priuni*qtecde > 10000 AND qtecde >= 1000
group by numcom
ORDER BY priuni*qtecde;

/*10 Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le numéro de commande et la date)*/
select numcom, datcom, nomfou
from entcom
join fournis on fournis.numfou = entcom.numcom
order by nomfou;

/*11 Sortir les produits des commandes ayant le mot "urgent' en observation?(Afficher le numéro de commande, le nom du fournisseur, le libellé du produit et le sous total= quantité commandée * Prix unitaire)*/

/*12 Coder de 2manières différentes la requête suivante:Lister lenom desfournisseurs susceptibles de livrer au moins un article*/

/*13 Coder de 2 manières différentes la requête suivanteLister les commandes (Numéro et date) dont le fournisseur est celui de la commande 70210*/

/*14 Dans les articles susceptibles d’être vendus, lister les articles moins chers (basés sur Prix1) que le moins cher des rubans (article dont le premier caractère commence par R). On affichera le libellé de l’article et prix1*/

/*15 Editer la liste des fournisseurs susceptibles de livrer les produits dont le stock est inférieur ou égal à 150 % du stock d'alerte. La liste est triée par produit puis fournisseur*/

/*16 Éditer la liste des fournisseurs susceptibles de livrer les produit dont le stock est inférieur ou égal à 150 % du stock d'alerte et un délai de livraison d'au plus 30 jours. La liste est triée par fournisseur puis produit*/

/*17 Avec le même type de sélection que ci-dessus, sortir un total des stocks par fournisseur trié par total décroissant*/

/*18 En fin d'année, sortir la liste des produits dontla quantité réellement commandée dépasse 90% de la quantité annuelleprévue.*/

/*19 Calculer le chiffre d'affaire par fournisseur pour l'année 93 sachant que les prix indiqués sont hors taxes et que le taux de TVA est 20%.*/