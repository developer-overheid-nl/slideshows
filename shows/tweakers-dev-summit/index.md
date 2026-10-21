---
marp: true
theme: don_main
headingDivider: 2
header: " "
footer: "![width:250px](../../themes/logo.png)"
lang: nl
---

![bg](./img/Presentatiescherm.jpg)

<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

# <span class="prompt">&gt;</span> standaardiseren <span class="eq">==</span> samenwerken

<!-- _class: title invert title-terminal -->

<ul class="horizontal-list">
  <li>Tom Ootes</li>
  <li>🐘 <a href="https://social.codefor.nl/@tomootes">@tomootes</a></li>
  <li>Tweakers dev summit</li>
  <li>De Fabrique, Utrecht</li>
  <li>28 oktober 2026</li>
</ul>

<!--

- Leuk dat ik hier mag vertellen over DON
- Grapje dat ik hier aan de overkant van het kanaal woon
- Vertellen over alle inzichten van DON afgelopen jaren
- Mooie tools die hieruit voort zijn gekomen

De afgelopen jaren ben ik standaarden gaan zien als een manier van samenwerken,
van afspraken die je maakt als je bijvoorbeeld een API bouwt of een front-end.
Ik zie het als een manier voor onze overheid om eindelijk wat meer eenduidig te
developen, maar ook als een manier om instructies mee te geven aan LLM's zodat
coding agents niet uit de bocht vliegen. In die zijn worden standaarden steeds
belangrijk.

-->

## whoami?

<!-- _class: invert -->

<div class="two-columns">
  <ul>
    <li>Tom Ootes</li>
    <li>Developer.overheid.nl (2023)</li>
    <li>Open Source, Developer Advocate</li>
    <li>Community, outreach</li>
    <li>Muzikant/ muziekliefhebber</li>
  </ul>
  <div>
    <img src="./img/tom.png" alt="Tom Ootes">
  </div>
</div>

<!--
Kort eerst iets over mijzelf.

Ik ben Tom, werk al sinds 2023 aan developer.overheid.nl. Als freelancer
veel verschillende overheidsprojecten gedaan. Vind het mooi om daar aan te
werken omdat we met developer.overheid.nl een gemeenschappelijk platform
hebben om developers op een-duidige manier software te laten bouwen.

Mijn rol is developer advocate wat betekent dat ik me verdiep in wat developers
nodig hebben om bijvoorbeeld compliant te kunnen worden aan een standaard.

-->

## Agenda

<!-- _class: invert -->

- developer.overheid.nl
- Mijn verhaal: COVID-19 bij VWS
- Het overheidslandschap: eilandjes maar gedeelde taken
- Standaarden: pas toe of leg uit
- Strategie: goede tooling
- Vragen

<!--
Even wat we gaan doen: eerst kort wat developer.overheid.nl is. Dan hoe ik er
terechtkwam, via mijn werk bij VWS tijdens corona. Daarna het overheidslandschap
en waarom standaardiseren zo lastig is. En tot slot onze strategie: tooling die
zo goed is dat je vanzelf compliant wordt.
-->

##

<!-- _class: page-image-only -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./img/homepage.png)

<!--
Eerst kort wat developer.overheid.nl is, want daar kom ik vandaan.

Het is een developerportaal voor de hele overheid. Denk aan de developer-docs die je kent van grote platforms, alleen dan voor honderden organisaties tegelijk.

- Een API-register: welke API's zijn er bij de overheid, met documentatie, en we checken of ze voldoen aan de API Design Rules.
- Een open source-register op basis van publiccode.yml: welke software is er al, wie gebruikt het, zodat je niet opnieuw het wiel uitvindt.
- Een kennisbank over API's, open source en front-end.

En we zijn zelf ook open source: alles staat op GitHub, en iedereen mag meedoen.

We leggen niets op. We proberen het makkelijk te maken. Daar gaat deze talk over.
-->

## API-register

<!-- _class: page-image-only -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./img/api-catalogus.png)

<!--
Het API-register: alle API's van de overheid op één plek, 322 op dit moment. Elke API krijgt een ADR-score: hoe goed volgt hij de API Design Rules. Daar kom ik straks op terug.
-->

## Open Source Register

<!-- _class: page-image-only -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./img/oss-catalogus.png)

<!--
Het Open Source Register: open source repositories van de overheid, op basis van publiccode.yml. Zo zie je welke software er al is en wie er nog meer aan werkt.
-->

## Blog

<!-- _class: page-image-only -->
<!-- _header: "" -->
<!-- _footer: "" -->
<!-- _paginate: false -->

![bg](./img/blog.png)

<!--
En een blog, met technische posts van ons en van andere overheidsteams.
-->

## COVID-19: VWS

<!-- _class: invert title-left -->

- Ministerie van Volksgezondheid, Welzijn en Sport
- Bron- en contactonderzoek
- Vragenlijsten en formulieren
- Informeren/ statistieken

<!--
Voordat ik bij developer.overheid.nl begon, werkte ik als freelancer bij VWS.
Midden in de coronacrisis: software voor het bron- en contactonderzoek,
vragenlijsten en formulieren, en het informeren van burgers met statistieken.
-->

## Hoe het er aan toe ging

<!-- _class: title-left invert -->

- Veel beleidswijzigingen
- Inhouse was iets nieuws
- Elk team zijn eigen stack
- 📖 Geen interne docs

![bg brightness:0.55](./img/good_bad_ugly.png)

<!--

Nou waar we toen mee te maken hadden waren veel beleidswijzingen. Het kon zijn dat als we maandagochtend onze werkdag begonnenn dat er dan allerlei paramaters zoals bijvoorbeeld de quarantaineperiode gewijzigd moesten worden. Wij moesten dat dan zo snel mogelijk doorvoeren, dit had trouwens allerlei effecten op hoe de front-end werkte, dus dat moest getest worden, en dan moest het naar productie.

Nog een ding, voor het VWS was het Nog een ding, voor het VWS was het dus iets nieuws om zelf software te bouwen. Dus de organisatie moest er heel erg aan wennen.

Ja, het voelde als developer dus gek om in die context ook te bouwen, omdat er niks vastgelegd was.

-->

## Waarom is er niks centraals?

<!-- _class: title-left invert -->

![bg brightness:0.55](./img/tumbleweed.png)

## developer.overheid.nl

<!-- _class: rainbow -->

<!--

Nou nadat mijn project bij min-vws afliep was ik dus heel erg bezig met deze vraag. Dat was het moment waarop ik tegen developer.overheid.nl aanliep. Destijds was het nog een stuk minder volledig dan het nu is, alleen het concept van een gedeeld developer portaal sprak me heel erg aan.

 -->

## De vraag

<!-- _class: invert question -->

Hoe maken we de overheid beter op digitaal vlak?

## Het overheidslandschap

<!-- _class: invert title-left -->

Eilandjes > 1 ecosysteem

<!--

Tijdens mijn werk kwam ik erachter dat overheidsorganisaties eerder functioneren
 als aparte eilandjes dan als een ecosysteem. Elke organisatie waarmee ik praatte
 hadden en andere tech-stack.

 -->

## 👥 Dezelfde uitvoeringstaken!

<!-- _class: list-text-small -->

- Woo: openbaarmaking & Woo-verzoeken
- Formulieren & aanvragen
- Inloggen met DigiD / eHerkenning
- Security (HTTPS, etc.)
- Toegankelijke websites (WCAG)

<!--
Echter! Veel taken die organisaties hebben zijn hetzelfde. Neem bijvoorbeeld de WOO: dat geldt voor ministeries, gemeentes, provincies, waterschappen en ZBO's (UWV, DUO, RDW).

Dus zou het logisch zijn om de software die je bouwt voor deze taken te delen met elkaar, en er samen aan te ontwikkelen.

ZOU JE DENKEN!

 -->

<!-- Insert image of overheids-islands? -->

## ✅ Pas toe of leg uit

<!-- _class: list-text-small -->

- Lijst met ~40 open standaarden (Forum Standaardisatie)
- Verplicht bij ICT-inkoop vanaf €50k
- Niet toepassen? Uitleggen in je jaarverslag
- HTTPS/HSTS, DNSSEC, WCAG, OpenAPI, REST API Design Rules

<!--

Er ís wel een manier waarop de overheid standaarden een beetje afdwingt: de "pas toe of leg uit"-lijst van het Forum Standaardisatie. Een lijst van zo'n 40 open standaarden. Koop je als overheidsorganisatie ICT in boven de 50.000 euro, dan moet je die standaarden toepassen. Doe je dat niet, dan moet je uitleggen waarom, in je jaarverslag.

Op de lijst staan dingen die jullie kennen: HTTPS en HSTS, DNSSEC, WCAG voor toegankelijkheid, OpenAPI, en de REST API Design Rules, waar ik het straks uitgebreid over ga hebben.

Maar: een lijst maakt nog niet dat het ook gebeurt. Bruggetje naar tooling.

-->

## Gedecentraliseerde overheid

<!-- _class: list-text-small title-small -->

![bg right:65% contain](./img/subsidiariteit.svg)

- Macht is verdeeld
- Uitvoering bij kleinste organisatie
- Techniek niet op te leggen

<!--

Onze overheid heeft haar macht heel goed verdeeld. De ene uitvoerende organisatie heeft in feite weinig te zeggen over de andere. Dit is heel nuttig want het zorgt voor stabiliteit, alleen kan je dus geen technische werkwijze afdwingen!

-->

## Conclusie; iedereen werkt afzonderlijk

Moeilijk ook maar iets op leggen hoe te werken

<!--


-->

## Nieuwe strategie: **extreem goede** tooling bouwen!

- Nieuwe strategie
- Tooling moet meerwaarde bieden, niet alleen iets opleggen
- Maar door de tooling moet je wel direct compliant zijn

<!-- Dus wat hebben we nodig? -->

## Antwoorden

<!-- _class: invert answers -->

- Open source samenwerken
- Open standaarden
- Gedeelde services (code.overheid.nl)

 <!--  -->

## Mijn doel

Als ik nadacht over mijn werk als developer dan ging het al snel over een grotere vraag. Hoe maken
we dit beter voor de hele overheid?

## Iedereen doet wat ie wil!

<!-- _class: invert -->

![bg brightness:0.55](./img/good_bad_ugly.png)

## Over developer.overheid.nl

<!--
EIndelijk over developer.overheid.nl; wij zijn een bottom up geinspireerd developer platoform, open source. ETc.

 -->

### Pas toe leg uit - lijst

Hier ga ik iets vertellen over de PTOLU lijst.

## Over de API Design Rules

Dit is een open standaard die we samen met de gehele overheid vormgeven. Het beschrijft hoe een een
HTTP/REST API er uit zou moeten zien, hoe de endpoints zouden moeten functioneren.

Iedereen die er iets van vind kan een PR inschieten.

## Een les die we leerden

Van PROD naar Open API Specification

<!--

Ooit onderhielden we een API validator. Een complexe tool die live naar de endpoints van een API ging kijken of deze wel compliant was.

 -->

## Wat voor problemen het kan oplossen

De Nederlandse overheid is een gedecentraliseerd geheel waarbij elke organisatie zelf
verantwoordelijk is voor de uitvoering van haar IT. Ik zie dit op korte termijn ook niet snel
veranderen.

## Dus hoe krijgen we die standaaarden aan de man?

Goede tooling aanbieden! Dit is ook onze filosofie bij developer.overheid.nl.

## API Design Rules

Screenshot van de RESPEC van de API Design Rules.

Binnen de overheid hebben we tal van standaarden die verschrikkelijk goed gedocumenteerd zijn.

## De rules!

NOICE TABLE WITH:

technical rules // and functional rules

## Focus op CI/CD

Onze tools kan je uiteraard in je Github/ Gitlab/ Forgejo pipeline hangen.

<img src="./img/harold.png" class="img-centered">

En ik weet wel, als developer ben je vooral dingen aan het oplossen. Developers zijn niet van nature
mensen die de documentatie erbij pakken en er even goed voor gaan zitten.

## AINT NOBODY GOT TIME FOR THAT

<img src="./img/aint-nobody-got-time.png" class="img-centered">

## Tooling!

Maar inmiddels hebben we prachtige tooling. Ik moedig iedereen aan o

## Bedankt!

Vragen?

🐘 [@tomootes](https://social.codefor.nl/@tomootes) 📬 t.ootes@geonovum.nl
