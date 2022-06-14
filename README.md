# Beschrijving van de applicatie

Random Movie Suggester (RMS) biedt je de mogelijkheid om random film suggesties aangereikt te krijgen voor meer kijkplezier.
Op de Home pagina kan je met een enkele klik op de knop een rij met films te zien krijgen die nu in bioscopen
te zien zijn. 

![Schermafbeelding 2022-06-14 033658](https://user-images.githubusercontent.com/89380231/173475063-71b037e3-16bb-41db-9453-50769d9d2dd9.png)

Wil je meer gericht zoeken, zoals op genre? 
Log dan via de app in op de Novi backend en begeef je naar de private pagina's.

## IDE installeren

Als eerste dien je een code-editor te downloaden en te installeren om de app te kunnen starten.
Zo'n editor wordt ook wel een Integrated Development Environment (IDE) genoemd.
Er zijn meerdere mogelijkheden zoals o.a. Visual Code, maar zelf gebruik ik Webstorm van de uitgever JetBrains.
Je kunt Webstorm downloaden en installeren via deze link: (https://www.jetbrains.com/webstorm/download/)

Let wel: Webstorm is een betaald product, het staat je vrij een andere IDE te googelen en te installeren.

## Node.js installeren

Ten tweede dien je Node te installeren om de applicatie te kunnen starten en gebruiken.
Node.js is een runtime omgeving om Javascript op onze lokale computer te draaien in plaats van in de browser.
Je kan Node.js downloaden en installeren via de website: (https://nodejs.org/en/download/)

Wanneer je dit gedaan hebt, kun je testen of de installatie succesvol was. 
Dat doe je door het volgende commando in de terminal te typen en dan op enter te drukken:

```
node -v
```

Als Node.js aanwezig is zul je een versienummer te zien krijgen, zoals bijvoorbeeld v13.9.3. 
Krijg je een andere melding, zoals bijvoorbeeld node: command not found dan is het nog niet (juist) geïnstalleerd.

Vervolgens willen we checken of NPM correct mee geïnstalleerd is. 
Vraag het versienummer op door het volgende in te toetsen in de terminal en daarna op enter te drukken:

```
npm -v
```

Krijg je de melding: npm: command not found Installeer Node.js dan opnieuw. 
Je kan Node als runtime engine gebruikt om JavaScript buiten de browser uit te voeren.
Als je iets wil aanpassen in het bestand en dit wil uitvoeren moet iedere keer het commando Node ingetypt worden.
Dat is nogal zonde van de tijd. Daarom kan je beter ook (nodemon) installeren.
Met deze extensie hoeft het JavaScript bestand maar één keer aangeroepen te worden.

Installeer nodemon daarom globaal op de computer door het volgende commando in te typen in de terminal:

```
npm install -g nodemon
```

*Werk je op een Windows en krijg je een foutmelding?
Dit betekent dat het runnen van scripts niet is toegestaan op jouw computer. 
Dit kun je handmatig aanpassen door het programma PowerShell op te starten als administrator. 
(Rechtermuisknop op applicatie-icoon > "Open als administrator"). 
Voer dan het volgende commando in:

```
Set-ExecutionPolicy Unrestricted
```

*Werk je op een MAC en krijg je een foutmelding?
Voer dan het volgende commando uit:

```
 sudo npm install -g nodemon
```

## Applicatie starten

We zijn er bijna!
Voordat je de applicatie kan gebruiken dien je deze eerst te clonen naar jouw lokale machine.
Is het clonen afgerond? installeer je eerst de benodigde `node_modules` door de volgende commando in de terminal te runnen:

```
npm install
```

Onder water worden dan alle benodigde afhankelijkheden (dependencies) voor je geïnstalleerd.
Handig! Hoef je niet zelf uit te zoeken wat de app nodig heeft en hoef je deze niet zelf te installeren.
Wanneer alle benodigde dependencies zijn geïnstalleerd kun je de applicatie starten door in de terminal te typen:

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

Deze drie zijn bereikbaar na ingelogd te zijn op de Backend:
1. Profile Pagina (`/profile`)
2. RMS (Random Movie Suggester) Pagina (`/rms`)
3. Game Pagina (`/game`)

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
