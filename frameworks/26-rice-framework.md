# RICE Framework - Reach Impact Confidence Effort

## Czym jest?

RICE to scoring model priorytetyzacji projektów i features używany głównie przez product managers. RICE to akronim od czterech faktorów używanych do oceny każdego project idea: **Reach** (Zasięg), **Impact** (Wpływ), **Confidence** (Pewność) i **Effort** (Wysiłek).

Framework został rozwinięty przez product team w Intercom, którzy stworzyli model matching ich organizational culture i potrzeby. Od tego czasu zyskał popularność w globalnej społeczności product management professionals.

## Dla kogo jest?

- **Product Managerów** - priorytetyzujących product backlog i roadmap
- **Product Teams** - decydujących które features budować
- **Startup founderów** - wybierających gdzie focus limited resources
- **Engineering Managers** - alokujących zespoły do projektów
- **Innovation teams** - oceniających które experiments przeprowadzić

## Co można z tego uzyskać?

1. **Objective priorytetyzacja** - numeryczny score zamiast gut feeling
2. **Data-driven decisions** - oparte na metrics, nie opinions
3. **Consensus w zespole** - wspólna metodologia eliminuje arguments
4. **Resource optimization** - focus na high-impact, low-effort projects
5. **Curb enthusiasm** - Confidence factor kontroluje over-optimism

## Dlaczego warto z tego skorzystać?

- **Developed by practitioners** - Intercom product team dla real needs
- **Simple formula** - Easy to calculate i understand
- **Widely adopted** - Używany przez product teams globalnie
- **Balanced approach** - Considers zarówno value jak i cost
- **Combats biases** - Szczególnie optimism bias w early-stage ideas

## Formula RICE

```
RICE Score = (Reach × Impact × Confidence) / Effort
```

**Wyższy score = Wyższy priorytet**

## Cztery komponenty RICE

### 1. 🎯 REACH (Zasięg)
**Pytanie:** Ile ludzi/events dotrzesz w danym okresie czasu?

**Definicja:** Liczba people/transactions per time period (np. "customers per quarter" lub "transactions per month")

**Jak mierzyć:**
- **Product launch:** Liczba users którzy zobaczą feature w Q1
- **Marketing campaign:** Impressions per month
- **New feature:** % user base affected

**Przykłady:**
- "5,000 customers per quarter" → Reach = 5000
- "30% of our user base" (jeśli base = 10,000) → Reach = 3000
- "Every transaction" (jeśli 50K transactions/month) → Reach = 50000

**Best practice:**
- Use konkretną unit czasową (per quarter zwykle)
- Bądź conservative w estimates

### 2. 💥 IMPACT (Wpływ)
**Pytanie:** Jak dużo każda osoba będzie impacted?

**Definicja:** Multiple-choice scale measuring impact per person:

**Skala:**
- **3** = Massive impact
- **2** = High impact
- **1** = Medium impact
- **0.5** = Low impact
- **0.25** = Minimal impact

**Jak oceniać:**
Impact na user experience, revenue, satisfaction, etc.

**Przykłady:**
- **Massive (3):** Core feature fundamentalnie changing product (np. adding messaging do networking app)
- **High (2):** Znacząca improvement do existing feature (np. 2x faster load times)
- **Medium (1):** Visible improvement, moderate benefit (np. better UI dla one screen)
- **Low (0.5):** Small improvement (np. changing button color)
- **Minimal (0.25):** Barely noticeable (np. minor copy changes)

**Best practice:**
- Discuss z zespołem żeby reach consensus
- Reference previous projects jako benchmarks

### 3. 🎲 CONFIDENCE (Pewność)
**Pytanie:** Jak pewny jesteś swoich estimates (Reach, Impact, Effort)?

**Definicja:** Percentage representing confidence level w swoich data i assumptions.

**Skala:**
- **100%** = High confidence (solid data)
- **80%** = Medium confidence (some data)
- **50%** = Low confidence (mostly assumptions)

**Cel:** Curb enthusiasm dla exciting ale ill-defined ideas.

**Przykłady:**
- **100% Confidence:** Mamy A/B test results, user research, clear requirements
- **80% Confidence:** Mamy qualitative feedback, ale brak hard data
- **50% Confidence:** To educated guess, minimal data

**Kiedy używać low confidence:**
- Exciting idea ale brak supporting data
- Dużo unknowns w requirements
- Impact estimate jest speculative
- Effort is highly uncertain

**Best practice:**
- Jeśli poniżej 50%, może nie powinieneś priorytetyzować yet
- Use low confidence jako signal żeby gather more data before committing

### 4. ⚙️ EFFORT (Wysiłek)
**Pytanie:** Ile "person-months" zajmie delivery?

**Definicja:** Estimate total time jednego team member może zrobić w miesiąc.

**Jednostka:** Person-months

**Jak liczyć:**
- **1 person-month** = Praca którą jedna osoba robi w miesiąc
- **Team of 3 przez 2 tygodnie** = 1.5 person-months
- **5 people przez 1 miesiąc** = 5 person-months

**Przykłady:**
- Simple UI change: 0.5 person-months
- New feature (medium): 2 person-months
- Complex integration: 8 person-months
- Major platform rewrite: 20+ person-months

**Include:**
- Design time
- Development time
- Testing time
- Deployment
- Documentation

**Best practice:**
- Round do nearest 0.5 lub whole number
- Be realistic, nie optimistic
- Include wszystkie phases (nie tylko coding)
- Ask engineering team dla estimates

## Przykład calculation RICE Score

### Project: Add social sharing feature

**Reach:** 2,500 users per quarter będzie używać
**Impact:** High (2) - znacząco increases viral growth
**Confidence:** 80% (mamy user research, ale nie tested yet)
**Effort:** 1 person-month

**Calculation:**
```
RICE Score = (2,500 × 2 × 0.8) / 1
RICE Score = 4,000 / 1
RICE Score = 4,000
```

### Project: Redesign settings page

**Reach:** 10,000 users per quarter visit settings
**Impact:** Low (0.5) - makes easier but not critical
**Confidence:** 100% (clearly scoped)
**Effort:** 2 person-months

**Calculation:**
```
RICE Score = (10,000 × 0.5 × 1.0) / 2
RICE Score = 5,000 / 2
RICE Score = 2,500
```

**Decision:** Social sharing (4,000) > Settings redesign (2,500)

## Jak stosować RICE w praktyce

### Proces:

#### 1. List wszystkie project ideas
Zbierz backlog items, feature requests, improvements.

#### 2. Score każdy project

**Dla każdego:**
- **Reach:** Research lub estimate numbers
- **Impact:** Zespół discussion i vote
- **Confidence:** Assess data quality
- **Effort:** Engineering estimates

#### 3. Calculate RICE scores
Apply formula dla każdego.

#### 4. Sort by score (high → low)
Highest scores = highest priority.

#### 5. Review i adjust
**Sanity check:**
- Czy top priorities make sense?
- Czy są strategic priorities które nie scored high?
- Czy scores reflect reality?

#### 6. Update regularnie
As learn more:
- Update Reach (actual data)
- Update Impact (observed results)
- Update Confidence (more certainty)
- Update Effort (reality vs estimate)

## Best Practices

### DO:
✅ **Base Reach na solid data** - Analytics, research, market size
✅ **Discuss Impact jako team** - Avoid individual bias
✅ **Update scores regularnie** - RICE is living, nie static
✅ **Use w roadmap planning** - Quarterly review wszystkich scores
✅ **Be honest o Confidence** - Low confidence jest OK signal
✅ **Include all Effort** - Design, dev, test, deploy, docs

### DON'T:
❌ **Nie manipulate numbers** - żeby favor pet projects
❌ **Nie ignore low scorers** - Mogą być strategic reasons
❌ **Nie treat jako absolute** - To tool, nie replacement dla judgment
❌ **Nie skip team input** - Especially dla Impact i Effort
❌ **Nie compare across vastly different project types** - RICE works best w similar domains

## Przykład: Intercom's use

Intercom (twórcy RICE) używają tego do:

**Product decisions:**
- Które features dodać do roadmap
- Priorytetyzacja bug fixes vs new features
- Deciding które experiments run

**Results:**
- Fewer arguments o priorities
- More data-driven culture
- Better alignment w product org
- Focus na high-impact work

## RICE vs inne priorytetyzacja frameworks

### RICE vs ICE (Impact, Confidence, Ease)
**ICE:** Similar, ale brak Reach component
**RICE:** More complete - includes scale (Reach)

### RICE vs MoSCoW (Must, Should, Could, Won't)
**MoSCoW:** Categorical, qualitative
**RICE:** Numerical, quantitative

### RICE vs Kano Model
**Kano:** Focuses na customer satisfaction dimensions
**RICE:** Focuses na resource optimization

### RICE vs WSJF (SAFe)
**WSJF:** Cost of Delay / Job Size (Agile/SAFe framework)
**RICE:** Simpler, more intuitive dla non-Agile teams

## Ograniczenia RICE

### Krytyka:

❌ **False precision** - Numbers sugerują accuracy której może nie być
❌ **Doesn't capture strategy** - High score nie znaczy strategic fit
❌ **Effort estimation errors** - Notoriously trudne accurate estimate
❌ **Impact subjectivity** - 2 vs 3 może być arbitrary
❌ **Doesn't consider dependencies** - Project A może be prerequisite dla Project B

### Mitigacje:

✅ **Treat jako guide, nie gospel** - Use judgment alongside scores
✅ **Add strategic tier** - Must-do items regardless of RICE
✅ **Regular retrospectives** - Compare estimates vs actual
✅ **Team calibration sessions** - Ensure consistent Impact scoring
✅ **Dependency mapping** - Separately track i manage

## Варианты i Rozszerzenia

### RICE + Strategic Tier

Add kategorię "Strategic" dla must-do items:
- **Tier 0:** Strategic (legal, infrastructure, critical)
- **Tier 1:** High RICE (score > 1000)
- **Tier 2:** Medium RICE (score 100-1000)
- **Tier 3:** Low RICE (score < 100)

### Weighted RICE

Adjust weights based na organization priorities:
```
Score = (Reach × Impact_weight × Confidence) / Effort
```

Where Impact_weight could emphasize revenue vs user satisfaction.

## Narzędzia do RICE scoring

**Spreadsheets:**
- Google Sheets templates
- Excel with formulas

**Product Management tools:**
- Productboard - built-in RICE
- Aha! - RICE scoring
- Jira - plugins dla RICE

**Custom calculators:**
- Online RICE calculators
- Internal tools

## Kluczowe osoby

### Intercom Product Team
Rozwinęli RICE framework aby match swoją organizational culture. Opublikowali methodology publicznie, sharing z product community.

### Sean McBride (Intercom)
Product Manager który spopularyzował RICE przez blog posts i talks.

## Kiedy używać RICE

### Ideal use cases:
✅ Product backlog priorytetyzacja
✅ Feature roadmap planning
✅ Experiment selection
✅ Tech debt vs features trade-offs
✅ Resource allocation decisions

### Not ideal:
❌ Strategic, must-do initiatives (legal, compliance)
❌ Emergency fixes
❌ Very small decisions (overkill)
❌ When you lack any data (all speculation)

## Źródła

- [RICE Scoring Model - ProductPlan](https://www.productplan.com/glossary/rice-scoring-model/)
- [RICE Prioritization Framework - Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)
- [RICE Scoring Model - Whatfix](https://whatfix.com/blog/rice-scoring-model/)
- [How to Use the RICE Framework - Product School](https://productschool.com/blog/product-fundamentals/rice-framework)
- [Understanding the RICE Model - Microsoft 365](https://www.microsoft.com/en-us/microsoft-365-life-hacks/organization/understanding-the-rice-model-and-its-framework)
