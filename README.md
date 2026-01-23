# Strategic Frameworks

> *Formerly known as MetaFrameworks - [See rebranding details](REBRANDING.md)*

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Claude Skills](https://img.shields.io/badge/Claude-Agent_Skills-purple)](https://agentskills.io)
[![CampusAI](https://img.shields.io/badge/Made_by-CampusAI-orange)](https://campus.ai)
[![Frameworks](https://img.shields.io/badge/Frameworks-48-brightgreen)](frameworks/)

Agent Skills for Claude AI that help you choose and apply proven strategic frameworks for decision-making, problem-solving, and strategic thinking. Master structured thinking with 48 proven frameworks from mental models to strategic analysis.

## What are Strategic Frameworks?

Strategic frameworks are **proven thinking tools** that guide structured decision-making and problem-solving. Strategic Frameworks helps you:
- Select the right framework for your specific situation and problem type
- Apply frameworks through facilitated workshop-style dialogue
- Discover and add new frameworks to expand the system
- Think clearly with structure instead of ad-hoc analysis
- Make better decisions using battle-tested methodologies

These skills are **facilitative by design** - they guide your thinking with proven structures, helping insights emerge through systematic exploration rather than prescriptive answers.

## Available Skills

### 🎯 choose-framework
Helps you select the right strategic framework for your situation through exploratory dialogue. Analyzes problem type, context, constraints, and stakeholders to recommend the best-fit framework from 48 proven options.

**Use when:**
- User describes a problem or decision they need to make
- Needs structured approach but doesn't know which framework
- Mentions "strategy", "decision", "problem-solving"
- Asks "how should I think about this?"

**Output:** Framework selection brief in `.frameworks-output/[session]/framework-selection.md`

### 🛠️ use-framework
Applies selected framework through facilitated workshop dialogue. Guides step-by-step through framework-specific phases, asks facilitation questions, challenges assumptions, and identifies common pitfalls.

**Use when:**
- After framework selection via choose-framework
- User explicitly requests specific framework
- User knows which framework they want to apply
- Needs structured guidance through framework application

**Output:** Framework workshop document in `.frameworks-output/[session]/framework-workshop.md`

### 🔍 discover-framework
Researches and adds new frameworks to the system (meta-skill). Uses web search to validate frameworks, creates properly formatted framework files, and integrates them into the library.

**Use when:**
- User wants to add a framework not in current library
- User discovered new framework in their domain
- Asks "Can you add [Framework]?"
- Community contribution of new frameworks

**Output:** New framework added to system with validation

## Framework Library

48 proven frameworks across 8 categories:

### 🧠 Mental Models (7)
Charlie Munger's Mental Models, First Principles Thinking, Second-Order Thinking, Inversion, Circle of Competence, Systems Thinking, SEEDS Model (Cognitive Biases)

### ⚖️ Decision Making (7)
OODA Loop, Cynefin Framework, Pre-Mortem Analysis, Regret Minimization Framework, Eisenhower Matrix, Principled Negotiation, BATNA Framework

### 🎯 Business Strategy & Models (12)
Blue Ocean Strategy, Porter's Five Forces, SWOT Analysis, BCG Matrix, Ansoff Matrix, McKinsey 7S, Wardley Mapping, Business Model Canvas, Value Proposition Canvas, Lean Canvas, STP Model, Value Chain Analysis

### 💡 Product & Innovation (10)
Jobs-to-be-Done, Design Thinking, Lean Startup, Six Thinking Hats, RICE Framework, ICE Score, MoSCoW Method, Value vs Effort Matrix, Kano Model, AARRR Pirate Metrics

### ⚙️ Operations & Execution (4)
Theory of Constraints, OKR Framework, Pareto Principle (80/20), RACE Framework

### 🤝 Sales Methodologies (3)
SPIN Selling, Challenger Sale, MEDDIC

### 🔄 Change Management (3)
Kotter's 8-Step Change Model, ADKAR Model, Lewin's Change Model

### 📊 Analysis & Planning (3)
SWOT Analysis, Systems Thinking, Risk Management Frameworks

*[See complete framework catalog](frameworks/)*

## Installation

### In Claude Code

1. **Register the marketplace:**
   ```bash
   /plugin marketplace add Przemocny/strategic-frameworks
   ```

2. **Install the plugin:**
   ```bash
   /plugin install strategic-frameworks@strategic-frameworks
   ```

3. **Use the skills** by mentioning them in conversation:
   - "I need help deciding..." (triggers choose-framework)
   - "Let's use Design Thinking" (triggers use-framework)
   - "Can you add the Eisenhower Matrix?" (triggers discover-framework)

### Manual Installation

Clone the repository and copy skills to your local `~/.claude/skills/` directory:

```bash
git clone https://github.com/Przemocny/strategic-frameworks.git
cd strategic-frameworks
cp -r skills/* ~/.claude/skills/
```

## How It Works

All three skills follow a similar 4-phase workflow:

### 1. Initial Understanding
Open questions to understand your situation, context, and what you're trying to achieve.

### 2. Deep Exploration
**choose-framework:** Explores problem type, context, stakeholders, data, constraints to match you with the right framework.

**use-framework:** Systematically works through framework-specific phases with facilitation questions, examples, and challenges.

**discover-framework:** Researches framework comprehensively, validates sources, and ensures quality criteria are met.

### 3. Synthesis & Documentation
Creates structured documents in `.frameworks-output/` with reasoning, insights, and recommendations.

### 4. Wrap-up
Summarizes key takeaways and offers next steps (apply framework, try alternative, add new framework).

### Key Principles

- **Structured, not prescriptive** - Guide thinking, don't dictate answers
- **Evidence-based selection** - Match frameworks to situations based on proven criteria
- **Natural dialogue** - Conversational flow, not rigid templates
- **Practical application** - Real problems, actionable outputs
- **Community-driven** - Expandable library through discover-framework

## Output Format

Skills create structured documents in `.frameworks-output/[session-name]/`:

```
.frameworks-output/
└── competitive-strategy-analysis/
    ├── framework-selection.md    # From choose-framework
    └── framework-workshop.md     # From use-framework
```

Each skill includes:
- **Reference materials** in `references/` subdirectory:
  - Framework catalog and selection guides
  - Question libraries and facilitation guides
  - Warning signs and common pitfalls

Each document includes:
- Situation analysis and context
- Framework selection reasoning (choose-framework)
- Step-by-step framework application (use-framework)
- Key insights and patterns identified
- Actionable recommendations
- Next steps and success metrics

## Philosophy

### The Right Framework for the Right Problem

Not all frameworks fit all problems. Strategic frameworks won't solve operational issues. Decision frameworks won't help with competitive positioning. **Matching matters.**

### Structured Thinking Beats Ad-Hoc Analysis

Proven frameworks encode decades of experience. They provide structure, ensure completeness, and reduce blind spots. Ad-hoc analysis is vulnerable to biases and oversights.

### Facilitative, Not Directive

These skills guide you through frameworks but don't dictate answers. You bring context and judgment; the skill brings structure and questions. Together you create insights neither could alone.

### Evidence-Based, Not Opinion

All frameworks are real, documented methodologies with proven track records. No AI-generated frameworks. No made-up methodologies. Sources required. Validation mandatory.

### Community-Driven Expansion

The framework library grows through community contributions via `discover-framework`. Quality criteria ensure only proven, well-documented frameworks are added. Users become curators.

## Contributing

This is a public repository for strategic framework skills. Contributions are welcome for:
- **New frameworks** via `/discover-framework` (preferred) or PR
- **Improvements** to existing frameworks
- **Additional reference materials** (questions, guides, warnings)
- **New skills** for framework management
- **Bug fixes** and clarifications

### Contributing New Frameworks

The easiest way: Use `/discover-framework` skill which will:
1. Research the framework comprehensively
2. Validate against quality criteria
3. Create properly formatted file
4. Integrate into the system

Or manually follow the framework template in `skills/discover-framework/references/framework-template.md`.

**Quality criteria:**
- Must be real, documented framework (not AI-generated)
- Clear creator/origin and publication date
- Structured methodology with actionable steps
- Real-world examples and case studies
- Reliable sources and references

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for detailed guidelines.

## Typical Workflow

```
User has problem/decision
       ↓
   choose-framework (10-20 min)
   Explores situation, recommends framework
       ↓
   use-framework (30-60 min)
   Applies framework step-by-step
       ↓
   Insights & recommendations
   Documented in .frameworks-output/
```

**Alternative paths:**
- Know your framework? → Jump to `use-framework`
- No framework fits? → Use `discover-framework` to research and add one
- Need different angle? → Back to `choose-framework` for alternative

## Example Use Cases

**Startup founder deciding on market entry strategy:**
→ choose-framework → Blue Ocean Strategy or Porter's Five Forces → use-framework

**Product manager prioritizing features:**
→ choose-framework → RICE Framework or Value vs Effort Matrix → use-framework

**Executive facing complex organizational change:**
→ choose-framework → Cynefin Framework or McKinsey 7S → use-framework

**Entrepreneur validating business model:**
→ choose-framework → Business Model Canvas or Lean Canvas → use-framework

**Team leader making tough decision:**
→ choose-framework → Pre-Mortem Analysis or Second-Order Thinking → use-framework

## License

Apache 2.0

## Related

- [Framework Library](frameworks/) - All 48 framework definitions
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [AGENTS.md](AGENTS.md) - Comprehensive guide for AI agents
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [Agent Skills Specification](https://agentskills.io)
- [CampusAI](https://campus.ai)

---

**Made by CampusAI** | **Version 1.0.0**

*"The quality of our thinking determines the quality of our decisions, and the quality of our decisions determines the quality of our lives."*

**Remember:** Frameworks are thinking tools, not formulas for success. Real value comes from practice, combining different approaches, and adapting to your context.
