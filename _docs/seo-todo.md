# Deferred SEO / markup items

Not addressed yet — noted here for later. Canonical/OG/Twitter tags, robots.txt, and
sitemap.xml were addressed separately; robots.txt and sitemap.xml were deliberately
skipped as unnecessary for a 2-page site.

## 1. Structured data (JSON-LD)

Neither page has structured data. Adding a `SportsActivityLocation` or
`Organization`/`SportsClub`-type JSON-LD block (with `name`, `url`, `logo`,
`address`/`areaServed` for Manhattan Beach, and `sameAs` linking to the Instagram
and Strava profiles) would make the club eligible for local/rich search results.
Likely placement: a `<script type="application/ld+json">` block in the `<head>` of
`index.html`, and possibly a matching one on `partner-with-us/index.html`.

## 2. Missing `width`/`height` on `<img>` tags

No `<img>` element in `index.html` or `partner-with-us/index.html` declares intrinsic
`width`/`height` (or `aspect-ratio` via CSS). This causes layout shift on load
(Core Web Vitals CLS), which is an SEO ranking factor as well as a UX issue.
Fix: add explicit `width`/`height` attributes matching each image's natural
dimensions for every `<img>` in both files (hero, photo-stack, insta-grid,
partner-hero-media, partner-option images, logo-grid partner logos).

## 3. Card heading hierarchy

In `index.html`, the `.meet` section heading is an `<h2>` ("Come Train with Us"),
but each `.meet-card` article title ("Wednesday Workouts", "Friday Easy Run",
"The Long Run") is also an `<h2>` — these are nested under the section heading and
should be `<h3>` to keep a correct heading outline. Located at
`index.html` around lines 48, 54, and 61 (article titles inside `.meet-grid`).
