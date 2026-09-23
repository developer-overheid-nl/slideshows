---
marp: true
theme: don
paginate: true
style: |
  section img {
    display: block;
    margin: 0 auto;
  }
  section {
    font-variant-emoji: text;
  }
  section pre {
    font-size: 0.7em;
  }
  section table td:first-child,
  section table th:first-child {
    white-space: nowrap;
  }
---

<!-- _class: title -->

# Functionele principes: raadplegen

**Werkgroep Historie** · Kennisplatform API's · Geonovum

---

## Agenda

1. Begrippen
2. Zes principes voor raadplegen
3. Vervolgafspraken

<!--
In de vorige sessie lag de nadruk op de uitgangspunten en op de bijhoudkant. Afgesproken was dat bijhouden niet los van bevragen kan worden afgerond (Ruud Kathmann, Mark Strijker). Deze sessie behandelt daarom de raadplegingskant.

We beginnen met zes principes. Per principe: de stelling, waarom, en een of twee vragen waarover we vandaag een uitspraak willen.

Toets bij elk principe: gaat het over wat er over de lijn gaat? Zo niet, dan hoort het niet in de standaard (afbakening uit het agendastuk, paragraaf 3).

Bron voor alle principes: agendastuk "Functionele principes voor historie in API's" in de map documenten van de werkgroep.
-->

---

<!-- _class: title -->

# Begrippen

---

## Begrippen

| Soort tijd               | Wat het zegt                                                | Aard              |
| ------------------------ | ----------------------------------------------------------- | ----------------- |
| **Registratietijd**      | wanneer heeft de registrerende partij dit vastgelegd        | technisch feit    |
| **Beschikbaarheidstijd** | vanaf wanneer was dit via deze voorziening opvraagbaar      | technisch feit    |
| **Geldigheidstijd**      | wanneer golden deze waarden in de werkelijkheid             | domein; optioneel |
| **Levensduur**           | wanneer ontstond en verdween het ding zelf                  | domein; optioneel |
| **Beschouwingsmoment**   | per as het moment waarnaar wordt gekeken (vraag + antwoord) | n.v.t.            |

<!--
Vier soorten tijd, uitgewerkt in principe T1 van het agendastuk.

Registratietijd is een juridisch feit: tijdstipRegistratie zegt wanneer de bronhouder iets vastlegde. Daar hangen termijnen, rechtszekerheid en verantwoording aan. Die betekenis mogen we niet oprekken.

Beschikbaarheidstijd is iets anders. De systeemtijd in een database is doorgaans het begintijdstip van de transactie (SQL Server documenteert dat expliciet), niet het moment waarop het gegeven leesbaar werd. Daarnaast lopen replica's achter. De ADR-extensie (hoofdstuk 11 van de API Designrules Extensions) heeft hiervoor al beschikbaarOp, en de BGT draagt naast tijdstipRegistratie een LV-publicatiedatum. Het onderscheid bestaat dus al in het Nederlandse landschap.

Let op bij de UBB-handreiking. Die onderscheidt het gevolgtijdstip (vastlegging in het gevolgenjournaal) en het projectietijdstip (beschikbaar voor afnemers), met verwerkingstijd ertussen, maar noemt ze uitdrukkelijk "twee verschijningsvormen van dezelfde as, niet twee onafhankelijke dimensies". UBB onderschrijft dus het verschil in moment en ook het probleem ("er zit altijd tijd tussen het begin van een registratie en het einde daarvan, en er zit altijd tijd tussen een opvraging en de zichtbaarheid van deze gegevens voor de afnemer"), maar niet dat het twee soorten tijd zijn. Wij behandelen ze apart om een andere reden: de registratietijd heeft juridische betekenis en kan daarom niet ook het technische synchronisatiepunt zijn.

Geldigheidstijd is niet universeel. De BGT registreert volgens de eigen gegevenscatalogus geen materiële historie.

Levensduur (NEN 3610: objectBeginTijd, objectEindTijd) is niet hetzelfde als geldigheid: één pand heeft één levensduur en meerdere geldigheidsperioden.

Het woord beschouwingsmoment komt uit het WOZ-advies (Functionele kaders): per as het moment waarnaar wordt gekeken, en beide beschouwingsmomenten moeten "afzonderlijk kunnen worden opgegeven bij een bevraging en afzonderlijk worden teruggegeven in het antwoord". Die betekenis volgen we. In de andere bronnen komt het woord niet voor (API Designrules Extensions, UBB-handreiking, UBB-werkdocument); het UBB-werkdocument spreekt van de herhaalbare vraag.

Het WOZ-advies gebruikt het woord in de passage over UBB ook voor "een punt in de tijd waarvan vaststaat dat alle schrijftransacties zijn afgerond". Dat is iets anders: tot waar de aanbieder bij is. Daarvoor stellen we de term beschikbaarheidsmoment voor; die komt niet uit een bron. Geeft de client geen beschouwingsmoment op de beschikbaarheidsas mee, dan is het gebruikte beschouwingsmoment gelijk aan het beschikbaarheidsmoment.
-->

---

<!-- _class: title -->

# Zes principes voor raadplegen

---

## Een historische toestand heeft een eigen, onveranderlijk adres

- Een toestand op vastgezette beschouwingsmomenten is een **eigen resource met een permanente identificatie**
- Die toestand verandert per definitie niet meer: **onbeperkt te bewaren, te cachen en te citeren**
<div class="highlight warning">
Basis voor herleveren en attesteren uit de UBB-handreiking?
</div>

<!--
Principe V4 in het agendastuk.

Waarom: een parameterwaarde in een verzoek moet een client onthouden en opnieuw samenstellen. Een eigen adres kun je opschrijven, doorgeven en in een dossier opnemen. Het WOZ-advies noemt bezwaar en beroep: reconstrueerbaar moet zijn op basis van welke gegevens een beschikking is opgelegd. Hetzelfde geldt bij een terugmelding: de afnemer wijst naar wat hij zag.

Bestaand werk:

- Memento (RFC 7089, IETF): elke historische toestand is een eigen resource met eigen URI. De aanwezigheid van Memento-Datetime in het antwoord is expliciet een belofte dat de toestand niet meer verandert.
- FHIR: adresseerbare versie via /\_history/{versionId} (vread).
- UBB-handreiking: elke levering draagt een verstrekkersreferentie, waarmee herleveren op aanvraag (exact dezelfde levering opnieuw) en attesteren (vaststellen dat een levering heeft plaatsgevonden) mogelijk worden.

Voorstel bij vraag 1: alleen als alle beschouwingsmomenten expliciet zijn vastgezet en niet voorbij het beschikbaarheidsmoment liggen, want alleen dan is het antwoord onveranderlijk. Een antwoord over de actuele stand is per definitie vergankelijk.

Voorstel bij vraag 2: attesteren is een uitspraak over wat er over de lijn ging, dus binnen scope. Een attestatie bevat geen inhoud (wie, wanneer, welke projectie, welke momenten, ondertekend), zodat zij als bewijsstuk kan worden doorgegeven zonder gegevens te lekken.
-->

---

## De API kan zeggen welke toestanden er zijn

- De vraag is vaak niet "wat was het op T", maar **"wanneer is er iets gebeurd?"**
- Per object een lijst van toestanden: **moment, handeling, verwijzing** naar de toestand

<div class="highlight warning">
Zonder dit overzicht is tijdreizen blind zoeken.
</div>

<!--
Principe V5 in het agendastuk.

Waarom: alle andere principes beantwoorden "wat was de toestand op moment T". Geen ervan beantwoordt "op welke momenten is er iets gebeurd". Zonder antwoord moet een client raden welke momenten interessant zijn.

Bestaand werk:
- Memento: de TimeMap, een resource die de beschikbare toestanden met hun datums opsomt.
- FHIR: _history op drie niveaus (één resource, een type, het hele systeem), waarbij elke regel de versie en de uitgevoerde bewerking draagt.

De handeling per regel (registreren, wijzigen, corrigeren, beëindigen, herstellen, heropleven, intrekken; principe B1) maakt het onderscheid tussen "de werkelijkheid veranderde" en "onze kennis werd gecorrigeerd" zichtbaar zonder domeinkennis. Dat is precies wat Pieter Bresters vanuit erfgoed nodig heeft, en wat vandaag in de WOZ-keten ontbreekt.

Voorstel bij vraag 1: alleen moment, handeling en verwijzing. Waarden haal je via de verwijzing op.

Bij vraag 2: de lijst voor de hele registratie sinds T is in feite het verschilantwoord (V10). Let op: dat moet op de beschikbaarheidsas, niet op de registratieas. Een transactie die om 10:00 begint en om 10:40 commit, wordt zichtbaar na een transactie die om 10:20 begon en om 10:25 committe, maar draagt een lagere registratietijd. Wie op registratietijd synchroniseert, mist haar voorgoed.
-->

---

## Beschouwingsmomenten als parameters, per as

- Per as die de API voert **één parameter**, los op te geven en los weg te laten
- Bestaande namen: `geldigOp`, `beschikbaarOp`, `inWerkingOp` (ADR-extensie, hoofdstuk 11)
- Alleen parameters voor assen die de registratie gebruikt

<div class="highlight warning">
Eén moment dekt niet alle assen. Wie alleen geldigheid vastzet, kan morgen een ander antwoord krijgen.
</div>

<!--
Principe V1 in het agendastuk.

Waarom per as: het WOZ-advies stelt expliciet dat één enkelvoudig moment beide dimensies niet dekt. Wordt alleen het moment van geldigheid vastgezet, dan mag hetzelfde verzoek later een ander antwoord opleveren.

Bestaande praktijk:
- ADR-extensie: API Designrules Extensions (Nederlandse API Strategie IIb), Geonovum, vastgestelde versie 13 oktober 2021, hoofdstuk 11 Temporal. Dat hoofdstuk is uitdrukkelijk niet-normatief en "in development". Parameters: geldigOp (datum), beschikbaarOp (tijdstip met fracties), inWerkingOp (datum). Tijdreizen is optioneel; wat niet ondersteund wordt krijgt status 403, een niet-bestaande versie 404. De bron staat in de KP-APIs-repository (API-strategie-extensies).
- WOZ-keten: peiltijdstipMaterieel en peiltijdstipFormeel.
- STOP (KOOP): juridisch werkend op, geldig op, beschikbaar op (met bekend op en ontvangen op).

Niet elke registratie voert elke as. De BGT registreert geen materiële historie. Een bevraging met geldigOp op zo'n API moet "deze as voer ik niet" opleveren, wat iets anders is dan "niets gevonden". Welke assen een API voert, hoort vooraf machineleesbaar te zijn gedeclareerd (principe T3), niet alleen achteraf via een foutcode.

Bij vraag 2: beschikbaarOp beantwoordt "wat kon ik toen zien" (de vraag van de Belastingdienst: had ik dit vier weken geleden gezien?). Een juridische vraag als "wat had u op 1 maart vastgelegd" gaat over de registratieas. Dat zijn verschillende vragen met verschillende antwoorden; de ADR-extensie kent alleen de eerste.

Aanverwant, voor later: KP-APIs issue 180 vraagt hoe je een periode bevraagt in plaats van een moment (beschikbaarVanaf, beschikbaarTot). OData en OGC API Features hebben daar een uitgewerkt antwoord op (principe V6).
-->

---

## Zonder beschouwingsmomenten: de huidige stand zoals nu bekend

- Geen parameters: de momentopname van **nu**, met de **kennis van nu**
- Historie is een **additieve laag**: bestaande afnemers hoeven niets te veranderen

<div class="highlight warning">
Wie niets van historie wil weten, hoeft er niets van te weten.
</div>

<!--
Principe V8 in het agendastuk.

Waarom: dit is de voorwaarde voor adoptie. Als het voeren van de standaard betekent dat elke bestaande afnemer moet worden omgebouwd, gebeurt het niet. Rob van Dort: beide parameters weglaten geeft de huidige stand.

Het tweede deel van de ADR-regel (als er nog geen geldige versie is, de meest recente bekende) is een bewuste keuze voor gegevens met geldigheid in de toekomst. Die moeten we overnemen of expliciet verwerpen.

Achtergrond bij de vraag: de ADR-extensie staat een API toe toekomstige geldigheid niet te ondersteunen. Het UBB-werkdocument noemt toekomstig gedateerde gegevens als uitgesteld onderwerp.

Voorstel: toestaan, vooraf declareren (principe T3), en standaard buiten de actuele stand houden.

Let op: ook zonder parameters vertelt het antwoord op welk moment het is gegeven. Dat is het volgende principe.
-->

---

## Elk antwoord vertelt op welk moment het is gegeven

- De gebruikte beschouwingsmomenten voor **elke as die de API voert**, ook ongevraagd
- Plus het **beschikbaarheidsmoment**: tot waar deze instantie bij was
- **In het antwoord zelf**, niet alleen in headers

<!--
Principe V3 in het agendastuk, met T7.

Waarom: de herhaalbare vraag uit het UBB-werkdocument. Systemen verwerken schrijfacties parallel, dus een vraag op T100 levert in de praktijk het antwoord op dat op T80 compleet was. Dat moment moet terug naar de afnemer, anders weet hij niet wat hij heeft gezien. Memento stuurt Memento-Datetime mee; Datomic en XTDB geven bij elk antwoord het basismoment terug.

Het teruggegeven beschikbaarheidsmoment moet veilig zijn, niet simpelweg "nu". Vier eisen (T7):
1. toegekend bij publicatie, niet bij het begin van de transactie;
2. monotoon: nooit lager dan een eerder afgegeven waarde;
3. eenduidig geordend, of met een vastgelegde regel bij gelijke waarden;
4. pas afgegeven als vaststaat dat alles eronder compleet is.
De vierde is de lastige. Google Spanner wacht bij commit de klokonzekerheid uit om dit te garanderen. Wie niet wil wachten, geeft een iets ouder moment terug.

Waarom een tijdstempel en geen ondoorzichtig teken: leesbaar, citeerbaar, vergelijkbaar tussen aanbieders, en in dezelfde eenheid als de vraag die afnemers stellen. De precedenten zijn gemengd: Memento en FHIR werken met een tijdstip, maar ook standaarden gebruiken ondoorzichtige tekens, zoals de delta links van OData en de ETags van HTTP. Het verschil zit in waarvoor: een teken is geschikt om een stand te hervatten of versies op gelijkheid te vergelijken (Kubernetes staat bij resourceVersion zelfs alleen dat toe), maar niet om te citeren, om aanbieders te vergelijken of om de vraag "had ik dit vier weken geleden gezien?" te beantwoorden.

Waarom in het antwoord zelf: een bestandslevering heeft geen headers, een afnemer die het antwoord opslaat bewaart de payload en niet de headers, en je kunt alleen ondertekenen wat in het document staat. Headers mogen een kopie dragen voor caches en HEAD-verzoeken. Eén keer per antwoord, als gereserveerd lid, niet per item (volgt uit het volgende principe). De naam verstrekking sluit aan op de UBB-handreiking, maar kan botsen met domeinvelden zoals de verstrekkingsbeperking in de BRP.

Voorstel bij vraag 1: alle assen die de API voert, ook als de vraag er maar één noemde. Anders weet de afnemer niet op welk moment de niet-genoemde assen stonden, en kan hij de vraag niet herhaalbaar stellen.

Bij vraag 2: het beschikbaarheidsmoment legt het laatste wijzigingsmoment bloot, wat niet altijd mag. Het UBB-werkdocument noemt dit bezwaar en oppert daarom een teken. Voorstel: een tijdstempel, tenzij de aanbieder motiveert waarom dat niet kan.
-->

---

## Eén set beschouwingsmomenten voor het hele antwoord

- Alle objecten in één antwoord op **dezelfde momenten**: een momentopname, geen collage
- Gevolgde relaties **erven** de momenten
- Links naar andere resources dienen de momenten **mee te dragen**

<div class="highlight warning">
Een federatief stelsel tijdreist alleen als het moment meereist.
</div>

<!--
Principe V2 in het agendastuk.

Waarom: Rob van Dort: door het moment te fixeren krijg je altijd een consistente foto, ook terwijl zware batches muteren. Voor de BGT is dit direct herkenbaar: een consistent beeld langs de transactietijd is volgens Mark Strijker daar de grootste uitdaging.

Doorwerking langs relaties komt uit OData (Extension for Temporal Data, OASIS): temporele queryopties werken door langs gevolgde relaties tenzij ze op dat niveau worden overschreven. In de verdiepingssessie van 2 september is het combineren van meerdere API's al benoemd als iets met "de nodige valkuilen" (Joost Farla, naar aanleiding van de inbreng van Jan Klopper over het temporele hoofdstuk in de ADR-extensies); dit is waar dat concreet wordt.

Bladeren: een resultaat over meerdere pagina's moet over al die pagina's dezelfde momentopname tonen. Zit het beschikbaarheidsmoment niet in de bladerverwijzing, dan krijg je bij een lange doorloop dubbele of ontbrekende rijen.

Bij de vraag: binnen één API is doorwerking af te dwingen. Over API-grenzen heen kunnen we hooguit voorschrijven dat een verwijzing het moment kan dragen en dat een API die zo'n verwijzing volgt, het moment respecteert. Dat is een zwakkere toezegging. Twee API's kunnen bovendien op verschillende beschikbaarheidsmomenten bij zijn: wat doet de tweede als hij nog niet bij is tot het moment van de eerste?
-->

---

<!-- _class: title -->

# Vervolgafspraken

[github.com/Geonovum/KP-APIs/tree/master/overleggen/Werkgroep%20Historie](https://github.com/Geonovum/KP-APIs/tree/master/overleggen/Werkgroep%20Historie)

<!--
Per principe vastleggen: aangenomen, aangenomen met aanpassing, of nog open (met wie het uitwerkt).

Open punten die waarschijnlijk blijven liggen:
- periodebevraging (issue 180, principe V6)
- momentopname tegenover tijdlijn als twee representaties (V7)
- verschilbevraging en de relatie met de Werkgroep Notificeren (V10)
- sessiegaranties: lees je eigen schrijfacties, niet terug in de tijd (V12)

Punten die in deze sessie zijn opgekomen (in te vullen):
- ...
-->
