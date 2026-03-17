---
title: "Strategic Frameworks — The right framework for the right problem"
description: "48 proven strategic frameworks with AI-facilitated workshops. Choose, apply, and discover frameworks for any decision or problem."

header:
  icon: "SF"
  name: "Strategic Frameworks"
  github: "https://github.com/Przemocny/strategic-frameworks"
  ctaLabel: "Copy install prompt"
  nav:
    - { label: "Process", href: "#process" }
    - { label: "Scenarios", href: "#scenarios" }
    - { label: "Skills", href: "#skills" }
    - { label: "Install", href: "#install" }

hero:
  badge: "Agent Skills"
  headline: '<span>The right framework</span> for the right problem.'
  tagline: "48 proven strategic frameworks with AI-facilitated workshops. Choose, apply, and discover frameworks for any decision or problem."
  agents:
    - "Claude Code"
    - "Claude Cowork"
    - "OpenClaw"
    - "Antygravity"
    - "Cursor"
    - "Cline"
    - "any agent with skills"
  trust:
    - { color: "green", text: "48 proven frameworks" }
    - { color: "blue", text: "AI-facilitated workshops" }
    - { color: "yellow", text: "Open source MIT" }
  cmdDock:
    title: "Quick start"
    cards:
      - label: "Install frameworks"
        desc: "Paste into your AI agent. 48 frameworks ready in 60 seconds."
        prompt: "Clone the repo https://github.com/Przemocny/strategic-frameworks.git into a temp directory. Copy all directories from skills/ into ~/.claude/skills/. Copy the frameworks/ directory to ~/.claude/skills/strategic-frameworks/frameworks/. Then remove the cloned temp directory. Confirm what was installed."
        preview: "Clone the repo, copy skills/ and frameworks/ to ~/.claude/skills/, confirm..."
      - label: "Choose a framework"
        desc: "Describe your situation. AI matches the right framework."
        prompt: "I have a strategic decision to make and need help choosing the right framework. Use /choose-framework to understand my situation through dialogue, then recommend 1-3 frameworks from the library with reasoning for each. Here is my situation:"
        preview: "Use /choose-framework: describe situation, get matched frameworks with reasoning..."
      - label: "Run a workshop"
        desc: "AI-facilitated step-by-step workshop for any framework."
        prompt: "I want to run a strategic workshop. Use /use-framework to facilitate a step-by-step session. Guide me through each phase of the framework with questions, challenges, and structured output. Save results to .frameworks-output/. The framework I want to use:"
        preview: "Use /use-framework: facilitated workshop, step by step, structured output..."

stats:
  - { value: "48", label: "Frameworks" }
  - { value: "8", label: "Categories" }
  - { value: "3", label: "Skills" }
  - { value: "MIT", label: "License" }

process:
  label: "THE APPROACH"
  headline: "Intuition doesn't scale.<br>Structure does."
  steps:
    - title: "Choose the right tool"
      skills: "CHOOSE-FRAMEWORK"
      desc: "AI matches framework to your situation from 48 options. No more guessing or defaulting to SWOT."
    - title: "Run the workshop"
      skills: "USE-FRAMEWORK"
      desc: "AI-facilitated step-by-step session with questions, challenges, and structured output."
    - title: "Expand the library"
      skills: "DISCOVER-FRAMEWORK"
      desc: "Research, validate, and add new frameworks to the system through dialogue with AI."

scenarios:
  headline: "Copy the prompt.<br>Paste to your agent. Done."
  items:
    - tag: "Decision"
      title: "Don't know which framework to use"
      desc: "Startup considering entering a new market. You need structure for analysis."
      before: "Google \"strategic framework for market entry\", get 50 results, don't know which fits."
      after: "/choose-framework → dialogue about situation → AI recommends Blue Ocean + Ansoff with reasoning."
      prompt: "I have a strategic decision to make and need help choosing the right framework. Use /choose-framework to understand my situation through dialogue, then recommend 1-3 frameworks from the library with reasoning for each. Here is my situation:"
      promptPreview: "Use /choose-framework: describe situation, AI recommends matching frameworks..."
    - tag: "Workshop"
      title: "Know the framework, not the process"
      desc: "You want to run a Pre-Mortem Analysis before product launch."
      before: "Read an article, take notes, skip key steps."
      after: "/use-framework → AI guides workshop question by question → structured output with insights and action items."
      prompt: "I want to run a strategic workshop. Use /use-framework to facilitate a step-by-step session. Guide me through each phase of the framework with questions, challenges, and structured output. Save results to .frameworks-output/. The framework I want to use:"
      promptPreview: "Use /use-framework: facilitated step-by-step workshop, structured output..."
    - tag: "Discovery"
      title: "Need a framework that doesn't exist"
      desc: "Your industry uses a specific framework that's not in the library."
      before: "No option. Fall back to ad-hoc analysis."
      after: "/discover-framework → AI researches, validates sources, creates formatted file, integrates with system."
      prompt: "I need a framework that's not in the current library. Use /discover-framework to research it: find authoritative sources, validate the methodology, create a formatted framework file following the existing conventions, and integrate it with the system. The framework I need:"
      promptPreview: "Use /discover-framework: research, validate, create formatted file, integrate..."

principles:
  label: "WHY THIS WORKS"
  headline: "Right tool, right problem.<br>Every time."
  items:
    - title: "Matching over defaulting"
      desc: "AI matches framework to your situation. No more picking SWOT because it's the only one you know."
    - title: "Facilitation over reading"
      desc: "Step-by-step workshops with AI asking the right questions. Theory becomes practice."
    - title: "Structured outputs"
      desc: "Every workshop produces documented insights, decisions, and action items in <code>.frameworks-output/</code>."
    - title: "Expandable library"
      desc: "48 frameworks today. Discover new ones through dialogue with AI. The library grows with your needs."

skills:
  label: "3 FRAMEWORK SKILLS"
  headline: "Choose. Apply. Discover.<br>Paste and go."
  items:
    - { name: "/choose-framework", desc: "AI matches framework to your situation", href: "https://github.com/Przemocny/strategic-frameworks/blob/main/skills/choose-framework/SKILL.md" }
    - { name: "/use-framework", desc: "AI-facilitated step-by-step workshop", href: "https://github.com/Przemocny/strategic-frameworks/blob/main/skills/use-framework/SKILL.md" }
    - { name: "/discover-framework", desc: "Research and add new frameworks", href: "https://github.com/Przemocny/strategic-frameworks/blob/main/skills/discover-framework/SKILL.md" }

beforeAfter:
  label: "THE PROBLEM"
  headline: 'You make hundreds of decisions weekly.<br>Most are on <span style="color: var(--red);">gut feeling</span>.'
  beforeLabel: "Without frameworks"
  afterLabel: "With frameworks"
  rows:
    - before: "\"Let's do a SWOT\" — because it's the only framework you know"
      after: "AI matches framework to your specific problem from 48 options"
    - before: "Know the framework in theory, can't run a workshop"
      after: "AI facilitates step by step with questions and challenges"
    - before: "\"There's no framework for this\" — improvise"
      after: "/discover-framework researches and adds new ones to the system"
    - before: "Same biases, same blind spots, same mistakes"
      after: "Structured thinking surfaces what intuition misses"

install:
  headline: "Ready in 60 seconds"
  subtitle: "Claude Code or any compatible AI agent + Git"
  prompt: "Clone the repo https://github.com/Przemocny/strategic-frameworks.git into a temp directory. Copy all directories from skills/ into ~/.claude/skills/. Copy the frameworks/ directory to ~/.claude/skills/strategic-frameworks/frameworks/. Then remove the cloned temp directory. Confirm what was installed."
  code: '<span class="comment"># Clone and install</span><br><span class="prompt">$</span> git clone https://github.com/Przemocny/strategic-frameworks.git<br><span class="prompt">$</span> cd strategic-frameworks && cp -r skills/* ~/.claude/skills/<br><span class="comment"># Copy frameworks library</span><br><span class="prompt">$</span> cp -r frameworks/ ~/.claude/skills/strategic-frameworks/frameworks/'
  secondaryCta:
    label: "Claude Code"
    href: "https://claude.com/claude-code"

finalCta:
  headline: "Stop guessing.<br>Start your first workshop."
  buttonLabel: "Copy install prompt"

footer:
  license: "MIT License"
---

# Strategic Frameworks — Landing Page Copy

> This file is the single source of truth for the Strategic Frameworks landing page.
> Edit content here, then run `npm run build` in `template/` to rebuild.
> The YAML front matter above is consumed by the build system.
> The markdown below is a human-readable copy for easy editing.

---

## HERO

**Badge:** Agent Skills

**Headline:** The right framework for the right problem.

**Tagline:** 48 proven strategic frameworks with AI-facilitated workshops. Choose, apply, and discover frameworks for any decision or problem.

**Compatible agents:** Claude Code, Claude Cowork, OpenClaw, Antygravity, Cursor, Cline, any agent with skills.

**Trust signals:**
- 48 proven frameworks
- AI-facilitated workshops
- Open source MIT

---

## QUICK START

**Install frameworks** — Paste into your AI agent. 48 frameworks ready in 60 seconds.

**Choose a framework** — Describe your situation. AI matches the right framework.

**Run a workshop** — AI-facilitated step-by-step workshop for any framework.

---

## STATS

| Frameworks | Categories | Skills | License |
|:----------:|:----------:|:------:|:-------:|
| 48         | 8          | 3      | MIT     |

---

## THE APPROACH

**Intuition doesn't scale. Structure does.**

1. **Choose the right tool** (CHOOSE-FRAMEWORK) — AI matches framework to your situation from 48 options. No more guessing or defaulting to SWOT.
2. **Run the workshop** (USE-FRAMEWORK) — AI-facilitated step-by-step session with questions, challenges, and structured output.
3. **Expand the library** (DISCOVER-FRAMEWORK) — Research, validate, and add new frameworks to the system through dialogue with AI.

---

## SCENARIOS

**Copy the prompt. Paste to your agent. Done.**

### Decision — Don't know which framework to use

Startup considering entering a new market. You need structure for analysis.

- **Before:** Google "strategic framework for market entry", get 50 results, don't know which fits.
- **After:** /choose-framework → dialogue about situation → AI recommends Blue Ocean + Ansoff with reasoning.

### Workshop — Know the framework, not the process

You want to run a Pre-Mortem Analysis before product launch.

- **Before:** Read an article, take notes, skip key steps.
- **After:** /use-framework → AI guides workshop question by question → structured output with insights and action items.

### Discovery — Need a framework that doesn't exist

Your industry uses a specific framework that's not in the library.

- **Before:** No option. Fall back to ad-hoc analysis.
- **After:** /discover-framework → AI researches, validates sources, creates formatted file, integrates with system.

---

## WHY THIS WORKS

**Right tool, right problem. Every time.**

- **Matching over defaulting** — AI matches framework to your situation. No more picking SWOT because it's the only one you know.
- **Facilitation over reading** — Step-by-step workshops with AI asking the right questions. Theory becomes practice.
- **Structured outputs** — Every workshop produces documented insights, decisions, and action items in `.frameworks-output/`.
- **Expandable library** — 48 frameworks today. Discover new ones through dialogue with AI. The library grows with your needs.

---

## 3 FRAMEWORK SKILLS

**Choose. Apply. Discover. Paste and go.**

| Skill | Description |
|-------|-------------|
| `/choose-framework` | AI matches framework to your situation |
| `/use-framework` | AI-facilitated step-by-step workshop |
| `/discover-framework` | Research and add new frameworks |

---

## THE PROBLEM

**You make hundreds of decisions weekly. Most are on gut feeling.**

| Without frameworks | With frameworks |
|--------------------|-----------------|
| "Let's do a SWOT" — because it's the only framework you know | AI matches framework to your specific problem from 48 options |
| Know the framework in theory, can't run a workshop | AI facilitates step by step with questions and challenges |
| "There's no framework for this" — improvise | /discover-framework researches and adds new ones to the system |
| Same biases, same blind spots, same mistakes | Structured thinking surfaces what intuition misses |

---

## INSTALL

**Ready in 60 seconds**

Claude Code or any compatible AI agent + Git.

```bash
# Clone and install
$ git clone https://github.com/Przemocny/strategic-frameworks.git
$ cd strategic-frameworks && cp -r skills/* ~/.claude/skills/
# Copy frameworks library
$ cp -r frameworks/ ~/.claude/skills/strategic-frameworks/frameworks/
```

---

## FINAL CTA

**Stop guessing. Start your first workshop.**

[Copy install prompt]

---

## FOOTER

MIT License
