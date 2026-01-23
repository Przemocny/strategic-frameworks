# Contributing to Strategic Frameworks

Thank you for your interest in contributing! This repository welcomes contributions that improve strategic framework selection and application for Claude AI users.

## How to Contribute

### 1. Report Issues

Found a bug or have a suggestion?
- Open an [Issue](../../issues)
- Describe the problem or idea clearly
- Include examples if applicable

### 2. Improve Existing Skills

You can help by:
- Adding more facilitation questions to reference files
- Expanding framework warnings and common pitfalls
- Improving framework selection guides
- Fixing typos or clarifying instructions in `SKILL.md` files
- Adding examples of good workshop dialogue
- Updating framework definitions with better examples

### 3. Add New Frameworks

The easiest way to contribute new frameworks:
- Use the `/discover-framework` skill (recommended)
- Or manually create a framework file following the template

**New Framework Requirements:**
- Must be a real, documented framework (not AI-generated)
- Clear creator/origin and publication date
- Structured methodology with actionable steps
- Real-world examples and case studies
- Reliable sources and references
- Unique value vs existing frameworks

See `skills/discover-framework/references/quality-criteria.md` for full criteria.

### 4. Create New Skills

We welcome complementary skills! Consider:

**Framework Management:**
- `compare-frameworks` - Side-by-side framework comparison
- `framework-library` - Personal framework collection management
- `framework-sequences` - Multi-framework workflows

**Analysis & Reporting:**
- `framework-report` - Generate framework application reports
- `framework-review` - Review past framework sessions
- `framework-metrics` - Track framework usage and outcomes

### New Skill Requirements

Each new skill must include:
1. `SKILL.md` with proper YAML frontmatter (name, description)
2. Clear instructions for Claude
3. Reference files if needed (guides, questions, warnings)
4. Examples of good dialogue
5. Documentation of output format

### 5. Pull Request Process

1. **Fork** the repository
2. **Create a branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**:
   - Follow existing code style and structure
   - Test with Claude to ensure it works
   - Update documentation if needed
4. **Commit** with clear messages:
   ```bash
   git commit -m "Add SCAMPER framework for creative problem-solving"
   ```
5. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** with:
   - Clear description of what changed and why
   - Examples of the improvement in action
   - Reference any related issues

## Contribution Guidelines

### Writing Style

- **Be structured and facilitative** - These skills guide thinking, not dictate answers
- **Use examples** - Show good workshop dialogue patterns
- **Keep it concise** - Skills are loaded into context, avoid bloat
- **Evidence-based** - Real frameworks with proven track records

### Framework Quality Principles

1. **Proven and documented** - No made-up frameworks
2. **Actionable** - Clear steps users can follow
3. **Practical** - Real problems, real solutions
4. **Well-sourced** - Citations and references
5. **Unique** - Adds something not already covered

### Code of Conduct

- Be respectful and constructive
- Focus on improving the skills, not criticizing contributors
- Assume good intent
- Help others learn

## Testing Your Contribution

Before submitting:
1. Install your changed/new skill in Claude
2. Test with real scenarios
3. Verify the output format is correct
4. Check that reference files are properly linked
5. Ensure documentation is clear
6. For frameworks: Test with `/use-framework`

## Framework File Management

### Dual Location Requirement

⚠️ **CRITICAL**: Framework files must exist in TWO locations and be IDENTICAL:

1. `/frameworks/[number]-framework-name.md` (public framework library)
2. `/skills/use-framework/references/frameworks/[number]-framework-name.md` (skill reference)

**Why two locations?**
- `/frameworks/` - Public API for browsing all frameworks
- `/skills/use-framework/references/frameworks/` - Loaded by AI during workshops

**When adding or updating frameworks:**
- ✅ Create/update file in BOTH locations
- ✅ Ensure files are IDENTICAL
- ✅ Test with `/use-framework` to verify AI can load it

**Recommended workflow:**
```bash
# After creating/editing a framework in /frameworks/
cp frameworks/XX-framework-name.md skills/use-framework/references/frameworks/
```

### Framework Naming Conventions

When adding frameworks:
- Use lowercase with hyphens: `porter-five-forces.md`
- Number sequentially: `XX-your-framework.md` (where XX is next available number)
- Match filename in YAML frontmatter
- Update `frameworks-index.md` with new entry (use CORRECT number!)
- Include keywords for matching

## Questions?

- Open a [Discussion](../../discussions) for general questions
- Check existing [Issues](../../issues) for similar questions
- Review [AGENTS.md](../AGENTS.md) for skill structure details

## Recognition

Contributors will be:
- Listed in release notes
- Acknowledged in commit history
- Appreciated by the community 🙏

---

**Remember:** The goal is to help people think clearly, make better decisions, and apply proven frameworks effectively. Every contribution that advances this goal is valuable.
