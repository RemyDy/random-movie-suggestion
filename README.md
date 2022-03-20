# Beschrijving van de applicatie

Random Movie Suggester (RMS) biedt je de mogelijkheid om random film suggesties aangereikt te krijgen voor meer kijkplezier.
Op de Home pagina kan je met een enkele klik op de knop een rij met films te zien krijgen die nu in bioscopen
te zien zijn. 

Wil je meer gericht zoeken, zoals op genre? 
Log dan via de app in op de Novi backend en begeef je naar de private pagina's.

## Applicatie starten

Voordat je de applicatie kan gebruiken dien je deze eerst te clonen naar jouw lokale machine.
Is het clonen afgerond? installeer je eerst de benodigde `node_modules` door de volgende commando's in de terminal te runnen:

```
npm install
```

Wanneer dit klaar is, dien je de volgende dependencies te installeren:

```
npm install axios
```

```
npm install jwt-decode
```

```
npm install react-hook-form
```

```
npm install react-router-dom
```

```
npm install styled-components
```

Wanner alle benodigde dependencies zijn geinstalleerd kun je de applicatie starten met behulp van:

```
npm start
```

Of gebruik de IDE knop (npm start). Open [http://localhost:3000](http://localhost:3000/) om de pagina in de browser
te bekijken. Elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.


## Pagina's

De applicatie heeft op dit moment zes pagina's.

Deze drie zijn bereikbaar zonder in te loggen:
1. Home Pagina (`/`)
2. Sign in (login) Pagina (`/login`)
3. Sign up (registratie) Pagina (`/registration`)

Deze drie zijn alleen bereikbaar na ingelogd te zijn op de Novi Backend:
4. Profile Pagina (`/profile`)
5. Game Pagina (`/game`)
6. RMS (Random Movie Suggester) Pagina (`/rms`)

## Registreren

Als je de beveiligde pagina's wil bekijken dien je eerst jezelf te registeren.
Begeef je naar de registratie pagina en vul de benodigde gegevens in.
Gebruikersnaam, wachtwoord en e-mail adres zijn verplicht.
Bij succesvolle registratie wordt je automatisch doorgelinkt naar de login pagina.
Het zou kunnen dat het laden lang kan duren de eerste keer, omdat de Novi Backend in slaapstand kan zijn, even geduld.
Mocht je een melding krijgen dat je al bestaat terwijl je zeker weet dat het niet zo is druk even op de F5 toets.
Dan wordt het geheugen even opgefrist, daarna zou het moeten werken.
LET OP: registratie werkt alleen als je minimaal 6 karakters invult bij gebruikersnaam en wachtwoord!
LET OP: registratie werkt alleen als je e-mail adres voorzien is van een @ teken!

## Inloggen

Als je bent doorgelinkt naar de login pagina kan je inloggen door je gebruikersnaam en wachtwoord in te voeren.
Maak je een typefout dan krijg je een melding dat de combinatie onjuist is, probeer het nog een keer.
Krijg je een melding, maar weet je zeker dat je de gegevens correct heb ingevoerd? Druk even op de F5 toets.
Dan wordt het geheugen even opgefrist, daarna zou het moeten werken.
Bij succesvol ingelogd te zijn wordt je automatisch doorgelinkt naar de profile pagina.
LET OP: heb je nog geen account aangemaakt dien je eerst jezelf te registreren.

## profile

Als je bent doorgelinkt naar de profile pagina zul je jouw gebruikersnaam en e-mail adres zien.
Ook kan je een knop vinden waar je, als je daarop klikt, een "geheime" boodschap van de docent kan opvragen.
Mocht er niets verschijnen? Druk even op de F5 toets.
Dan wordt het geheugen even opgefrist, daarna zou het moeten werken. 
Omdat je op de profile pagina beland bent ben je succesvol ingelogd en kan je ook de andere private pagina's bereiken.

## RMS

Wanneer je klikt op de RMS knop in de navbar zul je doorgelinkt worden naar de RMS-pagina.
RMS is een afkorting dat staat voor Random Movie Suggester.
Op deze pagina kan je gerichter zoeken op genre, rating, of op persoon.

## Game

Deze pagina is helaas nog onder ontwikkeling.
Hier zou je een spel kunnen spelen door vragen te beantwoorden die gaan over een film of acteur.

## Ophalen van gegevens

Een prettige werking is niet alleen afhankelijk van de applicatie die ontwikkeld is, maar ook van de servers waar het
gebruik van maakt.
Voor het ophalen van film-gegevens wordt er gebruik gemaakt van de API-server van TMDB.
Voordat hier gebruik van gemaakt kan worden dient er eerst een Api Key te worden aangevraagd.
Dat kan gedaan worden door deze pagina te bezoeken: (https://www.themoviedb.org/)
Ben je docent? Dan heb je mijn Api Key toegezonden gekregen.

Voor meer info over de Novi Backend kan je naar deze pagina surfen:
(https://github.com/hogeschoolnovi/novi-educational-backend-documentation/blob/main/README.md#0-test)

## Contact

Wil je mij contacteren?
remco.schut@novi-education.nl