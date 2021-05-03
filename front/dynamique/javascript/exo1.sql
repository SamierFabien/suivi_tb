drop database if exists exo1;
create database if not exists exo1;

use exo1;

create table client (
    cli_num         int         not null,
    cli_nom         varchar(50) not null,
    cli_adresse     varchar(50),
    cli_tel         varchar(30),
    primary key(cli_num)
);

create table commande (
    com_num         int         not null auto_increment,
    cli_num         int         not null,
    com_date        datetime    not null,
    com_obs         varchar(50),
    primary key(com_num),
    constraint commande_fk1 foreign key(cli_num) references client(cli_num)
);

create table est_compose(
    com_num         int         not null,
    pro_num         int         not null,
    est_qte         int         not null,
    primary key(com_num, pro_num),
    constraint est_compose_fk1 foreign key(com_num) references commande(com_num),
    constraint est_compose_fk2 foreign key(pro_num) references produit(pro_num)
);

create table produit (
    pro_num         int         not null,
    pro_libelle     varchar(50),
    pro_description varchar(50),
    primary key(pro_num)
);

create index index1 on client(cli_nom);