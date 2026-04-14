# Product backlog (Kudans website)

Short list of planned work for this Next.js app (`app/` routes, shared components under `app/components/`, content under `app/data/`). Use this as a map; open the linked paths when you start a task.

---

## Dances / Swing — add teachers (Bora & Zeynep)

**Goal:** Show Bora and Zeynep as Swing teachers wherever Swing instructors are defined (likely the Swing dance detail page and any shared teacher list).

**Where to look:** `app/dances/` (e.g. `app/dances/data.ts`, `app/dances/[slug]/`), and any Swing-specific content blocks.

**Done when:** Names, roles, bios/photos (if the pattern uses them), and links match the rest of the site’s teacher cards.

---

## Festivals — new festival page

**Goal:** Add a dedicated page for an upcoming or new festival, consistent with existing festival UX.

**Where to look:** `app/festivals/page.tsx`, `app/festivals/[id]/page.tsx`, `app/data/festivalData.ts`, `app/components/FestivalCard.tsx`, `app/components/FestivalPreview.tsx`, `app/components/PreviousFestivalsSection.tsx`.

**Done when:** New festival appears in listings (if applicable), has its own route under `/festivals/...`, and content (dates, venue, CTA) is accurate.

---

## Home — countdown to festival

**Goal:** On the landing page, show a countdown timer targeting the next festival date (or a configurable target).

**Where to look:** `app/page.tsx`, `app/components/HomeBanner.tsx` (and any hero sections).

**Done when:** Timer is correct for timezone, accessible (not only motion), and degrades sensibly after the event (e.g. hide or show “event started”).

---

## Team — archive 2025, new roster

**Goal:** Preserve the current team as an archived “Team 2025” view, and replace the main team page with the new dancer lineup.

**Where to look:** `app/team/page.tsx`, `app/data/teamData.ts`.

**Done when:** Current members are reachable as archive (URL or section—decide with design), main `/team` reflects the new roster, images and copy follow existing card patterns.

---

## Fits — new sweatshirt links

**Goal:** Update merch / “fits” page with new sweatshirt product URLs (shop or affiliate links).

**Where to look:** `app/fits/page.tsx`.

**Done when:** Old links replaced or extended per product owner spec; external links open correctly and use `rel`/`target` consistent with the rest of the site.

---

## Board — no change

**Status:** Content is current. Skip unless stakeholders request updates.

**Where to look (reference only):** `app/board/page.tsx`, `app/board/data.ts`.

---

## Blog — to be implemented

**Goal:** Flesh out the blog beyond placeholder/sample content: listing, posts, and navigation as needed.

**Where to look:** `app/blog/page.tsx`, `app/blog/layout.tsx`, `app/blog/sample-post/`.

**Done when:** Requirements are agreed (MDX vs CMS vs static), then implement routing, index, and at least one real post pattern.

---

## Schedule — schedule & recent events

**Goal:** Refresh class/event schedule and “recent events” (or equivalent section) with up-to-date dates and copy.

**Where to look:** `app/schedule/page.tsx` and any data file that feeds it (search under `app/` for schedule-related imports).

**Done when:** Dates and descriptions match the latest program; no stale past events presented as upcoming.
