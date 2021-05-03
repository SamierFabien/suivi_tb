/*Lot 1 SELECT - FROM - WHERE - AND*/

/*1 - Afficher la liste des hôtels. Le résultat doit faire apparaître le nom de l’hôtel et la ville*/
SELECT hot_nom, hot_ville 
from hotel;

/*2 - Afficher la ville de résidence de Mr White Le résultat doit faire apparaître le nom, le prénom, et l'adresse du client*/
select concat(cli_nom, ' ', cli_prenom)
as 'Personne', cli_adresse, cli_ville
from client
where cli_nom = 'White';

/*3 - Afficher la liste des stations dont l’altitude < 1000 Le résultat doit faire apparaître le nom de la station et l'altitude*/
select sta_nom
from station
where sta_altitude < 1000;

/*4 - Afficher la liste des chambres ayant une capacité > 1 Le résultat doit faire apparaître le numéro de la chambre ainsi que la capacité*/
select cha_numero, cha_capacite
from chambre where cha_capacite > 1
order by cha_capacite asc;

/*5 - Afficher les clients n’habitant pas à Londre Le résultat doit faire apparaître le nom du client et la ville*/
select concat(cli_nom, " ", cli_prenom) as 'Personne'
where cli_ville not in ('Londre');

/*6 - Afficher la liste des hôtels située sur la ville de Bretou et possédant une catégorie>3 Le résultat doit faire apparaître le nom de l'hôtel, ville et la catégorie*/
select hot_nom, hot_ville, hot_categorie
from hotel
where hot_ville = 'Bretou' and hot_categorie > 3;


/*Lot 2 JOIN*/

/*7 - Afficher la liste des hôtels avec leur station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, la catégorie, la ville*/
select  sta_nom, hot_nom, hot_categorie, hot_ville 
from station
join hotel on station.sta_id = hotel.hot_sta_id;

/*8 - Afficher la liste des chambres et leur hôtel Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre*/
select cha_numero, hot_nom, hot_categorie, hot_ville
from chambre
join hotel on chambre.cha_hot_id = hotel.hot_id
order by hot_nom asc /*optionnel*/;

/*9 - Afficher la liste des chambres de plus d'une place dans des hôtels situés sur la ville de Bretou Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre et sa capacité*/
select hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite
from hotel
join chambre on chambre.cha_hot_id = hotel.hot_id
where cha_capacite > 1 and hot_ville = 'Bretou'
order by hot_nom asc;

/*10 - Afficher la liste des réservations avec le nom des clients Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de réservation*/
select cli_nom, hot_nom, res_date
from reservation
join client on client.cli_id = reservation.res_cli_id
join chambre on chambre.cha_id = reservation.res_cha_id
join hotel on hotel.hot_id = chambre.cha_hot_id
order by res_id asc;

/*11 - Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, le numéro de la chambre et sa capacité*/
select sta_nom, hot_nom, cha_numero, cha_capacite
from chambre
join hotel on hotel.hot_id = chambre.cha_hot_id
join station on station.sta_id = hotel.hot_sta_id;

/*12 - Afficher les réservations avec le nom du client et le nom de l’hôtel AVEC datediff Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de début du séjour et la durée du séjour*/
select cli_nom, hot_nom, res_date_debut,  datediff(res_date_fin, res_date_debut) as 'Durée'
from client
join reservation on reservation.res_cli_id = client.cli_id
join chambre on chambre.cha_hot_id = chambre.cha_hot_id
join hotel on hotel.hot_id = chambre.cha_hot_id;

/*Lot 3*/
/*13 - Compter le nombre d’hôtel par station*/
select sta_nom, count(hot_id)
from hotel
join station on station.sta_id = hotel.hot_sta_id
group by sta_nom;

/*14 - Compter le nombre de chambre par station*/
select sta_nom, count(cha_numero)
from station
join hotel on hotel.hot_sta_id = station.sta_id
join chambre on chambre.cha_hot_id = hotel.hot_id
group by sta_nom;

/*15 - Compter le nombre de chambre par station ayant une capacité > 1*/
select sta_nom, count(cha_numero)
from station
join hotel on hotel.hot_sta_id = station.sta_id
join chambre on chambre.cha_hot_id = hotel.hot_id
where cha_capacite > 1
group by sta_nom;

/*16 - Afficher la liste des hôtels pour lesquels Mr Squire a effectué une réservation*/
select distinct hot_nom
from hotel
join chambre on hotel.hot_id = chambre.cha_hot_id
join reservation on reservation.res_cha_id = chambre.cha_id
join client on client.cli_id = reservation.res_cli_id
where cli_nom = 'Squire';

/*17 - Afficher la durée moyenne des réservations par station*/
select sta_nom, avg(datediff(res_date_fin, res_date_debut)) as 'Durée moyenne'
from station
join hotel on hotel.hot_sta_id = station.sta_id
join chambre on chambre.cha_hot_id = hotel.hot_id
join reservation on reservation.res_cha_id = chambre.cha_id
group by sta_id;