# Kano Model

## Czym jest?

Kano Model to framework do klasyfikacji i priorytet

yzacji features produktów i usług na podstawie ich wpływu na satysfakcję klientów. Stworzony w latach 80. przez japońskiego profesora Noriakiego Kano, model ten pokazuje że nie wszystkie features są równe - niektóre są oczekiwane, inne zwiększają satysfakcję liniowo, a jeszcze inne mogą "zachwycić" klientów mimo że ich nie oczekiwali.

Kluczowa insights Kano: **relacja między implementacją feature a satysfakcją klienta NIE jest liniowa**. Zrozumienie tej nieliniowości pozwala product teamom mądrze alokować zasoby.

## Dla kogo jest?

- **Product Managerów** - priorytetyzujących roadmap i features
- **UX/UI Designerów** - decydujących co budować najpierw
- **Zespoły rozwoju produktu** - maksymalizujących customer satisfaction
- **Marketerów** - rozumiejących co komunikować jako wartość
- **Customer Success teams** - identyfikujących co naprawdę wpływa na retencję

## Co można z tego uzyskać?

1. **Mądrzejszą priorytetyzację** - nie wszystkie features dają równy ROI na satysfakcję
2. **Unikanie over-engineering** - nie buduj features których klienci nawet nie zauważą
3. **Znajdowanie delighters** - odkryj features które tworzą "wow" moments
4. **Lepsze wykorzystanie zasobów** - najpierw basic, potem performance, potem delighters
5. **Strategię długoterminową** - dzisiejsze delighters stają się jutrzejszymi basics

## Dlaczego warto z tego skorzystać?

- **Sprawdzone od 40 lat** - używane od 1984, wciąż relevantne
- **Używane przez gigantów** - Apple, Toyota, Samsung priorytetyzują features przez Kano
- **Oparte na badaniach klientów** - nie opinie wewnętrzne, ale data od prawdziwych użytkowników
- **Przeciwwaga dla "more is better"** - pokazuje że czasem mniej jest więcej
- **Dynamiczny** - features zmieniają kategorię w czasie (delighters → performance → basic)

## Pięć Kategorii Features (Kano Model)

### 1. Basic Features (Must-Be / Threshold)

**Definicja:** Features których klienci **oczekują** i **zakładają** że będą.

**Charakterystyka:**
- Jeśli są obecne: klient jest **neutral** (nie zwiększa to satysfakcji)
- Jeśli ich brak: klient jest **bardzo niezadowolony**
- "Hygiene factors" - ich brak jest dealbreaker

**Przykłady:**
- **Hotel:** Czyste prześcieradła, działająca toaleta, zamki do drzwi
- **Smartphone:** Możliwość dzwonienia, SMS, podstawowa bateria
- **E-commerce:** Bezpieczne płatności, możliwość zwrotu, tracking przesyłki
- **SaaS:** Uptime, security, basic customer support

**Strategia:** Zrób je dobrze i **nie mów o tym głośno**. To nie są selling points.

### 2. Performance Features (One-Dimensional / Linear)

**Definicja:** Features gdzie "more is better" - liniowa relacja między implementacją a satysfakcją.

**Charakterystyka:**
- Im lepiej są zrobione, tym wyższa satysfakcja
- Brak = niezadowolenie, Doskonałość = wysoka satysfakcja
- Klienci często ich jawnie oczekują i porównują konkurencję po nich

**Przykłady:**
- **Smartphone:** Czas baterii, jakość kamery, szybkość procesora
- **Hotel:** Wielkość pokoju, jakość śniadania, lokalizacja
- **E-commerce:** Szybkość dostawy, cena
- **SaaS:** Performance/speed, liczba integracji, storage space

**Strategia:** Tu **konkurujesz** - klienci porównują. Inwestuj aby być lepszy od konkurencji.

### 3. Attractive Features (Delighters / Exciters)

**Definicja:** Features których klienci **nie oczekują**, ale które tworzą "wow" moment gdy są obecne.

**Charakterystyka:**
- Jeśli są obecne: klient jest **zachwycony** (wysoka satysfakcja)
- Jeśli ich brak: klient jest **neutral** (nie obniża satysfakcji)
- Często klienci nie wiedzą że tego chcą dopóki tego nie zobaczą
- "Nice surprises"

**Przykłady:**
- **iPhone (2007):** Multi-touch, accelerometer, visual voicemail - nikt tego nie oczekiwał
- **Amazon:** 1-Click ordering (gdy się pojawił), same-day delivery
- **Hotel:** Darmowy upgrade, personalizowana welcome note, nietypowe amenities
- **Tesla:** Ludicrous mode, dog mode, fart sounds
- **Slack:** GIF integration, custom emoji

**Strategia:** Tu tworzysz **przewagę konkurencyjną** i "wow" moments. Marketing gold.

### 4. Indifferent Features

**Definicja:** Features których obecność lub brak nie wpływa na satysfakcję klienta.

**Charakterystyka:**
- Klient: "Nie obchodzi mnie to"
- Marnowanie zasobów jeśli budujesz

**Przykłady:**
- Features które są "clever" ale niepotrzebne
- Over-engineering
- Features dla 1% użytkowników które komplikują produkt dla 99%

**Strategia:** **Nie buduj**. To waste of resources.

### 5. Reverse Features

**Definicja:** Features których obecność **obniża** satysfakcję niektórych klientów.

**Charakterystyka:**
- Dla niektórych klientów obecność feature to problem
- Często występuje gdy próbujesz zadowolić wszystkich

**Przykłady:**
- Too many options (paradox of choice)
- Automatyczne video/audio playback (denerwujące)
- Zbyt częste notifications
- Forced social features dla introwertów

**Strategia:** **Usuwaj** lub rób optional.

## Jak przeprowadzić Kano Analysis?

### Krok 1: Zidentyfikuj features do testowania
- Lista potencjalnych features do zbudowania
- Istniejące features do oceny

### Krok 2: Stwórz Kano Questionnaire

Dla każdego feature zadaj **DWA pytania**:

**Functional Question (pozytywne):**
"Jak byś się czuł gdyby produkt MIAŁ [feature]?"

**Dysfunctional Question (negatywne):**
"Jak byś się czuł gdyby produkt NIE MIAŁ [feature]?"

**Odpowiedzi (dla obu pytań):**
1. Byłbym zachwycony (I like it that way)
2. Oczekuję tego (I expect it that way)
3. Jestem neutralny (I am neutral)
4. Mogę to tolerować (I can tolerate it)
5. Bardzo mi to przeszkadza (I dislike it that way)

### Krok 3: Kategoryzuj odpowiedzi

Użyj **Kano Evaluation Table** aby zdekodować kategorię:

|  | Like | Expect | Neutral | Tolerate | Dislike |
|---|---|---|---|---|---|
| **Like** | Q | A | A | A | O |
| **Expect** | R | I | I | I | M |
| **Neutral** | R | I | I | I | M |
| **Tolerate** | R | I | I | I | M |
| **Dislike** | R | R | R | R | Q |

**Legenda:**
- **M** = Must-be (Basic)
- **O** = One-dimensional (Performance)
- **A** = Attractive (Delighter)
- **I** = Indifferent
- **R** = Reverse
- **Q** = Questionable (inconsistent answer)

### Krok 4: Analyze results

- Policz kategorie dla każdego feature
- Feature należy do kategorii która dostała najwięcej głosów
- **Discrete analysis:** Najbardziej częsta kategoria
- **Continuous analysis:** Oblicz satisfaction coefficient

**Satisfaction Coefficient:**
- **Positive:** (A + O) / (A + O + M + I)
- **Negative:** (M + O) / (A + O + M + I) * (-1)

### Krok 5: Priorytetyzuj

**Framework priorytetyzacji:**
1. **NAJPIERW: Basic/Must-be** - jeśli ich brak, najpierw zbuduj te
2. **POTEM: Performance** - przewaga konkurencyjna, porównania
3. **NA KOŃCU: Attractive** - delighters, "nice to have"
4. **NIE BUDUJ: Indifferent** - waste of time
5. **USUŃ: Reverse** - aktywnie szkodzą

## Dynamika Kano w czasie

**Kluczowa zasada:** Features migrują między kategoriami w czasie.

### Ewolucja features:
**Attractive → Performance → Basic**

**Przykład: Smartphone camera**
- **2007 (iPhone 1):** Kamera w telefonie = **Attractive** (wow!)
- **2012:** Jakość kamery = **Performance** (porównujemy megapiksele)
- **2020:** Obecność kamery = **Basic** (brak kamery = dealbreaker)

**Implikacje:**
- Dzisiejsze delighters będą jutrzejszymi basics
- Musisz ciągle innowować aby znajdować nowe delighters
- "Red Queen Effect" - musisz biec aby pozostać w tym samym miejscu

## Przykłady zastosowania

### Apple iPhone
- **Basic:** Możliwość dzwonienia, SMS, app store
- **Performance:** Czas baterii, jakość kamery, szybkość
- **Attractive (historical):** Face ID, Animoji, Dynamic Island, Live Activities

### Airbnb
- **Basic:** Bezpieczne płatności, verified listings, basic photos
- **Performance:** Liczba listings, response time, reviews quality
- **Attractive:** Superhost program, Experiences, wishlist sharing, professional photography

### Spotify
- **Basic:** Music streaming, basic search, playlists
- **Performance:** Audio quality, library size, app speed
- **Attractive:** Discover Weekly, Wrapped annual summary, Blend playlists, lyrics integration

## Kluczowe osoby

### Noriaki Kano
Profesor Tokyo University of Science, twórca Kano Model (1984). Ekspert w Total Quality Management (TQM) i customer satisfaction. Model powstał z jego pracy nad rozumieniem jak różne quality attributes wpływają na customer satisfaction.

### Organizacje używające Kano
- **Toyota** - quality management i product development
- **Apple** - feature prioritization (prawdopodobnie!)
- **Samsung** - consumer electronics features
- **Microsoft** - Windows i Office features

## Narzędzia do Kano Analysis

- **Kano Survey Tools:** Typeform, SurveyMonkey z Kano templates
- **Analysis:** Excel/Google Sheets z Kano evaluation table
- **UX Research platforms:** UserTesting, Maze, Optimal Workshop

## Źródła

- [Kano Model - Wikipedia](https://en.wikipedia.org/wiki/Kano_model)
- [What is the Kano Model? - ProductPlan](https://www.productplan.com/glossary/kano-model/)
- [Kano Model Explained - Qualtrics](https://www.qualtrics.com/experience-management/research/kano-analysis/)
- [Prioritizing with the Kano Model - Nielsen Norman Group](https://www.nngroup.com/articles/kano-model/)
- [The Complete Guide to the Kano Model - Folding Burritos](https://foldingburritos.com/kano-model/)
