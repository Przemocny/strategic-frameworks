# Strategic Frameworks - Agent Skills Project

You are an AI agent working with the Strategic Frameworks project by CampusAI.

## Project Overview

Strategic Frameworks are Agent Skills for Claude AI that help you **choose and apply proven strategic frameworks** for decision-making, problem-solving, and strategic thinking. These skills guide structured thinking through facilitated dialogue, helping users apply the right framework to their situation.

**Philosophy:** The right framework for the right problem. Structured thinking beats ad-hoc analysis.

**Approach:**
- **Structured and facilitative** - Guide thinking without dictating answers
- **Evidence-based selection** - Match frameworks to situations based on proven criteria
- **Practical application** - Workshop-style dialogue applying framework step-by-step
- **Natural dialogue** - Conversational flow, not rigid templates
- **Community-driven** - Expandable framework library through discover-framework
- **Proven frameworks** - Real, documented methodologies with track records

## Project Structure

```
skills/
├── choose-framework/              # Framework selection skill
│   ├── SKILL.md                   # Skill instructions
│   └── references/
│       ├── frameworks-index.md    # Complete framework catalog
│       ├── framework-selection-guide.md    # Selection criteria guide
│       ├── discovery-questions.md          # Question library
│       └── framework-warnings.md           # Warning signs
├── use-framework/                 # Framework application skill
│   ├── SKILL.md                   # Skill instructions
│   └── references/
│       ├── frameworks/            # All framework definitions (48)
│       ├── workshop-guide.md      # Facilitation guide
│       ├── facilitation-questions.md       # Workshop questions
│       └── common-pitfalls.md     # Framework pitfalls
└── discover-framework/            # Framework research skill
    ├── SKILL.md                   # Skill instructions
    └── references/
        ├── framework-template.md  # New framework template
        ├── research-checklist.md  # Research guidelines
        └── quality-criteria.md    # Acceptance criteria

frameworks/                        # Public framework definitions
└── [48 framework files]           # Mental models, strategy, decision frameworks
```

**Output location:** `.frameworks-output/[session-name]/` containing:
- `framework-selection.md` - Framework selection reasoning
- `framework-workshop.md` - Framework application session

---

## Available Skills

### 1. choose-framework

**Purpose:** Help users select the right strategic framework for their situation.

**When to use:**
- User describes a problem or decision they need to make
- User mentions "strategy", "decision", "problem-solving", "framework"
- User needs structured approach but doesn't know which framework to use
- User asks "how should I think about this?"

**What it does:**
- Conducts 10-20 minute exploratory dialogue
- Explores 6 key dimensions:
  - **Problem Type:** Strategic, operational, innovation, decision
  - **Situation Context:** Stable, changing, uncertain, complex
  - **Time Horizon:** Immediate, short-term, long-term
  - **Stakeholders:** Who's involved and affected
  - **Data Availability:** What information exists
  - **Implementation Complexity:** Execution considerations
- Uses discovery questions to understand situation deeply
- Matches situation to appropriate framework(s) from 48 proven options
- Identifies warning signs if framework is mismatched
- Creates framework selection brief in `.frameworks-output/[session]/framework-selection.md`

**Key behaviors:**
- Asks clarifying questions to understand situation fully
- Challenges vague descriptions ("What specifically do you mean by...?")
- Explores context and constraints thoroughly
- Considers multiple framework options before recommending
- Explains *why* recommended framework fits
- Warns about common misapplication patterns
- Offers to proceed directly to `/use-framework` with selection

**Output:** Framework selection brief with:
- Situation analysis (problem type, context, constraints)
- Recommended framework(s) with reasoning
- Alternative frameworks considered
- Warning signs and considerations
- Next steps (proceed to use-framework or refine understanding)

**Framework categories covered (48 total):**
- **Mental Models (7):** Munger's Mental Models, First Principles, Second-Order Thinking, Inversion, Circle of Competence, Systems Thinking, SEEDS Model
- **Decision Making (7):** OODA Loop, Cynefin, Pre-Mortem, Regret Minimization, Eisenhower Matrix, Principled Negotiation, BATNA
- **Business Strategy & Models (12):** Blue Ocean, Porter's Five Forces, SWOT, BCG Matrix, Ansoff Matrix, McKinsey 7S, Wardley Mapping, Business Model Canvas, Value Proposition Canvas, Lean Canvas, STP Model, Value Chain Analysis
- **Product & Innovation (10):** Jobs-to-be-Done, Design Thinking, Lean Startup, Six Thinking Hats, RICE, ICE Score, MoSCoW, Value vs Effort Matrix, Kano Model, AARRR Pirate Metrics
- **Operations & Execution (4):** Theory of Constraints, OKR Framework, Pareto Principle, RACE Framework
- **Sales Methodologies (3):** SPIN Selling, Challenger Sale, MEDDIC
- **Change Management (3):** Kotter's 8-Step, ADKAR Model, Lewin's Change Model
- **Analysis & Planning (3):** SWOT Analysis, Systems Thinking, Risk Management Frameworks

**Triggers:**
- "I need help making a decision about..."
- "What framework should I use for..."
- "How should I think about [problem]?"
- "I'm facing [situation], what approach makes sense?"

---

### 2. use-framework

**Purpose:** Apply selected framework through facilitated workshop dialogue.

**When to use:**
- After framework selection via choose-framework
- User explicitly requests specific framework (e.g., "Let's use Design Thinking")
- User knows which framework they want to apply
- User needs structured guidance through framework application

**What it does:**
- Conducts 30-60 minute facilitated framework workshop
- Guides user through framework-specific phases/steps
- Adapts dialogue to framework type (strategy/decision/innovation/operations)
- Uses facilitation questions to draw out insights
- Challenges assumptions and explores alternatives
- Identifies common pitfalls specific to framework
- Documents framework application in `.frameworks-output/[session]/framework-workshop.md`

**Workshop structure (4 phases):**

**Phase 1: Setup & Context (5-10 min)**
- Confirm framework selection or help choose
- Understand user's specific situation
- Set expectations for workshop format
- Explain framework briefly if needed

**Phase 2: Framework Introduction (5-10 min)**
- Present framework structure and phases
- Explain each step/component
- Provide examples relevant to user's context
- Answer clarifying questions

**Phase 3: Guided Application (20-40 min)**
- Work through framework step-by-step
- Ask facilitation questions for each phase
- Use framework-specific templates from `references/frameworks/`
- Challenge surface-level answers
- Explore edge cases and alternatives
- Connect insights across framework phases
- Flag common pitfalls proactively

**Phase 4: Analysis & Insights (5-10 min)**
- Synthesize findings across framework
- Identify key insights and patterns
- Generate actionable recommendations
- Define concrete next steps
- Document in framework-workshop.md

**Key behaviors:**
- Facilitates, doesn't dictate (draws out user thinking)
- Follows framework structure rigorously
- Adapts depth to user engagement and time
- Uses examples to clarify abstract concepts
- Challenges incomplete or superficial answers
- Connects dots across framework phases
- Warns about common misapplications
- Keeps focus on actionable outputs

**Framework-specific adaptations:**
- **Strategic frameworks:** Focus on analysis, positioning, competitive dynamics
- **Mental models:** Focus on thinking patterns, cognitive biases, perspective shifts
- **Decision frameworks:** Focus on options, criteria, trade-offs, risk assessment
- **Innovation frameworks:** Focus on experimentation, iteration, user feedback, validation
- **Operational frameworks:** Focus on execution, metrics, resource allocation, constraints

**Output:** Framework workshop document with:
- Framework name and selection reasoning
- Situation context
- Step-by-step framework application (all phases completed)
- Key insights and findings
- Identified patterns or themes
- Actionable recommendations (prioritized)
- Next steps and success metrics
- Warnings and considerations

**Triggers:**
- "Let's use [Framework Name]"
- "Apply Design Thinking to my problem"
- "Walk me through Porter's Five Forces"
- Coming from choose-framework: "Ready to apply the recommended framework?"

---

### 3. discover-framework

**Purpose:** Research and add new frameworks to the system (meta-skill).

**When to use:**
- User wants to add a framework not in current library
- User discovered new framework in their domain
- User asks "Can you add [Framework]?"
- Community contribution of new frameworks

**What it does:**
- Conducts 20-40 minute framework research and documentation process
- Uses WebSearch to research framework comprehensively
- Validates framework against quality criteria
- Creates properly formatted framework file
- Integrates framework into system (files, index, references)
- Tests framework via use-framework (optional)

**Workflow (6 phases):**

**Phase 1: Context Gathering (5 min)**
- What type of framework are they looking for?
- What problem/situation needs solving?
- Which category (Strategy/Decision/Innovation/Operations)?
- Any specific frameworks they have in mind?

**Phase 2: Internet Research (5-10 min)**
- Search for 2-3 candidate frameworks matching criteria
- Present options with brief descriptions
- User selects which to research deeply

**Phase 3: Deep Research & Validation (10-15 min)**
- Comprehensive information gathering:
  - Framework name, creator, year, origin
  - Core methodology and structure
  - Key concepts and phases
  - Real-world examples and case studies
  - Companies/leaders using it
  - Academic or professional recognition
  - Sources and references
- Validate against quality criteria:
  - ✅ Real and documented (not AI-generated)
  - ✅ Clear creator/origin
  - ✅ Structured methodology with steps
  - ✅ Real-world examples
  - ✅ Reliable sources
  - ✅ Unique vs existing frameworks

**Phase 4: Framework Creation (5-10 min)**
- Determine next available number (XX-framework-name.md)
- Create framework file following template
- Include all required sections:
  - Overview (what is it?)
  - Creator & origin (who, when, why?)
  - Target audience (for whom?)
  - Use cases (when to use?)
  - Framework structure (steps/phases with questions)
  - Examples (2-3 real applications)
  - Key users (notable companies/people)
  - Sources (references for further reading)
  - Keywords (for matching logic)

**Phase 5: Integration (5 min)**
- Save to `frameworks/XX-framework-name.md`
- Copy to `skills/use-framework/references/frameworks/`
- Update `skills/choose-framework/references/frameworks-index.md`
- Add to appropriate category matching logic

**Phase 6: Verification (5 min)**
- Show user what was added
- Explain framework placement and categorization
- Offer to test: "Want to try it with `/use-framework`?"

**Quality criteria (from references/quality-criteria.md):**

**Fatal disqualifiers:**
- AI-generated or made-up framework
- No credible sources or attribution
- Duplicate of existing framework
- Fundamentally flawed methodology

**Required elements:**
- Clear structure and steps
- Identifiable creator and origin
- Real-world examples
- Sources for further reading
- Practical applicability
- Unique value proposition

**Nice to have:**
- Multiple case studies
- Tools or templates
- Academic validation
- Wide industry adoption

**Output:** New framework added to system with:
- Framework file created (2 locations)
- Index updated with new entry
- Category associations added
- Quality validation documented
- Optional: Test workshop session

**Key behaviors:**
- Uses WebSearch extensively for research
- Validates sources rigorously (no hallucinated frameworks)
- Follows template strictly for consistency
- Explains categorization choices
- Flags quality concerns proactively
- Encourages testing new framework

**Triggers:**
- "Can you add [Framework Name]?"
- "I want to research and add a new framework"
- "This framework isn't in your library"
- From choose-framework: "None of these fit, I need something else"

---

## Skill Workflow

All three skills follow similar 4-phase workflow structure with domain-specific adaptations:

### Phase 1: Initial Understanding (5-10 minutes)
- Open questions to understand context
- Listen for what's clear vs. unclear
- Set expectations for dialogue format
- Get explicit agreement to proceed

### Phase 2: Deep Exploration (10-40 minutes)
- Systematic questioning across dimensions/phases
- Natural dialogue flow (not rigid questionnaire)
- Use reference materials (questions, guides, warnings)
- Identify patterns and key insights
- Challenge surface-level thinking
- Mark uncertainties explicitly

### Phase 3: Synthesis & Documentation (5-10 minutes)
- Propose output filename and location
- Create `.frameworks-output/[session]/[type].md`
- Generate structured document with all sections
- Include reasoning, insights, and recommendations
- Review with user, offer to refine

### Phase 4: Wrap-up (2-5 minutes)
- Summarize key takeaways
- Offer next steps or related skills
- Be honest about fit and limitations

---

## Skill Sequencing

**Typical flow:**

1. **Start:** User has problem/decision → `choose-framework`
2. **Next:** Framework selected → "Let's apply it" → `use-framework`
3. **Optional:** No framework fits → "Let me research one" → `discover-framework`

**Can be used independently:**
- User knows framework they want → Direct to `use-framework`
- User wants to add framework → Direct to `discover-framework`
- User needs framework selection only → `choose-framework` (no application)

**Expansion patterns:**

**After choose-framework:**
- "Ready to apply [framework]?" → use-framework
- "Want to explore alternative framework?" → choose-framework again
- "None of these fit?" → discover-framework

**After use-framework:**
- "Want to try different framework on same problem?" → choose-framework
- "Want to apply another framework for different angle?" → use-framework (different framework)
- "Found better framework for this?" → discover-framework

**After discover-framework:**
- "Let's test the new framework" → use-framework
- "Want to add another framework?" → discover-framework again

---

## Key Principles

### Structured, Not Prescriptive
- Guide thinking with frameworks, don't dictate answers
- Frameworks are thinking tools, not rigid templates
- Adapt to user's context and needs
- Natural dialogue, not checklist interrogation

### Evidence-Based Selection
- Match frameworks to situations based on proven criteria
- Explain *why* framework fits (don't just recommend)
- Consider multiple options before selecting
- Warn about mismatches proactively

### Practical Application Focus
- Real problems, real applications
- Actionable outputs, not theoretical exercises
- Examples relevant to user's context
- Next steps always included

### Community-Driven Expansion
- Users can add frameworks via discover-framework
- Rigorous quality criteria (no AI-generated frameworks)
- Source validation required
- Continuous library growth

### Facilitative Dialogue
- Draw out user's thinking, don't lecture
- Ask more than tell
- Challenge assumptions constructively
- Create space for insights to emerge

---

## File Structure & References

### Each Skill Contains:

**SKILL.md** - Complete skill instructions
- Overview and principles
- Detailed workflow (4 phases)
- Dialogue style and facilitation tactics
- Output creation structure
- Special cases handling
- Quality checklist
- Key reminders

**references/** - Supporting materials specific to each skill

### choose-framework references:

**frameworks-index.md** - Complete framework catalog
- All 48 frameworks with descriptions
- Organized by category
- Keywords and tags
- Creator and origin info

**framework-selection-guide.md** - Selection criteria deep dive
- Problem type analysis (strategic/operational/innovation/decision)
- Situation context assessment (stable/changing/uncertain/complex)
- Time horizon considerations
- Stakeholder mapping
- Data availability assessment
- Implementation complexity factors
- What to explore for each dimension
- Common mistakes in selection

**discovery-questions.md** - Question library for framework selection
- Problem understanding questions
- Context probing questions
- Constraint identification questions
- Framework matching questions
- Grouped by dimension

**framework-warnings.md** - Warning signs and mismatches
- Fatal warnings (wrong framework will fail)
- Serious warnings (major concerns)
- Caution flags (watch carefully)
- Common misapplication patterns
- Grouped by framework type

### use-framework references:

**frameworks/** - Individual framework files (48)
- Complete framework definitions
- Structure, phases, steps
- Key questions per phase
- Examples and case studies
- Sources and references
- Synced with main `frameworks/` folder

**workshop-guide.md** - Facilitation guide per framework type
- Strategic framework facilitation patterns
- Decision framework facilitation patterns
- Innovation framework facilitation patterns
- Operations framework facilitation patterns
- Phase structures (Setup → Introduction → Application → Synthesis)
- Best practices and common mistakes

**facilitation-questions.md** - Workshop question library
- Opening questions (context setting)
- Deep dive questions (per framework phase)
- Challenge questions (assumption testing)
- Synthesis questions (extracting insights)
- Organized by framework type

**common-pitfalls.md** - Framework-specific pitfalls
- Strategic frameworks pitfalls (e.g., analysis paralysis, ignoring execution)
- Mental models pitfalls (e.g., misapplying models, oversimplification)
- Decision frameworks pitfalls (e.g., premature closure, confirmation bias)
- Operational frameworks pitfalls (e.g., metric gaming, losing strategic focus)
- How to avoid each pitfall

### discover-framework references:

**framework-template.md** - Structure for new frameworks
- Required sections and format
- What to include in each section
- Examples of well-documented frameworks
- Markdown structure

**research-checklist.md** - What to verify when researching
- Source credibility assessment
- Original creator/publication verification
- Real-world adoption evidence
- Academic/professional recognition check
- Clear methodology confirmation
- Practical applicability evaluation
- Uniqueness vs existing frameworks

**quality-criteria.md** - Acceptance criteria for new frameworks
- Fatal disqualifiers (AI-generated, no sources, duplicates)
- Required elements (structure, creator, examples, sources)
- Nice to have (case studies, tools, templates)
- Category fit assessment (Strategy/Decision/Innovation/Operations)
- Scoring rubric for framework quality

---

## Output Format

Skills create structured documents in `.frameworks-output/[session-name]/`:

```
.frameworks-output/
└── competitive-strategy-analysis/
    ├── framework-selection.md    # From choose-framework
    └── framework-workshop.md     # From use-framework
```

### Framework Selection Document (from choose-framework)

**Structure:**
- **Situation Analysis**
  - Problem description
  - Context and constraints
  - Key dimensions assessed
  - Stakeholders and timeline
- **Recommended Framework(s)**
  - Primary recommendation with detailed reasoning
  - Alternative frameworks considered
  - Why recommended framework fits best
- **Selection Reasoning**
  - Match to problem type
  - Fit with situation context
  - Alignment with constraints
- **Considerations & Warnings**
  - Potential mismatches
  - Common pitfalls to avoid
  - Success factors
- **Next Steps**
  - Proceed to use-framework?
  - Additional context needed?
  - Alternative approaches?

### Framework Workshop Document (from use-framework)

**Structure:**
- **Framework Overview**
  - Framework name and type
  - Creator and origin
  - Why selected for this situation
- **Situation Context**
  - Problem statement
  - Key stakeholders
  - Constraints and timeline
- **Framework Application**
  - Phase 1: [Framework-specific step 1]
    - Questions explored
    - Findings and insights
  - Phase 2: [Framework-specific step 2]
    - Questions explored
    - Findings and insights
  - [Continue for all framework phases]
- **Key Insights**
  - Patterns identified
  - Important themes
  - Surprising discoveries
- **Recommendations**
  - Prioritized action items
  - Resource requirements
  - Success metrics
- **Next Steps**
  - Immediate actions
  - Short-term initiatives
  - Long-term considerations
- **Warnings**
  - Pitfalls flagged
  - Risk factors
  - Monitoring points

---

## Contributing

This is a public repository for strategic framework skills.

### Contributions Welcome:
- New frameworks via discover-framework (preferred) or PR
- Improvements to existing frameworks
- Additional reference materials (questions, guides, warnings)
- New skills for framework management
- Bug fixes and clarifications

### Pull Request Guidelines:
1. Test skill with real scenarios before submitting
2. Follow existing skill structure (4-phase workflow)
3. Include comprehensive references/ subdirectory
4. Update AGENTS.md if adding new skill
5. For frameworks: Use discover-framework or follow template strictly
6. Ensure quality criteria met (no AI-generated frameworks)

---

## Coding Conventions

### Markdown Style
- **Headers:** ATX style (`#`, `##`, etc.)
- **Lists:** Consistent indentation (2 spaces for nested)
- **Code blocks:** Fenced with triple backticks
- **Emphasis:** `**bold**` for important, `*italic*` for subtle

### Skill Development
- Follow Agent Skills specification from skill.md
- Include YAML frontmatter with name and description
- Structure: Overview → Workflow → Special Cases → Quality Checklist → Reminders
- Always include references/ subdirectory with supporting materials
- Minimum 3 reference files per skill

### Framework File Format
- Filename: `XX-framework-name.md` (sequential numbering)
- Required sections: Overview, Creator, Audience, Use Cases, Structure, Examples, Sources, Keywords
- Markdown structure with consistent headers
- Include 2-3 real-world examples minimum
- Provide 3-5 sources for further reading
- Keywords for matching logic at end

### File Naming
- Skills: `skill-name` (kebab-case folder)
- Frameworks: `XX-framework-name.md` (number + kebab-case)
- Sessions: `.frameworks-output/session-name/` (kebab-case)
- Outputs: `framework-selection.md`, `framework-workshop.md`

### Testing Requirements
- Test with real user scenarios before committing
- Verify output quality and completeness
- Check that reference files are linked properly
- Validate framework against quality criteria
- Test framework via use-framework before adding

---

## Design Philosophy

### The Right Framework for the Right Problem

Not all frameworks fit all problems. A strategic framework (Porter's Five Forces) won't help with innovation (use Design Thinking). A decision framework (OODA Loop) won't help with competitive positioning (use Blue Ocean). Matching matters.

### Structured Thinking Beats Ad-Hoc Analysis

Proven frameworks encode decades of experience. They provide structure, ensure completeness, and reduce blind spots. Ad-hoc analysis is vulnerable to biases and oversights.

### Three Types of Framework Skills

1. **Selection Skill** (choose-framework)
   - Which framework fits this situation?
   - What are the key dimensions to consider?
   - What are the alternatives and trade-offs?

2. **Application Skill** (use-framework)
   - How do I apply this framework step-by-step?
   - What questions should I ask at each phase?
   - What pitfalls should I avoid?

3. **Discovery Skill** (discover-framework)
   - What new frameworks should be added?
   - How do I research and validate frameworks?
   - How do I integrate frameworks into the system?

### Facilitative, Not Directive

These skills guide users through frameworks but don't dictate answers. The user brings context and judgment; the skill brings structure and questions. Together they create insights neither could alone.

### Community-Driven Library

The framework library grows through community contributions via discover-framework. Quality criteria ensure only proven, well-documented frameworks are added. Users become curators.

### Evidence Over Opinion

Frameworks are real, documented methodologies with proven track records. No AI-generated frameworks. No made-up methodologies. Sources required. Validation mandatory.

---

## Related Resources

- [Framework Library](frameworks/) - All 48 available frameworks
- [CHANGELOG.md](CHANGELOG.md) - Version history and release notes
- [CONTRIBUTING.md](.github/CONTRIBUTING.md) - Contribution guidelines
- [Anthropic Skills Repository](https://github.com/anthropics/skills) - Official skills examples
- [Agent Skills Specification](https://agentskills.io) - Format documentation
- [CampusAI](https://campus.ai) - Project creator

---

## License

Apache 2.0

---

**Made by CampusAI** | **Version 1.0.0** | [GitHub](https://github.com/Przemocny/strategic-frameworks)
