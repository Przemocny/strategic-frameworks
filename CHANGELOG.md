# Changelog

All notable changes to Strategic Frameworks will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-23

### Added

#### Skills
- **choose-framework** - Framework selection skill with exploratory dialogue
  - 6-dimensional situation analysis (problem type, context, time, stakeholders, data, implementation)
  - Question library with 50+ discovery questions
  - Framework matching logic across 48 frameworks
  - Warning signs and misapplication detection
  - Framework selection brief output

- **use-framework** - Framework application skill with facilitated workshops
  - Step-by-step framework guidance for all 48 frameworks
  - Facilitation questions per framework phase
  - Common pitfall identification
  - Workshop-style dialogue patterns
  - Framework workshop document output

- **discover-framework** - Framework research and addition skill (meta-skill)
  - Web search integration for framework research
  - Quality criteria validation
  - Framework template and file creation
  - System integration (index, references)
  - Optional testing via use-framework

#### Framework Library (48 Frameworks)

**Mental Models (7):**
- Charlie Munger's Mental Models
- First Principles Thinking
- Second-Order Thinking
- Inversion
- Circle of Competence
- Systems Thinking
- SEEDS Model (Cognitive Biases)

**Decision Making (7):**
- OODA Loop
- Cynefin Framework
- Pre-Mortem Analysis
- Regret Minimization Framework
- Eisenhower Matrix
- Principled Negotiation
- BATNA Framework

**Business Strategy & Models (12):**
- Blue Ocean Strategy
- Porter's Five Forces
- SWOT Analysis
- BCG Matrix
- Ansoff Matrix
- McKinsey 7S
- Wardley Mapping
- Business Model Canvas
- Value Proposition Canvas
- Lean Canvas
- STP Model
- Value Chain Analysis

**Product & Innovation (10):**
- Jobs-to-be-Done
- Design Thinking
- Lean Startup
- Six Thinking Hats
- RICE Framework
- ICE Score
- MoSCoW Method
- Value vs Effort Matrix
- Kano Model
- AARRR Pirate Metrics

**Operations & Execution (4):**
- Theory of Constraints
- OKR Framework
- Pareto Principle (80/20)
- RACE Framework

**Sales Methodologies (3):**
- SPIN Selling
- Challenger Sale
- MEDDIC

**Change Management (3):**
- Kotter's 8-Step Change Model
- ADKAR Model
- Lewin's Change Model

**Analysis & Planning (3):**
- SWOT Analysis
- Systems Thinking
- Risk Management Frameworks

#### Reference Materials
- Framework selection guide with detailed criteria
- Framework warnings catalog
- Discovery questions library (50+ questions)
- Facilitation questions library (workshop patterns)
- Common pitfalls guide per framework type
- Workshop facilitation guide
- Quality criteria for new frameworks
- Framework template for contributions
- Research checklist for framework validation

#### Documentation
- Comprehensive README with installation, usage, philosophy
- CONTRIBUTING guide with PR process and quality criteria
- AGENTS.md with full skill instructions for AI agents
- SECURITY policy for responsible disclosure
- Apache 2.0 LICENSE

#### Infrastructure
- Claude Plugin configuration (.claude-plugin/)
- GitHub Actions workflow for CI
- .gitignore for output directories
- Project structure for skill organization

### Design Principles

- **Structured, not prescriptive** - Guide thinking, don't dictate answers
- **Evidence-based selection** - Match frameworks to situations using proven criteria
- **Practical application** - Real problems, actionable outputs
- **Natural dialogue** - Conversational flow, not rigid templates
- **Community-driven** - Expandable library through discover-framework
- **Proven frameworks** - Real, documented methodologies with track records

### Philosophy

- **The Right Framework for the Right Problem** - Matching matters
- **Structured Thinking Beats Ad-Hoc Analysis** - Reduce blind spots
- **Facilitative, Not Directive** - Guide, don't dictate
- **Evidence Over Opinion** - No AI-generated frameworks

## [Unreleased]

### Planned Features
- `compare-frameworks` skill for side-by-side analysis
- `framework-sequences` skill for multi-framework workflows
- `framework-report` skill for generating reports
- More mental models (Hanlon's Razor, Occam's Razor)
- More decision frameworks (Decision Matrix, Weighted Scoring)
- Video tutorials for popular frameworks
- Interactive framework selection quiz

---

**Note:** This is the first public release of Strategic Frameworks (formerly MetaFrameworks). Previous development was private.

[1.0.0]: https://github.com/Przemocny/strategic-frameworks/releases/tag/v1.0.0
