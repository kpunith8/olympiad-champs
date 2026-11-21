# Design plan

Draft; no visual direction or interface has been approved. Product context: [PRODUCT.md](../PRODUCT.md). Implementation guidance: [learning and UI](features/learning-and-ui.md).

## Direction

The landing page should explain the product and invite sign-in; app screens should make the current learning task and save state obvious. Children work primarily independently, with optional parent help. Use one respectful interaction model across ages; vary content and optional support rather than assuming all children in a class have the same needs. Avoid pressure, shame, rankings and invented claims.

## Flow to prototype

1. Landing and Kinde sign-in: explain value and progress saving; handle cancellation and errors.
2. Class, subject and mode: show choices, availability, change selection and resume.
3. Learn: objective, short explanation, worked steps, formulas/diagrams and next/previous.
4. Practice: question, answer, check, retry or reveal steps; show honest save status.
5. Test: rules first, navigation and unanswered review, explicit submit, then score and explanations.
6. Results and recovery: explain metrics and denominators; handle empty, offline, conflict and expired-session states.

## Validation

- Present visual directions for approval. Use an image-led concept for the landing page and code-led app screens. No colors, fonts or mascot have been selected.
- Prototype phone and desktop flows with labeled sample English, Maths, Science and geometry content. Check long content, 200% text zoom, keyboard, reduced motion, screen readers and WCAG 2.2 AA.
- With appropriate guardian consent, observe representative learners in Classes 1–3, 4–6 and 7–10, including accessibility and device/connectivity needs where feasible. Record limitations; have educators review content separately.
- Refine based on actual task completion and comprehension, then document approved reusable tokens and components. Avoid claiming learning gains from clicks or time spent.

Worked examples should explain reasoning and allow support to be skipped as proficiency grows. See [EEF guidance](https://educationendowmentfoundation.org.uk/news/eef-blog-working-with-worked-examples-simple-techniques-to-enhance-their-effectiveness) and [UNICEF inclusion principles](https://www.unicef.org/digitaleducation/Charter-Launch).
