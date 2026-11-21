# Olympiad Champs

A planned learning platform for children in India preparing for Olympiad exams in Classes 1–10. Learners choose Maths, Science or English, then learn concepts, practise worked questions and take sample tests. Progress should persist across visits and devices.

**Status:** Next.js foundation and placeholder page only; no question bank, authentication, database or deployment exists yet. The owner will supply questions later. The 35-question scope and test rules are undecided. Learning is intended to be free; premium practice and tests are under consideration.

**Stack:** Next.js App Router, React and TypeScript. Kinde, Neon PostgreSQL and Vercel are planned but not configured.

## Development

Use Node.js 20.9 or newer. Run `npm ci`, then `npm run dev`, and open [localhost:3000](http://localhost:3000). No environment variables are required for the placeholder. Never commit secrets.

| Command | Purpose |
| --- | --- |
| `npm run dev` / `npm run build` / `npm run start` | Develop, build or serve the production app |
| `npm run lint` / `npm run typecheck` / `npm run format:check` | Check lint, TypeScript and formatting |
| `npm run format` | Format application and configuration files |
| `npm run test:e2e` | Run Playwright browser tests against a production build |

For browser tests, run `npx playwright install chromium` once, then `npm run build` and `npm run test:e2e`. Playwright starts its own server on port 3100 and does not reuse an existing server. Run a focused test with `npm run test:e2e -- tests/e2e/home.spec.ts`. The current smoke test checks only that the placeholder page loads; it does not test authentication, persistence or deployment. GitHub Actions runs lint, formatting, types, build and Chromium tests on pushes and pull requests.

Start with the [roadmap](docs/plan.md); [AGENTS.md](AGENTS.md) routes development tasks to focused guidance. [Product context](PRODUCT.md) records the audience, and [market research](docs/research.md) covers monetization options.
