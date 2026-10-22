# Agents.md — Tweakers Developers Summit 2026

Instructies specifiek voor deze slideshow. De algemene huisstijl-afspraken staan in de root-`AGENTS.md`.

## De talk

- **Titel:** Standaardiseren is samenwerken
- **Spreker:** Tom Ootes, developer.overheid.nl
- **Track:** Backend development
- **Abstract (kort):** hoe open standaarden en developer-tooling overheidsorganisaties helpen samenwerken, met de nadruk op de API Design Rules (de standaard voor HTTP/REST API's).

## Doelgroep

Volgens het programma op tweakersdevsummit.nl/talks:

- Ervaren developers uit alle disciplines: backend, frontend, DevOps, security en AI. Vooral mensen uit het bedrijfsleven, niet van de overheid.
- Ze zijn technisch, hebben een kritische blik en zijn allergisch voor marketing en beleidstaal. Leg overheidsbegrippen (Woo, ZBO, subsidiariteit, Awb) dus kort uit of vertaal ze naar developer-termen.
- Ze kennen REST, OpenAPI, CI/CD en linters. Ze kennen meestal niet hoe de overheid georganiseerd is.
- De sessies zijn in het Nederlands en het Engels. Deze talk is in het Nederlands, maar Engelse vaktermen mogen gewoon.

## Type verhaal dat hier werkt

Wat de andere talks gemeen hebben:

- **Persoonlijk en uit de praktijk.** Bijvoorbeeld "verhalen uit de loopgraven", "een weekendproject dat uitgroeide tot…" of "ik bouwde zelf een insulinepomp". Begin bij een eigen ervaring en niet bij een organigram.
- **Een prikkelende of grappige titel en stelling.** Denk aan "Java Sucks (So C# Didn't Have To)" of "Heeft je platform overgewicht?". Humor en zelfspot zijn welkom.
- **Concreet en hands-on.** Echte voorbeelden, demo's, bugs en code. Liever één concrete API-regel of lintermelding dan drie abstracte principes.
- **Iets meenemen voor maandag.** Elke talk sluit af met praktische lessen of een roadmap die de luisteraar zelf kan toepassen.
- **Grotere vragen mogen ook.** Er is ruimte voor maatschappelijke onderwerpen zoals AI-toezicht, eIDAS-wallets, privacy en publieke verantwoordelijkheid, mits ze geaard zijn in techniek.

## Strategie: universele lessen, de overheid als extreme case

Dit is geen verhaal *over* de overheid. Het is een verhaal over een probleem dat iedere developer kent: **hoe krijg je autonome teams zover dat ze hetzelfde doen, als je ze niets kunt opleggen?** De overheid is daarvan het extreme praktijkvoorbeeld: geen hiërarchie, enorme schaal en publiek geld. "Als het hier werkt, werkt het bij jou ook."

Waarom dit aansluit:

- 342 gemeenten met elk een eigen stack zijn 342 autonome teams. Developers uit grote organisaties (microservices, team-autonomie) herkennen dat direct.
- "Tooling die zo goed is dat je vanzelf compliant bent" is wat platform engineering en DevEx de *paved road* of het *golden path* noemen.
- Op het programma staan talks met hetzelfde thema, zoals design-system-adoptie bij de ANWB en "Heeft je platform overgewicht?".
- De API Design Rules zijn concreet en overdraagbaar: regels, een linter, CI-checks.
- Veel bezoekers werken bij leveranciers van de overheid. Voor hen zijn de ADR's direct relevant.

Vertaal elke les naar de wereld van de luisteraar:

| Les uit de overheid | Wat het betekent in jouw organisatie |
|---|---|
| Je kunt techniek niet opleggen (subsidiariteit) | Autonome teams laten zich niet dwingen |
| Veel uitvoeringstaken zijn hetzelfde | Elk team bouwt zijn eigen auth, logging en API-conventies |
| Goede tooling in plaats van regels | Paved road / golden path |
| API Design Rules met linter | Een API-styleguide die in CI wordt afgedwongen |
| Open source tussen organisaties | Inner source tussen teams |

Valkuilen om te vermijden:

- **Te veel uitleg over de overheid.** Besteed maximaal één of twee slides aan Woo, Awb, subsidiariteit en ZBO's, en vertaal ze meteen ("subsidiariteit = team-autonomie op staatsniveau").
- **Te veel beleid, te weinig techniek.** Laat code, linter-output of een demo zien in plaats van ambitieslides.
- **Te veel binnen-perspectief.** Niet "wij bij de overheid…", maar "jij hebt hetzelfde probleem, en zo hebben wij het opgelost".

## Verhaallijn van deze talk

1. **Persoonlijke aanleiding.** Als developer bij de overheid liep ik ertegenaan dat elke organisatie het wiel opnieuw uitvindt.
2. **Het probleem.** De overheid is gedecentraliseerd (subsidiariteit): eilandjes met elk een eigen stack, en techniek is moeilijk op te leggen.
3. **De paradox.** Veel uitvoeringstaken zijn hetzelfde (Woo, bezwaar, formulieren, DigiD-login …), maar toch wordt er weinig gedeeld.
4. **De strategie.** Niet opleggen, maar tooling bouwen die zo goed is dat je vanzelf compliant bent.
5. **De kern.** Standaarden als samenwerkingsvorm, met de API Design Rules als concreet voorbeeld. Laat de regels, de linter en de tooling zien.
6. **Afsluiter.** Wat developers buiten de overheid hieraan hebben (open source, herbruikbare tooling) en een call to action.

## Werkafspraken voor slides

- Weinig tekst per slide: maximaal 3 tot 6 korte bullets. Het verhaal zit in de spreker-notes (`<!-- -->`).
- Gebruik bestaande theme-classes uit `themes/don_main.css`, zoals `invert`, `question`, `answers`, `pillars`, `title-left`, `title-small` en `list-text-small`. Voeg alleen nieuwe classes toe als het nodig is.
- Afbeeldingen en SVG's gaan in `img/`. Houd de Rijkshuisstijl-kleuren aan met een tech/hackerspace-uitstraling.
- Controleer visuele wijzigingen door de slide te renderen met marp.
