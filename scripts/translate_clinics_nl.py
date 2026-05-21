#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Translate specific sections from Spanish (es.json) to Dutch (nl.json)
for a Next.js i18n website.
"""

import json
import sys

ES_PATH = "/Users/albertgarcia/Desktop/CODEHUNTER/LAB/LAB/messages/es.json"
NL_PATH = "/Users/albertgarcia/Desktop/CODEHUNTER/LAB/LAB/messages/nl.json"

# ---------------------------------------------------------------------------
# 1. DENTAL CLINIC
# ---------------------------------------------------------------------------
DENTAL_CLINIC_NL = {
    "Hero": {
        "badge": "TANDARTSPRAKTIJK AUTOMATISERING :: NEDERLAND",
        "title": {
            "part1": "Jouw Tandartspraktijk Verliest",
            "highlight": "Duizenden per Maand",
            "part2": "door Handmatig Beheer"
        },
        "description": "CodeHunter Lab bouwt <strong>maatwerk automatiseringsystemen</strong> voor tandartspraktijken in Nederland — no-shows reduceren, patiëntcommunicatie automatiseren en jouw praktijksoftware koppelen. Geen generieke software. Geen vendor lock-in.",
        "cta": {
            "primary": "Boek een Gratis Audit",
            "secondary": "Bekijk Wat Wij Automatiseren"
        }
    },
    "LanguageNote": "Hoewel wij in Nederland gevestigd zijn, is onze primaire communicatietaal Engels, omdat ons techteam Engels spreekt. Wij bieden echter ook websites in het Nederlands aan, omdat wij een specialist hebben die Nederlandse content proefleest.",
    "PainPoints": {
        "title": "De Werkelijke Kosten van het Beheren van een Tandartspraktijk in 2026",
        "items": [
            {
                "emoji": "📅",
                "title": "No-shows en last-minute afmeldingen",
                "desc": "Een gemiste implantaat- of orthodontieafspraak kost €150–€400 aan verloren omzet. Als jouw herinneringssysteem bestaat uit een telefoontje van de balie de dag ervoor, verlies je elke week geld."
            },
            {
                "emoji": "📞",
                "title": "Jouw team is een dure antwoordservice",
                "desc": "Afspraakplanning, herplanningen, behandelplanvervolgen — jouw assistentes besteden 2–3 uur per dag aan communicatie die automatisering in seconden afhandelt."
            },
            {
                "emoji": "📊",
                "title": "Je weet niet waar je patiënten vandaan komen",
                "desc": "Is het Google? Een verwijzing? Instagram? Zonder tracking vanaf de advertentieklick tot de geboekte afspraak is jouw marketingbudget een gok die je niet kunt optimaliseren."
            },
            {
                "emoji": "🔄",
                "title": "Patiëntreactivering is reactief, niet systematisch",
                "desc": "Patiënten die 6, 12 of 18 maanden afwezig zijn, vertegenwoordigen aanzienlijke omzet. De meeste praktijken hebben geen geautomatiseerd systeem om hen op het juiste moment te reactiveren."
            },
            {
                "emoji": "🔌",
                "title": "Jouw systemen communiceren niet met elkaar",
                "desc": "Praktijksoftware, boekhouding, marketingmails, WhatsApp — vier gescheiden eilanden. Elke gegevensoverdracht is een handmatige stap en een mogelijke fout."
            },
            {
                "emoji": "💬",
                "title": "Behandelplannen stranden tussen consult en boeking",
                "desc": "Een patiënt informeert over facings of aligners, vertrekt zonder te boeken en ontvangt geen vervolg. Die lead raakt vaak kwijt aan een snellere concurrent."
            }
        ]
    },
    "Solutions": {
        "title": "Wat Wij Bouwen voor Tandartspraktijken",
        "subtitle": "Wij zijn geen softwareleverancier. Wij bouwen en integreren de systemen die jouw praktijk al heeft — zodat ze automatisch samenwerken.",
        "items": [
            {
                "emoji": "💬",
                "title": "Geautomatiseerde Patiëntcommunicatie",
                "desc": "Wij koppelen jouw management systeem (Exquise, ISOS, Dentrix of elk platform met API) aan WhatsApp Business API, SMS en e-mail. Bevestigingen, herinneringen op 48u en 2u, post-behandeling check-ins — allemaal automatisch geactiveerd vanuit jouw agendagegevens.",
                "result": "30–50% reductie in no-shows binnen 60 dagen."
            },
            {
                "emoji": "🎯",
                "title": "CRM voor Patiëntacquisitie en -retentie",
                "desc": "Wij bouwen of integreren een CRM dat elke nieuwe patiëntaanvraag volgt vanaf het eerste contact tot de lifetime value. Het weet precies welk marketingkanaal de beste patiënten oplevert.",
                "result": "Volledig inzicht van leadbron tot omzet."
            },
            {
                "emoji": "⚡",
                "title": "Lead-naar-Afspraak Automatisering",
                "desc": "Wanneer iemand jouw formulier invult met een vraag over implantaten of Invisalign, ontvangt hij direct een gepersonaliseerd antwoord, een boekingslink en een 3-staps vervolgtraject als hij niet boekt. Zonder dat jouw team een vinger uitsteekt.",
                "result": "60–80% snellere responstijd. Hogere consult-naar-afspraak conversie."
            },
            {
                "emoji": "🔁",
                "title": "Patiëntreactiveringscampagnes",
                "desc": "Elke 6 maanden ontvangen patiënten met een openstaande controle of mondhygiëne een gepersonaliseerd bericht via hun favoriete kanaal. Reactiveringscampagnes voor inactieve patiënten worden automatisch uitgevoerd volgens het door jou bepaalde schema.",
                "result": "Consistente bezettingsgraad zonder afhankelijkheid van de balie."
            },
            {
                "emoji": "📊",
                "title": "Dashboard en Rapportages",
                "desc": "Eén dashboard: nieuwe patiëntacquisitie per bron, bezettingsgraad, no-show ratio, prestatie van reactiveringscampagnes en omzet per behandeltype. Realtime geüpdatet. Toegankelijk vanaf je telefoon.",
                "result": "Beslissingen op basis van data, niet op intuïtie."
            },
            {
                "emoji": "⭐",
                "title": "Google Reviews Automatisering",
                "desc": "Na elke voltooide afspraak ontvangen patiënten een tevredenheidsbericht. Positieve antwoorden worden geleid naar een Google review. Kritieke feedback wordt privé doorgestuurd naar de praktijkmanager.",
                "result": "Reviewvolume groeit passief — zonder handmatige inspanning."
            }
        ]
    },
    "Scenarios": {
        "title": "Hoe Dit in de Praktijk Uitziet",
        "items": [
            {
                "num": "01",
                "title": "Automatisering Nieuwe Patiëntconsult",
                "desc": "De patiënt klikt op jouw Google advertentie → vult het formulier 'Boek Consult' in → ontvangt direct een WhatsApp met beschikbare tijden → boekt binnen 2 minuten → bevestiging gesynchroniseerd met jouw agenda. Jouw balie ziet alleen bevestigde afspraken."
            },
            {
                "num": "02",
                "title": "No-show Preventie 48 Uur van Tevoren",
                "desc": "Een patiënt heeft een 90-minuten kroonafspraak op donderdag. Dinsdagochtend ontvangt hij automatisch een WhatsApp-herinnering met de optie om met één tik te bevestigen of te verplaatsen. Bij verplaatsing wordt het tijdslot onmiddellijk aangeboden aan de wachtlijst."
            },
            {
                "num": "03",
                "title": "Automatisch Aanvullen Wachtlijst",
                "desc": "Er komt een annulering binnen om 10:00. Jouw wachtlijstsysteem stuurt automatisch een bericht naar de volgende 3 patiënten op de lijst. De eerste die bevestigt, krijgt het tijdslot. Jouw middag blijft vol — zonder enkel telefoontje van jouw team."
            },
            {
                "num": "04",
                "title": "Behandelplan Vervolg",
                "desc": "De patiënt ontvangt een plan voor tandheelkundige implantaten. Hij vertrekt zonder te boeken. Drie dagen later ontvangt hij een specifiek vervolgbericht dat veelgestelde vragen beantwoordt en een 10-minuten belletje met jouw coördinator aanbiedt — automatisch geactiveerd, gepersonaliseerd per behandeltype."
            },
            {
                "num": "05",
                "title": "Halfjaarlijkse Reactiveringscampagne",
                "desc": "Elke patiënt die 5 maanden geleden een mondhygiëne heeft voltooid, ontvangt een proactief reactiveringsbericht. Wie niet reageert, krijgt na 2 weken een tweede bericht. Wie boekt, wordt uit de sequentie gehaald. Wie afwijst, wordt geregistreerd."
            },
            {
                "num": "06",
                "title": "Google Reviews Na Elke Afspraak",
                "desc": "Na elke voltooide afspraak ontvangen patiënten een kort tevredenheidsbericht. Positieve antwoorden worden geleid naar een Google review met directe link. Dit werkt voor elke afspraak, elke dag, zonder handmatige inspanning van jouw team."
            }
        ]
    },
    "WhyUs": {
        "title": "Transparante Prijzen — Geen Verborgen Kosten",
        "points": [
            {
                "title": "Maatwerk integraties, geen templates",
                "desc": "Wij bouwen directe API-integraties tussen jouw bestaande systemen. Als jouw managementsoftware een API heeft, koppelen wij deze. Elke oplossing is specifiek voor jouw configuratie — geen Zapier-template."
            },
            {
                "title": "Geen lock-in — heldere, voorspelbare kosten",
                "desc": "Alles wat wij bouwen is van jou. Geen propriëtaire tools die verdwijnen als je stopt met samenwerken. Sommige oplossingen omvatten een optioneel maandelijks technisch onderhoudsretainer — altijd vanaf het begin gecommuniceerd, zonder verrassingen. Wanneer wij een CRM-platform, marketingautomatisering of leadmanagement als onderdeel van jouw oplossing deployen, is die licentie altijd onafhankelijk, transparant en door ons beheerd — zonder verborgen markup."
            },
            {
                "title": "GDPR en AVG-compliance by design",
                "desc": "Patiëntgegevens zijn gevoelig. Wij bouwen met de Nederlandse gegevensbeschermingswet als fundamentele beperking, niet als bijgedachte. Self-hosted opties beschikbaar."
            },
            {
                "title": "Langetermijnpartner, geen eenmalig project",
                "desc": "Wij zetten je op, gaan live en blijven. Continue optimalisatie, nieuwe automatiseringen naarmate jouw praktijk groeit en direct contact met ons engineeringteam — altijd."
            }
        ]
    },
    "FAQ": {
        "title": "Veelgestelde Vragen",
        "subtitle": "Wat praktijkhouders van tandartspraktijken vragen voordat ze starten.",
        "questions": [
            {
                "q": "Werkt het met onze huidige managementsoftware?",
                "a": "Wij integreren met elk platform dat een API of gestructureerde data-export biedt — inclusief Exquise, ISOS, Dentrix en de meeste moderne managementsystemen. Wij mappen jouw specifieke configuratie tijdens het auditgesprek."
            },
            {
                "q": "Worden patiëntgegevens veilig beheerd en voldoen jullie aan GDPR?",
                "a": "Ja. Alle automatiseringen worden gebouwd met AVG/GDPR-compliance als fundamentele eis. Wij kunnen pipelines draaien op self-hosted infrastructuur voor volledige datasoevereiniteit. Patiëntgegevens passeren nooit systemen van derden zonder passende overeenkomsten."
            },
            {
                "q": "Hoe lang duurt het voordat het operationeel is?",
                "a": "Voor een standaardconfiguratie — afspraakherinneringen, leadacquisitie-automatisering en een rapportagedashboard — zijn wij doorgaans binnen 3–4 weken live vanaf start. Complexere CRM-integraties kunnen langer duren."
            },
            {
                "q": "Vervangen jullie onze huidige software of werken jullie er naast?",
                "a": "Wij werken naast jouw bestaande systemen. Wij vragen niet om jouw praktijksoftware te vervangen. Wij bouwen integratielagen die verbinden wat je al hebt en de hiaten vullen die jouw huidige tools niet dekken."
            },
            {
                "q": "Wat kost het?",
                "a": "Elke praktijk is anders. Wij plannen het project na de gratis audit en leveren een vaste-prijs offerte — geen uurtje-factuurtje, geen verrassingsfacturen. Wij bespreken jouw budget en doelstellingen tijdens het auditgesprek."
            }
        ]
    },
    "CTA": {
        "label": "Klaar om jouw praktijk te automatiseren?",
        "title": "Boek Jouw Gratis Audit",
        "desc": "Wij bekijken jouw huidige systemen, identificeren de 3 automatiseringskansen met de hoogste ROI specifiek voor jouw praktijk en geven je een heldere technische roadmap — zonder verplichting.",
        "button": "Boek Gratis Audit",
        "subtext": "Beschikbaar voor praktijken in Nederland. Huidige onboarding-capaciteit: Q2 2026. Vragen? Email info@codehunterlab.com"
    },
    "SEO": {
        "keywords": "tandartspraktijk automatisering Nederland, tandheelkundige praktijk automatisering, tandarts afspraak herinneringen Nederland, tandheelkundige CRM integratie, tandarts no-show reductie, tandarts patiënt reactivatie systeem, tandarts WhatsApp communicatie",
        "extendedDesc": "CodeHunter Lab bouwt maatwerk automatiserings- en integratiesystemen voor tandartspraktijken in Nederland. Van afspraakherinneringsworkflows en patiëntreactiveringscampagnes tot volledige CRM-integratie en lead-naar-afspraak automatisering, helpen wij tandartspraktijken no-shows te reduceren, patiëntretentie te verbeteren en omzet te verhogen. Gevestigd in Leiden, werkzaam voor praktijken in Amsterdam, Rotterdam, Den Haag, Utrecht en daarbuiten."
    }
}

# ---------------------------------------------------------------------------
# 2. PHYSIOTHERAPY CLINIC
# ---------------------------------------------------------------------------
PHYSIOTHERAPY_CLINIC_NL = {
    "Hero": {
        "badge": "FYSIOTHERAPIEPRAKTIJK AUTOMATISERING :: NEDERLAND",
        "title": {
            "part1": "Jouw Fysiotherapiepraktijk",
            "highlight": "Heeft een Systeemprobleem.",
            "part2": "Jouw Patiënten Merken Het"
        },
        "description": "CodeHunter Lab bouwt <strong>automatiserings- en integratiesystemen</strong> voor fysiotherapiepraktijken in Nederland — die verwijzingen, planning, patiëntcommunicatie en rapportages koppelen in één coherent workflow. Zodat jouw therapeuten zich kunnen focussen op patiënten behandelen, niet op papierwerk achtervolgen.",
        "cta": {
            "primary": "Boek een Gratis Audit",
            "secondary": "Bekijk Wat Wij Automatiseren"
        }
    },
    "LanguageNote": "Hoewel wij in Nederland gevestigd zijn, is onze primaire communicatietaal Engels, omdat ons techteam Engels spreekt. Wij bieden echter ook websites in het Nederlands aan, omdat wij een specialist hebben die Nederlandse content proefleest.",
    "PainPoints": {
        "title": "Waar Jouw Praktijk Tijd en Omzet Verliest",
        "items": [
            {
                "emoji": "📄",
                "title": "Verwijzingen worden nog steeds handmatig verwerkt",
                "desc": "Een verwijzing komt binnen via Zorgdomein of fax. Iemand aan de balie overschrijft, belt de patiënt, zoekt een therapeut, plant het eerste bezoek en voert de gegevens in. Dat is 15–25 minuten per verwijzing — uren elke dag."
            },
            {
                "emoji": "🚶",
                "title": "Patiënten stoppen halverwege het behandeltraject",
                "desc": "Een patiënt voltooit 4 van de 10 sessies en komt niet meer zonder de zorg formeel af te sluiten. Jouw agenda heeft spookafspraken, jouw therapeut verliest tijd en het patiëntresultaat lijdt eronder."
            },
            {
                "emoji": "📞",
                "title": "Herinneringen zijn nog afhankelijk van telefoontjes",
                "desc": "Jouw balie belt of stuurt berichten naar patiënten individueel. Er is geen systematisch bevestigingsflow. No-shows komen als verrassingen, niet als voorspelbare problemen met geautomatiseerde oplossingen."
            },
            {
                "emoji": "📈",
                "title": "Geen retentie-analytics per therapeut",
                "desc": "Sommige therapeuten behouden patiënten gedurende hele behandelplannen. Anderen verliezen ze na sessie 2. Zonder data per therapeut kun je die kloof niet identificeren of corrigeren."
            },
            {
                "emoji": "🎯",
                "title": "Marketinguitgaven hebben geen attribuutie",
                "desc": "Je hebt misschien Google Ads draaien of een marketingbureau ingehuurd. Maar zonder tracking vanaf de advertentieklick tot het voltooide eerste bezoek en afgesloten behandeling, optimaliseer je op de blinde."
            },
            {
                "emoji": "🏥",
                "title": "Verzekeringsvoorautorisatie veroorzaakt vertragingen",
                "desc": "Voor behandelingen die vergoedingsbevestiging vereisen, het achtervolgen van de verzekeringsstatus is een handmatige, repetitieve taak die de planning blokkeert en patiënten frustreert vóór hun eerste afspraak."
            }
        ]
    },
    "Solutions": {
        "title": "Systemen Afgestemd op Hoe een Moderne Praktijk Zou Moeten Werken",
        "subtitle": "Wij bouwen direct binnen jouw verwijzingsflow, planningslogica en verzekeringsprocessen — en automatiseren de specifieke knelpunten van jouw opstelling.",
        "items": [
            {
                "emoji": "📋",
                "title": "Automatisering Verwijzingsverwerking",
                "desc": "Wij bouwen een ontvangst-pipeline die verwijzingsgegevens extraheert uit Zorgdomein, webformulieren of e-mail van de huisarts — creëert een patiëntrecord in jouw managementsysteem, stuurt een welkomstbericht en pre-vult een boekingslink. Alles zonder een enkele handmatige stap.",
                "result": "Verwerkingstijd verwijzing-naar-eerste-afspraak verminderd van 48 uur naar minder dan 4 uur."
            },
            {
                "emoji": "💬",
                "title": "Afspraakherinneringen met Bevestiging",
                "desc": "Elke afspraak activeert een geautomatiseerde herinneringssequentie: 48 uur van tevoren via WhatsApp of SMS, met de optie om met één tik te bevestigen of te verplaatsen. Annuleringen activeren automatisch de wachtlijst.",
                "result": "30–45% reductie in no-shows. Minder lege plekken."
            },
            {
                "emoji": "🔄",
                "title": "Drop-out Detectie en Reactivering",
                "desc": "Als een patiënt twee opeenvolgende afspraken mist zonder communicatie, komt hij in een reactiveringsflow: een persoonlijke check-in van zijn therapeut (automatisch verzonden), een boekingslink en bij geen reactie een melding aan de praktijkmanager.",
                "result": "Herstel 20–35% van patiënten die stilletjes het behandeltraject zouden verlaten."
            },
            {
                "emoji": "📊",
                "title": "Resultaatmonitoring en NPS",
                "desc": "Aan het einde van een behandelplan ontvangen patiënten automatisch een resultaten-enquête en NPS-verzoek. De resultaten voeden een dashboard per therapeut, behandeltype en verwijzingsbron.",
                "result": "Objectieve data voor kwaliteitsverbetering en verzekeringsrapportages."
            },
            {
                "emoji": "📈",
                "title": "Praktijkanalytics Dashboard",
                "desc": "Eén uniform dashboard: sessievolumes per therapeut, behandelplan-afrondingsratio's, attribuutie van nieuwe patiënten per bron, verzekeringsclaimstatus en maandelijkse omzettrend. Vervangt handmatige spreadsheets.",
                "result": "Managementbeslissingen in minuten, niet in dagen."
            },
            {
                "emoji": "🏥",
                "title": "Verzekeringsverificatie Workflow",
                "desc": "Automatisering activeert een verzekeringscheck voor nieuwe patiënten die vergoedingsverificatie nodig hebben → stuurt statusupdates naar patiënt en balie → markeert niet-geverifieerde casussen bij de verantwoordelijke vóór de eerste afspraak. Voorkomt factuurverrassingen.",
                "result": "Minder factuurgeschillen. Snellere patiëntintake."
            }
        ]
    },
    "Scenarios": {
        "title": "Hoe Dit in de Praktijk Uitziet",
        "items": [
            {
                "num": "01",
                "title": "Zorgdomein Verwijzing naar Geboekte Eerste Afspraak",
                "desc": "De huisarts stuurt verwijzing via Zorgdomein → de automatisering analyseert patiëntgegevens → creëert het record in jouw managementsysteem → stuurt een welkomst-WhatsApp met anamnesevragenlijst en boekings-URL → de patiënt boekt zelf zijn afspraak → bevestiging gesynchroniseerd met de agenda van de therapeut. De balie doet niets."
            },
            {
                "num": "02",
                "title": "Verzekeringsverificatie Workflow",
                "desc": "Nieuwe patiënt vereist vergoedingsverificatie. De automatisering activeert de verzekeringscheck → stuurt statusupdate naar patiënt en balie → markeert niet-geverifieerde casussen bij de verantwoordelijke vóór de eerste afspraak → voorkomt last-minute factuurverrassingen."
            },
            {
                "num": "03",
                "title": "Behandeltraject Adherentie Vervolg",
                "desc": "De patiënt heeft een plan van 8 sessies. Na sessie 4 verdwijnt hij. De automatisering detecteert het gat → stuurt een gepersonaliseerde check-in met de naam van zijn therapeut → bij geen reactie binnen 48 uur, meldt aan de verantwoordelijke → reactivatie-optie aangeboden met directe boekingslink."
            },
            {
                "num": "04",
                "title": "Wachtlijstbeheer",
                "desc": "Een afspraak van 9:00 wordt geannuleerd om 20:30 de avond ervoor. De volgende 3 patiënten op de wachtlijst ontvangen een geautomatiseerd aanbod voor het tijdslot. De eerste die bevestigt, krijgt het. De ochtend van de therapeut blijft productief — zonder telefoontjes nodig."
            },
            {
                "num": "05",
                "title": "Automatisering Relatie met Verwijzend Artsen",
                "desc": "Praktijken die herhaalde verwijzingen ontvangen van specifieke artsen, krijgen elk kwartaal een geautomatiseerde e-mail: patiëntresultaten, behandelplan-afrondingsratio's en een bedankje voor de verwijzingen. Bouwt verwijzingsrelaties systematisch op."
            },
            {
                "num": "06",
                "title": "Reviewverzoek Post-Behandeling",
                "desc": "In de laatste sessie van een behandelplan ontvangt de patiënt een geautomatiseerd tevredenheidsbericht. Positieve antwoorden worden geleid naar Google Reviews. Kritieke feedback wordt privé doorgestuurd naar de verantwoordelijke. Het reviewvolume groeit passief."
            }
        ]
    },
    "WhyUs": {
        "title": "Gebouwd voor Hoe Jouw Praktijk Echt Werkt",
        "points": [
            {
                "title": "Wij integreren met jouw bestaande managementsoftware",
                "desc": "Intramed, Physiosoftware, FysioRoadmap — als het een API of gestructureerde export heeft, koppelen wij ons aan. Wij vragen niet om van systeem te veranderen. Wij bouwen om wat werkt."
            },
            {
                "title": "AVG en gevoelige patiëntgegevens by design",
                "desc": "Alle automatiseringspipelines worden ontworpen met de Nederlandse gegevensbeschermingswet als fundamentele beperking. Patiëntgegevens blijven binnen conforme grenzen. Self-hosted opties beschikbaar."
            },
            {
                "title": "Gebouwd voor jouw workflow, geen template",
                "desc": "Wij mappen jouw echte verwijzingsflow, planningslogica en verzekeringsprocessen — en automatiseren vervolgens de specifieke knelpunten van jouw exacte opstelling. Geen copy-paste oplossing."
            },
            {
                "title": "Wij blijven bij je terwijl je groeit",
                "desc": "Een tweede vestiging, een nieuwe therapeut of een nieuwe dienstlijn toevoegen? Jouw systemen schalen mee. Wij monitoren, optimaliseren en breiden je automatiseringsstack continu uit."
            }
        ]
    },
    "FAQ": {
        "title": "Veelgestelde Vragen",
        "subtitle": "Wat eigenaren van fysiotherapiepraktijken vragen voordat ze starten.",
        "questions": [
            {
                "q": "Werkt het met Intramed, Physiosoftware of FysioRoadmap?",
                "a": "Ja. Wij integreren met elk managementplatform dat een API of gestructureerde data-export heeft. Wij mappen jouw specifieke systeem tijdens het auditgesprek voordat er ook maar iets wordt gebouwd."
            },
            {
                "q": "Kunnen jullie integreren met Zorgdomein-verwijzingen?",
                "a": "Ja. Wij bouwen ontvangst-pipelines die inkomende verwijzingsgegevens extraheren en verwerken uit Zorgdomein, e-mail van de huisarts of elke gestructureerde verwijzingsbron — en creëren automatisch patiëntrecords en activeren de ontvangstsequentie."
            },
            {
                "q": "Voldoet het aan GDPR/AVG voor patiëntgegevens?",
                "a": "Alle automatiseringspipelines worden ontworpen met de Nederlandse gegevensbeschermingswet als fundamentele beperking. Wij kunnen draaien op self-hosted infrastructuur voor volledige datasoevereiniteit. Patiëntgegevens passeren nooit systemen van derden zonder passende overeenkomsten."
            },
            {
                "q": "Hoe lang duurt de implementatie?",
                "a": "Een standaardconfiguratie — verwijzingsverwerkingsautomatisering, afspraakherinneringen en drop-out detectie — is doorgaans binnen 3–5 weken live. Complexere integraties zoals verzekeringsverificatieflows kunnen langer duren."
            },
            {
                "q": "Wij hebben al managementsoftware. Moeten wij die vervangen?",
                "a": "Nee. Wij werken naast jouw bestaande systemen en bouwen integratielagen die verbinden wat je al hebt. Je behoudt je huidige opstelling en wij vullen de automatiseringshiaten eromheen."
            }
        ]
    },
    "CTA": {
        "label": "Laten wij de 3 uur per dag in kaart brengen die jouw praktijk verspilt",
        "title": "Boek Jouw Gratis Audit",
        "desc": "Wij mappen jouw huidige workflow van ontvangst tot intake, identificeren de hoogste-impact automatiseringskansen en geven je een concreet plan — specifiek voor jouw softwarestack en patiëntvolume.",
        "button": "Boek Gratis Audit",
        "subtext": "Voor fysiotherapiepraktijken in Nederland. Huidige onboarding-capaciteit: Q2 2026. Vragen? Email info@codehunterlab.com"
    },
    "SEO": {
        "keywords": "fysiotherapiepraktijk automatisering Nederland, fysiotherapie praktijk automatisering, Zorgdomein integratie, fysiotherapie afspraak herinneringen, fysiotherapie patiënt drop-out preventie, fysiotherapie CRM Nederland",
        "extendedDesc": "CodeHunter Lab bouwt maatwerk automatiserings- en integratiesystemen voor fysiotherapiepraktijken in Nederland. Van Zorgdomein verwijzingsverwerking en afspraakherinneringsworkflows tot behandeltraject adherentie monitoring en verzekeringsverificatie, helpen wij fysiotherapiepraktijken administratieve tijd te reduceren en datagedreven beslissingen te nemen. Gevestigd in Leiden."
    }
}

# ---------------------------------------------------------------------------
# 3. AESTHETIC CLINIC
# ---------------------------------------------------------------------------
AESTHETIC_CLINIC_NL = {
    "Hero": {
        "badge": "ESTHETISCHE KLINIEK AUTOMATISERING :: NEDERLAND",
        "title": {
            "part1": "Jouw Esthetische Kliniek Genereert Leads.",
            "highlight": "Jouw Systemen",
            "part2": "Verliezen Ze"
        },
        "description": "CodeHunter Lab bouwt de infrastructuur van <strong>CRM, lead nurturing en boekingsautomatisering</strong> die hoog-intentionele consultaanvragen converteert naar bevestigde behandelingen — automatisch. Voor esthetische, cosmetische en dermatologische klinieken in Nederland die willen groeien zonder extra administratief personeel.",
        "cta": {
            "primary": "Boek een Gratis Groei-Audit",
            "secondary": "Bekijk Wat Wij Automatiseren"
        }
    },
    "LanguageNote": "Hoewel wij in Nederland gevestigd zijn, is onze primaire communicatietaal Engels, omdat ons techteam Engels spreekt. Wij bieden echter ook websites in het Nederlands aan, omdat wij een specialist hebben die Nederlandse content proefleest.",
    "PainPoints": {
        "title": "Waarom Jouw Marketingbesteding Niet Converteert Zoals Het Zou Moeten",
        "items": [
            {
                "emoji": "⚡",
                "title": "Langzame respons doodt hoog-intentionele leads",
                "desc": "Een prospect die informeert over laser, Botox of een neuscorrectie vergelijkt prijzen. Als jouw respons langer dan 30 minuten duurt, heeft 40% van die aanvragen al elders geboekt."
            },
            {
                "emoji": "📅",
                "title": "No-shows bij consults vernietigen je funnel",
                "desc": "Esthetische consults zijn tijd-intensief voor de therapeut. Een no-show verspilt 45–90 minuten factureerbare tijd. Zonder geautomatiseerd bevestigings- en voorbereidingsflow ligt de no-show ratio gemiddeld op 15–25%."
            },
            {
                "emoji": "💬",
                "title": "Hoogwaardige behandelingsleads verkillen",
                "desc": "Een patiënt informeert over een complete gezichtsbehandeling of bodycontour pakket, vertrekt zonder te committeren en krijgt een follow-up bellentje dat in de voicemail valt. Dat is een behandeling van €500–€5.000 die verdampt."
            },
            {
                "emoji": "📊",
                "title": "Je kent je werkelijke marketing-ROI niet",
                "desc": "Jouw kliniek draait misschien Google Ads, Meta-campagnes en influencer-samenwerkingen. Maar zonder attribuutie vanaf de advertentieklick tot de voltooide behandeling, weet je niet welk kanaal je beste patiënten oplevert."
            },
            {
                "emoji": "🔄",
                "title": "Upsells en pakketten gebeuren toevallig",
                "desc": "Post-behandeling follow-ups, pakketupgrade-aanbiedingen, onderhoudsafspraakherinneringen — inconsistent beheerd, afhankelijk van het individuele geheugen van personeel in plaats van een automatisch systeem."
            },
            {
                "emoji": "👥",
                "title": "Retentie is laag ondanks hoge tevredenheid",
                "desc": "Tevreden esthetische patiënten hebben een hoge kans om terug te komen — maar alleen als ze op het juiste moment worden gevraagd. De meeste klinieken hebben geen systematisch reactiveringsflow. Retentie is passief en onvoorspelbaar."
            }
        ]
    },
    "Solutions": {
        "title": "De Infrastructuur die Jouw Marketing in Boekingen Converteert",
        "subtitle": "Wij bouwen de CRM, lead nurturing en automatiseringssystemen die jouw marketing koppelen aan bevestigde omzet — gepersonaliseerd, schaalbaar en van jou.",
        "items": [
            {
                "emoji": "⚡",
                "title": "Leadresponsautomatisering — Binnen 5 Minuten",
                "desc": "Wij koppelen jouw webformulieren, Instagram DMs en WhatsApp Business aan een uniforme leadcapture-pipeline. Elke nieuwe aanvraag ontvangt een directe, gepersonaliseerde respons met specifieke behandelinformatie en een directe boekingslink — op elk moment van de dag.",
                "result": "Responstijd van uren naar minder dan 5 minuten. Hogere consultconversie."
            },
            {
                "emoji": "📅",
                "title": "Consultbevestiging en Pre-Behandeling Voorbereiding",
                "desc": "Zodra het consult is geboekt, komt de patiënt in een geautomatiseerde voorbereidingssequentie: bevestiging, herinnering 48 uur van tevoren, procedure-specifieke voorbereidingsrichtlijnen, link naar het toestemmingsformulier en een voorbereidingschecklist.",
                "result": "30–50% reductie in no-shows. Efficiëntere consults."
            },
            {
                "emoji": "💌",
                "title": "Post-Consult Nurturing Sequenties",
                "desc": "Patiënten die een consult hebben gehad maar niet direct een behandeling boeken, komen in een gesegmenteerd nurturing-traject: behandelingspecifieke content, social proof berichten, een tijdelijke follow-up aanbieding en een directe boekingslink.",
                "result": "20–40% van koude consultleads converteert binnen 30 dagen."
            },
            {
                "emoji": "📊",
                "title": "Volledige Funnel Attributie en Marketing Dashboard",
                "desc": "Wij bouwen tracking vanaf jouw advertentieplatforms (Google, Meta) door je CRM heen naar je boekings- en omzetgegevens. Één dashboard: kosten per lead per kanaal, kosten per geboekt consult, kosten per voltooide behandeling en patiënt lifetime value.",
                "result": "Marketingbudgetbeslissingen op basis van werkelijke omzetdata."
            },
            {
                "emoji": "🔄",
                "title": "Retentie- en Upsellautomatisering",
                "desc": "Na elke voltooide behandeling komen patiënten automatisch in een retentie-flow: een tevredenheidscheck-in, een getimede vervolgafspraak aanbeveling afgestemd op de behandeling, een loyaliteitsof pakketaanbieding en een verwijzingsincentief-verzoek.",
                "result": "Hogere gemiddelde patiënt lifetime value. Voorspelbare terugkerende omzet."
            },
            {
                "emoji": "🤖",
                "title": "AI Consultassistent",
                "desc": "Voor hoogvolume-klinieken deployen wij een gepersonaliseerde AI-assistent op jouw website en WhatsApp — getraind op jouw behandelingsportfolio, prijsranges en FAQ-content. Beheert de pre-kwalificatie en leidt prospects naar een consultboeking. 24/7 beschikbaar.",
                "result": "Leads gecaptured en gekwalificeerd buiten kantooruren — zonder personeelskosten."
            }
        ]
    },
    "Scenarios": {
        "title": "Concrete Voorbeelden Van Consult Tot Behouden Patiënt",
        "items": [
            {
                "num": "01",
                "title": "Instagram DM naar Geboekt Consult",
                "desc": "De prospect stuurt een DM naar jouw Instagram met een vraag over lipfillers → de automatisering detecteert de intentie → stuurt direct een respons met behandelingsbeschrijving, prijsindicatie en boekingslink → de prospect boekt direct in de berichtenthread → bevestiging gesynchroniseerd met jouw boekingssysteem."
            },
            {
                "num": "02",
                "title": "No-show Preventie bij Consults",
                "desc": "De patiënt boekt een 60-minuten neuscorrectie-consult. De automatisering stuurt: bevestiging met kalenderuitnodiging → voorbereidingsgids specifiek voor de behandeling 5 dagen van tevoren → herinnering met bevestiging of verplaatsing met één tik 48 uur van tevoren → laatste herinnering 2 uur van tevoren. De no-show ratio daalt van 20% naar minder dan 8%."
            },
            {
                "num": "03",
                "title": "Herwinning Hoogwaardige Leads",
                "desc": "De patiënt informeerde over een complete gezichtsbehandeling (waarde €3.200). Vertrok zonder te boeken. Dag 3: WhatsApp met before/after resultaten van vergelijkbare patiënten. Dag 7: FAQ over de procedure. Dag 14: beperkte beschikbaarheidsboekingsaanbieding. Dag 21: zachte afsluiting. 1 op de 3 van deze leads converteert."
            },
            {
                "num": "04",
                "title": "Post-Behandeling Onderhoudsherinnering",
                "desc": "De patiënt voltooit de Botox-behandeling. De automatisering noteert de datum → 10 weken later ontvangt de patiënt een 'het is tijd voor je touch-up' bericht met directe boekingslink → als hij boekt, stopt de sequentie → zo niet, tweede herinnering op 12 weken → geen reactie, route naar het balieteam."
            },
            {
                "num": "05",
                "title": "Realtime Marketing Attributie",
                "desc": "Je draait een Google advertentie voor 'laserontharing Amsterdam.' De prospect klikt → vult de consultaanvraag in → het CRM registreert de campagne en het zoekwoord → de patiënt voltooit de behandeling → jouw dashboard toont: acquisitiekosten €47, gemiddelde omzet €380. Schaalt de campagne met vertrouwen op."
            },
            {
                "num": "06",
                "title": "Automatisering Verwijzingsprogramma",
                "desc": "30 dagen na een succesvolle behandeling ontvangt de patiënt: 'Beveel een vriend aan en jullie krijgen beiden €50 korting op jullie volgende behandeling.' Als hij de verwijzingslink deelt en een vriend boekt, worden beide kortingen automatisch toegepast. Verwijzingsbron geregistreerd in CRM."
            }
        ]
    },
    "WhyUs": {
        "title": "Waarom Esthetische Kliniezen Kiezen voor een Engineering Partner Boven een Marketingbureau",
        "points": [
            {
                "title": "Wij werken op systeemniveau, niet op campagneniveau",
                "desc": "Wij integreren jouw boekingsplatform, CRM, advertentiedata, WhatsApp en kliniektools in één coherent systeem — het type werk dat de meeste bureaus niet kunnen doen omdat het echte engineering vereist."
            },
            {
                "title": "Geen lock-in — transparante, voorspelbare kosten",
                "desc": "Jouw systemen draaien op infrastructuur die jij bezit of beheert. Als we uit elkaar gaan, blijft alles werken. Sommige oplossingen omvatten een optioneel maandelijks technisch onderhoudsretainer. Wanneer CRM-platforms, leadcapture of marketingautomatisering onderdeel zijn van de oplossing, zijn hun licenties altijd onafhankelijk, vanaf het begin gecommuniceerd en zonder verborgen markup."
            },
            {
                "title": "Gebouwd voor hoogwaardige, high-touch dienstverlening",
                "desc": "Esthetische patiënten zijn geen e-commerce kopers. De lead-cyclus is langer, de relatie is belangrijker en communicatie moet persoonlijk aanvoelen, zelfs wanneer geautomatiseerd. Wij bouwen met dat in gedachten."
            },
            {
                "title": "AVG-compliance, datagevoelig by design",
                "desc": "Behandelingshistorie, toestemmingsregistraties, before/after media — jouw patiëntgegevens zijn gevoelig. Wij bouwen pipelines met passende toegangscontroles, databeleid en AVG-compliance vanaf dag één."
            }
        ]
    },
    "FAQ": {
        "title": "Veelgestelde Vragen",
        "subtitle": "Wat eigenaren van esthetische klinieken vragen voordat ze starten.",
        "questions": [
            {
                "q": "Kunnen jullie integreren met ons huidige boekingssysteem (bijv. Planfy, Timely, Jane App)?",
                "a": "Ja. Wij integreren met elk boekingsplatform dat API of webhook-ondersteuning biedt. Wij mappen jouw specifieke tools tijdens het gratis auditgesprek. Als jouw huidige systeem beperkingen heeft, adviseren wij over alternatieven zonder migratie af te dwingen."
            },
            {
                "q": "Kunnen nurturing-sequenties worden gepersonaliseerd per behandeltype?",
                "a": "Ja. De sequenties zijn volledig gesegmenteerd op behandelingsinteresse. Een prospect die naar Botox informeerde, ontvangt andere content dan iemand die naar bodycontour of laserbehandelingen vroeg. Personalisatie is vanaf het begin ingebouwd."
            },
            {
                "q": "Hoe werkt Instagram DM-automatisering zonder de Meta-voorwaarden te schenden?",
                "a": "Wij gebruiken de officiële Meta Business API voor WhatsApp en Instagram DM-automatisering — volledig conform de servicevoorwaarden van Meta. Geen scraping, geen workarounds van derden. Alle automatiseringen lopen via goedgekeurde officiële kanalen."
            },
            {
                "q": "Worden patiëntgegevens (behandelingshistorie, toestemmingsformulieren) veilig beheerd?",
                "a": "Ja. Alle data-pipelines worden gebouwd met AVG/GDPR-compliance als fundamentele eis. Wij sturen geen gevoelige patiëntgegevens door niet-conforme derden. Self-hosted opties zijn beschikbaar voor klinieken die volledige datasoevereiniteit vereisen."
            },
            {
                "q": "Wat kost dit gemiddeld?",
                "a": "Wij plannen het project na de gratis audit en leveren een vaste-prijs offerte — geen uurtje-factuurtje. De commitment varieert van een gefocuste automatiseringsopstelling tot volledige CRM- en attribuutie-infrastructuur. Wij bespreken jouw budget en doelstellingen tijdens het auditgesprek."
            }
        ]
    },
    "CTA": {
        "label": "Hoeveel hoogwaardige leads verliest jouw kliniek elke maand?",
        "title": "Boek Jouw Gratis Groei-Audit",
        "desc": "Wij bekijken jouw huidige leadmanagement, consultconversie en patiëntretentie-flow — en tonen je precies waar geautomatiseerde systemen de grootste omzetimpact zouden hebben.",
        "button": "Boek Gratis Groei-Audit",
        "subtext": "Voor esthetische, cosmetische en dermatologische klinieken in Nederland. Huidige onboarding-capaciteit: Q2 2026. Vragen? Email info@codehunterlab.com"
    },
    "SEO": {
        "keywords": "esthetische kliniek automatisering Nederland, cosmetische kliniek CRM Nederland, esthetische kliniek lead nurturing, dermatologie boekingsautomatisering, cosmetische kliniek marketing ROI, esthetische kliniek WhatsApp automatisering, esthetische kliniek patiëntretentie",
        "extendedDesc": "CodeHunter Lab bouwt maatwerk CRM, lead nurturing en boekingsautomatiseringssystemen voor esthetische, cosmetische en dermatologische klinieken in Nederland. Van directe leadresponsautomatisering en post-consult nurturing sequenties tot volledige funnel attribuutie dashboards en AI consultassistenten, helpen wij esthetische klinieken meer consults om te zetten in geboekte behandelingen. Gevestigd in Leiden."
    }
}

# ---------------------------------------------------------------------------
# 4. VETERINARY CLINIC
# ---------------------------------------------------------------------------
VETERINARY_CLINIC_NL = {
    "Hero": {
        "badge": "DIERENKLINIEK AUTOMATISERING :: NEDERLAND",
        "title": {
            "part1": "Jouw Dierenkliniek Verliest",
            "highlight": "Elke Dag Omzet",
            "part2": "door Handmatige Admin"
        },
        "description": "CodeHunter Lab bouwt <strong>maatwerk automatiseringsystemen</strong> voor dierenklinieken in Nederland — no-shows reduceren, communicatie met huisdiereigenaren automatiseren en jouw managementsoftware koppelen aan de tools die jouw team dagelijks gebruikt. Geen generieke software. Geen vendor lock-in.",
        "cta": {
            "primary": "Boek een Gratis Audit",
            "secondary": "Bekijk Wat Wij Automatiseren"
        }
    },
    "LanguageNote": "Hoewel wij in Nederland gevestigd zijn, is onze primaire communicatietaal Engels, omdat ons techteam Engels spreekt. Wij bieden echter ook websites in het Nederlands aan, omdat wij een specialist hebben die Nederlandse content proefleest.",
    "PainPoints": {
        "title": "De Werkelijke Kosten van het Beheren van een Dierenkliniek in 2026",
        "items": [
            {
                "emoji": "📅",
                "title": "No-shows en last-minute afmeldingen",
                "desc": "Een gemiste chirurgie of specialistische afspraak kost €150–€500 aan verloren omzet. Als jouw herinneringssysteem bestaat uit een telefoontje de dag ervoor, laat je elke week geld liggen."
            },
            {
                "emoji": "📞",
                "title": "Jouw team is een erg dure antwoordservice",
                "desc": "Agendabelletjes, vaccinatieherinneringen, post-chirurgie check-ins — jouw assistentes besteden 2–3 uur per dag aan communicatie die automatisering in seconden oplost."
            },
            {
                "emoji": "📊",
                "title": "Je weet niet waar je nieuwe klanten vandaan komen",
                "desc": "Is het Google? Een aanbeveling? Instagram? Zonder tracking vanaf de klick tot de afspraak is jouw marketingbudget een gok die je niet kunt optimaliseren."
            },
            {
                "emoji": "🔄",
                "title": "Jaarlijkse controles zijn reactief, niet systematisch",
                "desc": "Huisdieren met openstaande vaccinaties of jaarlijkse controles vertegenwoordigen aanzienlijke omzet. De meeste klinieken hebben geen automatisch systeem om op het juiste moment contact te leggen met hun eigenaren."
            },
            {
                "emoji": "🔌",
                "title": "Jouw systemen communiceren niet met elkaar",
                "desc": "Kliniekmanagement, boekhouding, marketingmails, WhatsApp — vier gescheiden eilanden. Elke gegevensoverdracht is een handmatige stap en een mogelijke fout."
            },
            {
                "emoji": "💬",
                "title": "Post-consult follow-ups gaan verloren",
                "desc": "Een huisdiereigenaar vertrekt na een complexe procedure zonder automatisch post-zorg instructies te ontvangen. Dat gebrek aan follow-up beïnvloedt zowel de resultaten als de reviews."
            }
        ]
    },
    "Solutions": {
        "title": "Wat Wij Bouwen voor Dierenklinieken",
        "subtitle": "Wij zijn geen softwareleverancier. Wij bouwen en integreren de systemen die jouw kliniek al heeft — of nodig heeft — zodat ze automatisch samenwerken.",
        "items": [
            {
                "emoji": "💬",
                "title": "Geautomatiseerde Communicatie met Eigenaren",
                "desc": "Wij koppelen jouw management systeem (Animana, VetSoft of elk platform met API) aan WhatsApp Business API, SMS en e-mail. Afspraakbevestigingen, herinneringen op 48u en 2u, post-behandeling follow-ups — allemaal automatisch geactiveerd vanuit jouw agendagegevens.",
                "result": "30–50% reductie in no-shows binnen 60 dagen."
            },
            {
                "emoji": "🎯",
                "title": "CRM voor Klantacquisitie en -retentie",
                "desc": "Wij bouwen of integreren een CRM-laag die elke nieuwe aanvraag volgt vanaf het eerste contact (Google advertentie, webformulier, verwijzing) tot de geboekte afspraak en lifetime value.",
                "result": "Volledig inzicht van leadbron tot omzet."
            },
            {
                "emoji": "⚡",
                "title": "Lead-naar-Afspraak Automatisering",
                "desc": "Wanneer iemand jouw contactformulier invult, ontvangt hij direct een gepersonaliseerd antwoord, een boekingslink en een 3-staps vervolgtraject als hij niet boekt. Werkt zonder dat jouw team een vinger uitsteekt.",
                "result": "60–80% snellere responstijd. Hogere consult-naar-afspraak conversie."
            },
            {
                "emoji": "🔁",
                "title": "Gezondheidsherinneringscampagnes",
                "desc": "Elke 6–12 maanden genereren huisdieren met openstaande vaccinaties of controles een gepersonaliseerd bericht naar hun eigenaar via het favoriete kanaal. Heractiveeringscampagnes werken automatisch volgens een door jou bepaald schema.",
                "result": "Consistente afspraakratio zonder afhankelijkheid van de balie."
            },
            {
                "emoji": "📊",
                "title": "Dashboard en Rapportages",
                "desc": "Eén dashboard: nieuwe klantacquisitie per bron, afspraakbezettingsgraad, no-show ratio, prestatie van herinneringscampagnes en omzet per behandeltype. Realtime geüpdatet. Toegankelijk vanaf je telefoon.",
                "result": "Beslissingen op basis van data, niet op intuïtie."
            },
            {
                "emoji": "⭐",
                "title": "Google Reviews Automatisering",
                "desc": "Na elke voltooide afspraak ontvangt de eigenaar een tevredenheidsbericht. Positieve antwoorden worden geleid naar een Google review. Kritieke feedback wordt privé doorgestuurd naar de praktijkmanager.",
                "result": "Reviewvolume groeit passief — zonder enige handmatige inspanning."
            }
        ]
    },
    "Scenarios": {
        "title": "Hoe Dit in de Praktijk Uitziet",
        "items": [
            {
                "num": "01",
                "title": "Automatisering Nieuwe Aanvragen",
                "desc": "De eigenaar klikt op jouw Google advertentie → vult het contactformulier in → ontvangt direct een WhatsApp met beschikbare tijden → boekt binnen 2 minuten → bevestiging gesynchroniseerd met jouw kliniekagenda."
            },
            {
                "num": "02",
                "title": "Vaccinatieherinneringscampagne",
                "desc": "Jouw systeem identificeert elk huisdier met openstaande vaccinaties → stuurt een gepersonaliseerde WhatsApp of e-mail → bevat een boekingslink met één klik → afspraak geboekt zonder enige interventie van het personeel. Wordt maandelijks automatisch uitgevoerd."
            },
            {
                "num": "03",
                "title": "Post-Chirurgie Follow-up",
                "desc": "48 uur na een procedure → automatisch follow-up bericht naar de eigenaar → als hij zorgen meldt, komt er een melding bij de dierenarts → als alles goed gaat, activeert een reviewverzoek."
            },
            {
                "num": "04",
                "title": "No-show Preventie",
                "desc": "72 uur voor de afspraak → bevestigingsverzoek verzonden → eigenaar bevestigt of plant opnieuw via WhatsApp → geen reactie binnen 24u → automatisch gepland follow-up belletje voor de balie."
            }
        ]
    },
    "WhyUs": {
        "title": "Waarom Dierenkliniezen Kiezen voor CodeHunter Lab",
        "points": [
            {
                "title": "Wij spreken de taal van de dierenkliniek",
                "desc": "Wij kennen Animana, VetSoft en de operationele realiteit van een drukke kliniek. Wij dringen geen generieke oplossing op — wij mappen jouw huidige workflow en automatiseren de pijnpunten waar jouw team dagelijks over klaagt."
            },
            {
                "title": "Geen afhankelijkheden. Alles is van jou.",
                "desc": "Elke automatisering die wij bouwen, draait op open platforms (n8n, HubSpot, WhatsApp Business API). Geen propriëtaire black boxes. Geen maandelijkse licentiekosten voor ons na oplevering. Het systeem is van jou."
            },
            {
                "title": "Gebouwd voor de Nederlandse dierenkliniekmarkt",
                "desc": "Wij zijn gevestigd in Leiden en kennen het Nederlandse zorglandschap. GDPR-compliance by design. Communicatie in het Nederlands beschikbaar. Lokale marktcontext geïntegreerd."
            },
            {
                "title": "Meetbare ROI vanaf de eerste maand",
                "desc": "Wij tracken no-show ratios, conversie van herinneringscampagnes en nieuwe klantacquisitie voor en na. Je ziet het exacte omzetimpact van elke automatisering die wij deployen — niet alleen activiteitsmetrics."
            }
        ]
    },
    "FAQ": {
        "title": "Veelgestelde Vragen",
        "subtitle": "Alles wat je moet weten voordat je jouw gratis audit boekt.",
        "questions": [
            {
                "q": "Werken jullie met Animana en VetSoft?",
                "a": "Ja. Wij integreren met elk kliniekmanagementsysteem dat een API of data-export mogelijkheid biedt, inclusief Animana en VetSoft."
            },
            {
                "q": "Is het GDPR-compliant?",
                "a": "Absoluut. Alle huisdiereigenaargegevens worden verwerkt conform GDPR. Wij gebruiken EU-gebaseerde infrastructuur, implementeren dataminimalisatie-principes en omvatten passende toestemmingsmechanismen."
            },
            {
                "q": "Hoe lang duurt de implementatie?",
                "a": "Een standaard automatiseringpakket duurt doorgaans 3 tot 5 weken van start tot livegang. Complexere integraties met maatwerk dashboards kunnen 6–8 weken duren."
            },
            {
                "q": "Wat kost het?",
                "a": "Wij berekenen elk project individueel. De meeste projecten voor dierenklinieken starten tussen €3.500 en €8.000. Boek een gratis audit voor een exacte inschatting."
            },
            {
                "q": "Heeft mijn personeel training nodig?",
                "a": "Minimaal. Het doel is om te verminderen wat jouw personeel handmatig moet doen. Wij bieden een overdrachtssessie en documentatie. In de dagelijkse praktijk beheert het systeem zichzelf."
            }
        ]
    },
    "CTA": {
        "label": "Gratis Automatisering Audit",
        "title": "Klaar om te Stoppen met Omzet Verliezen door Handmatige Admin?",
        "desc": "Boek een gratis audit van 45 minuten. Wij mappen jouw huidige workflow, identificeren de 3 beste automatiseringskansen en geven je een heldere ROI-schatting — zonder verplichting.",
        "button": "Boek Jouw Gratis Audit",
        "subtext": "Zonder verplichting. Zonder verkooppraatje. Alleen een helder beeld van wat automatisering voor jouw kliniek kan doen."
    },
    "SEO": {
        "extendedDesc": "CodeHunter Lab is gespecialiseerd in automatiseringsystemen voor dierenklinieken in Nederland, inclusief Amsterdam, Rotterdam, Den Haag, Utrecht, Leiden, Haarlem, Eindhoven en Groningen.",
        "keywords": "dierenkliniek automatisering Nederland, dierenartspraktijk automatisering, dierenkliniek afspraak herinneringen, Animana integratie, VetSoft automatisering, dierenarts WhatsApp automatisering, dierenkliniek CRM Nederland, dierenarts digitalisering"
    }
}


def main():
    # Load existing nl.json
    with open(NL_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Replace the 4 sections
    data["DentalClinic"] = DENTAL_CLINIC_NL
    data["PhysiotherapyClinic"] = PHYSIOTHERAPY_CLINIC_NL
    data["AestheticClinic"] = AESTHETIC_CLINIC_NL
    data["VeterinaryClinic"] = VETERINARY_CLINIC_NL

    # Save with requested formatting
    with open(NL_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("✅ Successfully updated nl.json with Dutch translations for:")
    print("   - DentalClinic")
    print("   - PhysiotherapyClinic")
    print("   - AestheticClinic")
    print("   - VeterinaryClinic")


if __name__ == "__main__":
    main()
