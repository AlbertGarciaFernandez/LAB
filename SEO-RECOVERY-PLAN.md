# Plan de Recuperación de Indexación — codehunterlab.com

**Fecha:** 2026-06-01
**Sitio:** codehunterlab.com
**Estado:** ~24 páginas indexadas, impresiones en caída (100→20-70), 16 páginas "Crawled - not indexed"

---

## Diagnóstico raíz

1. **16 páginas "Crawled - not indexed"** → El contenido de texto es único por industria, pero todas comparten **95% de estructura/template idéntica**. Google detecta esto como "templated content" y rechaza la indexación.
2. **8 redirecciones** → 4 son correctas (HTTP→HTTPS, non-www→www, /→/en). Las otras 4 sugieren enlaces internos sin locale prefix.
3. **1 página 404** → No identificada en URLs internas; probablemente enlace externo roto o URL antigua.
4. **Enlaces hardcodeados a `/en/`** → En `InsightsSection.tsx`, slug pages de case-studies e insights. Usan `next/link` en lugar del `Link` intl-aware.
5. **`/nl/lab/app` no bloqueado en robots.txt** → Olvido de la variante holandesa.

---

## Fase 1: Arreglos técnicos críticos (Impacto inmediato, ~1-2h)

| # | Tarea | Archivo(s) | Detalle |
|---|-------|------------|---------|
| 1.1 | Bloquear `/nl/lab/app` en robots | `app/robots.ts` | Añadir `/nl/lab/app` al array `disallow` |
| 1.2 | Arreglar enlaces hardcodeados `/en/` | `components/sections/InsightsSection.tsx` | Reemplazar `next/link` por `Link` de `@/navigation` con `locale="en"` |
| 1.3 | Arreglar back-link case-studies | `app/[locale]/case-studies/[slug]/page.tsx` | Mismo cambio: usar `Link` intl con `locale="en"` |
| 1.4 | Arreglar back-link insights | `app/[locale]/insights/[slug]/page.tsx` | Mismo cambio |
| 1.5 | Estandarizar Dental Clinic | `app/[locale]/dental-clinic-automation-netherlands/PageContent.tsx` | Cambiar de patrón props a `useTranslations()` como el resto |

---

## Fase 2: Diferenciación de páginas de industria (Impacto en indexación, ~4-6h)

**Decisión: Mantener páginas separadas** (cada industria = nicho de búsqueda distinto) pero diferenciarlas estructural y visualmente.

| # | Tarea | Archivo(s) | Detalle |
|---|-------|------------|---------|
| 2.1 | Rediseñar layout de 2-3 páginas principales | Las 6 páginas de industria | Cambiar ORDEN de secciones en 2-3 páginas (ej. Dental: Hero → Scenarios → Pain Points → Solutions; Real Estate: Hero → Solutions → Scenarios → Pain Points) |
| 2.2 | Añadir componente visual único por industria | Cada PageContent.tsx | Crear UN componente exclusivo: Dental = timeline "Patient Journey"; Real Estate = mapa "Response Speed by Hour"; Accounting = flujo "Document Pipeline"; etc. |
| 2.3 | Diferenciar color de acento | Tailwind classes en cada PageContent | Asignar color secundario distintivo: Dental = azul médico, Real Estate = dorado, Aesthetic = lila, Vet = verde, Accounting = verde oscuro, Physio = teal |
| 2.4 | Diferenciar FAQs completamente | Archivos de traducción JSON | Asegurar que las 5 preguntas de cada industria sean 100% diferentes, no variaciones del mismo tema |
| 2.5 | Crear 5 opengraph-image.tsx | `aesthetic-clinic...`, `physiotherapy...`, `veterinary...`, `accounting...`, `real-estate...` | Actualmente solo Dental tiene OG image. Las demás usan el fallback genérico. |

**Prioridad de industrias para rediseño:** Dental → Real Estate → Aesthetic → Veterinary → Accounting → Physiotherapy

*(Razón: Dental y Real Estate tienen pain points más visuales y mayor potencial de búsqueda)*

---

## Fase 3: Señales de calidad y canonicals (~2-3h)

| # | Tarea | Verificación |
|---|-------|------------|
| 3.1 | Verificar canonical tags | Cada página ES/NL debe tener `<link rel="canonical" href="https://www.codehunterlab.com/es/...">` a sí misma, NO a la versión EN |
| 3.2 | Verificar hreflang | `next-intl` debería generar `<link rel="alternate" hreflang="...">` automáticamente. Verificar en el `<head>` renderizado |
| 3.3 | Verificar que `/lab/app/*` devuelve noindex o está bloqueado | Confirmar que las páginas internas no aparecen en indexación |

---

## Fase 4: Consolidación de industrias (~2-3h)

**Decisión: Fusionar 6 industrias pequeñas → 4 categorías B2B más grandes**

| URL vieja | Redirige a | Razón |
|-----------|-----------|-------|
| `/dental-clinic-automation-netherlands` | `/healthcare-automation-netherlands` | Dental + Physio + Vet = mismo core de clínica médica |
| `/physiotherapy-clinic-automation-netherlands` | `/healthcare-automation-netherlands` | Citas, recordatorios, reactivación de pacientes |
| `/veterinary-clinic-automation-netherlands` | `/healthcare-automation-netherlands` | CRM y automatización idéntica |
| `/accounting-firm-automation-netherlands` | `/professional-services-automation-netherlands` | Expandir a consultoras, abogados, agencias |
| `/aesthetic-clinic-automation-netherlands` | (se mantiene) | Nicho diferente: Instagram DM, alto valor |
| `/real-estate-automation-netherlands` | (se mantiene) | Muy diferente: Funda, velocidad de respuesta |

**Redirects 301** añadidos en `next.config.mjs`.

## Fase 5: Recuperación en Google Search Console (~30min + espera)

| # | Tarea | Cuándo |
|---|-------|--------|
| 5.1 | Request re-indexación de las 8 páginas legítimas restantes | Después de completar Fases 1-4 |
| 5.2 | Re-submitear sitemap.xml | Inmediatamente después |
| 5.3 | Monitorear Chart.csv semanalmente | Durante 4 semanas |

---

## Checklist de validación

- [x] robots.ts incluye `/nl/lab/app`
- [x] InsightsSection.tsx usa `Link` intl
- [x] slug pages usan `Link` intl para back-links
- [x] Dental Clinic usa `useTranslations()`
- [x] Dental: layout reordenado (timeline insertado, marquee eliminado)
- [x] Real Estate: layout reordenado (chart insertado, secciones movidas)
- [x] Dental tiene componente visual exclusivo: PatientJourneyTimeline
- [x] Real Estate tiene componente visual exclusivo: ResponseSpeedChart
- [x] Real Estate usa color de acento hunter-orange (diferente de Dental)
- [x] 5 archivos opengraph-image.tsx nuevos creados
- [x] Build de Next.js pasa sin errores
- [x] 6 industrias → 4 categorías B2B (Healthcare, Aesthetic, Professional Services, Real Estate)
- [x] Redirects 301 configurados en next.config.mjs
- [x] Header/Footer/Sitemap actualizados con nuevas URLs
- [x] Contenido de Healthcare actualizado: menciona dental, physio, vet, medical
- [x] Contenido de Professional Services actualizado: menciona accounting, consultancies, legal, agencies
- [x] Traducciones ES/NL actualizadas con nuevas categorías
- [ ] Sitemap re-submiteado en GSC
- [ ] Request indexing enviado para las 8 páginas restantes
