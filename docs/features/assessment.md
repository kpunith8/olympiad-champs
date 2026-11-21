# Questions and assessment

Status: proposed. Use with the relevant implementation and tests; unresolved rules must not become silent product decisions.

## Content

- Owner-provided, reviewed questions will cover Classes 1–10 and Maths, Science and English. The meaning of 35 questions and class/subject coverage are undecided. Mark fixtures as examples and show unavailable content honestly.
- Assign stable IDs and immutable published versions. Record class, subject, topic, difficulty, type, prompt, options, correct answer, ordered solution steps, assets/alt text, source, rights and review status. Support shared English passages. Validate IDs, options, answers, assets and explanations; require human accuracy and rights review.
- Initial single-choice support is a proposal, not an approved constraint. Define grading explicitly before adding numeric, multiple-choice or diagram responses. Store private answer keys server-side.

## Practice

Show a question, accept a response and let the learner check or reveal the explanation. Give calm feedback, ordered reasoning and retry. Save answer, position and reveal state. Track first checks separately from retries and reveal-only actions.

First-try accuracy = distinct questions correct on the first check / distinct questions with a first check. Exclude reveal-only and unanswered questions; show unavailable when the denominator is zero. Completion and total checks are separate metrics; “efficiency” has no agreed formula.

## Test

Freeze the question selection, ordering and marking rules on start. Do not return answer keys or explanations to an active test, including through preloads or browser storage. Navigate and review before final submission; grade and submit on the server once, using pinned versions. Show correct, incorrect and unanswered counts, score and explanations after submission. Completed results must not change when content is edited.

Provisional example for a future sample test: 35 single-choice questions, +1 correct, 0 incorrect/unanswered, no timer or negative marking. **Not an approved exam rule.** Confirm selection, count, weights, timing, retries and shortage behavior first. For timed tests, define server deadlines and offline/expiry rules.

Score = sum under pinned rules; percentage = earned / maximum × 100 when maximum is positive. Correct + incorrect + unanswered equals question count. Use exact arithmetic for fractional points.

## Verify

Test answer-key secrecy, user isolation, scoring boundaries, unanswered questions, invalid content, version changes, concurrent or duplicate submissions, retries and immutable results. Premium assessment access is under consideration; never trust a client entitlement or score.
