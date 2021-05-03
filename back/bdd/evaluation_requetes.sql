/*1 Liste des contacts français*/
/*customers.companyname, customers.contactname, customers.contacttitle, customers.phone*/
select companyname as 'Société', contactname as 'Contact', contacttitle 'Fonction', phone as 'Téléphone'
from customers
where country = 'France';

/*2 Produits vendus par le fournisseur «Exotic Liquids»*/
select productname as 'Produit', unitprice as 'Prix'
from products
join suppliers on suppliers.supplierid = products.supplierid
where companyname = 'Exotic Liquids';

/*3 Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant*/
select companyname as 'Fournisseur', count(productname) as 'Nbre produits'
from products
join suppliers on suppliers.supplierid = products.supplierid
where country = 'France'
group by companyname
order by count(productname) desc;

/*4 Liste des clients Français ayant plus de 10 commandes*/
select companyname as 'Client', count(orderid) as 'Nbre commandes'
from customers
join orders on orders.customerid = customers.customerid
where country = 'France'
group by customers.customerid
having count(orderid) > 10;

/*5 Liste des clients ayant un chiffre d’affaires > 30.000
correction : liste des clients qui ont rapporté > 30.000 à l'entreprise*/
select companyname as 'Client', sum(unitprice * quantity) as 'CA', country as 'Pays'
from customers
join orders on orders.customerid = customers.customerid
join `order details` on `order details`.orderid = orders.orderid
group by customers.companyname
having CA > 30000
order by CA desc;

/*6 Liste des pays dont les clients ont passé commande de produits fournis par « Exotic Liquids*/
select distinct customers.country as 'Pays'
from customers
join orders on orders.customerid = customers.customerid
join `order details` on `order details`.orderid = orders.orderid
join products on products.productid = `order details`.productid
join suppliers  on suppliers.supplierid = products.supplierid
where suppliers.companyname = 'Exotic Liquids'
order by pays;

/*7 Montant des ventes de 1997*//*de 10400 à 10807*/
select sum(unitprice * quantity) as 'Montant Ventes 97'
from `order details`
join orders on orders.orderid = `order details`.orderid
where year(orderdate) = '1997'
group by year(orderdate) = '1997';

/*8 Montant des ventes de 1997 mois par mois*/
select month(orderdate) as 'Mois 97', sum(unitprice * quantity) as 'Montant Ventes 97'
from `order details`
join orders on orders.orderid = `order details`.orderid
where year(orderdate) = '1997'
group by month(orderdate);

/*9 Depuis quelle date le client « Du monde entier » n’a plus commandé*/
select max(orderdate) as 'Date de dernière commande'
from orders
join `order details` on `order details`.orderid = orders.orderid
join customers on customers.customerid = `orders`.customerid
where companyname = 'Du monde entier';

/*10 Quel est le délai moyen de livraison en jours*/
select round(avg(datediff(shippeddate, orderdate))) as 'Délai moyen de livraison en jours'
from orders;