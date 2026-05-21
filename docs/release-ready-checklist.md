# Release-Ready Checklist

## 1) Quality Gates
- [ ] `npm run lint` passes with no warnings/errors.
- [ ] `npm test` passes (current baseline: 22/22).
- [ ] `npm run build` passes in production mode.

## 2) i18n Coverage
- [ ] `en`, `es`, `nl` messages contain all required Header/Footer keys.
- [ ] No hardcoded `/en/...` navigation links remain in public UI.
- [ ] Key commercial routes render correctly in all three locales.

## 3) SEO Metadata
- [ ] Locale layout exposes `alternates.languages` with `en`, `es`, `nl`, `x-default`.
- [ ] `openGraph.locale` supports `en_US`, `es_ES`, `nl_NL`.
- [ ] New landings have canonical + hreflang via shared metadata helper.
- [ ] Dynamic article pages (`insights/[slug]`, `case-studies/[slug]`) include locale alternates.

## 4) Internal Linking
- [ ] Footer links to new strategic landings:
  - `/n8n-consultant-netherlands`
  - `/ai-voice-agents-netherlands`
  - `/whatsapp-automation-netherlands`
- [ ] Links are locale-aware when relevant.

## 5) Regression Safety
- [ ] `tests/seo-insights.test.mjs` validates locale-aware nav patterns.
- [ ] No restricted `FAQPage` JSON-LD appears on commercial pages.
- [ ] Sitemap includes newly added strategic routes.

## 6) Final Manual Spot Check
- [ ] Header/Footer render correctly on desktop and mobile.
- [ ] Language switcher preserves route and locale.
- [ ] No broken links on top navigation and footer.
