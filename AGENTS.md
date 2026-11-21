# Repository guidance

Olympiad Champs is a planned Next.js/TypeScript app for Indian Olympiad learners in Classes 1–10. The app currently contains a placeholder page; see [README](README.md) for commands. Preserve the distinction between proposed and implemented behavior.

- Inspect relevant code and tests, reuse existing patterns, and make the smallest correct change. Validate with focused tests and applicable project checks; document limitations.
- Authenticate and authorize user-scoped access on the server; validate inputs, parameterize SQL and keep secrets out of Git. Never trust browser state or a client-calculated score.
- Use the references below only when relevant. Read the specific section needed, not every document. Update the relevant reference when behavior or decisions change.
- Do not commit, push or deploy unless requested.

| Task | Reference |
| --- | --- |
| Scope, sequencing, open decisions | [Roadmap](docs/plan.md) |
| Questions, practice, tests, scoring | [Assessment](docs/features/assessment.md) |
| Kinde, Neon, progress, sync, privacy | [Identity and persistence](docs/features/identity-and-persistence.md) |
| Learning content, rendering, child-friendly UI | [Learning and UI](docs/features/learning-and-ui.md) |
| Pricing or competitor research | [Research](docs/research.md) |
