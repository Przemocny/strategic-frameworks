# Wardley Mapping

## Czym jest?

Wardley Maps to mapy dla strategii biznesowej, gdzie komponenty są pozycjonowane w łańcuchu wartości i zakotwiczone przez potrzeby użytkownika, z ruchem opisanym przez oś ewolucji. Technika została stworzona przez Simona Wardleya w firmie Fotango w 2005 roku.

W przeciwieństwie do innych frameworków, Wardley Maps bazują na świadomości sytuacyjnej (situational awareness) i ruchu, nie tylko statycznym obrazie jak SWOT czy Business Model Canvas. To narzędzie strategicznego myślenia, które pomaga w projektowaniu wygrywającej strategii opartej na prawdziwym zrozumieniu sytuacji.

## Dla kogo jest?

- **Strategów korporacyjnych** - planujących długoterminową strategię w dynamicznych środowiskach
- **CTOs i VP Engineering** - podejmujących decyzje build vs buy, własna technologia vs outsourcing
- **Product Leaderów** - rozumiejących pozycję produktu w landscape'ie rynkowym
- **Rządy i organizacje publiczne** - UK Government Digital Service (GDS) aktywnie używa
- **Konsultantów** - pomagających klientom zrozumieć ich pozycję strategiczną

## Co można z tego uzyskać?

1. **Świadomość sytuacyjna** - zobacz całość landscape'u, nie tylko fragment
2. **Antycypacja zmian** - rozumienie ewolucji komponentów pozwala przewidywać przyszłość
3. **Lepsze decyzje build/buy** - zrozum gdzie jesteś na krzywej ewolucji zanim zdecydujesz
4. **Identyfikacja możliwości** - zobacz luki i możliwości które inni przegapią
5. **Komunikacja strategii** - mapa komunikuje lepiej niż PowerPoint

## Dlaczego warto z tego skorzystać?

- **Unikalne podejście** - jedyna metoda skupiająca się na ewolucji i ruchu, nie statyce
- **Używane przez rządy** - UK Government, szczególnie GDS, używa w transformacji cyfrowej
- **Open source** - Simon Wardley udostępnił metodę na Creative Commons
- **Darmowe zasoby** - 19-rozdziałowa książka, kursy, społeczność
- **Praktyczne zastosowanie** - nie tylko teoria, ale narzędzie do realnych decyzji strategicznych

## Podstawowe elementy Wardley Map

### 1. Oś Y - Value Chain (Łańcuch Wartości)

**Od góry do dołu:**
- **Góra (Visible):** To co widzi użytkownik - potrzeba użytkownika
- **Dół (Invisible):** Komponenty/capabilities które wspierają

**Przykład:**
```
Użytkownik potrzebuje: Filiżankę kawy (góra)
Wymaga: Kawiarni, która wymaga
        Ekspresu do kawy, który wymaga
        Energii elektrycznej (dół)
```

### 2. Oś X - Evolution (Ewolucja)

**Od lewej do prawej - 4 fazy ewolucji:**

#### I. Genesis (Geneza)
- Nowe, unikalne, niepewne
- Badania eksploracyjne
- Wysokie koszty, niska availability
- **Przykład 2005:** Cloud computing

#### II. Custom Built (Budowa na zamówienie)
- Dostosowane do konkretnych potrzeb
- Konkurencyjne zalety przez dostosowanie
- Drogie
- **Przykład 2010:** Własny data center

#### III. Product (Produkt/Rental)
- Standardowe produkty i usługi
- Competitive market
- "Good enough" for most
- **Przykład 2015:** AWS, Azure

#### IV. Commodity/Utility (Towar/Usługa podstawowa)
- Traktowane jako standard, "oczywiste"
- Volume operations, economies of scale
- Niski koszt, wysoka dostępność
- **Przykład 2026:** Cloud compute (tak podstawowe jak energia elektryczna)

### 3. Komponenty

To "rzeczy" które tworzą twoją wartość:
- Activities (aktywności)
- Practices (praktyki)
- Data (dane)
- Knowledge (wiedza)

Każdy komponent można umieścić na mapie według:
- Jego pozycji w value chain (oś Y)
- Jego stadium ewolucji (oś X)

### 4. Zależności

Linie łączące komponenty pokazują zależności:
- Strzałki pokazują co od czego zależy
- "Coffee shop" zależy od "Coffee machine"
- "Coffee machine" zależy od "Electricity"

## Jak stworzyć Wardley Map

### Proces (uproszczony):

1. **Start z użytkownikiem (góra mapy)**
   - Co użytkownik potrzebuje?
   - Co jest widoczne dla użytkownika?

2. **Zidentyfikuj komponenty value chain**
   - Co jest potrzebne żeby dostarczyć to użytkownikowi?
   - Rozłóż na kolejne poziomy zależności

3. **Umieść komponenty na osi ewolucji (X)**
   - Czy to Genesis, Custom, Product, czy Commodity?
   - Gdzie każdy komponent jest w swojej ewolucji?

4. **Narysuj zależności**
   - Połącz komponenty liniami
   - Pokaż co od czego zależy

5. **Analizuj**
   - Gdzie są inertia points (opór przed zmianą)?
   - Które komponenty wkrótce ewoluują?
   - Jakie to tworzy możliwości/zagrożenia?

6. **Strategizuj**
   - Gdzie chcesz się pozycjonować?
   - Co budować in-house vs kupić?
   - Gdzie inwestować?

## Strategiczne wzorce w Wardley Mapping

### 1. Identyfikacja Inertia
Komponenty które powinny ewoluować ale nie ewoluują (ze względu na kulturę, past investments, etc.) są źródłem możliwości dla disruptors.

**Przykład:** Taxi industry miała inertia w adoption technology → Uber wykorzystał.

### 2. Build vs Buy Decision
- **Genesis/Custom:** Buduj (to twój differentiator)
- **Product:** Buy or partner (nie ma sensu budować od zera)
- **Commodity:** Definitely buy/use utility (np. electricity, cloud compute)

### 3. Anticipate Change
Komponenty ewoluują od Genesis → Commodity. Jeśli widzisz że twój komponent przechodzi z Custom do Product, przygotuj się na commoditization.

### 4. Pioneer-Settler-Town Planner
- **Pioneers:** Eksplorują Genesis
- **Settlers:** Rozwijają do Product
- **Town Planners:** Industrializują do Commodity

Potrzebujesz wszystkich trzech typów w organizacji.

## Przykład Wardley Map

### Online Business (uproszczone):

```
User Need (góra, visible)
    ↓
Website (Product-Commodity)
    ↓ ↓
Platform (Custom-Product)  Content Management (Product)
    ↓ ↓ ↓
Compute (Commodity)  Storage (Commodity)  Analytics (Product-Commodity)
```

**Insights z tej mapy:**
- Compute i Storage to utility → użyj cloud (AWS/Azure)
- Platform może być custom lub use existing (zależy od differentiation)
- Analytics przechodzi do commodity → nie buduj własnego, użyj narzędzi

## Kluczowe osoby

### Simon Wardley
Twórca Wardley Mapping (2005). Był researcher w Fotango (Cannon subsidiary), później LEF (Leading Edge Forum). Stworzył metodę z frustracji brakiem map w strategii - miał mapy dla podróży, ale nie dla biznesu.

**Książka:** "Wardley Maps" - 19 rozdziałów, dostępne free online
**Licencja:** Creative Commons Attribution-ShareAlike 4.0

**Filozofia Wardleya:** "Strategy is about positioning, but you can't position if you don't have a map. Most strategy is storytelling without maps."

### Organizacje używające Wardley Maps

**UK Government:**
- Government Digital Service (GDS) - używa w strategic planning dla digital transformation
- Wiele agencji rządowych w UK

**Korporacje:**
- Technologiczne firmy w strategic planning
- Konsultanci strategiczni
- Startupy w decision-making

## Uczenie się Wardley Mapping

### Zasoby (wszystkie darmowe):

1. **LearnWardleyMapping.com** - główny hub do nauki
2. **WardleyMaps.com** - oficjalna strona
3. **Simon Wardley's book** - 19 rozdziałów free online
4. **Medium** - oryginalne pisma Wardleya
5. **Community** - aktywna społeczność, meetupy, conferences

### Trudności w nauce:

- **Krzywa uczenia:** Początki są trudne, wymaga praktyki
- **Abstrakcja:** Trzeba myśleć na poziomie landscape'u, nie tylko taktyki
- **No silver bullet:** To narzędzie do myślenia, nie formula na sukces

## Korzyści i ograniczenia

### Korzyści:
✅ Jedyny framework skupiający się na ewolucji i dynamice
✅ Pomaga w anticipation zmian rynkowych
✅ Wizualne i komunikatywne
✅ Uniwersalne - działa w tech, government, business, non-profit
✅ Open source i darmowe

### Ograniczenia:
❌ Stroma krzywa uczenia
❌ Wymaga praktyki aby robić to dobrze
❌ Może być zbyt abstract dla niektórych
❌ Nie zastępuje execution - to narzędzie do thinking

## Źródła

- [Wardley Maps](https://www.wardleymaps.com/)
- [Learn Wardley Mapping](https://learnwardleymapping.com/)
- [Wardley map - Wikipedia](https://en.wikipedia.org/wiki/Wardley_map)
- [Introduction to Wardley Maps - Aktia Solutions](https://aktiasolutions.com/introduction-to-wardley-maps/)
- [Refining strategy with Wardley Mapping - Irrational Exuberance](https://lethain.com/wardley-mapping/)
