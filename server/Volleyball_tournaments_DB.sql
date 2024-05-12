-- Таблиця Команд
Create table Team (
    team_id serial primary key,
    team_name varchar(25) not null,
    country varchar(40) not null,
    master varchar(50) not null,
    rating int not null
);

Insert into Team (team_name, country, master, rating) values ('Franks', 'France', 'Charlemagne', 1),
	('Teutons', 'Germany', 'Erich Hartmann', 2),
	('Britannics', 'UK', 'Black Prince', 3),
	('Bobr', 'Poland', 'Freddie Fazbear', 4),
	('Painters', 'Austria', 'Ferdinand Porsche', 5),
	('Latins', 'Italy', 'Vittorio Emanuele', 6),
	('Toreadors', 'Spain', 'Philippe d’Anjou', 7),
	('Bohemia', 'Czech Republic', 'Vladislav Otakar', 8),
	('Lucitanians', 'Portugal', 'Ferdinand Magellan', 9),
	('Dynamo', 'Ukraine', 'Taras Panas', 10);

Select * from Team;



-- Таблиця гравців
Create table Player (
    player_id serial primary key,
    first_name varchar(15) not null,
    last_name varchar(15) not null,
    team_id integer references Team(team_id),
    position varchar(20) not null,
    date_of_birth date not null
);

-- гравці команди "Franks" (Франція)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Jean', 'Dupont', 1, 'Libero', '1995-03-15'),
    ('Pierre', 'Lefebvre', 1, 'Middle Blocker', '1994-07-21'),
    ('Étienne', 'Martin', 1, 'Outside Hitter', '1996-11-10'),
    ('Jacques', 'Bertrand', 1, 'Opposite Hitter', '1993-09-05'),
    ('Nicolas', 'Lemoine', 1, 'Setter', '1997-02-28'),
    ('Guillaume', 'Rousseau', 1, 'Outside Hitter', '1996-06-12');

-- гравці команди "Teutons" (Німеччина)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Johann', 'Schmidt', 2, 'Libero', '1998-08-20'),
    ('Michael', 'Müller', 2, 'Middle Blocker', '1995-04-17'),
    ('Andreas', 'Schneider', 2, 'Outside Hitter', '1996-12-03'),
    ('Thomas', 'Fischer', 2, 'Opposite Hitter', '1994-10-28'),
    ('Stefan', 'Weber', 2, 'Setter', '1997-06-05'),
    ('Martin', 'Wagner', 2, 'Outside Hitter', '1993-11-15');

-- гравці команди "Britannics" (Велика Британія)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('James', 'Smith', 3, 'Libero', '1995-03-15'),
    ('John', 'Johnson', 3, 'Middle Blocker', '1994-07-21'),
    ('David', 'Williams', 3, 'Outside Hitter', '1996-11-10'),
    ('Daniel', 'Brown', 3, 'Opposite Hitter', '1993-09-05'),
    ('Richard', 'Jones', 3, 'Setter', '1997-02-28'),
    ('Paul', 'Taylor', 3, 'Outside Hitter', '1996-06-12');

-- гравці команди "Bobr" (Польща)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Adam', 'Nowak', 4, 'Libero', '1995-03-15'),
    ('Piotr', 'Kowalski', 4, 'Middle Blocker', '1994-07-21'),
    ('Krzysztof', 'Wiśniewski', 4, 'Outside Hitter', '1996-11-10'),
    ('Tomasz', 'Wójcik', 4, 'Opposite Hitter', '1993-09-05'),
    ('Paweł', 'Kamiński', 4, 'Setter', '1997-02-28'),
    ('Michał', 'Lewandowski', 4, 'Outside Hitter', '1996-06-12');

-- гравці команди "Painters" (Австрія)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Thomas', 'Gruber', 5, 'Libero', '1995-03-15'),
    ('Andreas', 'Wagner', 5, 'Middle Blocker', '1994-07-21'),
    ('Martin', 'Müller', 5, 'Outside Hitter', '1996-11-10'),
    ('Stefan', 'Fischer', 5, 'Opposite Hitter', '1993-09-05'),
    ('Alexander', 'Schmidt', 5, 'Setter', '1997-02-28'),
    ('Markus', 'Schneider', 5, 'Outside Hitter', '1996-06-12');

-- гравці команди "Latins" (Італія)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Luca', 'Rossi', 6, 'Libero', '1995-03-15'),
    ('Marco', 'Ferrari', 6, 'Middle Blocker', '1994-07-21'),
    ('Giuseppe', 'Russo', 6, 'Outside Hitter', '1996-11-10'),
    ('Alessandro', 'Bianchi', 6, 'Opposite Hitter', '1993-09-05'),
    ('Davide', 'Romano', 6, 'Setter', '1997-02-28'),
    ('Antonio', 'Colombo', 6, 'Outside Hitter', '1996-06-12');

-- гравці команди "Toreadors" (Іспанія)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values
    ('Alejandro', 'García', 7, 'Libero', '1995-03-15'),
    ('David', 'Martínez', 7, 'Middle Blocker', '1994-07-21'),
    ('Juan', 'López', 7, 'Outside Hitter', '1996-11-10'),
    ('José', 'González', 7, 'Opposite Hitter', '1993-09-05'),
    ('Miguel', 'Rodríguez', 7, 'Setter', '1997-02-28'),
    ('Francisco', 'Hernández', 7, 'Outside Hitter', '1996-06-12');

-- гравці команди "Bohemia" (Чехія)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Jan', 'Novák', 8, 'Libero', '1995-03-15'),
    ('Petr', 'Svoboda', 8, 'Middle Blocker', '1994-07-21'),
    ('Tomáš', 'Novotný', 8, 'Outside Hitter', '1996-11-10'),
    ('Martin', 'Dvořák', 8, 'Opposite Hitter', '1993-09-05'),
    ('Pavel', 'Černý', 8, 'Setter', '1997-02-28'),
    ('Lukáš', 'Procházka', 8, 'Outside Hitter', '1996-06-12');

-- гравці команди "Lucitanians" (Португалія)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('João', 'Silva', 9, 'Libero', '1995-03-15'),
    ('Pedro', 'Santos', 9, 'Middle Blocker', '1994-07-21'),
    ('André', 'Fernandes', 9, 'Outside Hitter', '1996-11-10'),
    ('Miguel', 'Gomes', 9, 'Opposite Hitter', '1993-09-05'),
    ('Rui', 'Martins', 9, 'Setter', '1997-02-28'),
    ('Paulo', 'Ribeiro', 9, 'Outside Hitter', '1996-06-12');

-- гравці команди "Dynamo" (Україна)
Insert into Player (first_name, last_name, team_id, position, date_of_birth) 
values 
    ('Taras', 'Kovalenko', 10, 'Libero', '1995-03-15'),
    ('Valentyn', 'Koval', 10, 'Middle Blocker', '1994-07-21'),
    ('Denys', 'Riaba75', 10, 'Outside Hitter', '1996-11-10'),
    ('Panas', 'Melnyk', 10, 'Opposite Hitter', '1993-09-05'),
    ('Serhii', 'Korolev', 10, 'Setter', '1997-02-28'),
    ('Volodymyr', 'Klymko', 10, 'Outside Hitter', '1996-06-12');

Select * from Player;





-- Таблиця "Турнір"
Create table Tournament (
    tournament_id serial primary key,
    tournament_name varchar(40) not null,
    location varchar(40) not null,
    start_date date not null,
    end_date date not null
);

Insert into Tournament (tournament_name, location, start_date, end_date) values ('Livonian championship', 'Riga', '2024-05-10', '2024-05-12'),
	('European championship', 'Rome', '2024-05-20', '2024-05-25'),
	('Olympic championship', 'Munich', '2024-06-10', '2024-06-20'),
	('World championship', 'Tokyo', '2024-08-10', '2024-08-20');

Select * from Tournament;





-- Таблиця матчів
Create table Match (
    match_id serial primary key,
    tournament_id integer references Tournament(tournament_id),
    first_team_id integer references Team(team_id),
    second_team_id integer references Team(team_id),
    start_datetime timestamp not null,
    first_team_score int not null,
    second_team_score int not null
);

-- Матчі для турніру "Livonian championship"
Insert into Match (tournament_id, first_team_id, second_team_id, start_datetime, first_team_score, second_team_score)
values
    (1, 1, 2, '2024-05-10 10:00:00', 3, 1), -- Franks vs Teutons
    (1, 3, 4, '2024-05-10 12:00:00', 2, 3), -- Britannics vs Bobr
    (1, 5, 6, '2024-05-11 10:00:00', 3, 2), -- Painters vs Latins
    (1, 7, 8, '2024-05-11 12:00:00', 1, 3), -- Toreadors vs Bohemia
    (1, 9, 10, '2024-05-12 10:00:00', 2, 3); -- Lucitanians vs Dynamo

-- Матчі для турніру "European championship"
Insert into Match (tournament_id, first_team_id, second_team_id, start_datetime, first_team_score, second_team_score)
values
    (2, 1, 3, '2024-05-20 10:00:00', 1, 3), -- Franks vs Britannics
    (2, 2, 4, '2024-05-20 12:00:00', 3, 1), -- Teutons vs Bobr
    (2, 5, 7, '2024-05-21 10:00:00', 2, 3), -- Painters vs Toreadors
    (2, 6, 8, '2024-05-21 12:00:00', 3, 2), -- Latins vs Bohemia
    (2, 9, 10, '2024-05-22 10:00:00', 1, 3); -- Lucitanians vs Dynamo

-- Матчі для турніру "Olympic championship"
Insert into Match (tournament_id, first_team_id, second_team_id, start_datetime, first_team_score, second_team_score)
values
    (3, 1, 4, '2024-06-10 10:00:00', 3, 2), -- Franks vs Bobr
    (3, 2, 3, '2024-06-10 12:00:00', 2, 3), -- Teutons vs Britannics
    (3, 5, 8, '2024-06-11 10:00:00', 3, 1), -- Painters vs Bohemia
    (3, 6, 7, '2024-06-11 12:00:00', 2, 3), -- Latins vs Toreadors
    (3, 9, 10, '2024-06-12 10:00:00', 3, 2); -- Lucitanians vs Dynamo

-- Матчі для турніру "World championship"
Insert into Match (tournament_id, first_team_id, second_team_id, start_datetime, first_team_score, second_team_score)
values
    (4, 1, 5, '2024-08-10 10:00:00', 1, 3), -- Franks vs Painters
    (4, 2, 6, '2024-08-10 12:00:00', 3, 2), -- Teutons vs Latins
    (4, 3, 7, '2024-08-11 10:00:00', 2, 3), -- Britannics vs Toreadors
    (4, 4, 8, '2024-08-11 12:00:00', 3, 1), -- Bobr vs Bohemia
    (4, 9, 10, '2024-08-12 10:00:00', 1, 3); -- Lucitanians vs Dynamo

Select * from Match;




-- Таблиця командної статистики
Create table TeamStats (
    stats_id serial primary key,
    team_id integer references Team(team_id),
    match_id integer references Match(match_id),
    points int not null,
    attacks int not null,
    blocks int not null,
    assists int not null,
    serves int not null,
    receptions int not null,
    errors int not null
);

-- Статистика турніру "Livonian championship"
Insert into TeamStats (team_id, match_id, points, attacks, blocks, assists, serves, receptions, errors)
values
    (1, 1, 75, 120, 8, 50, 90, 70, 5),  -- Franks
    (2, 1, 68, 110, 10, 48, 85, 65, 8),  -- Teutons
    (3, 2, 70, 115, 9, 55, 88, 68, 6),   -- Britannics
    (4, 2, 72, 118, 7, 52, 92, 72, 7),   -- Bobr
    (5, 3, 78, 122, 9, 58, 94, 75, 4),   -- Painters
    (6, 3, 74, 117, 8, 54, 90, 73, 5),   -- Latins
    (7, 4, 71, 115, 10, 50, 87, 70, 6),  -- Toreadors
    (8, 4, 73, 120, 8, 56, 91, 71, 7),   -- Bohemia
    (9, 5, 76, 121, 9, 54, 93, 72, 5),   -- Lucitanians
    (10, 5, 70, 116, 7, 48, 89, 68, 7);  -- Dynamo

-- Статистика турніру "European championship"
Insert into TeamStats (team_id, match_id, points, attacks, blocks, assists, serves, receptions, errors)
values
    (1, 6, 72, 118, 7, 50, 90, 70, 6),   -- Franks
    (3, 6, 76, 120, 8, 54, 92, 72, 5),   -- Britannics
    (2, 7, 71, 116, 8, 52, 88, 69, 7),   -- Teutons
    (4, 7, 70, 115, 9, 48, 87, 68, 8),   -- Bobr
    (5, 8, 74, 119, 7, 50, 89, 71, 5),   -- Painters
    (7, 8, 77, 121, 8, 56, 91, 72, 6),   -- Latins
    (6, 9, 70, 115, 9, 50, 88, 70, 7),   -- Toreadors
    (8, 9, 72, 117, 7, 52, 90, 68, 8),   -- Bohemia
    (9, 10, 75, 120, 8, 54, 92, 71, 6),  -- Lucitanians
    (10, 10, 73, 118, 9, 48, 89, 70, 7); -- Dynamo

-- Статистика турніру "Olympic championship"
Insert into TeamStats (team_id, match_id, points, attacks, blocks, assists, serves, receptions, errors)
values
    (1, 11, 74, 119, 7, 52, 91, 70, 6),  -- Franks
    (4, 11, 70, 115, 9, 48, 88, 69, 8),  -- Bobr
    (2, 12, 73, 117, 8, 50, 90, 68, 7),  -- Teutons
    (3, 12, 76, 120, 7, 54, 92, 71, 6),  -- Britannics
    (5, 13, 75, 118, 8, 56, 89, 70, 7),  -- Painters
    (8, 13, 71, 115, 9, 48, 87, 69, 8),  -- Bohemia
    (6, 14, 73, 119, 8, 52, 90, 70, 7),  -- Latins
    (7, 14, 76, 121, 7, 54, 93, 71, 6),  -- Toreadors
    (9, 15, 74, 118, 7, 50, 90, 68, 8),  -- Lucitanians
    (10, 15, 72, 115, 9, 48, 88, 70, 7); -- Dynamo

-- Статистика турніру "World championship"
Insert into TeamStats (team_id, match_id, points, attacks, blocks, assists, serves, receptions, errors)
values
    (1, 16, 70, 115, 8, 48, 88, 69, 7),  -- Franks
    (5, 16, 75, 119, 7, 56, 91, 70, 6),  -- Painters
    (2, 17, 73, 118, 9, 50, 90, 68, 7),  -- Teutons
    (6, 17, 76, 120, 7, 54, 92, 71, 6),  -- Latins
    (3, 18, 74, 117, 8, 52, 90, 70, 7),  -- Britannics
    (7, 18, 75, 118, 8, 56, 89, 70, 7),  -- Toreadors
    (4, 19, 72, 115, 9, 48, 88, 69, 7),  -- Bobr
    (8, 19, 71, 119, 7, 50, 91, 70, 6),  -- Bohemia
    (9, 20, 73, 118, 8, 54, 92, 71, 6),  -- Lucitanians
    (10, 20, 74, 120, 7, 52, 90, 69, 7); -- Dynamo

Select * from TeamStats;