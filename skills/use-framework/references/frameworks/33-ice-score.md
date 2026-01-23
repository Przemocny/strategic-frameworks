# ICE Score

## Czym jest?

ICE Score to prosty, szybki framework priorytetyzacji projektów, features lub eksperymentów oparty na trzech kryteriach: **Impact (Wpływ), Confidence (Pewność) i Ease (Łatwość)**. Stworzony przez Seana Ellisa, twórcę terminu "growth hacking", ICE został zaprojektowany dla zespołów growth potrzebujących szybkiej priorytetyzacji dziesiątek pomysłów w środowisku eksperymentalnym.

W przeciwieństwie do bardziej złożonych frameworków jak RICE, ICE celowo pozostaje prosty - każdy kryter dostaje score od 1 do 10, a finalny ICE score to średnia z trzech liczb. Ta prostota pozwala na szybką priorytetyzację bez paraliżu analitycznego.

## Dla kogo jest?

- **Growth teams** - priorytetyzujących eksperymenty i testy
- **Product Managerów** - z długą listą feature ideas
- **Startup founders** - potrzebujących szybkich decyzji z ograniczonymi zasobami
- **Marketing teams** - testujących różne kampanie i kanały
- **Lean teams** - praktykujących Build-Measure-Learn cycles

## Co można z tego uzyskać?

1. **Szybką priorytetyzację** - score pomysłu w 2 minuty, nie 2 godziny
2. **Redukcję biasu** - wymuszenie myślenia o confidence, nie tylko "jak fajny" jest pomysł
3. **Focus na quick wins** - identyfikacja high-impact, easy-to-implement ideas
4. **Transparentność** - wszyscy w zespole rozumieją dlaczego coś jest priorytetem
5. **Rytm eksperymentów** - szybkie decyzje = więcej testów = szybsze uczenie się

## Dlaczego warto z tego skorzystać?

- **Stworzony dla growth hacking** - przez Seana Ellisa, ojca growth hacking
- **Używany przez top growth teams** - Dropbox, HubSpot, Amplitude
- **Przeciwwaga dla HiPPO** - data-driven scoring vs Highest Paid Person's Opinion
- **Prosty = adoption** - cały zespół może używać bez długiego szkolenia
- **Iteracyjny** - łatwo re-score w miarę uczenia się

## Trzy Komponenty ICE Score

### 1. Impact (Wpływ)

**Pytanie:** Jak duży będzie pozytywny wpływ tego pomysłu na Twoją kluczową metrykę?

**Skala 1-10:**
- **10:** Massive impact - może 2-5x kluczowej metryki
- **7-9:** Large impact - może 25-100% improvement
- **4-6:** Medium impact - może 10-25% improvement
- **1-3:** Small impact - może < 10% improvement

**Co rozważyć:**
- Jaka jest wielkość potencjalnego wpływu?
- Ile użytkowników/klientów będzie dotkniętych?
- Jak ważna jest metryka której to dotyczy?

**Przykłady:**
- **Impact 10:** Nowy core feature który może podwoić conversion rate
- **Impact 7:** Optimization który może zwiększyć retention o 30%
- **Impact 4:** Small UX improvement która może zwiększyć engagement o 5%
- **Impact 2:** Nice-to-have feature dla niewielkiej grupy użytkowników

### 2. Confidence (Pewność)

**Pytanie:** Jak pewny jesteś że ten pomysł przyniesie zakładany impact?

**Skala 1-10:**
- **10:** Bardzo pewny - masz data, case studies, A/B tests z podobnych rzeczy
- **7-9:** Dosyć pewny - masz qualitative data, customer research
- **4-6:** Średnio pewny - masz hipotezę opartą na logice, ale mało data
- **1-3:** Niska pewność - "gut feeling", spekulacja

**Co rozważyć:**
- Czy masz data wspierające ten pomysł?
- Czy inni zrobili coś podobnego (case studies)?
- Czy rozmawiałeś z klientami o tym?
- Czy jest to sprawdzony pattern czy eksperyment?

**Przykłady:**
- **Confidence 10:** A/B test pokazał 50% lift w competitor's product
- **Confidence 8:** 20 customer interviews pokazało że to jest problem
- **Confidence 5:** Logical hypothesis, ale brak data
- **Confidence 2:** "Wydaje mi się że to fajny pomysł"

**WAŻNE:** Confidence chroni przed "shiny object syndrome" - pomysły które brzmią cool ale mają niską szansę sukcesu.

### 3. Ease (Łatwość)

**Pytanie:** Jak łatwo/szybko możesz to zaimplementować?

**Skala 1-10:**
- **10:** Ekstremnie łatwe - kilka godzin, no-code, configuration
- **7-9:** Dość łatwe - dni, nie tygodnie, minimal dev work
- **4-6:** Medium effort - 1-2 tygodnie dev time
- **1-3:** Trudne - tygodnie lub miesiące, complex engineering

**Co rozważyć:**
- Ile czasu developerskiego potrzeba?
- Czy wymaga to external dependencies?
- Czy masz już komponenty/tools których potrzebujesz?
- Jakie jest ryzyko techniczne?

**Przykłady:**
- **Ease 10:** Copy change na landing page
- **Ease 8:** Użycie istniejącego tool/integration
- **Ease 5:** Nowy feature wymagający 2 tygodni dev
- **Ease 2:** Rebuild całego systemu, 3 miesiące work

## Obliczanie ICE Score

**Formula:**
```
ICE Score = (Impact + Confidence + Ease) / 3
```

To **średnia** trzech scores, nie suma.

**Przykład 1: High-Priority Experiment**
- Impact: 9 (może zwiększyć conversion o 40%)
- Confidence: 8 (case study z innego produktu pokazał sukces)
- Ease: 9 (change w copy i CTA button)
- **ICE Score: (9 + 8 + 9) / 3 = 8.67** ✅ DO THIS FIRST

**Przykład 2: Low-Priority "Cool Idea"**
- Impact: 7 (brzmi obiecująco)
- Confidence: 3 (pure speculation, no data)
- Ease: 4 (wymaga 2 tygodni dev)
- **ICE Score: (7 + 3 + 4) / 3 = 4.67** ❌ DEPRIORITIZE

**Przykład 3: Quick Win**
- Impact: 5 (średni wpływ)
- Confidence: 7 (customer feedback potwierdza)
- Ease: 10 (zmiana konfiguracji)
- **ICE Score: (5 + 7 + 10) / 3 = 7.33** ✅ QUICK WIN

## Jak używać ICE Score?

### Krok 1: Stwórz backlog pomysłów
- Zbierz wszystkie pomysły/features/experiments w jednym miejscu
- Może być Excel, Notion, Airtable, Trello

### Krok 2: Zdefiniuj scoring criteria dla Twojego kontekstu
- Co znaczy Impact 10 vs 5 w **Twoim** przypadku?
- Przykład: Impact 10 = >50% improvement kluczowej metryki

### Krok 3: Score każdy pomysł (jako zespół)
- Nie rób tego sam - biasy
- Quick session: 5-10 minutes na pomysł
- Dyskutuj rozbieżności (np. ktoś dał 8, ktoś 3)

### Krok 4: Sortuj po ICE Score
- Highest score = highest priority
- Pracuj od góry do dołu listy

### Krok 5: Re-score w miarę uczenia się
- Po zbudowaniu/testowaniu: czy Impact był taki jak myśleliśmy?
- Aktualizuj scores na podstawie nowych danych
- Używaj historycznych scores aby poprawić future estimates

## ICE vs RICE vs inne frameworki

### ICE vs RICE
**RICE** = Reach × Impact × Confidence ÷ Effort

- **RICE:** Bardziej precyzyjny (Reach = liczba osób), lepszy dla product features
- **ICE:** Szybszy, lepszy dla growth experiments
- **Kiedy ICE:** Growth hacking, eksperymenty, marketing tests
- **Kiedy RICE:** Product roadmap, features affecting all users

### ICE vs Kano Model
- **Kano:** Kategoryzuje features przez impact na satisfaction (Must-have, Performance, Delighter)
- **ICE:** Numeryczny scoring dla priorytetyzacji
- **Razem:** Użyj Kano aby kategor

yzować, ICE aby priorytetyzować w każdej kategorii

### ICE vs Value vs Effort Matrix
- **Value vs Effort:** 2×2 matrix (Quick Wins, Big Bets, Fill-ins, Time Sinks)
- **ICE:** Bardziej granular (1-10 scale, nie 2×2), dodaje Confidence dimension
- **Razem:** ICE do scoring, Value vs Effort do visualizacji

## Przykład: Growth Team w SaaS

**Backlog pomysłów:**

| Idea | Impact | Confidence | Ease | ICE | Priority |
|------|--------|------------|------|-----|----------|
| Add social proof to landing page | 8 | 9 | 10 | 9.0 | 1 |
| Referral program | 9 | 6 | 4 | 6.3 | 3 |
| Onboarding email sequence | 7 | 8 | 9 | 8.0 | 2 |
| Rebuild pricing page | 8 | 5 | 3 | 5.3 | 5 |
| Add live chat | 6 | 7 | 8 | 7.0 | 4 |

**Akcje:**
1. **Social proof** - Quick win, high confidence, DO FIRST
2. **Onboarding emails** - High impact + easy, DO SECOND
3. **Referral program** - High impact but hard, PLAN CAREFULLY
4. **Live chat** - Medium priority, nice-to-have
5. **Pricing rebuild** - Low confidence despite high impact, TEST FIRST

## Kluczowe osoby

### Sean Ellis
Twórca terminu "growth hacking" i ICE Score framework. Growth advisor dla Dropbox, LogMeIn, Eventbrite. Założyciel GrowthHackers.com. Stworzył ICE z potrzeby szybkiej priorytetyzacji dziesiątek growth experiments.

### Organizacje używające ICE
- **Dropbox** - early growth team
- **HubSpot** - growth experiments
- **Amplitude** - product development
- **Setki startupów** - w community GrowthHackers

## Narzędzia do ICE Scoring

- **Airtable** - template z automatic ICE calculation
- **Notion** - database z formula field
- **Google Sheets** - prosty spreadsheet
- **Productboard, Aha.io** - built-in ICE scoring

## Źródła

- [ICE Scoring Model - Sean Ellis](https://growthhackers.com/growth-studies/prioritizing-growth-the-ice-framework)
- [What is ICE Score? - Savio](https://www.savio.io/product-roadmap/ice-scoring-model/)
- [ICE Prioritization Framework - ProductPlan](https://www.productplan.com/glossary/ice-scoring-model/)
- [ICE Score Guide - GrowthHackers](https://growthhackers.com/questions/what-is-the-ice-framework-for-prioritization)
