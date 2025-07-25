---
marp: true
theme: don
headingDivider: 2
---
# Het nieuwe API register
<!-- _class: title -->

Dimitri van Hees
<d.vanhees@geonovum.nl>

## Uitgangspunten

- REST-only
- OpenAPI-first
- API-first
- Open Source

## REST-only
<!-- _class: title -->

## Huidige API register

- REST/JSON (113)
- REST/XML (27)
- OData (4)
- WFS (3)
- WMS (1)
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## JSON/XML

- **REST/JSON (113)**
- **REST/XML (27)**
- OData (4)
- WFS (3)
- WMS (1)
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## OData

- **REST (140)**
- **OData (4)** = REST
- WFS (3)
- WMS (1)
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## Geo API's

- **REST (144)**
- **WFS (3)**
- **WMS (1)**
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## OGC API
<!-- _class: title -->

## Geo API's worden REST

- **REST (144)**
- **WFS (3)** ➔ OGC API = REST
- **WMS (1)** ➔ OGC API = REST
- GraphQL (1)
- CKAN (1)
- Atom (1)
- Socrata (1)

## Overige API's (2,6%)

- **REST (148)**
- ~~GraphQL (1)~~
- ~~CKAN (1)~~
- ~~Atom (1)~~
- ~~Socrata (1)~~

## OpenAPI-first
<!-- _class: title -->

## Verplichte standaarden

- OpenAPI Specification (OAS)
- REST API Design Rules (ADR)

## Velden huidige API register

- Naam
- Omschrijving
- Organisatie
- Type
- Authenticatie
- Productie/acceptatie/demo omgeving
- Contact (email, telefoon, url)
- Referentie-implementatie
- Gebruiksvoorwaarden

## Uit te drukken in OAS

- Naam
- Omschrijving
- Authenticatie (`securitySchemes` - `mTLS` vanaf OAS 3.1)
- Omgevingen (`servers`-array, nog niet in ADR)
- Contact (`info.contact` vanaf ADR 2.1 - geen telefoonnummer, maarja...)
- Example(s vanaf OAS 3.1) voor mocking en code generatie

## Niet in OAS

- Organisatie (gaan we anders doen)
- Type (maar alles is REST)
- Referentie-implementatie (is nooit ingevuld)
- Gebruikersvoorwaarden (is nooit ingevuld, aanhaken KPA werkgroep)
- Thema's
- API lifecycle info

## Organisatie - oude situatie

- Hard gekoppeld aan Register van Overheidsorganisaties (ROO)
- Via eigen API die content dupliceert
- Gouden API winnaar "SURF" staat niet in ROO; API kan niet naar register
- Iedereen kan API's toevoegen namens een organisatie via GitLab

## Organisatie - nieuwe situatie

- Uitfasering eigen API
- Identificatie o.b.v. credentials
- Gekoppeld aan TOOI (waar mogelijk)
- Uitzondering voor organisaties buiten ROO

## TOOI API

- Gemeente Utrecht: <https://identifier.overheid.nl/tooi/id/gemeente/gm0344>
- API resource: <https://api.standaarden.overheid.nl/v1/overheidsorganisaties/https%3A%2F%2Fidentifier.overheid.nl%2Ftooi%2Fid%2Fgemeente%2Fgm0344>
- Adressen: <https://api.standaarden.overheid.nl/v1/overheidsorganisaties/https%3A%2F%2Fidentifier.overheid.nl%2Ftooi%2Fid%2Fgemeente%2Fgm0344/adressen>
- Caching versus "Data bij de Bron"...

## ADR Scores

- Op basis van generieke OAS checker
- Hulp bij afwijkingen
- Representatiever want alleen REST
- Meta gegevens laten vallen - geen standaard
- Alleen aftrappen bij wijziging of toevoeging OAS

## API-first
<!-- _class: title -->

## Aanleverprocedure

![aanleverprocedure](aanlevering.png)

## API toevoegen

```json
// POST https://api.developer.overheid.nl/api-register/v1/apis HTTP/1.1
// Content-Type: application/json

{
  "oasUri": "https://api.standaarden.overheid.nl/v1/openapi.json"
}
```

## Geen `info.contact` in OAS gevonden

```json
// HTTP/1.1 400 Bad Request
// Content-Type: application/problem+json

{
  "type": "https://apis.developer.overheid.nl/12345/spec#400",
  "title": "Bad Request",
  "status": 400,
  "detail": "Contact info kan niet uit OAS gehaald worden",
  "invalidParams": [
    {
      "name": "contact.name",
      "reason": "Ontbreekt"
    },
    {
      "name": "contact.email",
      "reason": "Ontbreekt"
    },
    {
      "name": "contact.url",
      "reason": "Ontbreekt"
    },
  ]
}
```

## API toevoegen, poging 2

```json
// POST https://api.developer.overheid.nl/api-register/v1/apis HTTP/1.1
// Content-Type: application/json

{
  "oasUri": "https://api.standaarden.overheid.nl/v1/openapi.json",
  "contact": {
    "name": "DON API Team",
    "email": "developer.overheid@geonovum.nl",
    "url": "https://github.com/developer-overheid-nl/issues"
  }
}
```

## API toegevoegd

```json
// HTTP/1.1 201 Created
// Content-Type: application/json
// Location: https://api.developer.overheid.nl/apis/12345

{
  "id": "12345",
  "oasUri": "https://api.standaarden.overheid.nl/v1/openapi.json",
  "title": "DON API",
  "description": "Dit is de DON API",
  "contact": {
    "name": "DON API Team",
    "email": "developer.overheid@geonovum.nl",
    "url": "https://github.com/developer-overheid-nl/issues"
  }
  "adrScore": null
}
```

## Vervolgstappen

![vervolg](vervolg.png)

## Wijziging forceren

```json
// PUT https://api.developer.overheid.nl/apis/12345 HTTP/1.1
// Content-Type: application/json

{
  "oasUri": "https://api.standaarden.overheid.nl/v1/openapi.json",
}
```

## `oasUri` is unieke identifier van de API

- `oasUri` bevat het endpoint inclusief major version (ADR `/core/publish-openapi`)
- `oasUri` wijzigen: nieuwe API toevoegen en oude API verwijderen

## Uit de wandelgangen

- Veel problemen met publiek toegankelijk maken `/openapi.json`
- Alternatief: `servers` verplicht stellen:

```yaml
openapi: 3.0.3
info:
  servers:
    - title: "Productie"
      url: "https://api.developer.overheid.nl/api-register/apis/v1"
      default: true
    - title: "Testomgeving"
      url: "https://test.api.developer.overheid.nl/api-register/apis/v1"
```

## API verwijderen

- Contact opnemen om API te laten verwijderen
- Dit omdat een API niet zomaar "verwijderd" kan worden; dit is een lifecycle wijziging

## API Lifecycle
<!-- _class: title -->

## API Lifecycle "End-of-Life" phase

![end-of-life](end-of-life.png)

## RFC9745: The Deprecation HTTP Response Header Field

```http
Deprecation: @1688169599                                 # UNIX timestamp
Sunset:      Sun, 30 Jun 2024 23:59:59 UTC               # HTTP-date timestamp
Link:        <https://developer.example.com/deprecation>;
             rel="deprecation"; type="text/html"
```

<https://datatracker.ietf.org/doc/html/rfc9745>

## Misbruik `info.version` in ADR

ADR `/core/semver`:

> **How to test**
> Parse the `info.version` field in the OpenAPI Description to confirm it adheres to the Semantic Versioning format.

OpenAPI Specification 3.0.3 (<https://spec.openapis.org/oas/v3.0.3.html#info-object>):

|Field|Type|Description|
|-|-|-|
|version|`string`|_**REQUIRED**_. The version of the OpenAPI document (**which is distinct from** the OpenAPI Specification version or **the API implementation version**).|

## Geen standaard, wél API register extensie

```yaml
openapi: 3.0.3
info:
  version: 1.2.3
  x-deprecated: 2025-10-10 # toekomst of verleden
  x-sunset: 2027-11-11     # altijd in de toekomst
```

<https://github.com/Geonovum/KP-APIs/issues/649>

## Pilot met Gemeente Amsterdam
<!-- _class: title -->

## Extra features
<!-- _class: title -->

## Koppeling discourse forum

- Topic per API
- API wijzigingen
- Downtime/gepland onderhoud
- Vragen/opmerkingen

## Abonneren op API

- Op de hoogte blijven van (lifecycle) wijzigingen
- Via RSS of Discourse
- Of "Ik gebruik deze API" via e-mail
- Ook voor providers fijn

## Mocking functionaliteit

- Example(s vanaf OAS 3.1) gebruiken om mocking data/services te genereren

## Software Development Kits (SDK's)

- Clients
- Servers
- Eigen generator met ADR implementatie
  - Mogelijk kant-en-klaar project klaarzetten in een - eigen - Git omgeving?
  - `code.developer.overheid.nl`? (sssttt...)

## Verbeterde docs

- WCAG compatible playground ("ReDoc")
- Functionele documentatie
- Samenhang met andere versies
- Samenhang met andere API's (Arazzo?)

## Frontend beschikbaar als (web)components

- Herbruikbaar voor OAS presentatie
- Whitelabel eigen API register
- WCAG compatible

## OAS 3.1 support

- Automatisch omzetten van OAS 3.0.x naar 3.1.0
- JSON Schema's extraheren
- Typescript types, Java classes etc. genereren

## Overig

- Groeperen van API's in een "dossier"
- Diffs tussen versies/historie
- Bruno collections, Swagger UI, etc.
- Automatische koppeling centraal register apis.developer.overheid.nl

## Vragen?
<!-- _class: title -->

```yaml
openapi: 3.0.3
info:
  version: 1.2.3
  x-deprecated: 2025-10-10 # toekomst of verleden
  x-sunset: 2027-11-11     # altijd in de toekomst
```

<https://github.com/Geonovum/KP-APIs/issues/649>