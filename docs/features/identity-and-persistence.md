# Identity, data and progress

Status: proposed. Kinde login, Neon PostgreSQL and Vercel are planned; confirm current SDK/runtime compatibility before integration.

## Identity and security

- Map the Kinde subject to an internal user. Derive ownership from the authenticated server session for every read and mutation; check authorization near the data. Treat Server Actions and route handlers as public endpoints.
- Use a server-only data access layer, minimal client DTOs, parameterized SQL and validated input. Avoid cross-user caches and never expose secrets or test answer keys. Separate development, preview and production credentials/databases.
- Use explicit versioned migrations and appropriate transactions; never migrate automatically on startup/build. Verify Neon driver transaction behavior for the chosen runtime. Test real integrations against isolated environments, never production learner data.
- A login is not parental consent. Decide account ownership, consent, retention, deletion and support with appropriate legal review before real children's data is processed. Collect minimal data.

## Persistence and sync

Neon is authoritative for confirmed progress and results. Save at meaningful interactions and show saving, saved, offline or failed states accurately. Store only minimal, validated, versioned local drafts and operation IDs keyed by user and activity; no credentials, answer keys or test explanations. Isolate/clear drafts on logout or account switch. Handle unavailable or cleared storage.

Send idempotent operations with a base server revision. Atomically accept expected revisions; on conflict preserve unsynced work and offer an informed choice, rather than silently overwriting. Acknowledge operation IDs and retry unchanged requests safely. Completed server results take precedence over stale drafts. A local draft is not a submitted test.

## Verify

Test two-user isolation, logout/shared devices, reload, offline storage failure, multiple tabs/devices, conflicts, duplicate requests, lost acknowledgements and submission races. Test backup and restore before launch.

## Primary references

[Next.js data security](https://nextjs.org/docs/app/guides/data-security) · [Kinde App Router SDK](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/) · [Neon serverless driver](https://neon.com/blog/serverless-driver-ga) · [DPDP Rules notification](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf?v=20261027115856). Verify current documentation and law when implementing.
