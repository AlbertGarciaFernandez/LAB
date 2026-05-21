import json

FILE_PATH = "/Users/albertgarcia/Desktop/CODEHUNTER/LAB/LAB/messages/nl.json"

# Load existing Dutch file
with open(FILE_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

# ============================================================
# 1. ITSystemIntegration
# ============================================================
data["ITSystemIntegration"] = {
    "Hero": {
        "badge": "IT CONSULTANT NEDERLAND",
        "title": {
            "part1": "Koppel je",
            "highlight": "Gefragmenteerde Systemen"
        },
        "description": "Wij zijn het <strong>software-integratiebedrijf</strong> dat ervoor zorgt dat je apps met elkaar communiceren. Koppel je <strong>CRM</strong>, <strong>ERP</strong> en <strong>Interne Tools</strong> om fouten te elimineren.",
        "cta": {
            "primary": "Laten we praten over je Integratie",
            "secondary": "Bekijk Hoe Het Werkt"
        }
    },
    "Diagram": {
        "source": {
            "title": "Data Silo's",
            "desc": "Airtable / SQL / Excel"
        },
        "engine": {
            "title": "Integratiemotor",
            "desc": "n8n / Maatwerk API"
        },
        "outcome": {
            "title": "Uniforme Workflow",
            "desc": "Automatische Synchronisatie"
        }
    },
    "Services": {
        "api": {
            "title": "Maatwerk API-ontwikkeling",
            "desc": "Wij bouwen veilige, gedocumenteerde API's om je legacy-data beschikbaar te maken voor moderne web- en mobiele apps."
        },
        "legacy": {
            "title": "Legacy-modernisering",
            "desc": "Herschrijf niet je hele monoliet. Wij wikkelen het in een moderne API-laag om de levensduur te verlengen."
        },
        "sync": {
            "title": "Realtime Synchronisatie",
            "desc": "Houd HubSpot, Salesforce en je ERP in perfecte harmonie met event-gedreven architecturen."
        }
    },
    "Process": {
        "title": "Hoe Wij Je Systemen Integreren",
        "subtitle": "Een gestructureerde aanpak zodat niets breekt en niets wordt vergeten.",
        "steps": [
            {
                "number": "01",
                "title": "Integratie-audit",
                "desc": "Inventarisatie van al je apps, API's en dataformaten. Wij identificeren elke handmatige overslag, elk knip-en-plak en elke bottleneck in je huidige dataflow."
            },
            {
                "number": "02",
                "title": "Architectuurontwerp",
                "desc": "Dataflow-diagram, selectie van het integratiepatroon (event-driven, polling, webhooks), foutafhandelingsstrategie en beveiligingsmodel — alles gedocumenteerd vóórdat we bouwen."
            },
            {
                "number": "03",
                "title": "Bouw en Testen",
                "desc": "API-connectors, n8n-workflows of maatwerkbruggen gebouwd parallel aan je productiesystemen. Volledige end-to-end testen vóór de switch. Nul downtime in productie."
            },
            {
                "number": "04",
                "title": "Monitoring en Overdracht",
                "desc": "Dashboards, alerts en runbooks geconfigureerd zodat je team de integratie zelfstandig kan bedienen en diagnosticeren. Volledige documentatie inbegrepen."
            }
        ]
    },
    "FAQ": {
        "title": "Integratievragen",
        "subtitle": "Veelgestelde vragen over het koppelen van je bedrijfssystemen.",
        "questions": [
            {
                "q": "Wat is systeemintegratie?",
                "a": "Het is het proces van het verbinden van verschillende subsystemen (zoals je CRM, ERP en betaalgateways) tot één samenhangend geheel waar data automatisch stroomt."
            },
            {
                "q": "Gebruiken jullie n8n voor automatiseringen?",
                "a": "Ja, n8n is ons primaire automatiseringsplatform. Voor complexere scenario's schrijven we maatwerkcode — integraties in Node.js of Python — afhankelijk van wat het project echt nodig heeft."
            },
            {
                "q": "Hoe beheren jullie dataveiligheid tijdens de integratie?",
                "a": "Wij geven prioriteit aan datasoevereiniteit. Vaak deployen we self-hosted integratiemotoren zodat je bedrijfsgevoelige data nooit je infrastructuur verlaat."
            }
        ]
    },
    "WhyUs": {
        "title": "Integratie die Echt Werkt",
        "without": {
            "title": "Zonder Integratie",
            "points": [
                "Handmatig knippen en plakken tussen apps",
                "Data altijd gedesynchroniseerd",
                "Uren verloren aan administratieve taken",
                "Menselijke fouten in kritieke registers",
                "Geen zicht op je dataflows"
            ]
        },
        "with": {
            "title": "Met CodeHunter Lab",
            "points": [
                "Data stroomt automatisch 24/7",
                "Eén bron van waarheid in al je apps",
                "Je team focust op echt werk",
                "Gevalideerde data, nul handmatige fouten",
                "Volledige monitoring, alerts en auditlogging"
            ]
        }
    },
    "CTA": {
        "badge": "GRATIS INTEGRATIE-AUDIT",
        "title": "Klaar om je Systemen te Koppelen?",
        "subtitle": "Gratis integratie-audit. Wij mappen je huidige dataflows, identificeren de grootste bottleneck en stellen een concrete oplossing voor. Zonder verplichting.",
        "button": "Gratis Integratie-audit Boeken"
    },
    "SEO": {
        "description": "CodeHunter Lab is gespecialiseerd in IT-systeemintegratie voor bedrijven in Nederland. Wij koppelen CRM's, ERP's, databases en maatwerk-API's met n8n, maatwerk API-bruggen en event-gedreven architecturen. Gevestigd in Leiden, bedienen wij bedrijven in Amsterdam, Rotterdam en Den Haag.",
        "keywords": "systeemintegratie IT nederland, API integratiebedrijf leiden, n8n consultant nederland, CRM ERP integratie, software integratiebedrijf amsterdam"
    }
}

# ============================================================
# 2. InternalTools
# ============================================================
data["InternalTools"] = {
    "Hero": {
        "badge": "ONTWIKKELING INTERNE TOOLS",
        "title": {
            "part1": "Jouw Bedrijf,",
            "highlight": "Op Jouw Manier"
        },
        "description": "Standaardsoftware past nooit perfect. Wij bouwen <strong>maatwerk interne tools</strong> die precies aansluiten bij jouw workflows. Ontsnap aan de <strong>chaos van spreadsheets</strong>.",
        "cta": "Begin met Bouwen"
    },
    "Comparison": {
        "title": "Waarom Maatwerk vs Low-Code?",
        "custom": {
            "title": "Maatwerk Ontwikkeling (Onze Methode)",
            "points": [
                "Geen maandelijkse kosten per gebruiker",
                "Volledig flexibele UI/UX",
                "Jij bent eigenaar van de broncode",
                "Onbeperkte schaalbaarheid"
            ]
        },
        "lowcode": {
            "title": "Generieke Low-Code",
            "points": [
                "Dure schaalkosten",
                "Stijve, onhandige interfaces",
                "Afhankelijkheid van de leverancier (Lock-in)",
                "Beperkt prestatieplafond"
            ]
        }
    },
    "Tools": {
        "title": "Wat Wij Bouwen",
        "dashboards": {
            "title": "Operationele Dashboards",
            "desc": "Realtime visualisatie van KPI's, voorraad en bedrijfslogica. Controleer de gezondheid van je bedrijf in één oogopslag."
        },
        "portals": {
            "title": "Klantportalen",
            "desc": "Veilige omgevingen waar je klanten documenten kunnen uploaden, statussen kunnen volgen en communiceren."
        },
        "resource": {
            "title": "Resourcebeheer",
            "desc": "Drag-and-drop planners aangepast aan de structuur en ploegen van jouw specifieke team."
        }
    },
    "Process": {
        "title": "Hoe Wij Jouw Tool Bouwen",
        "subtitle": "Van workflow-audit tot tool in productie — zonder verrassingen of bloat.",
        "steps": [
            {
                "number": "01",
                "title": "Workflow-audit",
                "desc": "Wij mappen je huidige proces: welke tools je gebruikt, waar data vastloopt en waarin je team het meeste tijd steekt. De pijnpunten worden het spec."
            },
            {
                "number": "02",
                "title": "Ontwerp en Datamodel",
                "desc": "Wireframes, databaseschema en API-contracten afgestemd vóórdat we één regel code schrijven. Jij keurt het ontwerp goed voordat wij bouwen."
            },
            {
                "number": "03",
                "title": "Iteratieve Ontwikkeling",
                "desc": "Twee-wekelijkse sprints met live staging-previews. Je team test de echte tool, geen prototype. Feedback wordt verwerkt in de volgende sprint."
            },
            {
                "number": "04",
                "title": "Lancering en Overdracht",
                "desc": "Gedeployed op je infrastructuur. Volledige documentatie, beheerdertraining en 30 dagen post-launch support inbegrepen. Jij bent eigenaar van de code."
            }
        ]
    },
    "FAQ": {
        "title": "FAQ Interne Tools",
        "subtitle": "Stop met vechten tegen je software. Begin met bouwen wat je nodig hebt.",
        "questions": [
            {
                "q": "Waarom een maatwerk interne tool bouwen in plaats van Retool of Appsmith gebruiken?",
                "a": "Voor veel bedrijven worden de kosten per gebruiker van low-code platforms een verborgen, massieve kostenpost naarmate je groeit. Onze tools hebben geen maandelijkse kosten per gebruiker en bieden totale flexibiliteit."
            },
            {
                "q": "Kan mijn interne tool synchroniseren met Excel of Google Sheets?",
                "a": "Ja. Normaal gesproken helpen we bedrijven over te stappen van spreadsheets naar een echte database (zoals Supabase of PostgreSQL) met spreadsheets als back-up indien nodig."
            }
        ]
    },
    "CTA": {
        "title": "Klaar om je Spreadsheets te Vervangen?",
        "subtitle": "Gratis scoping-sessie. Wij mappen je workflow, stellen een oplossing voor en schatten tijdlijnen en kosten. Zonder verplichting.",
        "button": "Gratis Scoping-gesprek Boeken"
    },
    "SEO": {
        "description": "CodeHunter Lab bouwt maatwerk interne tools, admin-panelen en operatieportalen voor bedrijven in Nederland. Wij vervangen spreadsheets en dure low-code platforms door volledig eigen software — zonder kosten per gebruiker, zonder leveranciersafhankelijkheid. Gevestigd in Leiden.",
        "keywords": "maatwerk interne tools nederland, interne tools ontwikkelaar leiden, admin-paneel ontwikkeling, retool appsmith vervangen, maatwerk software ontwikkeling"
    }
}

# ============================================================
# 3. NextJsAgency
# ============================================================
data["NextJsAgency"] = {
    "Hero": {
        "badge": "NEXT.JS ONTWIKKELAGENCY :: NEDERLAND",
        "title": {
            "part1": "Next.js Ontwikkeling",
            "highlight": "Die Schaalt."
        },
        "description": "Op zoek naar <strong>Next.js ontwikkelaars inhuren</strong>? Wij zijn een <strong>Next.js ontwikkelagency</strong> gespecialiseerd in Nederland, die high-performance webapplicaties bouwt met React, TypeScript en AI.",
        "cta": {
            "primary": "Project Starten",
            "secondary": "Bekijk Ons Werk"
        }
    },
    "Services": {
        "ssr": {
            "title": "SSR en SSG Architectuur",
            "description": "Wij bouwen Next.js-apps geoptimaliseerd voor Core Web Vitals. Server-side rendering en statische site-generatie afgestemd op je content- en verkeerspatronen."
        },
        "migration": {
            "title": "Migratie naar Next.js",
            "description": "Migreren van Create React App, Gatsby of een custom webpack-setup? Wij beheren de volledige migratie met nul downtime en betere prestaties."
        },
        "fullstack": {
            "title": "Next.js Full-Stack",
            "description": "Van API Routes tot App Router en server components — wij bouwen complete full-stack applicaties met database, authenticatie en deployment."
        }
    },
    "WhyUs": {
        "title": "Waarom een specialist kiezen?",
        "points": [
            {
                "title": "Diepgaande Framework-kennis",
                "desc": "Wij kennen elke Next.js API — App Router, Server Components, Streaming, Route Handlers en Middleware."
            },
            {
                "title": "Prestatie Voorop",
                "desc": "Elk project richt op +90 in Lighthouse. Wij deployen geen trage code."
            },
            {
                "title": "TypeScript als Standaard",
                "desc": "Volledige typering vanaf dag één. Geen runtime-verrassingen."
            },
            {
                "title": "Nederlandse Markt",
                "desc": "Gevestigd in Leiden, bedienend klanten in Amsterdam, Rotterdam en Den Haag."
            }
        ]
    },
    "Process": {
        "title": "Hoe Wij Bouwen",
        "steps": {
            "0": {
                "title": "Discovery en Architectuur",
                "desc": "Wij definiëren het datamodel, de routingstrategie en de renderingaanpak vóórdat we code schrijven."
            },
            "1": {
                "title": "Snelle Ontwikkeling",
                "desc": "Twee-wekelijkse sprints met staging-previews. Je ziet elke week progressie."
            },
            "2": {
                "title": "Prestatie-audit",
                "desc": "Elke deployment doorloopt Core Web Vitals-testen en Lighthouse-analyse."
            },
            "3": {
                "title": "Overdracht en Documentatie",
                "desc": "Jij krijgt volledige eigendom: repository, CI/CD-pipeline en geïntegreerde documentatie."
            }
        }
    },
    "FAQ": {
        "title": "Next.js Vragen",
        "subtitle": "Veelgestelde vragen over samenwerken met een Next.js ontwikkelagency.",
        "questions": [
            {
                "q": "Wat is het verschil tussen Next.js en React?",
                "a": "React is een UI-bibliotheek. Next.js is een compleet framework gebouwd op React dat SSR, SSG, file-based routing, API routes, image-optimalisatie en meer toevoegt. Voor de meeste productiewebapps is Next.js de juiste keuze."
            },
            {
                "q": "Moet ik App Router of Pages Router gebruiken?",
                "a": "Voor nieuwe projecten raden wij altijd de App Router aan (geïntroduceerd in Next.js 13+). Deze ondersteunt React Server Components, streaming en geneste layouts — kritieke functies voor moderne, schaalbare webapps."
            },
            {
                "q": "Kunnen jullie onze bestaande React-app migreren naar Next.js?",
                "a": "Ja, en dit is een van onze meest voorkomende engagements. Wij migreren projecten van Create React App, Vite en Gatsby naar Next.js met betere SEO, prestaties en ontwikkelaarservaring."
            },
            {
                "q": "Hoe lang duurt een typisch Next.js project?",
                "a": "Een standaard webapplicatie duurt 6 tot 10 weken van architectuur tot lancering. Complexere platforms met custom backends of e-commerce-integraties kunnen 3 tot 6 maanden duren."
            }
        ]
    },
    "CTA": {
        "badge": "Klaar om te bouwen?",
        "title": "Start Je Next.js Project",
        "subtitle": "Gratis architectuurconsulting. Wij mappen je stack, tijdlijnen en kosten — zonder verplichting.",
        "button": "Gratis Consulting Boeken"
    },
    "SEO": {
        "keywords": "next.js ontwikkelagency nederland, next.js ontwikkelaar inhuren, next.js consulting nederland, react next.js agency leiden, next.js app router specialist",
        "extendedDesc": "Als toegewijde Next.js ontwikkelagency in Leiden bouwen wij productiewebapplicaties voor bedrijven in Nederland. Ons team is gespecialiseerd in de nieuwste Next.js-functies inclusief App Router, React Server Components en edge rendering. Neem contact op voor een gratis Next.js architectuurreview."
    }
}

# ============================================================
# 4. ReactConsulting
# ============================================================
data["ReactConsulting"] = {
    "Hero": {
        "badge": "REACT CONSULTING :: NEDERLAND",
        "title": {
            "part1": "React Architectuur",
            "highlight": "Goed Gedaan."
        },
        "description": "<strong>Senior React consulting</strong> voor teams die willen schalen zonder chaos. Wij auditen, refactoren en ontwerpen React-architecturen voor <strong>langetermijnonderhoudbaarheid</strong>.",
        "cta": {
            "primary": "Audit Boeken",
            "secondary": "Bekijk Succesverhalen"
        }
    },
    "Services": {
        "audit": {
            "title": "Code-audit",
            "description": "Wij analyseren je React-code grondig, identificeren anti-patronen, prestatiebottlenecks en schaalrisico's — en geven je een concreet actieplan."
        },
        "architecture": {
            "title": "Architectuurontwerp",
            "description": "Van statemanagement-strategie (Zustand, Context, TanStack Query) tot componentpatronen en mappenstructuur — wij ontwerpen om teams te laten schalen."
        },
        "migration": {
            "title": "React-update en -migratie",
            "description": "React 18 concurrent features, migratie van legacy class components, of overstap van Create React App naar Vite. Wij beheren complexe migraties veilig."
        }
    },
    "Comparison": {
        "title": "Consulting vs. Werven",
        "consulting": {
            "title": "React Consulting (Ons Model)",
            "points": [
                "Senior ervaring vanaf dag één",
                "Geen wervings overhead of opzegtermijnen",
                "Architectuur + uitvoering, niet alleen advies",
                "Kennisoverdracht aan je team"
            ]
        },
        "hiring": {
            "title": "Traditionele Werving",
            "points": [
                "3-6 maanden werven en onboarden",
                "Verborgen kosten (benefits, belastingen, hardware)",
                "Risico op culturele of vaardigheidsmismatch",
                "Langzamer voor kortetermijnprojecten"
            ]
        }
    },
    "Process": {
        "title": "Ons Samenwerkingsmodel",
        "steps": {
            "0": {
                "title": "Discovery (1 uur)",
                "desc": "Wij begrijpen je stack, teamgrootte en de specifieke bottleneck."
            },
            "1": {
                "title": "Architectuur-audit",
                "desc": "Diepgaande 2-3 dagen analyse van je repository. Je ontvangt een schriftelijk rapport met prioriteiten."
            },
            "2": {
                "title": "Sprint-uitvoering",
                "desc": "Wij implementeren de kritieke fixes of ontwerpen de nieuwe structuur samen met je team."
            },
            "3": {
                "title": "Kennisoverdracht",
                "desc": "Documentatie, teamworkshop en opgenomen walkthrough zodat je team het zelf kan onderhouden."
            }
        }
    },
    "FAQ": {
        "title": "React Consulting Vragen",
        "subtitle": "Veelgestelde vragen over onze React-architectuur consulting diensten.",
        "questions": [
            {
                "q": "Wat is inbegrepen bij een React-architectuur audit?",
                "a": "Een volledige audit omvat: componentstructuur en herbruikbaarheid, statemanagement-patronen, prestatieprofiling (React DevTools, Lighthouse), bundle-analyse en testcoverage. Je ontvangt een schriftelijk rapport binnen 5 werkdagen."
            },
            {
                "q": "Werken jullie met bestaande teams of alleen nieuwe projecten?",
                "a": "Wij zijn gespecialiseerd in aansluiten bij bestaande teams en codebases. Wij focussen op het verbeteren van wat er is, niet het herschrijven vanaf nul, tenzij technische schuld dat noodzakelijk maakt."
            },
            {
                "q": "Welke React state-bibliotheken adviseren jullie?",
                "a": "Voor server-state: TanStack Query (React Query). Voor lichtgewicht globale state: Zustand. Voor complexe UI-state: Jotai. Wij vermijden Redux tenzij er een sterke legacy-reden is om het te behouden."
            },
            {
                "q": "Kunnen jullie ons helpen Core Web Vitals te verbeteren in een React SPA?",
                "a": "Ja. SPA's hebben vaak slechte LCP- en CLS-scores. Wij implementeren code splitting, lazy loading, bundle-optimalisatie en adviseren vaak een overstap naar Next.js voor SSR-voordelen."
            }
        ]
    },
    "CTA": {
        "badge": "Gratis 1-uurs sessie",
        "title": "Boek Je React Audit",
        "subtitle": "Wij bekijken je codebase, identificeren de 3 grootste problemen en geven je een helder actieplan — zelfs als we nooit samenwerken.",
        "button": "Gratis Audit Boeken"
    },
    "SEO": {
        "keywords": "react consulting nederland, react architectuur consultant, react ontwikkelaar inhuren nederland, react code audit, react refactoring diensten, senior react developer leiden",
        "extendedDesc": "CodeHunter Lab biedt senior React consulting diensten aan teams door heel Nederland. Van code-audits tot volledige architectuurherontwerpen, helpen wij engineeringteams hun React-applicaties te schalen zonder chaos. Onze consultants hebben React-apps gebouwd voor e-commerce, SaaS en fintech-klanten in Amsterdam, Rotterdam en Leiden."
    }
}

# Save back to file
with open(FILE_PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("✅ Successfully updated nl.json with Dutch translations for:")
print("   - ITSystemIntegration")
print("   - InternalTools")
print("   - NextJsAgency")
print("   - ReactConsulting")
