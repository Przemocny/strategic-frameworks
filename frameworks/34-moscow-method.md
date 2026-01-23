# MoSCoW Method

## Czym jest?

MoSCoW Method to technika priorytetyzacji używana w zarządzaniu projektami, rozwoju oprogramowania i business analysis do klasyfikowania wymagań, features lub zadań według ich krytyczności. Nazwa to akronim od czterech kategorii: **Must have (Musi być), Should have (Powinno być), Could have (Może być), Won't have (Nie będzie - przynajmniej teraz)**.

Stworzony przez Dai Clegg podczas pracy dla Oracle w latach 90., MoSCoW został zaprojektowany aby pomóc teams i stakeholders osiągnąć consensus co do priorities w kontekście ograniczonych zasobów i czasu.

## Dla kogo jest?

- **Project Managerów** - definiujących scope release'ów
- **Product Owners** - priorytetyzujących backlog
- **Business Analysts** - zbierających i kategoryzujących wymagania
- **Agile teams** - planujących sprinty
- **Stakeholders** - rozumiejących co jest w scope vs out of scope

## Co można z tego uzyskać?

1. **Clarity na priorities** - wszyscy rozumieją co jest krytyczne vs nice-to-have
2. **Lepsze zarządzanie scope** - jasne boundaries co jest must vs could
3. **Stakeholder alignment** - consensus co idzie do release'u
4. **Flexibility** - jasna ścieżka co można wyciąć jeśli zabraknie czasu
5. **Redukcja scope creep** - nowe rzeczy muszą być sklasyfikowane zanim dodane

## Dlaczego warto z tego skorzystać?

- **Prosty i intuicyjny** - każdy rozumie kategorię po 5 minutach
- **Powszechnie uznany** - standard w Agile, używany globalnie
- **Elastyczny** - działa dla features, requirements, tasks, issues
- **Wymusza trudne konwersacje** - "wszystko nie może być Must have"
- **Zapobiega over-committing** - realistyczne planowanie releases

## Cztery Kategorie MoSCoW

### M - Must Have (Musi Być)

**Definicja:** Krityczne wymagania bez których deliverable nie ma wartości. Jeśli choć jedno Must Have nie zostanie dostarczone, projekt jest considered failure.

**Pytania testowe:**
- Co się stanie jeśli tego nie będzie? → **Projekt nie może być wypuszczony**
- Czy jest workaround? → **Nie**
- Czy to legal/regulatory requirement? → **Często tak**

**Charakterystyka:**
- Non-negotiable
- Jeśli nie ma czasu/budżetu, projekt jest delayed lub cancelled, nie wypuszczany bez Must Haves
- **MoSCoW rule:** Must Haves powinny być < 60% scope (nie wszystko może być Must!)

**Przykłady:**
- **E-commerce:** Koszyk, checkout, payment processing, order confirmation
- **Banking app:** Login/authentication, view balance, transfer funds
- **SaaS:** Core functionality, security, data privacy compliance
- **MVP:** Wszystkie features definiujące Minimum **Viable** Product

**Red flags:**
- "Wszystko jest Must Have" → Trzeba re-evaluate
- > 60% scope jako Must Have → Projekt over-scoped

### S - Should Have (Powinno Być)

**Definicja:** Ważne wymagania, ale nie krytyczne. Projekt może być wypuszczony bez nich, ale będzie to bolało. Są to often workarounds możliwe, chociaż not ideal.

**Pytania testowe:**
- Co się stanie jeśli tego nie będzie? → **Boli, ale możemy żyć**
- Czy jest workaround? → **Tak, chociaż not great**
- Czy to znacząco wpłynie na user experience? → **Tak**

**Charakterystyka:**
- High priority, ale ne non-negotiable
- Często included jeśli czas i budget pozwalają
- Jeśli zabraknie czasu, mogą poczekać do następnego release
- **MoSCoW rule:** Should Haves powinny być ~20% scope

**Przykłady:**
- **E-commerce:** Wishlist, product reviews, advanced search filters
- **Banking app:** Transaction categorization, spending analytics, bill pay
- **SaaS:** Advanced reporting, integrations, customization options
- **Post-MVP:** Features które znacząco improve UX

**Różnica vs Must Have:**
- Must Have: "Produkt nie działa bez tego"
- Should Have: "Produkt działa, ale nie jest świetny"

### C - Could Have (Może Być)

**Definicja:** Desirable ale nie necessary features. "Nice to have" które dodają wartość ale ich brak nie wpływa na core functionality. Included tylko jeśli czas i zasoby pozwalają.

**Pytania testowe:**
- Co się stanie jeśli tego nie będzie? → **Prawie nic, small disappointment**
- Czy znacząco wpłynie na projekt? → **Nie**
- Czy to najmniej important w całym scope? → **Tak lub prawie**

**Charakterystyka:**
- Low priority w kontekście current release
- Pierwsze na liście do wyrzucenia jeśli pojawią się delays
- Często "delight" features
- **MoSCoW rule:** Could Haves ~10-20% scope

**Przykłady:**
- **E-commerce:** Gift wrapping option, product zoom with fancy animation, social sharing
- **Banking app:** Custom app themes, gamification badges, fun facts about spending
- **SaaS:** Easter eggs, custom emoji, advanced keyboard shortcuts
- **Polish:** Nice UI animations, extra help tooltips, onboarding tours

**Nota:** Could Haves mogą stać się Should Haves w przyszłych releases.

### W - Won't Have (Nie Będzie - This Time)

**Definicja:** Features które stakeholders zgodzili się że **nie będą** included w current release. To nie znaczy "nigdy" - znaczy "nie teraz, może później".

**Pytania testowe:**
- Czy to dodaje wartość w current context? → **Nie lub minimal**
- Czy mamy na to zasoby? → **Nie**
- Czy to może poczekać? → **Tak, definite**

**Charakterystyka:**
- Explicitly out of scope dla current delivery
- Ważne aby to zadokumentować (zapobiega "ale myślałem że to będzie!")
- Może być reconsidered w przyszłych releases
- **Alias:** "Would Like But Won't Get This Time"

**Przykłady:**
- **E-commerce:** AI stylist recommendations, AR product preview, subscription boxes
- **Banking app:** Cryptocurrency trading, stock market integration, robo-advisor
- **SaaS:** Mobile app (jeśli focus jest web), white-label solution, enterprise SSO (dla MVP)
- **Future:** Ambitious features które require więcej research/resources

**Dlaczego ważne:**
- **Zarządzanie oczekiwaniami** - stakeholders know co NIE jest in scope
- **Prevents scope creep** - clear boundary
- **Dokumentacja** - backlog dla przyszłych releases

## Jak używać MoSCoW?

### Krok 1: Listuj wszystkie wymagania/features
- Zbierz comprehensive list wszystkiego co mogłoby być w projekcie
- Nie filtruj jeszcze - chodzi o completeness

### Krok 2: Educate stakeholders o MoSCoW
- Wyjaśnij każdą kategorię
- **WAŻNE:** Nie wszystko może być Must Have!
- **Rule 60/20/20:** Sugerowane ~60% M, 20% S, 20% C

### Krok 3: Kategoryzuj collaborative
- Workshop ze stakeholders
- Dla każdego item zadaj pytania testowe
- Dyskutuj rozbieżności (np. dev mówi "Could", business mówi "Must")

**Technika głosowania:**
- Każdy stakeholder votes
- Jeśli disagreement → discuss until consensus

### Krok 4: Validate Must Haves
- **Test:** Czy projekt może być shipped bez tego? Jeśli TAK → nie jest Must
- **Test:** Czy > 60% is Must? → Re-evaluate, something is wrong

### Krok 5: Plan delivery
- **Phase 1:** Wszystkie Must Haves
- **Phase 2:** Should Haves (jeśli czas pozwala)
- **Phase 3:** Could Haves (jeśli zostało spare time)
- **Backlog:** Won't Haves dla przyszłości

### Krok 6: Re-prioritize w miarę postępu
- Jeśli pojawią się delays → promuj niektóre Should z powrotem do Could lub Won't
- Jeśli ahead of schedule → promuj Could do Should

## Przykład: E-commerce Checkout Redesign

**Must Have:**
- ✅ Display cart items i total
- ✅ Shipping address form
- ✅ Payment method input
- ✅ Place order button
- ✅ Order confirmation page
- ✅ Email confirmation

**Should Have:**
- 📋 Guest checkout (no account required)
- 📋 Save multiple shipping addresses
- 📋 Estimated delivery date
- 📋 Apply promo code field
- 📋 Order tracking immediately po purchase

**Could Have:**
- 💡 One-click re-order past purchases
- 💡 Save payment methods securely
- 💡 Gifting options (message, gift wrap)
- 💡 Recommended products w checkout

**Won't Have (v1):**
- ❌ Apple Pay / Google Pay integration (v2)
- ❌ Subscription/auto-replenish option (later)
- ❌ International shipping (domestic only dla v1)
- ❌ Virtual try-on dla apparel

## MoSCoW vs inne metody priorytetyzacji

### MoSCoW vs ICE/RICE
- **MoSCoW:** Categorical (buckets), lepszy dla scope definition releases
- **ICE/RICE:** Numerical scoring, lepszy dla continuous prioritization backlog
- **Razem:** Użyj MoSCoW dla release planning, ICE/RICE dla długoterminowego backlog

### MoSCoW vs Kano
- **Kano:** Customer satisfaction-based (Must-be, Performance, Delighters)
- **MoSCoW:** Project delivery-based (krytyczność dla release)
- **Razem:** Kano dla customer perspective, MoSCoW dla delivery reality

## Kluczowe osoby

### Dai Clegg
Software development expert, twórca MoSCoW Method w latach 90. podczas pracy dla Oracle. Stworzył metodę aby pomóc teams zdefiniować priorities podczas Rapid Application Development (RAD) projects.

### Organizacje używające MoSCoW
- **Agile teams globalnie** - standard w Agile/Scrum
- **UK Government Digital Service** - używany w public sector projects
- **Corporates:** IBM, Accenture, Deloitte w project delivery

## Common pitfalls

### 1. "Everything is Must Have"
**Problem:** Stakeholders klasyfikują 90% jako Must
**Rozwiązanie:** Enforce 60% rule, pytaj "can we ship without this?"

### 2. "Reclassifying w trakcie projektu bez consensus"
**Problem:** PM unilateralnie demotes Should do Won't
**Rozwiązanie:** Re-prioritization wymaga stakeholder agreement

### 3. "Won't Have = Never"
**Problem:** Teams nie dokumentują Won't Haves
**Rozwiązanie:** Trzymaj Won't Have backlog dla future releases

## Źródła

- [MoSCoW Method - Wikipedia](https://en.wikipedia.org/wiki/MoSCoW_method)
- [What is MoSCoW Prioritization? - ProductPlan](https://www.productplan.com/glossary/moscow-prioritization/)
- [MoSCoW Prioritization - Agile Business Consortium](https://www.agilebusiness.org/page/ProjectFramework_10_MoSCoWPrioritisation)
- [MoSCoW Method Guide - Atlassian](https://www.atlassian.com/agile/project-management/moscow-prioritization)
