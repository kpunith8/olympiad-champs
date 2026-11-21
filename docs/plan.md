# Roadmap

Status: Next.js foundation bootstrapped; product features remain proposed. Deliver small, tested slices in order and update status only after verification. Use [AGENTS.md](../AGENTS.md) to find feature-specific guidance.

## Stages

1. **Foundation:** Next.js, TypeScript, lint, formatting, build, Playwright smoke test and CI workflow are in place. Add focused tests with features; establish isolated Kinde/Neon environments and explicit migrations. Prototype safe math/diagram rendering and accessibility.
2. **Landing and sign-in:** Build the public landing page and Kinde flow; verify protected server access and account isolation.
3. **Selection:** Choose class 1–10, subject and Learn/Practice/Test; show availability and last saved activity.
4. **Learning and content:** Validate versioned sample content; deliver lessons with text, formulas, diagrams, worked steps and resume.
5. **Practice:** Answer, check, retry and reveal steps; save progress and first-try accuracy.
6. **Test and results:** Freeze a question set and rules; support navigation, server-side grading, submission, history and post-submission explanations.
7. **Recovery:** Add local drafts and cross-device sync, with conflict handling and safe retries.
8. **Content and launch:** Review owner-supplied content, fill coverage gaps, test accessibility and provider integrations, complete privacy review and rehearse backup/restore. Deploy only when authorized.

At each stage verify the main flow, relevant error/empty states, ownership and applicable mobile/accessibility behavior. Use labeled fixtures until reviewed content exists; do not claim full coverage. The owner will provide 35 Class 2 questions after the basic UI is ready; their subject and mode coverage remain open.

## Decisions before implementation or launch

- Does 35 mean questions per class/subject, mode, topic or test? Define difficulty mix, reuse, content availability and exam coverage.
- Confirm question types, test marking, negative marks, duration, navigation, retries and explanation release. No exam rules are yet approved.
- Are lessons separate from worked questions? Define practice efficiency beyond first-try accuracy.
- Decide parent/child account ownership, consent, privacy, retention, deletion and support before processing real children's data.
- Confirm premium scope, pricing, free assessment samples, entitlements and purchase policy; [research](research.md) contains proposals, not decisions.
- Select visual direction after review and determine target curricula, question rights and accessibility/localization requirements.
